import NewTask from "./NewTask.jsx";

export default function Tasks({ tasks, onDelete, onAdd }) {
  return (
    <section>
      <h1 className="text-2xl font-bold text-stone-600 mb-4">Tasks</h1>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">You have no tasks added.</p>
      )}
      {tasks.length > 0 && (
        <ul className="bg-stone-100 mt-6 py-8 px-4 rounded-sm flex flex-col ">
          {tasks.map((task) => {
            return (
              <li className="flex justify-between" key={task.id}>
                <p>{task.text}</p>
                <button
                  onClick={() => onDelete(task.id)}
                  className="text-stone-600 hover:text-red-600"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
