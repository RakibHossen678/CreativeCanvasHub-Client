import { BsCurrencyDollar } from "react-icons/bs";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {  Rotate, Slide, Zoom } from "react-awesome-reveal";

const CraftItem = ({ craft }) => {
  const {
    _id,
    item_name,
    category_name,
    time,
    rating,
    price,
    photo,
    description,
    customization,
  } = craft;
  return (
    <div className="indicator">
      <span className="indicator-item badge absolute right-6 lg:right-0 bg-[#00BFA5] text-white">
        {customization}
      </span>
      <div className=" p-2 h-[560px] w-[390px] lg:w-[410px] rounded-md shadow-md bg-[#f0eae904]">
        <Zoom duration="2000">
          <img
            src={photo}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
        </Zoom>
        <div className="mt-6 mb-2 ">
          <Slide duration="2000">
            <span className="block text-lg font-medium tracking-widest uppercase py-1">
              {item_name}
            </span>
          </Slide>
          <Slide duration="2000">
            <div className="flex justify-between items-center">
              <h2 className="text- font-semibold tracking-wide">
                <span>Category :</span> {category_name}
              </h2>
              <h2 className="flex items-center text-xl font-semibold text-[#00BFA5]">
                <span>
                  <BsCurrencyDollar className="" />
                </span>
                <span>{price}</span>
              </h2>
            </div>
          </Slide>
        </div>
        <Slide duration="2000">
          <p className=" text-gray-600 pb-2">{description}</p>
        </Slide>
        <Slide duration="2000">
          <div className="flex justify-between items-center my-2">
            <h2>
              <span className="font-semibold">Preparing time : </span>
              <span>{time}</span>
            </h2>
            <h2 className="flex items-center space-x-2 p">
              <span>
                <FcRating className="text-xl " />
              </span>
              <span>{rating}</span>
            </h2>
          </div>
        </Slide>
        <Rotate duration="2000">
          <div className="flex justify-center items-center mt-6 mb-3">
            <Link to={`/${_id}`}>
              <button className="bg-[#00BFA5] text-white px-4 py-2 rounded-lg font-semibold  ">
                View Details
              </button>
            </Link>
          </div>
        </Rotate>
      </div>
    </div>
  );
};
CraftItem.propTypes = {
  craft: PropTypes.object,
};

export default CraftItem;
