import React, { useEffect } from "react";
import AOS from "aos";
import CarouselComponent from "../components/Carousel";
import Teachers from "../components/Teachers/Teachers";
import Location from "../components/Location";
import Gallery from "../components/PhotoGallery/Gallery";
import Headers from "../components/Headers";
import About from "../About/About";
import HeadTeacher from "../HeadTeacher/HeadTeacher";
import HeadTeacherTwnd from "../HeadTeacher/HeadTeacherTwnd";
import TeachersTwnd from "../components/Teachers/TeachersTwnd";
import TeachersTailwind from "../components/Teachers/TeachersTailwind";
import ImagesTwnd from "../components/PhotoGallery/ImageGallery";
import ImageGallery from "../components/PhotoGallery/ImageGallery";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <CarouselComponent />
      <About />
      {/* <Headers /> */}
      {/* <HeadTeacher /> */}
      <HeadTeacherTwnd />
      {/* <Teachers /> */}
      {/* <TeachersTwnd /> */}
      <TeachersTailwind />
      {/* <Gallery /> */}
      <ImageGallery />
      <Location />
    </div>
  );
};

export default Home;
