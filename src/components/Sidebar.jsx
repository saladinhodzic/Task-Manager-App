import Button from "./Button";

export default function Sidebar() {
  return (
    <aside className="bg-stone-900 text-stone-50 rounded-r-md py-6 px-8 w-1/3 md:w-72">
      <h2 className="font-bold uppercase text-stone-200 md:text-xl mb-8">
        Your projects
      </h2>
      <div>
        <Button>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
