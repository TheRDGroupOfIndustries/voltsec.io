import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CreateMail from "./create-mail";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/option";
const CreateMailLayout = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  
  return (
    <section className="h-screen w-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full"
      >
        <ResizablePanel defaultSize={50}>
          <CreateMail user={user} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}></ResizablePanel>
      </ResizablePanelGroup>
    </section>
  );
};
export default CreateMailLayout;
