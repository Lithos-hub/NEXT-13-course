import { NewTaskDialog, TaskList } from "@/components/UI";
import { Layout } from "@/components/layouts";
import { Add } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import { Status } from "@/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "@/store/slices";
import { RootState } from "../store/index";

export default function Home() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: RootState) => state.TasksStore);
  const { currentDragId } = useSelector((state: RootState) => state.UIStore);
  const [open, setOpen] = useState(false);
  const [dragSection, setDragSection] = useState<Status | null>(null);

  const toggleDialog = () => {
    setOpen(!open);
  };

  const onDragOver = (status: Status) => {
    setDragSection(status);
  };

  const onDragEnd = () => {
    const taskToUpdate = tasks.find((task) => task._id === currentDragId);
    dispatch(
      updateTask({
        ...taskToUpdate,
        status: dragSection,
      })
    );
    setDragSection(null);
  };

  return (
    <>
      <Head>
        <title>Jira Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Home | Jira App">
        <>
          <header className="flex justify-end mb-5">
            <Button
              variant="outlined"
              color="info"
              endIcon={<Add />}
              onClick={() => toggleDialog()}
            >
              Add new task
            </Button>
            <NewTaskDialog open={open} handleClose={() => toggleDialog()} />
          </header>
          <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-6 gap-5">
            <div
              onDragOver={() => onDragOver("locked")}
              onDragEnd={() => onDragEnd()}
              className={`px-2 py-5 rounded h-[80vh] shadow-xl bg-red-900 bg-opacity-10 border border-red-500 duration-200 ${
                dragSection === "locked"
                  ? "bg-red-500 brightness-150 bg-opacity-30 border-dashed border-white"
                  : "bg-red-900"
              }`}
            >
              <header className="mb-5">
                <Typography variant="h5">Locked</Typography>
              </header>
              <TaskList taskStatus="locked" />
            </div>
            <div
              onDragOver={() => onDragOver("backlog")}
              onDragEnd={() => onDragEnd()}
              className={`px-2 py-5 rounded h-[80vh] shadow-xl bg-gray-900 bg-opacity-10 border border-gray-500 duration-200 ${
                dragSection === "backlog"
                  ? "bg-gray-500 brightness-150 bg-opacity-30 border-dashed border-white"
                  : "bg-gray-900"
              }`}
            >
              <header className="mb-5">
                <Typography variant="h5">Backlog</Typography>
              </header>
              <TaskList taskStatus="backlog" />
            </div>
            <div
              onDragOver={() => onDragOver("in-progress")}
              onDragEnd={() => onDragEnd()}
              className={`px-2 py-5 rounded h-[80vh] shadow-xl bg-blue-900 bg-opacity-10 border border-blue-500 duration-200 ${
                dragSection === "in-progress"
                  ? "bg-blue-500 brightness-150 bg-opacity-30 border-dashed border-white"
                  : "bg-blue-900"
              }`}
            >
              <header className="mb-5">
                <Typography variant="h5">In progress</Typography>
              </header>
              <TaskList taskStatus="in-progress" />
            </div>
            <div
              onDragOver={() => onDragOver("pr")}
              onDragEnd={() => onDragEnd()}
              className={`px-2 py-5 rounded h-[80vh] shadow-xl bg-purple-900 bg-opacity-10 border border-purple-500 duration-200 ${
                dragSection === "pr"
                  ? "bg-purple-500 brightness-150 bg-opacity-30 border-dashed border-white"
                  : "bg-purple-900"
              }`}
            >
              <header className="mb-5">
                <Typography variant="h5">PR under review</Typography>
              </header>
              <TaskList taskStatus="pr" />
            </div>
            <div
              onDragOver={() => onDragOver("rtodeploy")}
              onDragEnd={() => onDragEnd()}
              className={`px-2 py-5 rounded h-[80vh] shadow-xl bg-cyan-900 bg-opacity-10 border border-cyan-500 duration-200 ${
                dragSection === "rtodeploy"
                  ? "bg-cyan-500 brightness-150 bg-opacity-30 border-dashed border-white"
                  : "bg-cyan-900"
              }`}
            >
              <header className="mb-5">
                <Typography variant="h5">Ready to deploy</Typography>
              </header>
              <TaskList taskStatus="rtodeploy" />
            </div>
            <div
              onDragOver={() => onDragOver("rfortest")}
              onDragEnd={() => onDragEnd()}
              className={`px-2 py-5 rounded h-[80vh] shadow-xl bg-green-900 bg-opacity-10 border border-green-500 duration-200 ${
                dragSection === "rfortest"
                  ? "bg-green-500 brightness-150 bg-opacity-30 border-dashed border-white"
                  : "bg-green-900"
              }`}
            >
              <header className="mb-5">
                <Typography variant="h5">Ready for test</Typography>
              </header>
              <TaskList taskStatus="rfortest" />
            </div>
          </div>
        </>
      </Layout>
    </>
  );
}
