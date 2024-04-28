
import { FcRating } from "react-icons/fc";
import { Link, useLoaderData } from "react-router-dom";

const CategoryData = () => {
  const categoryData = useLoaderData();
  console.log(categoryData);
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10">
        {categoryData.map((catData) => (
          <div
            key={catData._id}
            className=" p-2 h-[560px] w-[390px] lg:w-[410px] rounded-md shadow-md bg-[#f0eae904]"
          >
            <img
              src={catData.image}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="">
              <div className="mt-6 mb-2 ">
                <span className="block text-lg font-medium tracking-widest uppercase py-1">
                  {catData.item_name}
                </span>
                <div className="flex justify-between items-center">
                  <h2 className="text- font-semibold tracking-wide">
                    <span>Category :</span> {catData.subcategory_Name}
                  </h2>
                  <h2 className="flex items-center text-xl font-semibold text-[#714e20]">
                    <span>
                     
                    </span>
                    <span>{catData.price}</span>
                  </h2>
                </div>
              </div>
              <p className=" text-gray-600 pb-2">{catData.short_description}</p>
              <div className="flex justify-between items-center my-2">
                <h2 className="flex items-center space-x-2 p">
                  <span>
                    <FcRating className="text-xl " />
                  </span>
                  <span>{catData.rating}</span>
                </h2>
              </div>
              <div className="flex item-center justify-center ">
                <Link to={`/categories/${catData.item_name}`}>
                  <button className="bg-[#00BFA5] text-white px-4 py-2 rounded-lg font-semibold  ">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryData;
