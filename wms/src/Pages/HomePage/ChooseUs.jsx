const features = [
  {image: '/assets/advanced-filtration-technology.png', title: "Advanced Filtration Technology", description: 'We use cutting-edge filtration processes for the cleanest water.'},
  {image: '/assets/top-quality-assurance.png', title: "Top Quality Assurance", description: 'Our rigorous testing ensures the highest standards of water purity.'},
  {image: '/assets/dedicated-expert-team.png', title: "Dedicated Expert Team", description: 'Our knowledgeable professionals are committed to your health and safety.'},
  {image: '/assets/sustainability-focus.png', title: "Sustainability Focus", description: 'We prioritize eco-friendly practices in sourcing and packaging.'},
  {image: '/assets/customer-satisfaction.png', title: "Customer Satisfaction", description: 'Our customer service team is always ready to assist you with any needs'},
  {image: '/assets/waterHandshake.png', title: "Trusted And Certified", description: 'Our water meets all industry certifications for quality and safety.'},

];

function ChooseUs() {
return (
  <div className="bg-[#DDE9F5] p-8 mt-16 rounded-xl mx-4 lg:mx-20 shadow-lg fade-in-slide-up">
    <h2 className="text-center text-5xl font-extrabold text-[#24619D] mt-8 mb-10">Why Choose Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center p-4">
          <img src={feature.image} alt={feature.title} className="h-20 mb-4"/>
          <h3 className="text-xl font-bold text-[#24619D] mb-2">{feature.title}</h3>
          <p className="text-sm font-semibold text-gray-700">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
);
}

export default ChooseUs;


