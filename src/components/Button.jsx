export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-3 py-2 bg-stone-700 text-stone-400 rounded-md text-xs md:text-base hover:bg-stone-500 hover:text-stone-200"
    >
      {children}
    </button>
  );
}
