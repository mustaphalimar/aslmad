import BestSellingCourses from "@/components/home-sections/best-selling-courses";
import FeatureCourses from "@/components/home-sections/feature-courses";
import TopCategories from "@/components/home-sections/top-categories";

export default function Home() {
  return (
    <div>
      <TopCategories />
      <BestSellingCourses />
      <FeatureCourses />
    </div>
  );
}
