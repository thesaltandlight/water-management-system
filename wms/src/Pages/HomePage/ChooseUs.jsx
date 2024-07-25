const features = [
    {image: '/assets/advanced-filtration-technology.png', title: ""},

]


import advancedFiltration from './assets/advanced-filtration.png';
import topQualityAssurance from './assets/top-quality-assurance.png';
import dedicatedExpertTeam from './assets/dedicated-expert-team.png';
import sustainabilityFocus from './assets/sustainability-focus.png';
import customerSatisfaction from './assets/customer-satisfaction.png';
import trustedCertified from './assets/trusted-certified.png';

const features = [
  {
    image: advancedFiltration,
    title: "Advanced Filtration Technology",
    description: "We use cutting-edge filtration processes for the cleanest water."
  },
  {
    image: topQualityAssurance,
    title: "Top Quality Assurance",
    description: "Our rigorous testing ensures the highest standards of water purity."
  },
  {
    image: dedicatedExpertTeam,
    title: "Dedicated Expert Team",
    description: "Our knowledgeable professionals are committed to your health and safety."
  },
  {
    image: sustainabilityFocus,
    title: "Sustainability Focus",
    description: "We prioritize eco-friendly practices in sourcing and packaging."
  },
  {
    image: customerSatisfaction,
    title: "Customer Satisfaction",
    description: "Our customer service team is always ready to assist you with any needs."
  },
  {
    image: trustedCertified,
    title: "Trusted and Certified",
    description: "Our water meets all industry certifications for quality and safety."
  }
];

const WhyChooseUs = () => {
  return (
    <div className="bg-[#E5EFFA] p-8 rounded-xl max-w-screen-lg mx-auto my-10">
      <h2 className="text-center text-3xl font-extrabold text-[#24619D] mb-8">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4">
            <img src={feature.image} alt={feature.title} className="h-16 mb-4"/>
            <h3 className="text-xl font-bold text-[#24619D] mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
