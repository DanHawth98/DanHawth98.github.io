"use client"; // This marks the file as a Client Component

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        file: null
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "file" ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("message", formData.message);
            if (formData.file) {
                formDataToSend.append("file", formData.file);
            }

            const response = await fetch('https://getform.io/f/avrellza', {
                method: 'POST',
                body: formDataToSend
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Something went wrong');
            }

            setStatus("Message sent successfully!");
            // Reset the form data
            setFormData({ name: "", email: "", message: "", file: null });
        } catch (error) {
            console.error('Error:', error);
            setStatus(`Error: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name<span className="text-danger fw-bold">*</span></label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email<span className="text-danger fw-bold">*</span></label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="file" className="form-label">File</label>
                <input
                    type="file"
                    id="file"
                    name="file"
                    className="form-control"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message<span className="text-danger fw-bold">*</span></label>
                <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
            <p className="mt-3">{status}</p>
        </form>
    );
}
