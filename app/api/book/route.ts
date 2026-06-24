import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Initialize Resend
const resend = new Resend('re_356t5TFo_NXiEy4iHq1id9QBZ6DnbAy7m');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Insert into Database
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        { 
          full_name: body.name, 
          email: body.email, 
          service_type: body.service, 
          message: body.message 
        },
      ]);

    if (error) throw error;

    // 2. Send Email Notification
    await resend.emails.send({
      from: 'info@karoldigital.co.uk',
      to: 'info@karoldigital.co.uk',
      subject: `New Lead: ${body.service} - ${body.name}`,
      text: `You have a new booking request!

Name: ${body.name}
Email: ${body.email}
Service: ${body.service}

Message:
${body.message}`,
    });
    
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Booking API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}