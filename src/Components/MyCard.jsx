import { BsCurrencyDollar } from "react-icons/bs";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const MyCard = ({ craft }) => {
  const {
    _id,
    item_name,
    category_name,
    rating,
    price,
    photo,
    description,
    customization,
    stock_status,
  } = craft;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/crafts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="indicator">
      <span className="indicator-item badge absolute right-6 lg:right-0 bg-[#00BFA5] text-white">
        {customization}
      </span>
      <div className=" p-2 h-[560px] w-[390px] lg:w-[410px] rounded-md shadow-md bg-[#f0eae904]">
        <img
          src={photo}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2 ">
          <span className="block text-lg font-medium tracking-widest uppercase py-1">
            {item_name}
          </span>
          <div className="flex justify-between items-center">
            <h2 className="text- font-semibold tracking-wide">
              <span>Category :</span> {category_name}
            </h2>
            <h2 className="flex items-center text-xl font-semibold text-[#714e20]">
              <span>
                <BsCurrencyDollar className="" />
              </span>
              <span>{price}</span>
            </h2>
          </div>
        </div>
        <p className=" text-gray-600 pb-2">{description}</p>
        <div className="flex justify-between items-center my-2">
          <h2>
            <span className="font-semibold">Stock status : </span>
            <span>{stock_status}</span>
          </h2>
          <h2 className="flex items-center space-x-2 p">
            <span>
              <FcRating className="text-xl " />
            </span>
            <span>{rating}</span>
          </h2>
        </div>
        <div className="flex  justify-around items-center mt-6 mb-3">
          <Link to={`/${_id}`}>
            <button className="bg-[#00BFA5] text-white px-4 py-2 rounded-lg font-semibold  ">
              View Details
            </button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="bg-[#00BFA5] text-white px-4 py-2 rounded-lg font-semibold  ">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-[#00BFA5] text-white px-4 py-2 rounded-lg font-semibold  "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

MyCard.propTypes = {
  craft: PropTypes.object,
};

export default MyCard;
