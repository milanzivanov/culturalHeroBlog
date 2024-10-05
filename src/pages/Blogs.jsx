/* eslint-disable react-refresh/only-export-components */
import { formatDate } from "../services/formatDate";
import { useLoaderData, Link } from "react-router-dom";
import { getBlogs } from "../services/apiGetData";

export async function loader() {
  const blogs = await getBlogs();
  return blogs;
}

function Blogs() {
  const blogs = useLoaderData();

  // console.log(blogs);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl px-5 py-5 md:px-0 lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Naslovi
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Duh pokreće tvar</p>
      </div>

      {/* with grid */}
      <div className="mb-5 grid grid-cols-1 gap-5 rounded bg-slate-50 p-5 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <article
            className="rounded bg-white p-5 shadow-sm hover:bg-slate-100"
            key={blog.id}
          >
            <Link to={`/blogovi/${blog.id}`}>
              <div className="mb-5 rounded">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={blog.created_at} className="text-gray-500">
                    {formatDate(blog.created_at)}
                  </time>
                  <p className="relative z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-600">
                    {blog.category}
                  </p>
                </div>

                <div className="py-5">
                  <h2 className="mb-5 text-pretty py-2 text-lg font-semibold leading-6 text-gray-900">
                    {blog.title}
                  </h2>
                  <p className="line-clamp-3 text-pretty text-sm leading-6 text-gray-600">
                    {blog.title_body}
                  </p>
                </div>

                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={blog.avatar}
                    alt={blog.title}
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0"></span>
                      {blog.author}
                    </p>
                    <p className="text-gray-600">Autor / saradnik</p>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* with flex */}
      {/* <div className="flex flex-wrap gap-5 bg-slate-50 rounded p-5 mb-5">
        {blogs.map((blog) => (
          <article
            className="flex-[32%] bg-white rounded shadow-sm p-5"
            key={blog.id}
          >
            <Link to={`/blogovi/${blog.id}`}>
              <div className=" rounded  p-5 mb-5">
                <div className="p-5">
                  <h2 className="text-pretty font-bold text-xl py-2 mb-5">
                    {blog.title}
                  </h2>
                  <p className="line-clamp-3 text-sm leading-6 text-gray-600 text-pretty ">
                    {blog.text_body}
                  </p>
                  <p className="text-sm leading-6 text-pretty py-2">
                    Autor:{" "}
                    <span className=" font-bold italic">{blog.author}</span>
                  </p>
                  <time className="text-xs leading-6 text-gray-600">
                    {formatDate(blog.created_at)}
                  </time>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div> */}

      {/* test */}
      {/* <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Marketing
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Michael Foster
                    </a>
                  </p>
                  <p className="text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Blogs;
