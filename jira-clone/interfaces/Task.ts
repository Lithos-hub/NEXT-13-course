export type Status =
  | "locked"
  | "backlog"
  | "in-progress"
  | "pr"
  | "rtodeploy"
  | "rfortest";

export interface Task {
  _id: string;
  description: string;
  createdAt: number;
  status: Status;
}
