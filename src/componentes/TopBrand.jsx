import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const TopBrand = () => {
  return (
    <div>
      <h1 className="text-2xl text-green-500 mt-10 font-bold px-5 lg:px-0">Top Brands</h1>
      <Marquee gradient='true' direction="right" className="mt-10  flex ">
       <Link   to='/brands'>
       <img className="h-28 w-28 mx-28" src="https://futurestartup.b-cdn.net/wp-content/uploads/2019/09/41822456_2633850196840163_3656768458990813184_n.jpg" alt="" />
       </Link>
       <Link to='/brands'>
       <img className="h-28 w-28 mx-28" src="https://www.pickaboo.com/blog/wp-content/uploads/2023/11/Pickaboo-Online-shopping.png" alt="" />
       </Link>
       <Link to='/brands'>
       <img className="h-28 w-28 mx-28" src="https://i.chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-622/Default/resources/images/egg-480.png?q=low&alpha=1" alt="" />
       </Link>
       <Link to='/brands'>
       <img className="h-28 w-28 mx-28" src="https://play-lh.googleusercontent.com/xowgUyZAPlf9wAS7l-sq9Kp4E37eHDeHPQtSGS4Yp6g9YHP6OdVtP8uLvnO_Zyzd9Q" alt="" />
       </Link>
       <Link to='/brands'>
       <img className="h-28 w-28 mx-28" src="https://pbs.twimg.com/profile_images/920709492052021248/k5YTMzk1_400x400.jpg" alt="" />
       </Link>
      </Marquee>
    </div>
  );
};

export default TopBrand;
