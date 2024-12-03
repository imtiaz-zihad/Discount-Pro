import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import { IoIosStar } from "react-icons/io";

const Brands = () => {
  const brands = useLoaderData();


  const [search, setSearch] = useState("");
  // search section
  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-[100%] mx-auto max-w-[1400px]">
      <h2 className="text-3xl font-bold text-center text-green-500 my-8 ">
        All Brands{" "}
      </h2>

      <div className="mb-10 px-5">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search your brand..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch />
        </label>
      </div>

      <div className="flex flex-col gap-6 px-5">
        {filteredBrands.map((brand) => (
          <div
            key={brand._id}
            className="card bg-base-100 shadow-md p-5 flex  lg:flex-row items-center gap-4"
          >
            <img src={brand.brand_logo} className="w-20 h-20 rounded" />

            <div className="flex-grow">
              <h2 className="text-xl font-bold text-gray-800">
                {brand.brand_name}
              </h2>
              <p className="text-gray-600">{brand.description}</p>

              <div className="flex items-center mt-2">
                <IoIosStar className="text-orange-400 font-bold w-10 h-5" />
                <span className="text-gray-700">{brand.rating}</span>
              </div>
            </div>

            {brand.isSaleOn && (
              <p className="text-red-500 mt-2 animate-bounce">Sale is on!</p>
            )}

            <NavLink to={`/brands/coupon/${brand._id}`}>
            <button className="badge btn bg-secondary text-white badge-outline">
              View Coupon
            </button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
