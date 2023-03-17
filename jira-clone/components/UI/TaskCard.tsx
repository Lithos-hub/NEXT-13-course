import { Card, CardActionArea, CardActions, CardContent } from "@mui/material";
import React, { DragEvent, FC, useMemo } from "react";
import { Task } from "../../interfaces/Task";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import { onDragging, onStopDragging } from "@/store/slices/ui";

interface Props {
  task: Task;
}

const TaskCard: FC<Props> = ({ task }) => {
  const dispatch = useDispatch();

  const difference = useMemo(
    () => new Date().getTime() - task.createdAt,
    [task.createdAt]
  );
  const minutes = useMemo(
    () => Math.floor((difference / 1000 / 60) << 0),
    [difference]
  );

  const { isDragging, currentDragId } = useSelector(
    (store: RootState) => store.UIStore
  );

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("task_id", task._id);
    dispatch(onDragging(task._id));
  };

  const onDragEnd = () => {
    dispatch(onStopDragging());
  };

  return (
    <Card draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <CardActionArea
        className={`cursor-pointer ${
          isDragging && currentDragId === task._id
            ? "pulse"
            : isDragging && currentDragId !== task._id
            ? "opacity-20"
            : "bg-[#101010]"
        } bg-opacity-50 border border-[#181818] rounded-xl shadow-xl hover:scale-105 duration-200`}
      >
        <CardContent>
          <p>{task.description}</p>
        </CardContent>

        <CardActions>Created {minutes} minutes ago</CardActions>
      </CardActionArea>
    </Card>
  );
};

export default TaskCard;
