import bannerImage from "./assets/banner.svg";
const Banner = () => {
  return (
    <>
      <div className="text-center ">
        <img src={bannerImage} alt="" className="mx-auto" />

        <h1>Want anything to be easy with LaslesVPN.</h1>
        <p>
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting fheatures from us.
        </p>

        <button>Get Started</button>
      </div>
    </>
  );
};

export default Banner;
