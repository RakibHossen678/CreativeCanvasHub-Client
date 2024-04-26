import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddCraft = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const updateCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const user_name = user.displayName;
    const user_email = user.email;
    const photo = form.photo.value;
    const item_name = form.name.value;
    const category_name = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const time = form.time.value;
    const customization = form.custom.value;
    const stock_status = form.stock.value;

    const info = {
      user_name,
      user_email,
      photo,
      item_name,
      category_name,
      price,
      rating,
      time,
      customization,
      stock_status,
    };
    console.log(info);

    fetch("http://localhost:5000/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Craft added Successfully!",
            icon: "success",
          });
          form.reset()
        }
      });
  };
  return (
    <div>
      <div className="lg:w-8/12 mx-1  lg:mx-auto py-6 bg-[#F4F3F0]">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-rancho text-4xl font-semibold py-3 text-[#374151] drop-shadow-2xl">
            Add New Painting or Drawing
          </h1>
        </div>
        <section className="px-6 ">
          <form
            onSubmit={updateCraft}
            className=" flex flex-col mx-auto space-y-12 "
          >
            <fieldset className=" gap-6 pt-4  ">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label className="text-sm   font-semibold ">PhotURL</label>
                  <input
                    required
                    id="photo"
                    type="text"
                    name="photo"
                    placeholder="Enter coffee PhotURl"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900  "
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label className="text-sm font-raleway font-semibold">
                    Painting / Drawing Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter coffee quantity"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label className="text-sm font-raleway font-semibold">
                    Subcategory Name
                  </label>
                  <input
                    required
                    id="text"
                    type="text"
                    name="subcategory"
                    placeholder="Enter your subcategory name"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label className="text-sm font-raleway font-semibold">
                    Price
                  </label>
                  <input
                    id="price"
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-raleway font-semibold"
                  >
                    Rating
                  </label>
                  <input
                    id="rating"
                    type="number"
                    name="rating"
                    placeholder="Enter rating"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-raleway font-semibold"
                  >
                    Processing Time
                  </label>
                  <input
                    id="time"
                    type="datetime-local"
                    name="time"
                    placeholder="Enter your coffee details"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
                <div className="flex items-center justify-between col-span-full">
                  <div className="space-y-1 text-sm items-center flex ">
                    <legend className="mr-4 font-medium">Customization:</legend>

                    <input
                      type="radio"
                      name="custom"
                      id="custom"
                      value="OK"
                      required
                    />
                    <label htmlFor="ok" className="ml-1 mr-4">
                      Ok
                    </label>
                    <input
                      type="radio"
                      name="custom"
                      id="custom"
                      value="NO"
                      required
                    />
                    <label htmlFor="female" className="ml-1">
                      No
                    </label>
                  </div>
                  <div className="space-y-1 text-sm items-center flex ">
                    <legend className="mr-4 font-medium">Stock status:</legend>

                    <input
                      type="radio"
                      name="stock"
                      id="Stock"
                      value="In Stock"
                      required
                    />
                    <label htmlFor="instock" className="ml-1 mr-4">
                      In stock
                    </label>
                    <input
                      type="radio"
                      name="stock"
                      id="Stock"
                      value="Made to Order"
                      required
                    />
                    <label htmlFor="Order" className="ml-1">
                      Made to Order
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <input
              type="submit"
              value="Add"
              className="bg-[#D2B48C] py-2 border-2 border-[#331A15] font-rancho text-xl font-semibold text-[#331A15]"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddCraft;
