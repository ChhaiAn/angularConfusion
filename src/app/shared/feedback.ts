export class Feedback {
  firstname: string;
  lastname: string;
  telnum: number;
  email: string;
  agree: boolean;
  contacttype: string;
  message: string;
}

export const ContactType = ['none', 'Tel', 'Email'];