export default function Sidebar() {
  return (
    <aside className="bg-stone-900 text-stone-50 rounded-r-md py-6 px-8 w-1/3 md:w-72">
      <h2 className="font-bold uppercase text-stone-200 md:text-xl mb-8">
        Your projects
      </h2>
      <div>
        <button className="px-3 py-2 bg-stone-700 text-stone-400 rounded-md text-xs md:text-base hover:bg-stone-500 hover:text-stone-200">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
