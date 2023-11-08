/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useGetCourseByIdQuery } from "../../redux/features/course/courseApiSlice";

export default function CourseDetails() {
  const { id } = useParams();
  const { data } = useGetCourseByIdQuery(id);

  // Format prerequisites to a string or any other format you need
  const prerequisites = data?.data?.prerequisites.join(", ");

  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="border-primary border-2 rounded m-2 p-2">
        <img
          className="w-full h-96 object-cover"
          src={data?.data?.thumbnail}
          alt="Course thumbnail"
        />
        <div className="my-5">
          <h1 className="text-2xl font-bold text-primary">
            {data?.data?.name}
          </h1>
          <p className="text-gray-400">by {data?.data?.instructor}</p>
          <p className="my-2">{data?.data?.description}</p>
          <p className="my-1">
            <strong>Duration:</strong> {data?.data?.duration}
          </p>
          <p className="my-1">
            <strong>Schedule:</strong> {data?.data?.schedule}
          </p>
          <p className="my-1">
            <strong>Location:</strong> {data?.data?.location}
          </p>
          <p className="my-1">
            <strong>Status:</strong> {data?.data?.enrollmentStatus}
          </p>
          <p className="my-1">
            <strong>Prerequisites:</strong> {prerequisites}
          </p>
          <div className="my-4">
            <h2 className="text-xl font-bold">Syllabus</h2>
            <ul className="list-disc list-inside">
              {data?.data?.syllabus.map((syllabusItem: any) => (
                <li key={syllabusItem._id}>
                  <strong>Week {syllabusItem.week}:</strong>{" "}
                  {syllabusItem.topic} - {syllabusItem.content}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-primary  text-white mx-2">Enroll</button>
        </div>
      </div>
    </div>
  );
}
