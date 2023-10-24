import React from "react";
import hTeacher from "../../assets/headTeacher.jpg";

const HeadTeacherPage = () => {
  return (
    <div className="hero min-h-screen bg-gray-900">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={hTeacher} className="max-w-xs  rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-white">
            Head Teacher's Message
          </h1>
          <p className="py-6 text-gray-400 md:pr-5">
            In the name of Allah, the Most Gracious, the Most Merciful, <br />{" "}
            "Kishalaya Biddaniketan," this educational institution, was
            established in 1994. It began with 35 students and has since grown
            to accommodate approximately 1,200 students. We are dedicated to
            providing quality education, religious instruction, and discipline
            to nurture a progressive generation. We extend a warm welcome to
            everyone through our institution's website. The members of our
            institution are diligently working to create a modern,
            technology-rich, and smart digital Bangladesh. Our goal is to
            transform our students into skilled individuals who will contribute
            to the nation's development through modern education. The managing
            committee of this institution, along with the parents and teachers,
            is committed to maintaining this vision. We encourage students to
            participate in extracurricular activities alongside their studies to
            ensure their holistic development. In addition to academic
            excellence, we focus on shaping each student into a responsible and
            disciplined citizen. We strive to instill a love for learning in
            each student and nurture them into individuals who contribute
            positively to society. We are working relentlessly to keep this
            mission alive, and we value the efforts of the parents, teachers,
            and students. Together, we will continue to uphold these principles,
            and we hope to receive your prayers and support. <br />
            Sincerely, <br />
            Md. Khademul Islam <br /> Principal Kishalaya Biddaniketan
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default HeadTeacherPage;
