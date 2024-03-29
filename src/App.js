import React from "react";

class App extends React.Component {
  state = {
    todose: [
      { id: 1, title: "item 1", done: false },
      { id: 2, title: "item 2", done: true },
      { id: 1, title: "item 3", done: false },
    ],
  };

  clickHandler = {};

  render() {
    return (
      <div className="min-h-screen w-full bg-slate-100 flex justify-center items-center">
        <div className="bg-white flex-1 max-w-md rounded-xl shadow-xl overflow-hidden">
          <input
            type="text"
            className="bg-slate-600 text-white p-6 w-full outline-none text-3xl"
            placeholder="Type something..."
          />
          <ul>
            {this.state.todose.map((todo) => {
              return (
                <li
                  key={todo.id}
                  className={`p-6 text-3xl transition border-b border-slate-100 hover:bg-blue-500 hover:text-white cursor-pointer bg-slate-200 text-slate-600 ${
                    todo.done ? "line-through" : ""
                  }`}
                >
                  {todo.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
