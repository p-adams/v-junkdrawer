type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

type Name = { first: string; middle: string; last: string };

type Address = {
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: number;
};

type Contact = {
  primaryPhone: number;
  email?: string;
  media?: Media[];
};

type Media = {
  name?: string;
  link?: string;
};

interface BusinessCardData {
  name: { [key: string]: number | string };
  image?: string;
  address?: { [key: string]: number | string };
  contact?: { [key: string]: number | string };
}
