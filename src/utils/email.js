import emailjs from "@emailjs/browser";

export const sendEmail = (form) => {
  return emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    form,
    import.meta.env.VITE_EMAIL_PUBLIC_KEY
  );
};