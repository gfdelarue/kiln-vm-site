const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const url = (path: string) => `${base}${path}`;

export interface SitePage {
  path: string;
  name: string;
  line: string;
  command: string;
}

export const pages: SitePage[] = [
  {
    path: "/machines/",
    name: "Machines",
    line: "Named VMs that keep their disk across stops, starts and daemon restarts.",
    command: "kiln vm create dev --profile ubuntu-docker --disk 64G",
  },
  {
    path: "/power/",
    name: "Power",
    line: "Idle machines stop, and the next request wakes them.",
    command: "kiln vm power app --mode warm --idle 15m",
  },
  {
    path: "/networking/",
    name: "Networking",
    line: "Private networks between machines, with proxy routes, port forwards and tunnels to reach them.",
    command: "kiln networks create --name app-net --cidr 10.44.0.0/24",
  },
  {
    path: "/postgres/",
    name: "Postgres",
    line: "A managed Postgres you clone for each test run and reset between tests.",
    command: "kiln appliance postgres clone db runtime-1 --source fixture-v1",
  },
  {
    path: "/deployments/",
    name: "Deployments",
    line: "Declare what should exist, and Kiln plans the difference.",
    command: "kiln deployment outputs app --generation 4",
  },
  {
    path: "/host/",
    name: "Host",
    line: "What the host needs, and the checks to run before you create anything.",
    command: "kiln host doctor",
  },
];

export const status = "Not released yet";
