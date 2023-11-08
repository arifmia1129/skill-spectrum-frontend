import { Route, Routes } from "react-router-dom";
import Course from "../Page/Course/Course";
import Navbar from "../components/Shared/Navbar";
import Header from "../components/Shared/Header";
import NotFound from "../Page/NotFound/NotFound";

export default function Index() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Course />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
