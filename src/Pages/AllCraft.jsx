import { Link, useLoaderData } from "react-router-dom";

const AllCraft = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return (
    <div>
      <div className="text-center w-full flex justify-center items-center flex-col">
        <h1 className="text-4xl  font-semibold py-2">
          All drawing and painting
        </h1>
      </div>

      <div className="w-11/12 mx-auto my-10">
        <div className="overflow-x-auto w-full">
          <table className="table table-md">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Category Name</th>
                <th>Price</th>
                <th>Preparing time</th>
                <th>customization</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loadedData.map((craft, idx) => (
                <tr key={craft._id}>
                  <th>{idx + 1}</th>
                  <td>{craft.item_name}</td>
                  <td>{craft.category_name}</td>
                  <td>${craft.price}</td>
                  <td>{craft.time}</td>
                  <td>{craft.customization}</td>
                  <td>
                    <Link to={`/${craft._id}`}>
                      <button className="bg-[#00BFA5] text-white px-3 py-2 rounded-lg font-semibold  ">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* {loadedData.map((craft) => (
          <CraftItem key={craft._id} craft={craft}></CraftItem>
        ))} */}
      </div>
    </div>
  );
};

export default AllCraft;
