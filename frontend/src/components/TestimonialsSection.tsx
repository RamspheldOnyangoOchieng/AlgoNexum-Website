import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      role: 'CEO, Tech Innovators',
      testimonial:
        'AlgoNexum transformed our business operations with their AI-driven solutions. Their innovative approach empowered us to achieve incredible efficiency and scale our impact in the tech industry.',
      imgSrc: 'https://via.placeholder.com/150', // Replace with actual image
    },
    {
      name: 'John Smith',
      role: 'Founder, GreenTech Solutions',
      testimonial:
        'Working with AlgoNexum has been a game-changer. Their sustainable tech solutions helped us reduce our environmental footprint while improving operational efficiency. Highly recommended!',
      imgSrc: 'https://via.placeholder.com/150', // Replace with actual image
    },
    {
      name: 'Emily Johnson',
      role: 'Marketing Director, GlobalReach',
      testimonial:
        'The digital marketing strategies implemented by AlgoNexum took our brand awareness to the next level. Their data-driven approach to campaign management delivered measurable results.',
      imgSrc: 'https://via.placeholder.com/150', // Replace with actual image
    },
  ];

  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-['Toxigenesis'] mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-white p-6 rounded-lg shadow-lg">
              <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-md text-gray-500 mb-4">{testimonial.role}</p>
              <p className="text-lg italic">{`"${testimonial.testimonial}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
