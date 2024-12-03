const Banner = () => {
  return (
    <div className="px-5 lg:px-0">
      <div className="carousel rounded-2xl w-full h-[500px] ">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.prismic.io/getcircuit/e7817724-dae2-4ff5-937d-a789e8249bff_Header+%2867%29.jpg?auto=compress,format"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://png.pngtree.com/png-clipart/20240126/original/pngtree-vector-gift-voucher-design-template-promotion-sale-discount-illustration-png-image_14158760.png"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://www.gizmoadvices.com/wp-content/uploads/2019/03/Banggood-Coupons-1024x576.png"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
