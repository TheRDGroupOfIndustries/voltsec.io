import { NextResponse } from 'next/server';

// Temporary in-memory "database"
let messages: { group: string; message: string; sender: string; timestamp: Date }[] = []; // Replace with actual database in production

// POST: Add a new message
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { group, message, sender } = body;

    // console.log(group, message, sender);
    
    if (!group || !message || !sender) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Add message to the "database"
    const newMessage = { group, message, sender, timestamp: new Date() };
    messages.push(newMessage);

    // You can trigger Pusher here for real-time updates
    // await pusher.trigger(`chat-${group}`, 'new-message', newMessage);

    return NextResponse.json({ success: true, message: 'Message sent', data: newMessage });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

// GET: Retrieve messages for a specific group
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const group = searchParams.get('group');

    if (!group) {
      return NextResponse.json({ error: 'Group is required' }, { status: 400 });
    }

    // Filter messages by group
    const groupMessages = messages.filter((msg) => msg.group === group);

    return NextResponse.json({ success: true, messages: groupMessages });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}
