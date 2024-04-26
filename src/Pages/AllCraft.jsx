import { useLoaderData } from "react-router-dom";
import CraftItem from "../Components/CraftItem";

const AllCraft = () => {
  const loadedData = useLoaderData();
  return (
    <div>
      <div className="text-center w-full flex justify-center items-center flex-col">
        <h1 className="text-4xl text-[#331A15] font-semibold py-2">
          Portrait Gallery
        </h1>
        <p className="max-w-2xl pt-5 text-gray-700 text-center ">
          Explore a captivating array of portraits, each capturing the essence
          and unique features of individuals. From traditional to contemporary
          styles, witness the beauty of human expression through various
          mediums.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-10">
        {loadedData.map((craft) => (
          <CraftItem key={craft._id} craft={craft}></CraftItem>
        ))}
      </div>
    </div>
  );
};

export default AllCraft;
