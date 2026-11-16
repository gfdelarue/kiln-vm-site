const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const url = (path: string) => `${base}${path}`;

export const product = "kiln-vm";

export interface SitePage {
  path: string;
  name: string;
  line: string;
}

export const pages: SitePage[] = [
  {
    path: "/machines/",
    name: "Machines",
    line: "Named VMs that keep their disk across stops, starts and daemon restarts.",
  },
  {
    path: "/power/",
    name: "Power",
    line: "Idle VMs stop themselves, and the next command wakes them.",
  },
  {
    path: "/networking/",
    name: "Networking",
    line: "What a guest can reach, and how you reach a port inside it.",
  },
  {
    path: "/host/",
    name: "Host",
    line: "What the host needs, and the checks to run before you create anything.",
  },
];
