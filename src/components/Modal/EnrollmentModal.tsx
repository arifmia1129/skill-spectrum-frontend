import toast from "react-hot-toast";
import { useEnrollCourseMutation } from "../../redux/features/enroll/enrollApiSlice";
import { useAppSelector } from "../../redux/hook";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function EnrollmentModal() {
  const { id, name, imageUrl } = useAppSelector((state) => state.enroll);

  const { profile } = useAppSelector((state) => state.user);

  const [enrollCourse] = useEnrollCourseMutation();

  const handleEnroll = async () => {
    (document as any)?.getElementById("enroll_modal").close();
    const { data, error } = (await enrollCourse({
      studentId: profile._id,
      courseId: id,
    })) as any;
    if (data) {
      toast.success(data.message);
    } else if (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <dialog id="enroll_modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex justify-center">
          <img className="h-32 w-32" src={imageUrl} alt="" />
        </div>
        <h1 className="text-center text-2xl font-bold text-primary mt-5">
          {name}
        </h1>
        <h3 className="font-bold text-xl text-center my-5">
          Are you confirm to enroll this course?
        </h3>

        <div className="flex justify-center">
          <button
            onClick={handleEnroll}
            className="btn btn-primary  text-white mx-2"
          >
            Confirm
          </button>
        </div>
      </div>
    </dialog>
  );
}
