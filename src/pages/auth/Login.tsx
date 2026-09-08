import { useForm } from "@tanstack/react-form";
import { loginSchema } from "../../schemas/loginSchema";
import FormInput from "../../components/FormInput";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    validators: {
      onChange: loginSchema,
    },

    onSubmit: ({ value }) => {
      const user = login(value);

      if (!user) {
        console.log("login failed");
        return;
      }

      console.log("login successfully");

      if (user.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    },
  });

  return (
   <div className="min-h-screen flex items-center justify-center p-2">
     <div className="mx-auto w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="flex flex-col gap-4"
      >
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

        <button
          type="submit"
          className="bg-yellow-500 text-white cursor-pointer shadow rounded-md mt-6 py-2"
        >
          Login
        </button>
      </form>
    </div>
   </div>
  );
}

export default Login;
