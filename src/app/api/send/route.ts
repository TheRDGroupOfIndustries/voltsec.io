import { NextResponse } from 'next/server';
import { db } from "@/core/client/client";


export async function POST(request: Request) {
  try {
    const { email, subject, message, file } = await request.json();

    // Validate required fields
    if (!email || !subject || !message || !file) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    const receiver = await db.user.findUnique({
      where: { email: email },
    });


  if (!receiver) {
    return new Response(JSON.stringify({ error: 'User not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const newMessage = {
    subject,
    file,
    message,
    createdAt: new Date().toISOString(),
  };

    const newCompose = await db.user.update({
      where: { id: receiver.id },
      data: {
        mail: {
          push: newMessage
        }
      },
    });

    return NextResponse.json(newCompose, { status: 200 });
  } catch (error) {
    console.error('Error creating compose entry:', error);
    return NextResponse.json({ error: 'Failed to create entry' }, { status: 500 });
  }
}
