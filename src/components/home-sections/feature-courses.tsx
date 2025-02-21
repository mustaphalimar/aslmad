import { Clock, Signal, Star, UserRound } from "lucide-react";
import Image from "next/image";
import Container from "../layout/container";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

const featureCourses = [
  {
    title: "The Complete Python Mega Course",
    category: "Python",
    rating: 4.5,
    students: 100,
    price: 20,
    image: "/images/courses/python.png",
    length: "12h 30m",
    level: "Beginner",
    instructor: "John Doe",
    bgColor: "bg-yellow-600",
  },
  {
    title: "The Complete React Course",
    category: "React",
    rating: 4.7,
    students: 150,
    price: 30,
    image: "/images/courses/react.jpeg",
    length: "20h 30m",
    level: "Advanced",
    instructor: "John Doe",
    bgColor: "bg-green-600",
  },
  {
    title: "Digital Marketing Masterclass",
    category: "Digital Marketing",
    rating: 4.6,
    students: 200,
    price: 40,
    image: "/images/courses/digital-marketing-2.png",
    length: "30h 30m",
    level: "Intermediate",
    instructor: "John Doe",
    bgColor: "bg-blue-600",
  },
  {
    title: "Figma UI/UX Design Masterclass",
    category: "UI/UX Design",
    rating: 4.8,
    students: 100,
    price: 25,
    image: "/images/courses/ui-ux.jpg",
    length: "15h 30m",
    level: "Advanced",
    instructor: "John Doe",
    bgColor: "bg-purple-600",
  },
];

const FeatureCourses = () => {
  return (
    <section>
      <div className="h-[300px] bg-slate-50" />
      <Container>
        <main className="w-full bg-white -mt-60 border p-20 space-y-10">
          <h1 className="text-4xl font-semibold">Our featured Courses</h1>

          <div className="grid grid-cols-2 grid-rows-2  gap-x-4 gap-y-4">
            {featureCourses.map((course) => {
              return (
                <div
                  key={course.title}
                  className="flex overflow-hidden rounded border transition-shadow hover:shadow"
                >
                  <div className=" w-[150px]  overflow-hidden">
                    <Image
                      src={course.image}
                      className="w-full h-full object-cover"
                      width={200}
                      height={200}
                      alt={course.title}
                    />
                  </div>
                  <div className=" flex flex-1 flex-col gap-2 p-4">
                    <div className="w-full flex justify-between">
                      <p
                        className={`${course.bgColor} uppercase text-xs p-1 bg-opacity-15 rounded w-fit h-fit`}
                      >
                        {course.category}
                      </p>
                      <p>${course.price}</p>
                    </div>
                    <div>
                      <p>{course.title}</p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-1">
                        <Avatar className="w-7 h-7">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <p className="text-muted-foreground text-sm">
                          {course.instructor}
                        </p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <Star strokeWidth={0} size={18} fill="#FD8E1F" />
                        <p className="text-sm">{course.rating}</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <UserRound color="#564FFD" size={18} strokeWidth={1} />
                        <p>{course.students}</p>
                        <p>Students</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Signal
                          color={
                            course.level === "Beginner"
                              ? "green"
                              : course.level === "Intermediate"
                                ? "blue"
                                : course.level === "Advanced"
                                  ? "red"
                                  : "black"
                          }
                          size={18}
                        />
                        {course.level}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock color="green" size={18} strokeWidth={1} />
                        {course.length}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </Container>
    </section>
  );
};
export default FeatureCourses;
