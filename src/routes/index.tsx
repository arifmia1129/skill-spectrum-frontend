import { Route, Routes } from "react-router-dom";
import Course from "../Page/Course/Course";
import Navbar from "../components/Shared/Navbar";
import Header from "../components/Shared/Header";

export default function Index() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Course />} />
      </Routes>
    </>
  );
}
