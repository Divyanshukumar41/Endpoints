import React from "react";
import "././../../assets/CSS/home.css";
import Header from "../../Layouts/userLayout/Header";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="antialiased">
      <Header />
      <main>
        <section className="min-h-[90vh] flex items-center">
          <div className="container mx-auto px-6 text-center ">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-blue-500">
              Explore APIs Endpoints
              <span className="block text-red-500">Redefined.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl mb-12 ">
              Explore powerful API endpoints, test requests, and understand JSON
              responses through a simple and intuitive interface.
            </p>
            <div className="flex justify-center items-center gap-4">
              <Link
                to="/docs"
                className="px-8 py-4 bg-blue-700 rounded-full text-lg text-white font-bold neumorphic-flat hover:neumorphic-pressed  animate-bounce"
              >
                Read Docs
              </Link>
              <Link
                to="/docs"
                className="px-8 py-4 bg-transparent rounded-full text-lg text-blue-700 font-bold neumorphic-flat hover:neumorphic-pressed  animate-bounce border"
              >
                View Github
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-600">
                Why Endpoints?
              </h2>
              <p className="mt-2 text-lg">
                The next generation of APIs Endpoints is here.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="p-8 text-center rounded-2xl neumorphic-flat hover:-translate-y-2">
                <div className="inline-flex p-5 rounded-full neumorphic-inset">
                  <i
                    data-lucide="layers"
                    className="w-10 h-10 text-blue-700"
                  ></i>
                </div>
                <h3 className="text-2xl font-bold mt-6 mb-2 text-red-500">
                  Soft & Tactile
                </h3>
                <p>
                  Our components feel like they're extruded from the screen,
                  providing a unique, physical-like interaction.
                </p>
              </div>

              <div className="p-8 text-center rounded-2xl neumorphic-flat hover:-translate-y-2">
                <div className="inline-flex p-5 rounded-full neumorphic-inset">
                  <i
                    data-lucide="smartphone"
                    className="w-10 h-10 text-blue-700"
                  ></i>
                </div>
                <h3 className="text-2xl font-bold mt-6 mb-2 text-yellow-500">
                  Fully Responsive
                </h3>
                <p>
                  Beautifully crafted to look and work perfectly on any screen
                  size, from mobile phones to large desktops.
                </p>
              </div>

              <div className="p-8 text-center rounded-2xl neumorphic-flat hover:-translate-y-2">
                <div className="inline-flex p-5 rounded-full neumorphic-inset">
                  <i
                    data-lucide="settings-2"
                    className="w-10 h-10 text-blue-700"
                  ></i>
                </div>
                <h3 className="text-2xl font-bold mt-6 mb-2 text-blue-700">
                  Easy to Customize
                </h3>
                <p>
                  Built with clean HTML and Tailwind CSS, making it incredibly
                  simple to adapt and extend to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">Loved by Creatives</h2>
              <p className="mt-2 text-lg">
                Don't just take our word for it. Here's what others are saying.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="p-8 rounded-2xl neumorphic-flat">
                <p className="italic text-lg">
                  "This is a game-changer. The neomorphic design adds a level of
                  sophistication I haven't seen before. My users love the new
                  feel of my app."
                </p>
                <div className="flex items-center mt-6">
                  <img
                    src="https://i.pravatar.cc/150?img=11"
                    alt="Avatar"
                    className="w-14 h-14 rounded-full neumorphic-flat p-1"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-lg">Sarah Johnson</p>
                    <p className="text-sm">Lead Designer, TechCorp</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl neumorphic-flat">
                <p className="italic text-lg">
                  "I was skeptical about neomorphism, but AuraUI made me a
                  believer. It's clean, modern, and surprisingly easy to
                  implement. Highly recommended!"
                </p>
                <div className="flex items-center mt-6">
                  <img
                    src="https://i.pravatar.cc/150?img=32"
                    alt="Avatar"
                    className="w-14 h-14 rounded-full neumorphic-flat p-1"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-lg">Michael Chen</p>
                    <p className="text-sm">Freelance Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl neumorphic-flat">
              <h2 className="text-4xl font-bold mb-4 text-red-500">
                Ready to Elevate Your Design?
              </h2>
              <p className="text-lg mb-8">
                Join our newsletter to get the latest updates, design tips, and
                exclusive access to new components.
              </p>
              <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-full neumorphic-inset focus:outline-none focus:ring-2 focus:ring-[var(--accent-color-start)]"
                />
                <Link
                  to="/auth/signup"
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 rounded-full font-bold text-lg neumorphic-flat hover:neumorphic-pressed whitespace-nowrap bg-transparent text-blue-600 border"
                >
                  Sign Up
                </Link>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="p-3 rounded-full neumorphic-flat hover:neumorphic-pressed"
            >
              <i data-lucide="twitter" className="w-6 h-6"></i>
            </a>
            <a
              href="#"
              className="p-3 rounded-full neumorphic-flat hover:neumorphic-pressed"
            >
              <i data-lucide="github" className="w-6 h-6"></i>
            </a>
            <a
              href="#"
              className="p-3 rounded-full neumorphic-flat hover:neumorphic-pressed"
            >
              <i data-lucide="dribbble" className="w-6 h-6"></i>
            </a>
          </div>
          <p>
            © 2024 AuraUI. All Rights Reserved. Designed with{" "}
            <i
              data-lucide="heart"
              className="inline-block w-4 h-4 text-red-500"
            ></i>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
