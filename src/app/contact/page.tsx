'use client';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        if (!publicKey) {
            console.error('EmailJS public key is not defined');
            return;
        }
        emailjs.init(publicKey);
    }, []);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Musfirah Tabassum',
                    to_email: 'musfirahtabassum1510@gmail.com'
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setFormData({ name: '', email: '', message: '' });
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className="max-w-2xl mx-4 my-8 bg-yellow-100 py-12 px-6 shadow-lg rounded-md">
            <h1 className="text-4xl text-yellow-600 font-bold mb-8 text-center">Contact Me</h1>
            <p className="text-gray-600 mb-8 text-center">
                Have a question or want to collaborate? Feel free to reach out!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label htmlFor="name" className="block text-gray-800 text-sm font-medium mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full bg-yellow-200 p-2 border rounded-md text-black ring-0 focus:outline-none focus:border-yellow-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                </div>

                <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-800">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full bg-yellow-200 p-2 border rounded-md text-black ring-0 focus:outline-none focus:border-yellow-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                </div>
                <div className="mb-4">
                {formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                    <p className="text-red-500 text-sm mt-1">
                    Please enter a valid email address
                    </p>
                )}
                </div>
                <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-800">
                    Message
                </label>
                <textarea
                    id="message"
                    className="w-full bg-yellow-200 p-2 border rounded-md text-black ring-0 focus:outline-none focus:border-yellow-500 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                ></textarea>
                </div>
                <div className="flex justify-center">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-yellow-600 hover:text-black text-white py-2 px-4 rounded-md hover:bg-yellow-500 disabled:opacity-50"
                >
                    {isLoading ? 'Sending...' : 'Send Message'}
                </button>
                </div>
            </form>
            </div>
        </div>
    );
}