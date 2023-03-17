import { DragEvent, FC, useMemo } from "react";
import TaskCard from "./TaskCard";
import { useSelector, useDispatch } from "react-redux";
import type { Status } from "@/interfaces";
import { RootState } from "@/store";

interface Props {
  taskStatus: Status;
}

const TaskList: FC<Props> = ({ taskStatus }) => {
  const { tasks } = useSelector((state: RootState) => state.TasksStore);
  const filteredByStatus = useMemo(
    () => tasks.filter(({ status }) => status === taskStatus),
    [taskStatus, tasks]
  );
  const allowDrop = (event: DragEvent<HTMLElement>) => {
    event.preventDefault();
  };

  return (
    <div onDragOver={allowDrop} className="flex flex-col gap-5">
      {filteredByStatus.map((task, i) => (
        <TaskCard key={i} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
