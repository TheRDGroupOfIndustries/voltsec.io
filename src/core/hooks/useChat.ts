import Pusher from 'pusher-js';
import { useEffect, useState } from 'react';


export const useChat = (group: string) => {
  const [messages, setMessages] = useState<any[]>([]);
  const MSG_APP_ID = "1900525"
  const  MSG_APP_KEY = "8a72015d95c7eb18f1f5"
  const  MSG_APP_SECRET = "2d1f4760990fad046873"
  const  MSG_APP_CLUSTER = "ap2"
  
  useEffect(() => {
    const pusher = new Pusher(MSG_APP_KEY, {
      cluster: MSG_APP_CLUSTER,
    });

    const channel = pusher.subscribe(`group-${group}`);
    channel.bind('message', (data: any) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      pusher.unsubscribe(`group-${group}`);
    };
  }, [group]);

  const sendMessage = async (message: string, sender: any[]) => {
    await fetch('/api/pusher', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, sender, group }),
    });
  };

  return { messages, sendMessage };
};
