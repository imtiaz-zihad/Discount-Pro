
import { useLoaderData } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { IoIosStar } from "react-icons/io";


const BrandDetails = () => {
  const brand = useLoaderData(); 

  const handleCopy = (code) => {
    toast.success(`Copied "${code}" to clipboard!`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="p-6">
     
      <ToastContainer />

      {/* Brand Info Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="w-32 h-32 object-contain mb-4"
        />
        <h1 className="text-3xl font-bold">{brand.brand_name}</h1>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500"><IoIosStar /></span>
          <span className="text-lg">{brand.rating} </span>
        </div>
      </div>

      
      <h2 className="text-2xl font-semibold mb-4 text-green-500">Available Coupons</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {brand.coupons.map((coupon, index) => (
          <div
            key={index}
            className="card p-4 border border-gray-300 rounded shadow-md"
          >
            <h3 className="text-lg font-bold">{coupon.coupon_code}</h3>
            <p className="text-sm text-gray-600">{coupon.description}</p>
            <p className="text-sm text-gray-500">Expiry: {coupon.expiry_date}</p>
            <p className="text-sm text-gray-500">Condition: {coupon.condition}</p>
            <p className="text-sm text-gray-500">
              Type: {coupon.coupon_type}
            </p>
            <div className="flex justify-between items-center mt-4">
              {/* Copy Button */}
              <CopyToClipboard
                text={coupon.coupon_code}
                onCopy={() => handleCopy(coupon.coupon_code)}
              >
                <button className="btn btn-sm btn-outline">
                  Copy Code
                </button>
              </CopyToClipboard>

              {/* Use Now Button */}
              <button
                onClick={() => window.open(brand.shop_Link)}
                className="btn btn-sm btn-primary"
              >
                Use Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
