import { ArrowPathIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Flexibility",
    description:
      "As a private school, we have the flexibility to create a unique and enriching learning environment tailored to the specific needs of our students. This personalized approach has consistently resulted in impressive academic achievements in public examinations, affirming the effectiveness of our teaching methods.",
    icon: ArrowPathIcon,
  },
  {
    name: "Students backgrounds",
    description:
      "Our school welcomes students from diverse backgrounds, fostering a secure and nurturing learning atmosphere. At Kishalaya Biddaniketan, we place a strong emphasis on instilling not only academic knowledge but also essential values and life skills that prepare our students for success in their academic journey and as responsible individuals.",
    icon: ArrowPathIcon,
  },
  {
    name: "Strong foundation",
    description:
      "Students who complete their education at Kishalaya Biddaniketan leave with a strong foundation, well-prepared to face the challenges of higher education and the world beyond. We take pride in nurturing young minds and guiding them through these crucial years of growth and development.",
    icon: ArrowPathIcon,
  },
  {
    name: "Dedicated teachers",
    description:
      "Our dedicated teachers of educators comprises experienced and passionate professionals who are committed to fostering a love for learning in every student. They employ modern teaching methodologies and state-of-the-art facilities to create an engaging and interactive learning environment.",
    icon: ArrowPathIcon,
  },
];

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kishalaya Biddaniketan is a prestigious educational institution in
            Bangladesh. We value each child individually, and that's why we
            maintain an inclusive educational environment at every step of our
            fantastic setup. It is now a reality that our results in public
            examinations consistently excel. This is made possible by our
            extensive and effective efforts to cater to the unique learning
            needs of every student.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
