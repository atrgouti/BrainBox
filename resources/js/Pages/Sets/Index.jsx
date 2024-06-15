import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react"; // Ensure you have imported Link and Head correctly
import { Inertia } from "@inertiajs/inertia";

function Index({ auth, sets }) {
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this set?")) {
      Inertia.delete(route("sets.delete", id), {
        onSuccess: () => {
          alert("Set deleted successfully");
        },
        onError: () => {
          alert("There was an error deleting the set");
        },
      });
    }
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Sets
          </h2>
          <button className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            <Link
              href={route("sets.create")}
              className="font-medium text-yellow-600 dark:text-yellow-500 hover:underline mx-1"
            >
              add new set
            </Link>
          </button>
        </div>
      }
    >
      <Head title="Sets" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="px-3 py-2">Title</th>
                    <th className="px-3 py-2">Created_at</th>
                    <th className="px-3 py-2">Updated_at</th>
                    <th className="px-3 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sets.data.map((set) => (
                    <tr
                      key={set.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-3 py-2">{set.title}</td>
                      <td className="px-3 py-2">{set.created_at}</td>
                      <td className="px-3 py-2">{set.updated_at}</td>
                      <td className="px-3 py-2">
                        <Link
                          href={route("cards.show", set.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => handleDelete(set.id)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default Index;
