import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react"; // Ensure you have imported Link and Head correctly
import { Inertia } from "@inertiajs/inertia";

function Presentations({ auth, mypresentations }) {
  console.log(mypresentations[0]);
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            My Presentations
          </h2>
          <button className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            <Link
              href={route("presentations.create")}
              className="font-medium text-yellow-600 dark:text-yellow-500 hover:underline mx-1"
            >
              add new presentation
            </Link>
          </button>
        </div>
      }
    >
      <Head title="Presentations" />
      <div className="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="flex flex-wrap justify-between items-center w-full max-w-7xl px-4">
            {mypresentations.map((p) => (
              <Link href={route("presentations.show", p.id)}>
                <div
                  key={p.id}
                  class="flex items-center justify-center w-[300px] min-w-[200px] h-64 bg-sky-500 mx-2 mb-10 cursor-pointer transform transition-transform duration-200 hover:scale-110"
                >
                  <h1 class="text-white text-2xl">{p.title}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default Presentations;
