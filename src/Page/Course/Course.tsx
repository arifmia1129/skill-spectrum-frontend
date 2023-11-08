/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Loading from "../../components/Shared/Loading";
import { useGetCourseQuery } from "../../redux/features/course/courseApiSlice";
import { useDebounced } from "../../utils/hooks";
import { Link } from "react-router-dom";

export default function Course() {
  const fetchQuery: any = {};

  const [size, setSize] = useState<string>("5");
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState("");

  fetchQuery["limit"] = size;
  fetchQuery["page"] = page;
  fetchQuery["searchTerm"] = searchTerm;

  const debouncedSearchTerm = useDebounced(searchTerm, 600);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchQuery["searchTerm"] = debouncedSearchTerm;
    }
  }, [debouncedSearchTerm, fetchQuery]);

  const { data, isLoading } = useGetCourseQuery(fetchQuery);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="flex justify-end my-5">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search..."
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {data?.data?.map((course: any) => (
          <div
            className="border-primary border-2 rounded m-2 p-2 flex items-center"
            key={course?._id}
          >
            <img
              className="w-60 h-44"
              src={course?.thumbnail}
              alt="thumbnail"
            />
            <div className="ml-0 md:ml-5">
              <h1 className="text-xl font-bold text-primary">{course?.name}</h1>
              <p>
                {" "}
                <span className="text-gray-400">by</span> {course?.instructor}
              </p>
              <div className="mb-2 flex mt-5">
                <button className="btn btn-primary btn-sm text-white mx-2">
                  Enroll
                </button>
                <Link
                  to={`/course-details/${course._id}`}
                  className="btn btn-outline btn-sm text-primary mx-2 border-2"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mb-5 mt-10">
        <select
          defaultValue={size}
          onChange={(e) => setSize(e.target.value)}
          className="select select-bordered  select-xs"
        >
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="10">20</option>
        </select>
      </div>
      <div className="join grid grid-cols-2 mb-10">
        <button
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
          className="join-item btn btn-outline"
        >
          Previous page
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="join-item btn btn-outline"
        >
          Next
        </button>
      </div>
    </div>
  );
}
