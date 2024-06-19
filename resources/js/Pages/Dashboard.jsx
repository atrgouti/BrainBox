import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
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
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-between">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded- lg:w-1/2 mr-4 text-center">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              Hello {auth.user.name}! You're logged in
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg lg:w-1/2 ml-1 text-center">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              Hello {auth.user.name}! You're logged in
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
