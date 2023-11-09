import { useAppSelector } from "../../redux/hook";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function StudentIdModal() {
  const { id } = useAppSelector((state) => state.student);

  return (
    <dialog id="student_id_modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-32 w-32 text-primary"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-center text-2xl font-bold text-primary">
          Congratulation!
        </h1>
        <h3 className="font-bold text-xl text-center my-5">Your ID: {id}</h3>
      </div>
    </dialog>
  );
}
