'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

type FormData = z.infer<typeof Schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(Schema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        alert('Thanks! We will get back to you.');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="container py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">We&apos;re Here to Help</h1>
      <p className="mt-2 text-zinc-600">
        Need assistance? Our support team is available to guide you.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4 max-w-xl">
        <input
          className="border rounded-md px-3 py-2"
          placeholder="Name"
          {...register('name')}
        />
        <input
          className="border rounded-md px-3 py-2"
          placeholder="Email"
          type="email"
          {...register('email')}
        />
        <textarea
          className="border rounded-md px-3 py-2"
          placeholder="Message"
          rows={6}
          {...register('message')}
        />
        <button
          disabled={isSubmitting}
          className="rounded-md bg-primary text-primary-foreground px-4 py-2 disabled:opacity-50 hover:opacity-90 transition-opacity"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      <div className="mt-8 text-sm text-zinc-600">
        Email: support@medsync.com • Phone/WhatsApp: +234-XXX-XXX-XXXX • Office: Abuja, Nigeria
      </div>
    </main>
  );
}
