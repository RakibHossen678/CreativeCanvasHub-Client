import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import CraftItem from "../Components/CraftItem";

const MyCraft = () => {
  const { user } = useContext(AuthContext);
  const [loadedData, setLoadedData] = useState([]);
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/myCart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoadedData(data);
      });
  }, [user]);
  return (
    <div>
      <div className="w-full mx-auto flex mt-6 mb-16">
        <div className="dropdown  mx-auto">
          <div tabIndex={0} role="button" className="px-6 rounded-lg font-medium py-3 bg-[#E3B577] m-1">
            Customization
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>OK</a>
            </li>
            <li>
              <a>NO</a>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-4xl font-medium text-center">My Art & Craft</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-10">
        {loadedData.slice(0, 6).map((craft) => (
          <CraftItem key={craft._id} craft={craft}></CraftItem>
        ))}
      </div>
    </div>
  );
};

export default MyCraft;
