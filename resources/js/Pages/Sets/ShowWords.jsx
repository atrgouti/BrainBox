import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

function ShowWords({ auth, cards, nameOfTheSet }) {
  const handleDelete = (id, setId) => {
    if (confirm("Are you sure you want to delete this set?")) {
      Inertia.delete(route("cards.delete", { id: id, setId: setId }), {
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
            All Words In{" "}
            <b style={{ color: "aquamarine" }}>{nameOfTheSet[0].title}</b>
          </h2>
          <button className="ont-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            <Link
              href={route("cards.create", nameOfTheSet[0].id)}
              className="font-medium text-yellow-600 dark:text-yellow-500 hover:underline mx-1"
            >
              Add New Word
            </Link>
          </button>
        </div>
      }
    >
      <Head title="Words" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="px-3 py-2">Word</th>
                    <th className="px-3 py-2">Translation</th>
                    <th className="px-3 py-2">Example</th>
                    <th className="px-3 py-2">Status</th>

                    <th className="px-3 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cards.map((cards) => (
                    <tr
                      key={cards.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-3 py-2">{cards.word}</td>
                      <td className="px-3 py-2">{cards.translation}</td>
                      <td className="px-3 py-2">{cards.example}</td>
                      <td className="px-3 py-2">
                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                          Good
                        </button>
                      </td>
                      <td className="px-3 py-2">
                        <Link
                          href={route("cards.edit", cards.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() =>
                            handleDelete(cards.id, nameOfTheSet[0].id)
                          }
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* <tr
                    key={employe.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-3 py-2">{employe.word}</td>
                    <td className="px-3 py-2">{employe.translation}</td>
                    <td className="px-3 py-2">{employe.example}</td>
                    <td className="px-3 py-2">
                      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                        Good
                      </button>
                    </td>
                    <td className="px-3 py-2">
                      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                        Edit
                      </button>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default ShowWords;
