import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react"; // Ensure you have imported Link and Head correctly
import { Inertia } from "@inertiajs/inertia";

function Presentations({ auth, mypresentations }) {
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
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center w-full max-w-7xl px-4">
            {mypresentations.map((p) => (
              <Link
                key={p.id}
                className="relative"
                href={route("presentations.show", p.id)}
              >
                <div
                  key={p.id}
                  className="flex items-center justify-center w-[300px] min-w-[200px] h-64 bg-sky-500 mx-2 mb-10 cursor-pointer"
                >
                  <h1 className="text-white text-2xl">{p.title}</h1>
                  <img
                    className="absolute bottom-12 right-4 h-10"
                    src="/delete-icon-white.svg"
                    alt=""
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (
                        confirm(
                          "Are you sure you want to delete this presentation?"
                        )
                      ) {
                        router.delete(route("presentations.delete", p.id));
                      }
                    }}
                  />
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
