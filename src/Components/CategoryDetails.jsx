import { BsCurrencyDollar } from "react-icons/bs";
import { FcRating } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";


const CategoryDetails = () => {
    const data=useLoaderData()
    console.log(data)
    const {image,item_name,price,
        processing_time,short_description,
        subcategory_Name,
        rating
        }=data
    return (
        <div className="lg:w-11/12 mx-auto flex lg:flex-row md:flex-row flex-col px-2 my-20 gap-6 items-center">
      <div className="flex-1">
        <img className="rounded-lg w-full " src={image} alt="" />
      </div>
      <div className="flex-1 ">
        <h1 className="text-3xl py-2 font-semibold ">{item_name}</h1>
        <p className="max-w-md py-1">{short_description}</p>
        <div className="flex justify-between items-center text-lg ">
          <h2 className=" font-semibold tracking-wide">
            <span>Category :</span> {subcategory_Name}
          </h2>
          <h2 className="flex items-center text-xl font-semibold text-[#714e20]">
            <span>
              <BsCurrencyDollar className="" />
            </span>
            <span>{price}</span>
          </h2>
        </div>
        <div className=" justify-between items-center my-2 space-y-2">
          <h2>
            <span className="font-semibold">Preparing time : </span>
            <span>{processing_time}</span>
          </h2>
          <h2 className="flex items-center  ">
            <div className="flex items-center space-x-2">
              <span className="font-medium">Ratings :</span>
              <span>
                <FcRating className="text-xl " />
              </span>
            </div>
            <span className="ml-1">{rating}</span>
          </h2>
        </div>
        <div className="space-y-1 my-2">
          <h2>
            <span className="font-semibold">Stock Status : </span>
            <span>In Stock</span>
          </h2>
          <h2 className="flex items-center space-x-2 p">
            <span className="font-semibold">Customization : </span>
            <span>OK</span>
          </h2>
        </div>
        <div className="my-6">
          <button className="bg-[#00BFA5] text-white px-6 py-3 font-semibold rounded-lg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
    );
};

export default CategoryDetails;