import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// Application Routes
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import NotFound from "./components/NotFound"
import Featured from "./components/Featured";

import { HTMLCourses, CSSCourses, JSCourses } from './data/courses';
import CourseContainer from "./components/courses/CourseContainer";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="/teachers">
          <Route index path="/teachers" element={<Teachers />}></Route>
          <Route path="/teachers/:topic/:name" element={<Featured />}></Route>
        </Route>
        <Route path="courses" element={<Courses />}>
          <Route index element={<Navigate replace to="html" />}></Route>
          <Route path="html" element={<CourseContainer data={HTMLCourses}/>}></Route>
          <Route path="css" element={<CourseContainer data={CSSCourses}/>}></Route>
          <Route path="javascript" element={<CourseContainer data={JSCourses}/>}></Route>
        </Route>
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
