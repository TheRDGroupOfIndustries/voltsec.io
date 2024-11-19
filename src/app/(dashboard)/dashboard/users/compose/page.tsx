"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSearchParams } from "next/navigation";
import { Table } from "@tanstack/react-table";
import sendMessage from "@/core/server/account/compose/sendMessage";
// interface DataTableToolbarProps<TData> {
//   table: Table<TData>
// }

function Compose() {
  const searchParams = useSearchParams();
  const table = searchParams.get("table");

  const email: any = table;
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadFile = async (e: any) => {
    e.preventDefault();
    const files = e.target.files[0];
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', files);
      // const reader = new FileReader();
      // reader.readAsDataURL(files);
      // reader.onloadend = async () => {
        // const base64File = reader.result as string;
        try {
          const response = await fetch("/api/upload", {
            method: "POST",
            // headers: { "Content-Type": "application/json" },
            body: formData,
          });
          const data = await response.json();
          if (response.ok) {
            setFile(data.url);
          } else {
            console.error("Upload failed:", data.error);
          }
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      // };
      setLoading(false);
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message, file }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "An error occurred");
      }
      if (res.status === 200) {
        alert("Message sent successfully");
      }
      // Clear the form
      setSubject("");
      setMessage("");
      setFile("");
      setLoading(false);
    } catch (err) {
      console.log(err);
      
    }
    finally {
      setLoading(false)
    }
  };
  return (
    <div className="w-5/6 h-full px-10 py-12">
      <h1 className="text-3xl font-bold pt-8">Compose report</h1>
      <form className="pt-10 flex gap-4 w-5/6 flex-wrap" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter user email"
          value={`${table}`}
          readOnly
        />
        <Input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <Input
          type="file"
          accept="application/pdf"
          onChange={(e) => uploadFile(e)}
        />
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-40 resize-none"
          placeholder="Type your message..."
        />
        <button
          className={`w-full h-10 bg-primary text-white rounded-xl mt-4 ${loading ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Compose;
