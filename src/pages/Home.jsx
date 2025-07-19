import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import NewPlantsSection from "../components/NewPlantsSection";
import TopPlantCareMistakes from "../components/TopPlantCareMistakes";
import BegginerFriendlyPlants from "../components/BegginerFriendlyPlants";

const Home = () => {
  let plants = useLoaderData();

  // Defensive check: ensure plants is always an array
  if (!Array.isArray(plants)) {
    plants = [];
  }

  return (
    <div>
      <Banner />
      <NewPlantsSection plants={plants} />
      <TopPlantCareMistakes />
      <BegginerFriendlyPlants />
    </div>
  );
};

export default Home;
