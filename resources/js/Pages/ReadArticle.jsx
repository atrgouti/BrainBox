import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react"; // Ensure you have imported Link and Head correctly
import { Inertia } from "@inertiajs/inertia";

function ReadArticle({ auth, article }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            My article
          </h2>
        </div>
      }
    >
      <Head title="Article" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <img
            src={`/article_images/${article[0].image}`}
            alt=""
            className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8"
          />
          <h1 className="p-5 text-center  text-white">{article[0].title}</h1>
          <div
            className="w-full text-white text-center p-5"
            dangerouslySetInnerHTML={{ __html: article[0].description }}
          />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default ReadArticle;
