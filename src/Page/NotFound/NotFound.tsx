import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-[80vh] w-full flex justify-center items-center">
      <div>
        <h1 className="text-center font-semibold text-9xl">404</h1>
        <h1 className="text-center font-semibold text-2xl">Page not found!</h1>
        <div className="flex justify-center my-5 ">
          <button
            onClick={() => navigate("/")}
            className="btn bg-primary text-white px-5 py-2"
          >
            Go To Home
          </button>
        </div>
      </div>
    </div>
  );
}
