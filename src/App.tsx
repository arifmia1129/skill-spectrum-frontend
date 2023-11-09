import { Toaster } from "react-hot-toast";
import Index from "./routes";
import StudentIdModal from "./components/Modal/StudentIdModal";

function App() {
  return (
    <>
      <Index />
      <Toaster />
      <StudentIdModal />
    </>
  );
}

export default App;
