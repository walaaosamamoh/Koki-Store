import type { FieldApi } from "@tanstack/react-form";


type Props = {
  field: FieldApi;
  label: string;
  type: string;
  placeholder: string;
}

export default function FormInput({
  field,
  label,
  type = "text",
  placeholder,
}:Props) {

  const showError= field.state.meta.isTouched && !field.state.meta.isValid
  
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={field.name}>{label}</label>
      <input
        id={field.name}
        type={type}
        placeholder={placeholder}
        value={field.state.value}
        onChange={(e)=> field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        aria-invalid={showError}
        aria-describedby={`${field.name}-error`}
        className={`border rounded-md px-4 py-2 outline-none transition
          ${
            showError
              ? "border-red-500"
              : "border-gray-300 focus:border-yellow-500"
          }`}
      />
      {showError && (
        <p
          id={`${field.name}-error`}
          className="text-red-500 text-sm"
        >
          {field.state.meta.errors[0]?.message}
        </p>
      )}
    </div>
  );
}
