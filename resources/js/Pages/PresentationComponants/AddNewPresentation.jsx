import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

export default function AddNewPresentation({ auth }) {
  const { data, setData, post, processing, errors } = useForm({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("presentations.store")); // Adjust the route to match your Laravel route
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          ADD NEW PRESENTATION
        </h2>
      }
    >
      <Head title="ADD NEW PRESENTATION" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={data.title}
                  onChange={(e) => setData("title", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-300"
                  placeholder="Set name"
                  required
                />
                {errors.title && (
                  <div className="text-red-600">{errors.title}</div>
                )}
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  value={data.description}
                  onChange={(e) => setData("description", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-300"
                  placeholder="Set name"
                  required
                />
                {errors.description && (
                  <div className="text-red-600">{errors.description}</div>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                disabled={processing}
              >
                Add New Description
              </button>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
