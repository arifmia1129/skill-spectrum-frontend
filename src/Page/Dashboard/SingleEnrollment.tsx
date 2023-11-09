import { useGetCourseByIdQuery } from "../../redux/features/course/courseApiSlice";
import { useUpdateEnrollmentMutation } from "../../redux/features/enroll/enrollApiSlice";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function SingleEnrollment({ enrollment }: any) {
  const { data } = useGetCourseByIdQuery(enrollment.courseId);
  console.log(data);

  const course = data?.data;

  const [updateEnrollment] = useUpdateEnrollmentMutation();

  return (
    <div
      className="border-primary border-2 rounded m-2 p-2 md:flex items-center"
      key={course?._id}
    >
      <div className="flex justify-center">
        <img className="w-60 h-44" src={course?.thumbnail} alt="thumbnail" />
      </div>
      <div className="ml-0 md:ml-5">
        <h1 className="text-xl font-bold text-primary">{course?.name}</h1>
        <p>
          {" "}
          <span className="text-gray-400">by</span> {course?.instructor}
        </p>
        <div className="flex items-center">
          <progress
            className="progress w-56 progress-primary"
            value={Number(enrollment?.progress)}
            max="100"
          />
          <p className="mx-5">{Number(enrollment?.progress)}%</p>
        </div>
        {enrollment?.status === "enrolled" ? (
          <button
            onClick={() => {
              updateEnrollment({
                id: enrollment._id,
                data: {
                  status: "completed",
                },
              });
            }}
            className="mt-5 btn btn-outline  btn-primary"
          >
            Make as complete
          </button>
        ) : null}
      </div>
    </div>
  );
}
