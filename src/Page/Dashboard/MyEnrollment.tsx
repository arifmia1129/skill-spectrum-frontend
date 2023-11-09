/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetEnrollCourseQuery } from "../../redux/features/enroll/enrollApiSlice";
import SingleEnrollment from "./SingleEnrollment";

export default function MyEnrollment() {
  const { data } = useGetEnrollCourseQuery(undefined) as any;

  const enrollments = data?.data;

  console.log(enrollments);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {enrollments?.map((enrollment: any) => (
        <SingleEnrollment key={enrollment?._id} enrollment={enrollment} />
      ))}
    </div>
  );
}
