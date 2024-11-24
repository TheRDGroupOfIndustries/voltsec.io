import { NextResponse } from 'next/server';
import Pusher from 'pusher';

const MSG_APP_ID = "1900525"
const  MSG_APP_KEY = "8a72015d95c7eb18f1f5"
const  MSG_APP_SECRET = "2d1f4760990fad046873"
const  MSG_APP_CLUSTER = "ap2"

const pusher = new Pusher({
  appId: MSG_APP_ID,
  key: MSG_APP_KEY,
  secret: MSG_APP_SECRET,
  cluster: MSG_APP_CLUSTER,
  useTLS: true,
});

export async function POST(req: Request) {
  try {
    const { message, sender, group } = await req.json();

    // Trigger a Pusher event for the specific group channel
    await pusher.trigger(`group-${group}`, 'message', {
      group,
      sender,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
