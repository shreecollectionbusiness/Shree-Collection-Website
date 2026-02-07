import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundColor: "#d5739d" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #19a3c8 2%, transparent 0%)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <img src="src/assets/shree-logo.webp" alt="logo" style={{ width: '10vw' }} />
        </div>

        <h1
          className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl mb-6"
          style={{ color: "#19a3c8" }}
        >
          Shree Collection
        </h1>

        <p
          className="font-['Lato'] text-xl sm:text-2xl mb-4"
          style={{ color: "#d5739d" }}
        >
          Where Style Meets Sophistication
        </p>

        <p className="font-['Lato'] text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Discover our curated collection of elegant women's
          wear. Visit our store or connect with us on social
          media to explore our latest arrivals.
        </p>

        <div
          className="inline-block px-6 py-3 rounded-full border-2 mb-4"
          style={{
            borderColor: "#19a3c8",
            color: "#19a3c8",
          }}
        >
          <p className="font-['Lato']">
            In-Store Shopping Available | Online Store
            Coming Soon
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={() =>
              document
                .querySelector("#gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg font-['Lato'] cursor-pointer"
            style={{
              backgroundColor: "#d5739d",
              color: "white",
            }}
          >
            Explore Our Collection
          </button>
        </div>
      </div>
    </section>
  );
}