import Image from "next/image";
import Container from "../layout/container";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const courses = [
  {
    title: "Full-Stack Web Developer Bootcamp",
    instructor: "John Doe",
    rating: 4.5,
    price: 199,
    students: 1200,
    image: "/images/courses/full-stack-web-development.jpg",
    category: "Web Development",
    bgColor: "bg-blue-600",
  },
  {
    title: "React Native - The Complete Guide",
    instructor: "Jane Doe",
    rating: 4.8,
    price: 149,
    students: 800,
    image: "/images/courses/react-native.png",
    category: "Mobile Development",
    bgColor: "bg-green-600",
  },
  {
    title: "Machine Learning A-Z",
    instructor: "John Doe",
    rating: 4.7,
    price: 249,
    students: 1500,
    image: "/images/courses/machine-learning.jpeg",
    category: "Data Science",
    bgColor: "bg-yellow-600",
  },
  {
    title: "Python for Data Science and Machine Learning",
    instructor: "Jane Doe",
    rating: 4.6,
    price: 199,
    students: 1000,
    image: "/images/courses/python-data-science.jpg",
    category: "Data Science",
    bgColor: "bg-yellow-600",
  },
  {
    title: "The Complete Cyber Security Course",
    instructor: "John Doe",
    rating: 4.9,
    price: 299,
    students: 1800,
    image: "/images/courses/cyber-security.jpeg",
    category: "Cyber Security",
    bgColor: "bg-indigo-600",
  },
  {
    title: "The Complete JavaScript Course",
    instructor: "Jane Doe",
    rating: 4.7,
    price: 199,
    students: 900,
    image: "/images/courses/javascript.jpg",
    category: "Web Development",
    bgColor: "bg-green-600",
  },
  {
    title: "The Complete Digital Marketing Course",
    instructor: "John Doe",
    rating: 4.6,
    price: 199,
    students: 1100,
    image: "/images/courses/digital-marketing.png",
    category: "Digital Marketing",
    bgColor: "bg-orange-600",
  },
  {
    title: "The Complete UI/UX Design Course",
    instructor: "Jane Doe",
    rating: 4.8,
    price: 199,
    students: 950,
    image: "/images/courses/ui-ux-design.png",
    category: "UI/UX Design",
    bgColor: "bg-purple-600",
  },
];

const BestSellingCourses = () => {
  return (
    <section className="bg-slate-50 py-16">
      <Container className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Best Selling Courses</h1>

        <div className="mt-6 grid gap-4 grid-cols-4 grid-rows-3">
          {courses.map((course) => {
            return (
              <div
                key={course.title}
                className=" rounded cursor-pointer max-w-[350px] max-h-fit overflow-hidden shadow duration-200 transition-shadow hover:shadow-md"
              >
                <div className="w-[400px] h-[200px] rounded ">
                  <Image
                    src={course.image}
                    width={400}
                    height={400}
                    alt={course.title}
                    className="object-cover w-full h-full rounded"
                  />
                </div>
                <div className="bg-white p-3 space-y-3 rounded">
                  <div className="flex justify-between">
                    <p
                      className={`${course.bgColor} text-sm bg-opacity-15 w-fit p-1 font-semibold rounded`}
                    >
                      {course.category}
                    </p>
                    <p className="font-semibold text-lg text-primary">
                      ${course.price}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg">{course.title}</p>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-1">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <p className="">{course.instructor}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                      <Star strokeWidth={0} size={18} fill="#FD8E1F" />
                      <p className="">{course.rating}</p>
                    </div>
                    <p className="">
                      {course.students}{" "}
                      <span className="text-muted-foreground">Students</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default BestSellingCourses;
