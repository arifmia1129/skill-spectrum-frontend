import { Toaster } from "react-hot-toast";
import Index from "./routes";
import StudentIdModal from "./components/Modal/StudentIdModal";
import { useAppDispatch } from "./redux/hook";
import { fetchedUserProfile } from "./redux/features/user/userSlice";
import { useEffect } from "react";
import EnrollmentModal from "./components/Modal/EnrollmentModal";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchedUserProfile());
  }, [dispatch]);
  return (
    <>
      <Index />
      <Toaster />
      <StudentIdModal />
      <EnrollmentModal />
    </>
  );
}

export default App;
