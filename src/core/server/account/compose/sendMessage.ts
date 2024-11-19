import React from 'react'
import { db } from "@/core/client/client";

async function sendMessage(email: string, message: string, subject: string, file: string) {
    try {
        await db.compose.create({
            data: {
                email: email,
                message: message,
                subject: subject,
                file: file,
            }
        })
    }
    catch (err) {
        console.log(err)
    }
}

export default sendMessage