import React, { useState } from "react";
import { Checkbox, Modal, message, Popconfirm, notification } from "antd";
import { BsTrash } from "react-icons/bs";
import TextField from "@mui/material/TextField";
const Context = React.createContext({
  name: "Default",
});

const ToDo = ({ mode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [todos, setTodos] = React.useState(
    mode === "personal"
      ? [
          {
            text: "Give this project a STAR in GitHub!",
            desc: "You can find this project in my GitHub Repo",
            isDone: false,
          },
          {
            text: "Update the Documentation",
            desc: "Dwuamish Head, Seattle, WA 8:47 AM",
            isDone: false,
          },
          {
            text: "GDPR Compliance",
            desc: "The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.",
            isDone: false,
          },
          {
            text: "Solve the issues",
            desc: "Fifty percent of all respondents said they would be more likely to shop at a company.",
            isDone: false,
          },
          {
            text: "Release v2.0.0",
            desc: "Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM",
            isDone: false,
          },
          {
            text: "Export the processed files",
            desc: "The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs.",
            isDone: false,
          },
          {
            text: "Arival at export process",
            desc: "Capitol Hill, Seattle, WA 12:34 AM",
            isDone: false,
          },
          {
            text: "Edit Me and add/delete tasks!",
            desc: "Test me and enjoy me!",
            isDone: true,
          },
        ]
      : [
          {
            text: "Company's to do tasks",
            desc: "This is an example of a task description",
            isDone: false,
          },
          {
            text: "Edit Me and add/delete tasks!",
            desc: "Test me and enjoy me!",
            isDone: true,
          },
          {
            text: "Call a general meeting",
            desc: "Meeting should be on sales and new marketing strategies that was provided recently to the team.",
            isDone: false,
          },
          {
            text: "Give employees a decent pay raise!",
            desc: "Every company should have this on its to do list!",
            isDone: true,
          },
          {
            text: "This is a Task Title",
            desc: "This is a task description",
            isDone: false,
          },
          {
            text: "Check out Meraj Mazidi's Portfolio Page!",
            desc: "portfolio",
            isDone: true,
          },
        ]
  );

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `New Task created Successfully. Good Luck!`,
      description: `This is a message from ${
        mode === "personal" ? "Personal" : "Company"
      } To do list.`,
      placement,
    });
  };

  const markTodo = (id, isChecked) => {
    const newTodos = [...todos];
    newTodos[id].isDone = isChecked;
    setTodos(newTodos);
    isChecked === true
      ? message.success(`Task Number ${id + 1} marked as Done!`)
      : message.success(`Task Number ${id + 1} marked as Undone!`);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    message.success(`Task Number ${index + 1} deleted successfully!`);
  };

  const addTodo = () => {
    const newTodos = [...todos, { text: value1, desc: value2, isDone: false }];
    setTodos(newTodos);
    setValue1("");
    setValue2("");
    setIsOpen(false);
    openNotification("bottomRight");
  };

  return (
    <Context.Provider>
      {contextHolder}
      <div className="w-full">
        <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:items-center justify-between">
          <div className="flex items-center justify-between md:justify-start gap-x-5 text-[#9a9a9a]">
            <p>TASKS ({todos.length})</p>
            <p>Today</p>
          </div>

          <button
            className="w-full md:w-[200px] border border-[#1d8cf8] py-2 rounded-md activeBtn text-white font-[600]"
            onClick={() => setIsOpen(true)}
          >
            Add new Task
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 md:mt-5">
        {todos.map((item, i) => (
          <div
            className={`flex items-center justify-between gap-x-4 py-2 border-t border-[#9a9a9a] px-2 pr-4 ${
              item.isDone === true && "!border-green-500"
            }`}
            key={i}
          >
            <Checkbox
              className="dark:text-white"
              onChange={(e) => markTodo(i, e.target.checked)}
              checked={item.isDone}
            >
              <p className="ml-2 text-lg font-medium mb-1">{item.text}</p>
              {item.desc === "portfolio" ? (
                <a
                  className="ml-2 text-[#9a9a9a] text-sm font-thin"
                  href="https://meraj.vercel.app/"
                  target="_blank"
                >
                  You can check my portfolio by{" "}
                  <span className="underline">clicking on this!</span>
                </a>
              ) : (
                <p className="ml-2 text-[#9a9a9a] text-sm font-thin">
                  {item.desc}
                </p>
              )}
            </Checkbox>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => removeTodo(i)}
              okText="Delete Task"
              cancelText="Cancle"
              onCancel={() => {
                message.success(`Deleting Canceled!`);
              }}
            >
              <div className="cursor-pointer hover:text-[#1d8cf8] transition-all duration-200 hover:scale-110 hover:border p-2 rounded-full">
                <BsTrash className="text-xl" />
              </div>
            </Popconfirm>
          </div>
        ))}
      </div>

      <Modal
        title={<p className="text-xl font-medium">Add a new To Do task</p>}
        open={isOpen}
        centered
        footer={false}
        onCancel={() => setIsOpen(false)}
      >
        <div className="mt-10 flex flex-col gap-y-5">
          <TextField
            fullWidth
            label="Task Title here"
            id="fullWidth"
            onChange={(e) => setValue1(e.target.value)}
          />
          <TextField
            fullWidth
            label="Task description here"
            id="fullWidth"
            onChange={(e) => setValue2(e.target.value)}
          />
          <button
            className="w-full border border-[#1d8cf8] py-2 rounded-md activeBtn text-white font-[600] text-lg mt-5"
            onClick={addTodo}
          >
            Create a new To Do Task
          </button>
        </div>
      </Modal>
    </Context.Provider>
  );
};

export default ToDo;
