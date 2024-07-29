import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react"; // Ensure you have imported Link and Head correctly
import { Inertia } from "@inertiajs/inertia";

function QuizCards({ auth, quizzes, quizzName }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {quizzName[0].title}
          </h2>
        </div>
      }
    >
      <Head title="quizzes" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="px-3 py-2">id</th>
                    <th className="px-3 py-2">word</th>
                    <th className="px-3 py-2">translation</th>
                    <th className="px-3 py-2">example</th>
                    <th className="px-3 py-2">status</th>
                  </tr>
                </thead>
                <tbody>
                  {quizzes.map((set, idx) => (
                    <tr
                      key={set.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-3 py-2">{idx + 1}</td>
                      <td className="px-3 py-2">{set.word}</td>
                      <td className="px-3 py-2">{set.translation}</td>
                      <td className="px-3 py-2">{set.example}</td>
                      <td className="px-3 py-2">{set.memorized}</td>
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

export default QuizCards;
