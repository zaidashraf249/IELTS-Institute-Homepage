import { FaStar, FaQuoteLeft } from 'react-icons/fa';

// 1. Data is now at the top of the same file
const testimonialsData = [
  {
    name: "Ayesha Khan",
    location: "Nagpur, Maharashtra",
    review: "This institute's structured approach and personal feedback were game-changers. I scored a Band 8 in just two months!",
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    stars: 5,
  },
  {
    name: "Rahul Sharma",
    location: "Mumbai, Maharashtra",
    review: "The teachers here are simply amazing. They created a very supportive and motivating environment which made all the difference.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
  },
  {
    name: "Sophia Williams",
    location: "Pune, Maharashtra",
    review: "The mock tests and the AI Band Score predictor were incredibly helpful. It felt like I knew my exact progress every single week.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&q=80&fm=jpg",
    stars: 4,
  },
];

// 2. The Card component is defined in the same file
const TestimonialCard = ({ name, location, review, avatar, stars }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg relative transition-transform transform hover:-translate-y-2">
      {/* Quotation Mark Icon */}
      <FaQuoteLeft className="absolute top-6 left-6 text-gray-100" size={40} />
      
      {/* Stars */}
      <div className="flex items-center mb-4">
        {Array.from({ length: stars }).map((_, index) => (
          <FaStar key={index} className="text-yellow-400" />
        ))}
      </div>
      
      {/* Review Text */}
      <p className="text-gray-600 mb-6 italic text-lg z-10 relative">"{review}"</p>
      
      {/* Author Info */}
      <div className="flex items-center">
        <img src={avatar} alt={name} className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-blue-200" />
        <div>
          <h4 className="font-bold text-gray-800 text-lg">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

// 3. The main Testimonials component that uses the above data and card
const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl mb-4">
          What Our Students Say
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Real stories from students who achieved their dreams with us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              location={testimonial.location}
              review={testimonial.review}
              avatar={testimonial.avatar}
              stars={testimonial.stars}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;