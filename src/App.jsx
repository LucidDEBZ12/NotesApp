import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  return (
    <div className="min-h-screen bg-black text-white lg:flex overflow-hidden">
      {/* FORM SECTION */}
      <form
        onSubmit={submitHandler}
        className="flex items-start lg:w-1/2 flex-col gap-4 p-10"
      >
        <h1 className="text-3xl font-bold">YOUR NOTES</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full py-2 font-medium border-2 rounded outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="px-5 w-full h-32 font-medium py-2 border-2 outline-none rounded"
          placeholder="Write Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>

        <button className="bg-white w-full text-black px-5 py-2 rounded transition-all duration-200 hover:scale-[1.02] active:scale-95 hover:bg-gray-200">
          Add Note
        </button>
      </form>

      {/* NOTES SECTION */}
      <div className="lg:w-1/2 p-10 lg:border-l-2 overflow-auto">
        <h1 className="text-3xl font-bold">RECENT NOTES</h1>

        <div className="flex gap-5 flex-wrap mt-4 items-start justify-start ">
          {task.map((item, index) => {
            return (
              <div
                key={index}
                className="h-52 w-40 rounded text-black bg-white p-3 overflow-hidden bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover"
              >
                <h1 className="text-xl font-bold leading-tight">
                  {item.title}
                </h1>

                <p className="mt-2 text-sm font-normal wrap-break">
                  {item.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
