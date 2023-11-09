import { Toaster } from "react-hot-toast";
import Index from "./routes";
import StudentIdModal from "./components/Modal/StudentIdModal";
import { useAppDispatch } from "./redux/hook";
import { fetchedUserProfile } from "./redux/features/user/userSlice";
import { useEffect } from "react";

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
    </>
  );
}

export default App;
