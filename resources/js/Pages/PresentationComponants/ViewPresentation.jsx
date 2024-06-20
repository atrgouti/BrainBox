import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

function ViewPresentation({ auth, p }) {
  console.log(p[0]);
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"></h2>
          <button className="ont-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            <Link
              href={route("cards.create", 1)}
              className="font-medium text-yellow-600 dark:text-yellow-500 hover:underline mx-1"
            >
              Edit This Presentation
            </Link>
          </button>
        </div>
      }
    >
      <Head title="Words" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h1 className="text-white text-center">{p[0].title}</h1>
          {/* <p className="text-white mt-10">{p[0].description}</p> */}
          <div
            className="text-white mt-10"
            dangerouslySetInnerHTML={{ __html: p[0].description }}
          />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default ViewPresentation;
