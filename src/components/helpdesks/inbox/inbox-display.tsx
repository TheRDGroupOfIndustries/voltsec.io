import { HelpDeskData } from "@/app/(dashboard)/dashboard/helpdesk/page";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import useMutation from "@/core/hooks/useMutation";
import { sendMessage } from "@/core/server/account/helpdesk/addMessage";
import { Helpdesks } from "@prisma/client";
import { useSession } from "next-auth/react";
import image from "/public/pdf.png"
import Link from "next/link";
import { Paperclip } from "lucide-react";
import { useState } from "react";


interface InboxMailDisplayProps {
  helpdesk: HelpDeskData | null;
}

export function InboxMailDisplay({ helpdesk }: InboxMailDisplayProps) {
  const { mutate, isPending } = useMutation(sendMessage);

  const [fileUrl, setFileUrl] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const message = e.target.message.value;
    const { success, error } = await mutate({ id: helpdesk?.id!, message: message, repliedFile: fileUrl});
    
  };
  const uploadFile = async (e:any) => {
    e.preventDefault(); 
    const files = e.target.files[0];

    try {
      const reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onloadend = async () => {
        const base64File = reader.result as string;
        try {
          const response = await fetch('/api/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ file: base64File }),
          });
          const data = await response.json();
          if (response.ok) {
            setFileUrl(data.url)
            // console.log('File uploaded successfully:', data.url);
          } else {
            console.error('Upload failed:', data.error);
          }
        } 
        catch (error) {
          console.error('Error uploading file:', error);
        }
    }
  }
  catch (error) {
    console.error('Error reading file:', error);
  }
}
  const session = useSession();
  return (
    <div className="flex relative z-10 flex-col h-screen overflow-hidden">
      {helpdesk ? (
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <Avatar>
                <AvatarImage src={helpdesk?.user.image ?? ""} />
                <AvatarFallback>NA</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{helpdesk?.subject}</div>
                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">Reply-To:</span>{" "}
                  {helpdesk?.email}
                </div>
                <div className="line-clamp-1 text-lg">{helpdesk?.request}</div>
              </div>
            </div>
            {/* {(
              <div className="ml-auto text-xs text-muted-foreground">
                <div className="ml-auto text-xs text-muted-foreground">
                  {helpdesk?.date?.toDateString()}
                </div>
              </div>
            ) ?? (
              <div className="ml-auto text-xs text-muted-foreground">
                date not found
              </div>
            )} */}
          </div>
          <Separator />
          <div className="h-[60vh] overflow-y-auto w-full space-y-6 p-6" style={{scrollbarWidth: 'none'}}>
          {helpdesk.file && (
            <a href={`/api/download?url=${encodeURIComponent(helpdesk.file)}`} className="w-fit h-fit">
            <div className="w-80 h-36 rounded-md border-2 border-gray-300 flex justify-center items-center flex-col gap-1 cursor-pointer">
              <img src={image.src} alt="pdf" className="w-12 h-12"/>
                <h1 className="text-4xl font-bold text-red-600">PDF</h1>
            </div>
            </a>
          )}
          <strong className="text-muted-foreground text-4xl mt-6">Message</strong>
          <p className="text-2xl text-gray-800">{helpdesk.text}</p>
          
            {helpdesk.messages.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <strong className="text-muted-foreground">No messages</strong>
              </div>
            )}
            {helpdesk.messages
              .sort((a: any, b: any) => {
                const date1 = new Date(a.createdAt).getTime();
                const date2 = new Date(b.createdAt).getTime();
                return date1 - date2;
              })
              .map((message: any, ind) => (
                <div key={`message-${ind}`}>
                  {message.from === session.data?.user.id ? (
                    <div className="relative bg-primary text-primary-foreground w-[60%] rounded ml-auto px-4 py-2 text-sm">
                      <span className="absolute -top-5 right-2 text-foreground text-sm">
                        You{" "}
                        <span className="text-xs text-muted-foreground">
                          {new Date(message.createdAt).toDateString()}
                        </span>
                      </span>
                      <p>{message.message}</p>
                    </div>
                  ) : (
                    <div className="relative bg-secondary text-secondary-foreground w-[60%] max-w-[60%] rounded mr-auto px-4 py-2 text-sm">
                      <span className="absolute -top-5 left-2 text-foreground text-sm">
                        {helpdesk.name}
                        <span className="text-xs text-muted-foreground">
                          {new Date(message.createdAt).toDateString()}
                        </span>
                      </span>
                      <p>{message.message}</p>

                      {fileUrl!=='' && (
                        <a href={`/api/download?url=${encodeURIComponent(fileUrl)}`} className="w-fit h-fit">
                        <div className="w-80 h-36 rounded-md border-2 border-gray-300 flex justify-center items-center flex-col gap-1 cursor-pointer">
                          <img src={image.src} alt="pdf" className="w-12 h-12"/>
                            <h1 className="text-4xl font-bold text-red-600">PDF</h1>
                        </div>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>

          <div className="absolute bg-popover border-t w-full p-4 bottom-0">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <Textarea
                  className="p-4 max-h-[200px]"
                  name="message"
                  placeholder={`Reply ${helpdesk?.email}...`}
                />

                <div className="flex items-center">
                <div className="flex flex-row items-center">
        <input
          type="file"
          id="custom-input"
          onChange={(e) => uploadFile(e)}
          accept="application/pdf"
          hidden
        />
        <label
        htmlFor="custom-input"
          className="text-sm text-slate-500 mr-4 py-2 px-4
            rounded-md border-0 font-semibold bg-pink-50
          hover:bg-pink-100 cursor-pointer flex justify-center items-center gap-2"
        >
          Choose file <Paperclip size={16}/>
        </label>
      </div>
                {/* <Paperclip /> */}
                {/* </input> */}
                  <Button
                    disabled={isPending}
                    size="sm"
                    className="ml-auto"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="p-8 text-center text-muted-foreground">
            No message selected
          </div>
        </div>
      )}
    </div>
  );
}
