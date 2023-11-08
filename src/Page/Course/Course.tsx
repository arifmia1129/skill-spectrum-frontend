/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Loading from "../../components/Shared/Loading";
import { useGetCourseQuery } from "../../redux/features/course/courseApiSlice";

export default function Course() {
  const fetchQuery: any = {};

  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState("");

  fetchQuery["limit"] = size;
  fetchQuery["page"] = page;
  fetchQuery["searchTerm"] = searchTerm;

  const { data, isLoading } = useGetCourseQuery(fetchQuery);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto p-2">
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
                <button className="btn btn-outline btn-sm text-primary mx-2 border-2">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
