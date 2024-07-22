import { useForm } from "@inertiajs/react";
import React from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";

export default function UpdateImage({ className = "" }) {
  const { data, setData, errors, post, progress } = useForm({
    file: null,
  });

  function handleSubmit(e) {
    e.preventDefault();

    // FormData to send file data
    let formData = new FormData();
    formData.append("file", data.file);

    post(route("profile.updateProfileImage"), formData, {
      onSuccess: () => {
        // Optionally handle success behavior
        console.log("Image uploaded successfully!");
      },
      onError: (errors) => {
        // Handle error responses
        console.error("Error uploading image:", errors);
      },
    });

    // Clear form data after submission
    setData("file", null);
  }

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Update Profile Image
        </h2>
      </header>

      <form name="updateImageForm" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="mb-4">
            <label
              htmlFor="fileInput"
              className="block text-sm font-medium text-gray-700"
            >
              File
            </label>
            <input
              id="fileInput"
              type="file"
              className="mt-1 block w-full px-4 py-2"
              name="file"
              onChange={(e) => setData("file", e.target.files[0])}
            />
            {errors.file && <InputError error={errors.file} />}
          </div>
        </div>

        <div className="mt-4">
          <PrimaryButton type="submit">Save</PrimaryButton>
        </div>
      </form>
    </section>
  );
}
