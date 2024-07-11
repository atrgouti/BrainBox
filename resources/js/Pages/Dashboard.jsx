import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
export default function Dashboard({ auth, query, presentations, article }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Hello {auth.user.name}!
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-8">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-4 text-center">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              YOU HAVE {query.length} SETS
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg w-full lg:w-1/2 lg:ml-1 text-center">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              YOU HAVE {presentations.length} Presentations
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {article.map((artc) => (
              <Link key={artc.id} href={route("article.show", artc.id)}>
                <div className="w-full text-center text-white cursor-pointer">
                  <img
                    className="w-full h-auto rounded-lg shadow-md"
                    src={`/article_images/${artc.image}`}
                    alt={`Article Image ${artc.id}`}
                  />
                  <h1 className="mt-4 text-xl font-semibold">{artc.title}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
