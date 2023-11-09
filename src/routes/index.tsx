import { Route, Routes } from "react-router-dom";
import Course from "../Page/Course/Course";
import Navbar from "../components/Shared/Navbar";
import Header from "../components/Shared/Header";
import NotFound from "../Page/NotFound/NotFound";
import CourseDetails from "../Page/Course/CourseDetails";
import LoginPage from "../Page/Authentication/LoginPage";
import Register from "../components/Authentication/Register";
import Dashboard from "../Page/Dashboard/Dashboard";
import PrivateRoute from "../components/Authentication/PrivateRoute";

export default function Index() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Course />} />
        <Route path="/course-details/:id" element={<CourseDetails />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
