import { Route, Routes } from "react-router-dom";
import Course from "../Page/Course/Course";
import Navbar from "../components/Shared/Navbar";
import Header from "../components/Shared/Header";
import NotFound from "../Page/NotFound/NotFound";
import CourseDetails from "../Page/Course/CourseDetails";
import LoginPage from "../Page/Authentication/LoginPage";

export default function Index() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Course />} />
        <Route path="/course-details/:id" element={<CourseDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
