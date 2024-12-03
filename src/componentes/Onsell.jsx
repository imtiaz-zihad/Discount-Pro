/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Onsell = () => {
  const brands = useLoaderData();
  

  AOS.init({
    duration: 2000, 
    easing: 'ease-in-out-sine',
    once: true, 
  });

  const brandsOnSale = brands.filter((brand) => brand.isSaleOn);
  

  return (
    <div className="mt-10 px-5 lg:px-0" data-aos="zoom-in">
      <h2 className="text-2xl text-green-500 font-bold">Brand On Sell</h2>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
     {brandsOnSale.map((brand, idx) => (
        <div key={idx} className="card bg-base-100 lg:w-96 shadow-xl">
          <figure>
            <img className="h-28 w-28 mt-6"
              src={brand.brand_logo}
              alt={brand.brand_name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            {brand.brand_name}
              <div className="badge badge-secondary">{brand.coupons.length} coupon </div>
            </h2>
           
            <div className="card-actions justify-end">
              <div className="badge badge-outline border-blue-400 border-2">{brand.category}</div>
             
            </div>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default Onsell;
