import { forwardRef } from "react";

const Input = forwardRef(function Input({ textarea, label, ...props }, ref) {
  const classes =
    "w-full border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 rounded-sm border-b-2 p-1";
  return (
    <p className="flex flex-col ">
      <label>{label}</label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});
export default Input;
