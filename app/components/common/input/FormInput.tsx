import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  title?: string;
  label?: string;
  rows?: number;
  cols?: number;
}
const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
  const { title, label, name, ...others } = props;
  return (
    <div className="flex flex-col-reverse rounded p-3 w-full">
      <input
        {...others}
        id={name}
        name={name}
        className={`
                peer p-1 px-2
                bg-transparent focus:bg-ui-pink-20/40
                border rounded outline-none focus:shadow transition-all w-full`}
        title={title}
        ref={ref}
      />
      <label className="peer-focus:text-ui-pink-70 transition-all" htmlFor={name}>
        {label}
      </label>
    </div>
  );
});
FormInput.displayName = "FormInput";

export default FormInput;

export const TextArea = React.forwardRef<HTMLTextAreaElement, FormInputProps>((props, ref) => {
  const { title, rows, label, name, ...others } = props;
  return (
    <div className="flex flex-col-reverse rounded p-3 w-full">
      <textarea
        ref={ref}
        {...others}
        rows={rows}
        className={`
        peer p-3
        bg-transparent focus:bg-ui-pink-20/40
        border rounded outline-none focus:shadow transition-all w-full`}
        id={name}
        name={name}
        title={title}
      />
      <label className="peer-focus:text-ui-pink-70 transition-all" htmlFor={name}>
        {label}
      </label>
    </div>
  );
});
TextArea.displayName = "TextArea";
