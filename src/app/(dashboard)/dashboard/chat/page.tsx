"use client";

import Link from 'next/link';
import React from "react";
import Bubble from "./bubble";
import { Input } from "@/components/ui/input";
import { SendHorizonal } from "lucide-react";
import ChatBubble from "./chatBubble";
import { useEffect, useState } from 'react';
import sales from '@/assets/sales.webp';
import tester from '@/assets/pentester.png'
import { useChat } from '@/core/hooks/useChat';

export default async function ChatPage() {
  const [response, setResponse] = useState([]);
  const [active, setActive] = useState(response[0]);
  const [session, setSession]:any = useState({});
  const fetchData = async () => {
    const res = await fetch('/api/grp-chat', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    // console.log(data);
    setSession(data.session);
    setResponse(data.allowedGroups)
    setActive(data.allowedGroups[0]);
  };
  useEffect(() => {
    fetchData();
  }, [])

  
  return (
    <div className="w-full h-full p-6 flex gap-4">
      
      <div className="w-2/5 h-full p-4 flex flex-col justify-start items-start gap-4">
        <h2 className="font-bold text-3xl mb-2">Group <span className="text-blue-600">Chats</span></h2>
      {
        response.map((item, index) => (
          <Bubble title={item} key={index} onclick={() => setActive(item)} />
        ))
      }
      </div>
    
     {active ? <GroupChat title={active} session={session} /> : <div className='text-3xl font-bold w-full h-full flex justify-center items-center text-white'>Loading...</div>}
    
    </div>
  );
}

function GroupChat({title, session}: {
  title: string;
  session: any;
}) {
  const [messages, setMessages]:any = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Fetch messages for the active group
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/messages?group=${title}`);
        const data = await response.json();
        if (data.success) {
          setMessages(data.messages);
        } else {
          console.error('Failed to fetch messages:', data.error);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
    return () => {
      setMessages([]);
    };
  }, [title]);

  // Handle sending a new message
  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ group: title, message: newMessage, sender: [session.user.name, session.user.role] }),
      });

      const data = await response.json();
      if (data.success) {
        setMessages((prevMessages: any) => [...prevMessages, data.data]);
        setNewMessage('');
      } else {
        console.error('Failed to send message:', data.error);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  
  return (
    <div className="w-2/3 h-full bg border-l border-gray-300 relative">
    <div className="w-full h-20 flex justify-start items-center p-3">
    <div className="w-14 rounded-full h-full overflow-hidden">
    <img
      className="w-full h-full object-cover"
      src={`${title==="Sales" ? tester.src : ""} ${title==="Pentesters" ? sales.src: ""}`}
      alt="avatar"
    />
  </div>
  <div className="w-[82%] h-full ml-2">
    <h1 className="text-2xl leading-none font-bold">{title}</h1>
    <p className="text-sm text-blue-400 group-hover:text-white">Voltsec.io</p>
  </div>
    </div>
    <div className="w-full h-4/5 flex justify-between items-start">
    <div className="w-2/3 h-full px-3 flex justify-end items-start flex-col gap-1 overflow-auto" style={{scrollbarWidth: "none"}}>
      {
       messages.length > 0 && messages.map((msg:any, index: number) => (
          <ChatBubble key={index} message={msg} 
          variant={msg.sender[0] === session.user.name ? 'default' : 'gray'}
          />
        ))
      }
      {/* <ChatBubble />
      <ChatBubble varient={"gray"} /> */}
    </div>
    </div>
    <div className="w-full h-16 px-2 absolute bottom-0 flex justify-between items-center">
  <Input 
  className="w-[87%] h-5/6 my-2"
  placeholder="Type a message..."
  value={newMessage}
  onChange={(e) => setNewMessage(e.target.value)}
  />
  <button
  onClick={sendMessage}
  className="h-5/6 flex gap-2 justify-center items-center bg-blue-600 px-2 rounded-lg"
  >Send{"  "}<SendHorizonal size={16} />
  </button>
    </div>

    </div>
  )
}