import { Resend} from 'resend'

const resend = new Resend(import.meta.env.VITE_BEAUTY_KEY);

export async function SendRecall() {
  const { data, error } = await resend.emails.send({
    from: 'test-recall-emai@spes.dev',
    to: ['spesivov11@gmail.com'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
};
