import { NextResponse } from 'next/server';
import { db } from "@/core/client/client";
import { getSession } from 'next-auth/react';
import getSessionOrRedirect from "../../../core/server/utils/getSessionOrRedirect";


export async function GET() {
  const session = await getSessionOrRedirect();
  try {
    // Fetch all records from the Compose table
    const composeEntries = await db.user.findMany({where: {id: session.user.id}, select: {
      mail: true
    }});
    return NextResponse.json(composeEntries, { status: 200 });
  } catch (error) {
    console.error('Error fetching compose entries:', error);
    return NextResponse.json({ error: 'Failed to fetch entries' }, { status: 500 });
  }
}
