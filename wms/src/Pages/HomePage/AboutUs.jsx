import { useNavigate } from "react-router-dom";

function AboutUs(){
  const navigate = useNavigate()

  return (
    <div className="flex flex-col md:flex-row items-center p-4 bg-white rounded-lg mt-36">
      {/* left picture */}
      <div className="md:w-1/2 p-4 ml-10">
        <img src="/assets/aboutUsPicture.png" alt="Team meeting" className="w-[400px] h-auto rounded-lg" />
      </div>

      {/*  right section*/}
      <div className="md:w-1/2 p-4">
        <h1 className="text-7xl text-[#095EAE] font-bold -ml-64">| About Us</h1>
        <p className="text-xl mb-4 mt-10 -ml-64 mr-10">
          Our dedicated team of professionals work tirelessly to ensure that you receive the safest,cleanest, and purest water possible. Our experts are committed to maintaining the highest
          standards of water quality through rigorous testing, state-of-the-art filtration processes,and constant innovation. With a passion for excellence and a deep understanding of water
          safety, our team is here to provide you with the refreshing, pristine water you deserve.
        </p>

        <div className="flex justify-end mr-10">
        <button className="mt-7 bg-[#095EAE] font-medium text-white px-6 py-3 rounded-lg text-2xl hover:bg-[#7BA5C9] transition-colors duration-300 fade-in-slide-up" onClick={() => navigate('/AboutUs')}>Learn More  →</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
