import React from "react";

export default function About() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* Left Image */}
          <div className="w-full lg:w-5/12">
            <img
              src="https://www.12dimensionsapp.in/assets/img/aboutarvaya.png"
              alt="About Us"
              className="w-full max-w-md mx-auto object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-7/12">
            <span className="text-orange-600 font-semibold uppercase tracking-wider">
              About Us
            </span>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              React Development is Carried Out by Passionate Developers
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              We are a team of passionate React developers dedicated to building
              modern, scalable, and high-performance web applications. Our
              expertise lies in creating responsive user interfaces, writing
              clean and maintainable code, and delivering seamless digital
              experiences that help businesses achieve their goals.
            </p>

            <p className="mt-4 text-gray-600 text-lg leading-8">
              Whether you're a startup or an established enterprise, we provide
              customized web solutions tailored to your unique requirements.
              From intuitive frontend development to complete web applications,
              we combine innovation, best practices, and the latest technologies
              to ensure exceptional performance, security, and user
              satisfaction.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition duration-300">
                Learn More
              </button>

              <button className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}