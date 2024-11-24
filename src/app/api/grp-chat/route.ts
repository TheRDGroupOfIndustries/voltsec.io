import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/option';

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
    // const {session} = await req.json();
    // console.log(session);
    
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { role } = session.user;
  
  let allowedGroups: string[] = [];
  if (role === 'ADMIN') {
    allowedGroups = ['Pentesters', 'Sales'];
  } else if (role === 'SALES') {
    allowedGroups = ['Sales'];
  } else if (role === 'PENTESTER') {
    allowedGroups = ['Pentesters'];
  }

  return NextResponse.json({ allowedGroups, session });
}
