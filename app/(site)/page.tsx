import Ask from "./sections/Ask";
import Finder from "./sections/Finder";
import Hero from "./sections/Hero";
import Recommend from "./sections/Recommend";
import Services from "./sections/Services";

const Page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Finder />
      <Recommend />
      <Ask />
    </div>
  );
};

export default Page;
