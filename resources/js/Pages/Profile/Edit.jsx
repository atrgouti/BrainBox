import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";

import { Head, useForm } from "@inertiajs/react";

export default function Edit({ auth, mustVerifyEmail, status }) {
  const { data, setData, post, patch, processing, errors } = useForm({
    about_me: auth.user.about_me || "",
    location: auth.user.location || "",
    language_level: auth.user.language_level || "",
    phone_number: auth.user.phone_number || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    patch(route("profile.updatePersonaleInformation", auth.user.id)); // Adjust the route to match your Laravel route
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Profile
        </h2>
      }
    >
      <Head title="Profile" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <UpdateProfileInformationForm
              mustVerifyEmail={mustVerifyEmail}
              status={status}
              className="max-w-xl"
            />
          </div>

          {/* update the new data in user's table */}
          <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Profile Personal Information
            </h2>
            <div>
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                  <InputLabel htmlFor="about_me" value="About Me" />
                  <TextInput
                    className="mt-1 w-full"
                    htmlFor="about_me"
                    name="about_me"
                    value={data.about_me}
                    onChange={(e) => setData("about_me", e.target.value)}
                  />
                </div>
                <div>
                  <InputLabel htmlFor="location" value="Location" />
                  <TextInput
                    className="mt-1"
                    htmlFor="location"
                    name="location"
                    value={data.location}
                    onChange={(e) => setData("location", e.target.value)}
                  />
                </div>
                <div>
                  <InputLabel htmlFor="language_level" value="Lnaguage Level" />
                  <TextInput
                    className="mt-1"
                    htmlFor="language_level"
                    name="language_level"
                    value={data.language_level}
                    onChange={(e) => setData("language_level", e.target.value)}
                  />
                </div>
                <div>
                  <InputLabel htmlFor="phone_number" value="Phone Number" />
                  <TextInput
                    className="mt-1"
                    htmlFor="phone_number"
                    name="phone_number"
                    value={data.phone_number}
                    onChange={(e) => setData("phone_number", e.target.value)}
                  />
                </div>
                {/* <div>
                  <InputLabel htmlFor="name" value="image" />
                  <input type="file" className="mt-2" />
                </div> */}
                <button className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150">
                  Save
                </button>
              </form>
            </div>
          </div>

          <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <UpdatePasswordForm className="max-w-xl" />
          </div>

          <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <DeleteUserForm className="max-w-xl" />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
