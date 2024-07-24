function AboutUs(){
  return (
    <section className="flex flex-col md:flex-row items-center p-8 bg-white rounded-lg shadow-md">
      <div className="md:w-1/2 p-4">
        <img src="/assets/ourTeam.png" alt="Team meeting" className="w-full h-auto rounded-lg" />
      </div>
      <div className="md:w-1/2 p-4">
        <img src="/assets/AboutUs.png" className="h-36"/>
        <p className="text-xl mb-4">
          Our dedicated team of professionals work tirelessly to ensure that you receive the safest,cleanest, and purest water possible. Our experts are committed to maintaining the highest
          standards of water quality through rigorous testing, state-of-the-art filtration processes,and constant innovation. With a passion for excellence and a deep understanding of water
          safety, our team is here to provide you with the refreshing, pristine water you deserve.
        </p>
        <a href="#" className="text-[#7FA3C7] hover:text-[#24619D] font-extrabold text-xl">Learn More &gt;&gt;</a>
      </div>
    </section>
  );
}

export default AboutUs;
