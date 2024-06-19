import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function UpdateWord({ auth, carrd }) {
  console.log("hada", carrd.id);
  const { data, setData, post, patch, processing, errors } = useForm({
    word: carrd.word || "",
    translation: carrd.translation || "",
    example: carrd.example || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    patch(route("cards.update", carrd.id)); // Adjust the route to match your Laravel route
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Update Word
        </h2>
      }
    >
      <Head title="Update Word" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="word"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Word
                </label>
                <input
                  type="text"
                  name="word"
                  id="word"
                  value={data.word}
                  onChange={(e) => setData("word", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-300"
                  placeholder="Set word"
                  required
                />
                {errors.word && (
                  <div className="text-red-600">{errors.word}</div>
                )}
              </div>
              <div>
                <label
                  htmlFor="translation"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Translation
                </label>
                <input
                  type="text"
                  name="translation"
                  id="translation"
                  value={data.translation}
                  onChange={(e) => setData("translation", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-300"
                  placeholder="Set translation"
                  required
                />
                {errors.translation && (
                  <div className="text-red-600">{errors.translation}</div>
                )}
              </div>
              <div>
                <label
                  htmlFor="example"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Example
                </label>
                <input
                  type="text"
                  name="example"
                  id="example"
                  value={data.example}
                  onChange={(e) => setData("example", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-300"
                  placeholder="Set example"
                  required
                />
                {errors.example && (
                  <div className="text-red-600">{errors.example}</div>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                disabled={processing}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
