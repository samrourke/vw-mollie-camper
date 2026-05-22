export default async (req, context) => {
  const body = await req.text();
  const params = new URLSearchParams(body);

  const name = params.get("name");
  const email = params.get("email");
  const date = params.get("date");
  const bookingType = params.get("bookingType");
  const location = params.get("location");
  const message = params.get("message");

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "onboarding@resend.dev",
      to: "samrourke@gmail.com",
      reply_to: email,
      subject: `New booking enquiry from ${name}`,
      html: `
        <h2>New Booking Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Booking type:</strong> ${bookingType}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    }),
  });

  return new Response(null, { status: 200 });
};

export const config = {
  path: "/submit",
};
