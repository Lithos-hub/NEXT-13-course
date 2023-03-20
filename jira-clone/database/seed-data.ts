import type { Status } from "../interfaces";

interface SeedTask {
  description: string;
  status: Status;
  createdAt: number;
}

export const seedData: SeedTask[] = [
  {
    description: "lorem ipsum dolor",
    status: "backlog",
    createdAt: Date.now(),
  },
  {
    description: "lorem ipsum dolor 2",
    status: "in-progress",
    createdAt: Date.now() - 100000,
  },
  {
    description: "lorem ipsum dolor 3",
    status: "pr",
    createdAt: Date.now() - 200000,
  },
];
