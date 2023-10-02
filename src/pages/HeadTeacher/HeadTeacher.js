import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import hTeacher from "../../assets/headTeacher.jpg";

const features = [
  {
    name: "Push to deploy.",
    description:
      "In the name of Allah, the Most Gracious, the Most Merciful, \"Kishalaya Biddaniketan,\" this educational institution, was established in 1994. It began with 35 students and has since grown to accommodate approximately 1,200 students. We are dedicated to providing quality education, religious instruction, and discipline to nurture a progressive generation. We extend a warm welcome to everyone through our institution's website. The members of our institution are diligently working to create a modern, technology-rich, and smart digital Bangladesh. Our goal is to transform our students into skilled individuals who will contribute to the nation's development through modern education. The managing committee of this institution, along with the parents and teachers, is committed to maintaining this vision. We encourage students to participate in extracurricular activities alongside their studies to ensure their holistic development. In addition to academic excellence, we focus on shaping each student into a responsible and disciplined citizen. We strive to instill a love for learning in each student and nurture them into individuals who contribute positively to society. We are working relentlessly to keep this mission alive, and we value the efforts of the parents, teachers, and students. Together, we will continue to uphold these principles, and we hope to receive your prayers and support. Sincerely, Md. Khademul Islam Principal Kishalaya Biddaniketan",

    icon: CloudArrowUpIcon,
  },
];

export default function HeadTeacher() {
  return (
    <div className="overflow-hidden bg-gray-200 py-24 sm:py-32">
      <div className="mx-auto  px-6 ">
        <div className="mx-auto grid grid-cols-1    lg:grid-cols-2">
          <div className="lg:col-span-2">
            <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl pb-32">
              The Principal's Message
            </p>
            <div className="lg:flex lg:justify-around  ">
              <div className="lg:max-w-lg flex justify-center items-center ">
                <dl className="mt-5 max-w-xl  text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative">
                    <dd className="inline">
                      In the name of Allah, the Most Gracious, the Most
                      Merciful, <br /> "Kishalaya Biddaniketan," this
                      educational institution, was established in 1994. It began
                      with 35 students and has since grown to accommodate
                      approximately 1,200 students. We are dedicated to
                      providing quality education, religious instruction, and
                      discipline to nurture a progressive generation. We extend
                      a warm welcome to everyone through our institution's
                      website. The members of our institution are diligently
                      working to create a modern, technology-rich, and smart
                      digital Bangladesh. Our goal is to transform our students
                      into skilled individuals who will contribute to the
                      nation's development through modern education. The
                      managing committee of this institution, along with the
                      parents and teachers, is committed to maintaining this
                      vision. We encourage students to participate in
                      extracurricular activities alongside their studies to
                      ensure their holistic development. In addition to academic
                      excellence, we focus on shaping each student into a
                      responsible and disciplined citizen. We strive to instill
                      a love for learning in each student and nurture them into
                      individuals who contribute positively to society. We are
                      working relentlessly to keep this mission alive, and we
                      value the efforts of the parents, teachers, and students.
                      Together, we will continue to uphold these principles, and
                      we hope to receive your prayers and support. <br />
                      Sincerely, <br />
                      Md. Khademul Islam <br /> Principal Kishalaya Biddaniketan
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="flex justify-center items-center ">
                <img
                  src={hTeacher}
                  alt="Product screenshot"
                  // className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0"
                  className="rounded-xl shadow-xl sm:w-[30rem] "
                  // width={2432}
                  // height={1442}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
