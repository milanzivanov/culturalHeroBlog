/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";

import { useLoaderData, Link } from "react-router-dom";
import { getBlogs } from "../services/apiGetData";
import { formatDate } from "../services/formatDate";

const CATEGORIES = [
  { name: "all", color: "#f97316" },
  { name: "Čas anatomije", color: "#3b82f6" },
  { name: "Nova proza", color: "#16a34a" },
  { name: "Vizuali", color: "#8b5cf6" },
  { name: "Pomenik", color: "#eab308" },
];

export async function loader() {
  const blogs = await getBlogs();

  return blogs;
}

function Blogs() {
  const blogs = useLoaderData();

  // sorting by category
  const [currentCategory, setCurrentCategory] = useState("all");

  function filterBlogsByCategory(blogs, selectedCategory) {
    if (selectedCategory === "all") {
      return blogs;
    }
    return blogs.filter((blog) => blog.category === selectedCategory);
  }
  const filteredBlogs = filterBlogsByCategory(blogs, currentCategory);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto pb-0 md:px-0 md:py-5 lg:mx-0">
        <div className="flex items-center justify-between rounded-none border-b-2 bg-transparent p-5 shadow-sm md:rounded-md md:border-b-0 md:bg-slate-200">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-gray-900 lg:text-3xl">
              {currentCategory === "all" ? "Svi naslovi" : `${currentCategory}`}
            </h2>
          </div>
          <div>
            <select
              className="w-full cursor-pointer rounded-sm bg-white p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              id="categoryId"
              value={currentCategory}
              onChange={(e) => setCurrentCategory(e.target.value)}
              required
            >
              <option value="all">Izaberi rubriku:</option>
              {CATEGORIES.map((category) => (
                <option
                  key={category.name}
                  value={category.name}
                  style={{ color: category.color }}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* with grid */}
      <div className="mb-5 grid grid-cols-1 gap-0 rounded-none bg-slate-200 p-0 md:grid-cols-2 md:gap-5 md:rounded-md md:p-5 lg:grid-cols-3">
        {filteredBlogs.map((blog) => (
          <article
            className="rounded-none border-b-2 bg-white p-5 shadow-md hover:bg-slate-100 md:rounded-md md:border-b-0"
            key={blog.id}
          >
            <Link to={`/blogovi/${blog.id}`}>
              <div className="mb-5 rounded-md">
                <div className="flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={blog.created_at}
                    className="font-semibold text-gray-900"
                  >
                    {formatDate(blog.created_at)}
                  </time>
                  <p className="relative z-10 rounded-full bg-sky-100 px-3 py-1.5 text-gray-700">
                    {blog.category}
                  </p>
                </div>

                <div className="py-5">
                  <h2 className="mb-2 text-pretty py-2 text-lg font-semibold leading-6 text-gray-900">
                    {blog.title}
                  </h2>
                  <p className="line-clamp-3 text-pretty text-sm leading-5 text-gray-600 md:leading-6">
                    {blog.title_body}
                  </p>
                </div>

                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={blog.avatar}
                    alt={blog.title}
                    className="h-12 w-12 rounded-full border-2 border-gray-300 bg-[#e9e9e9] shadow-md grayscale backdrop-grayscale-0"
                  />
                  <div className="text-sm leading-5 md:leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0"></span>
                      {blog.author_name}
                    </p>
                    <p className="text-gray-600">Autor / saradnik</p>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
