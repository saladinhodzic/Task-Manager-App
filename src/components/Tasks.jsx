import NewTask from "./NewTask.jsx";

export default function Tasks() {
  return (
    <section>
      <h1 className="text-2xl font-bold text-stone-600 mb-4">Tasks</h1>
      <NewTask />
      <p className="text-stone-800 my-4">You have no tasks added.</p>
      <ul></ul>
    </section>
  );
}
