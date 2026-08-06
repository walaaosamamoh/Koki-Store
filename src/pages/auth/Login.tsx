import { useForm } from "@tanstack/react-form";
import { loginSchema } from "../../schemas/loginSchema";
import FormInput from "../../components/FormInput";

function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    validators: {
      onChange: loginSchema,
    },

    onSubmit: async ({ value }) => {
      console.log("login successfully", value);
    },
  });
  return (
    <div className="container bg-white w-2xl mx-auto p-6 translate-y-50 rounded-lg shadow-md">
      <form onSubmit={(e)=>{e.preventDefault(); form.handleSubmit()}} className="flex flex-col gap-4">
        <form.Field name="email">
          {(field) => (
            <FormInput
              field={field}
              label="Email"
              type="email"
              placeholder="Enter your email"
            />
          )}
        </form.Field>
        <form.Field name="password">
          {(field) => (
            <FormInput
              field={field}
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
          )}
        </form.Field>
        <button type="submit" className="bg-yellow-500 text-white cursor-pointer shadow rounded-md mt-6 py-2">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
