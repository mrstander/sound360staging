"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const eventType = formData.get("eventType") as string
  const message = formData.get("message") as string

  // Get selected services
  const services = []
  if (formData.get("audio")) services.push("Professional Audio")
  if (formData.get("lighting")) services.push("Professional Lighting")
  if (formData.get("visual")) services.push("Visual Solutions / LED Screens & TV Hire")
  if (formData.get("production")) services.push("Event Production")
  if (formData.get("dance")) services.push("Dance Floors")
  if (formData.get("advice")) services.push("I'm Not Sure – I Need Advice")

  try {
    const { data, error } = await resend.emails.send({
      from: "Sound360 Website <info@sound360.co.za>", // You can update this once you verify your domain
      to: ["websiteforms@sound360.co.za"],
      replyTo: email,
      subject: `New Contact Form Submission - ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #0084d1; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            
            <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
              <h2 style="color: #0084d1; margin-top: 0;">Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><a href="mailto:${email}" style="color: #0084d1;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${phone }</td>
                </tr>
              </table>

              <h2 style="color: #0084d1; margin-top: 30px;">Event Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Event Type:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${eventType || "Not specified"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><strong>Services Needed:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${services.length > 0 ? services.join(", ") : "Not specified"}</td>
                </tr>
              </table>

              <h2 style="color: #0084d1; margin-top: 30px;">Message</h2>
              <div style="background-color: white; padding: 20px; border-left: 4px solid #0084d1; border-radius: 4px;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 14px;">
                <p style="margin: 0;">This email was sent from the Sound360 website contact form</p>
                <p style="margin: 5px 0 0 0;">Reply directly to this email to contact ${firstName}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("Resend Error:", error)
      return {
        success: false,
        message:
          "Sorry, there was an error sending your message. Please try again or contact us directly at info@sound360.co.za",
      }
    }

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again or contact us directly at info@sound360.co.za",
    }
  }
}
