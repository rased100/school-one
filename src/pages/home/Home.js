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
import ContactUs from "../ContactUs/ContactUs";
import CarouselTwnd from "../carousel/CarouselTwnd";
import NoticeBoard from "../NoticeBoard/NoticeBoard";
import Results from "../results/Results";
import ResultsTwo from "../results/ResultsTwo";
import Routine from "../Routine/Routine";
import FileUpload from "../pdfUploadPage/FileUpload";
import ResultUpload from "../pdfUploadPage/ResultUpload";
import PdfList from "../pdfList/PdfList";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col">
      {/* <CarouselTwnd /> */}
      {/* <PdfList /> */}
      <FileUpload />
      <CarouselComponent />
      {/* <Headers /> */}
      {/* <HeadTeacher /> */}
      <HeadTeacherTwnd />
      <NoticeBoard />
      {/* <Teachers /> */}
      {/* <TeachersTwnd /> */}
      <TeachersTailwind />
      <Routine />
      <Results />
      {/* <Gallery /> */}
      <ImageGallery />
      <About />
      <ContactUs />
      {/* <Location /> */}
    </div>
  );
};

export default Home;
