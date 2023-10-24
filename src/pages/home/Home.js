import React, { useEffect } from "react";
import AOS from "aos";
import CarouselComponent from "../components/Carousel";
import About from "../About/About";
import HeadTeacherTwnd from "../HeadTeacher/HeadTeacherTwnd";
import TeachersTailwind from "../components/Teachers/TeachersTailwind";
import ImageGallery from "../components/PhotoGallery/ImageGallery";
import ContactUs from "../ContactUs/ContactUs";
import NoticeBoard from "../NoticeBoard/NoticeBoard";
import RoutineAndResults from "../Routine/RoutineAndResults";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col">
      <CarouselComponent />
      <HeadTeacherTwnd />
      <NoticeBoard />
      <TeachersTailwind />
      <RoutineAndResults />
      <ImageGallery />
      <About />
      <ContactUs />
    </div>
  );
};

export default Home;
