import { NextResponse } from 'next/server';
import { db } from "@/core/client/client";
import getSessionOrRedirect from "../../../core/server/utils/getSessionOrRedirect";


export async function POST(req: Request) {
    const {currentVoltCharge} = await req.json();

  const session = await getSessionOrRedirect();
  try {
    // Fetch all records from the Compose table
    const charges:any = await db.user.findUnique({where: {id: session.user.id}, select: {
      voltsecCharges: true
    }});
    const length = charges.voltsecCharges
    console.log(length, currentVoltCharge);
    
    if (length <= 0) {
        return NextResponse.json({ message: 'No charges found' }, { status: 402 });
    }
    await db.user.update({
        where: {id: session.user.id},
        data: {
            voltsecCharges: currentVoltCharge
        }
    })
    return NextResponse.json({message: 'Charge used successfully', status: 200})
} catch (error) {
    console.error('Error fetching compose entries:', error);
    return NextResponse.json({ error: 'Failed to fetch entries' }, { status: 500 });
  }
}

