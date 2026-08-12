import { useForm } from "@tanstack/react-form";
import { categorySchema } from "../../../schemas/categorySchema";
import { useCreateCategory } from "../../../hooks/useCreateCategory";

export default function CreateCategory() {
  const createMutation = useCreateCategory();

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: { handleChange: (value: string) => void },
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        field.handleChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      image: "",
    },

    validators: {
      onChange: categorySchema,
    },

    onSubmit: async ({ value }) => {
      try {
        const category = await createMutation.mutateAsync(value);
        console.log("Created:", category);
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 m-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Add New Category
          </h3>
          <p className="text-gray-600 text-sm">
            Fill in the details to add a new category
          </p>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="px-6 py-4"
      >
        <form.Field name="title">
          {(field) => (
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm lg:text-base font-semibold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md"
              />
              {field.state.meta.isTouched && (
                <p id={`${field.name}-error`} className="text-red-500 text-sm">
                  {field.state.meta.errors[0]?.message}
                </p>
              )}
            </div>
          )}
        </form.Field>
        <form.Field name="description">
          {(field) => (
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm lg:text-base font-semibold mb-2"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md"
              />
              {field.state.meta.isTouched && (
                <p id={`${field.name}-error`} className="text-red-500 text-sm">
                  {field.state.meta.errors[0]?.message}
                </p>
              )}
            </div>
          )}
        </form.Field>
        <form.Field name="image">
          {(field) => (
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-700 text-sm lg:text-base font-semibold mb-2"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, field)}
                className="w-full px-3 py-2 border border-gray-300 outline-none rounded-md"
              />
              {field.state.meta.isTouched && (
                <p id={`${field.name}-error`} className="text-red-500 text-sm">
                  {field.state.meta.errors[0]?.message}
                </p>
              )}
              {field.state.value && (
                <img
                  src={field.state.value}
                  alt="Preview"
                  className="mt-4 w-40 h-40 object-cover rounded-lg"
                />
              )}
            </div>
          )}
        </form.Field>
        <button
          type="submit"
          disabled={createMutation.isPending}
          className="block px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded-lg text-white m-auto cursor-pointer shadow-sm"
        >
          Add
        </button>
      </form>
    </div>
  );
}
