export default async (req, context) => {
  const body = await req.text();

  const response = await fetch("https://vw-mollie.netlify.app/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Netlify-Form-Submit": "true",
    },
    body,
  });

  return new Response(null, { status: 200 });
};

export const config = {
  path: "/submit",
};
