import { Status } from "@/interfaces";
import { TasksApi } from "@/services";
import { setTasks } from "@/store/slices";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React, { ChangeEvent, FC } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const NewTaskDialog: FC<Props> = ({ open = false, handleClose }) => {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Status>("backlog");

  const dispatch = useDispatch();

  const handleStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as Status);
  };
  const handleDescription = (event: SelectChangeEvent) => {
    setDescription(event.target.value as string);
  };

  const getTasksFromDB = async () => {
    const res = await TasksApi.get("/tasks");
    dispatch(setTasks(res.data));
  };

  const onSave = async () => {
    if (!description || !status) return;
    await TasksApi.post("/tasks", {
      description,
      status,
    });
    handleClose();
    getTasksFromDB();
    setDescription("");
    setStatus("backlog");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create new task</DialogTitle>
      <DialogContent>
        <div className="flex flex-col gap-5">
          <DialogContentText>
            Write the description of the task and select then the status.
          </DialogContentText>
          <TextField
            autoFocus
            id="descripton"
            label="Task description"
            fullWidth
            multiline
            error={description.length <= 0}
            value={description}
            helperText="This field is mandatory"
            minRows={4}
            variant="filled"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleDescription(e)
            }
          />
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="demo-simple-select"
            variant="filled"
            error={status.length <= 0}
            value={status}
            onChange={handleStatus}
          >
            <MenuItem value={"locked"}>Locked</MenuItem>
            <MenuItem value={"backlog"}>Backlog</MenuItem>
            <MenuItem value={"in-progress"}>In progress</MenuItem>
            <MenuItem value={"pr"}>PR under review</MenuItem>
            <MenuItem value={"rtodeploy"}>Ready to deploy</MenuItem>
            <MenuItem value={"rfortest"}>Ready for test</MenuItem>
          </Select>
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button color="success" endIcon={<SaveOutlinedIcon />} onClick={onSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewTaskDialog;
