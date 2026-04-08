"use server";

interface ContactState {
  success: boolean;
  error: string | null;
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const honeypot = formData.get("website");
  if (honeypot) {
    return { success: true, error: null };
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || "hello@flowforgeai.dev";

    if (!apiKey) {
      console.log("Contact form submission (Resend not configured):", {
        name,
        email,
        company,
        message,
      });
      return { success: true, error: null };
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "FlowForge AI <noreply@flowforgeai.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\nMessage:\n${message}`,
    });

    return { success: true, error: null };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please try again or email us directly.",
    };
  }
}
