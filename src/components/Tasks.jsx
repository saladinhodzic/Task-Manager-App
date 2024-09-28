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
        <ul className="bg-stone-200 mt-6">
          {tasks.map((task) => {
            return (
              <li className="flex gap-4" key={task.id}>
                <p>{task.text}</p>
                <button>Clear</button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
