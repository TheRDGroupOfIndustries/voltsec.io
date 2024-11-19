import { NextResponse } from 'next/server';
import { db } from "@/core/client/client";
import getSessionOrRedirect from "../../../core/server/utils/getSessionOrRedirect";


export async function GET() {
  const session = await getSessionOrRedirect();
  try {
    // Fetch all records from the Compose table
    const charges:any = await db.user.findUnique({where: {id: session.user.id}, select: {
      voltsecCharges: true
    }});
    const length = Object.keys(charges).length
    if (length > 5) {
        await db.user.update({
            where: {id: session.user.id},
            data: {
                voltsecCharges: 5
            }
        })
        return NextResponse.json({ message: 'Exceeded maximum limit of charges' }, { status: 402 });
    }
    return NextResponse.json(charges, { status: 200 });
  } catch (error) {
    console.error('Error fetching compose entries:', error);
    return NextResponse.json({ error: 'Failed to fetch entries' }, { status: 500 });
  }
}
