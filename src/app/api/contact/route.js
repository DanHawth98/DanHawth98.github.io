// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';
import * as fs from "node:fs";

export async function POST(request) {
    try {
        // Parse the incoming JSON data
        const { name, email, message, file } = await request.json();

       const fileData = fs.readFileSync(file.filepath);

        // Create the email data as URL-encoded string
       const formData = {
            subject : 'New Contact Form Submission',
            message :  message,
            name :  name,
            email: email,
            file: fileData
        };

        // const formData = new FormData();
        // formData.append("name", name);
        // formData.append("email", email);
        // formData.append("message", message);
        // formData.append("file", fileData); // Append the file with

        // Send the email using axios
        await axios.post("https://getform.io/f/avrellza", formData, { headers: {'Accept': 'application/json'}})
            .then(response => console.log(response))
            .catch(error => console.error(error))

        // Return a success response
        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        // Return an error response
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ message: 'This endpoint only supports POST requests.' }, { status: 405 });
}