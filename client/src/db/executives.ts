export type TExecutive = {
  id: string;
  name: string;
  position: string;
  contact: string;
  startDate: string;
};

export const executives: { [key: string]: TExecutive } = {
  saoidaoijdaois: {
    id: "saoidaoijdaois",
    name: "Zakwan Ashfaq",
    position: "Lead web dev",
    contact: "test@example.com",
    startDate: "2021",
  },
  dskajbndksan: {
    id: "dskajbndksan",
    name: "Irfanul",
    position: "web dev",
    contact: "test@example.com",
    startDate: "2023",
  },
};
