import { Code } from "lucide-react";
import Container from "../layout/container";

const topCategories = [
  {
    title: "Web Development",
    courses: 30,
    bgColor: "bg-blue-600",
  },
  {
    title: "Mobile Development",
    courses: 20,
    bgColor: "bg-green-600",
  },
  {
    title: "Data Science",
    courses: 25,
    bgColor: "bg-yellow-600",
  },
  {
    title: "Machine Learning",
    courses: 15,
    bgColor: "bg-red-600",
  },
  {
    title: "Artificial Intelligence",
    courses: 10,
    bgColor: "bg-cyan-600",
  },
  {
    title: "Cyber Security",
    courses: 20,
    bgColor: "bg-indigo-600",
  },
  {
    title: "Game Development",
    courses: 10,
    bgColor: "bg-pink-600",
  },
  {
    title: "UI/UX Design",
    courses: 15,
    bgColor: "bg-purple-600",
  },
  {
    title: "Digital Marketing",
    courses: 20,
    bgColor: "bg-orange-600",
  },
];

const TopCategories = () => {
  return (
    <section className="my-14">
      <Container className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">Browse Top Categories</h1>
        <div className="mt-6 grid gap-4 grid-cols-3 grid-rows-3">
          {topCategories.map((category) => {
            return (
              <div
                key={category.title}
                className={`
                    ${category.bgColor} cursor-pointer rounded  w-72 bg-opacity-15 p-4 flex items-center gap-3 hover:shadow-md transition-shadow duration-200 ease-in-out
                  `}
              >
                <div className="bg-white p-2 w-14 h-14 flex flex-col items-center justify-center">
                  <Code />
                </div>
                <div>
                  <p className="font-semibold">{category.title}</p>
                  <p className="text-muted-foreground">
                    {category.courses} Courses
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default TopCategories;
