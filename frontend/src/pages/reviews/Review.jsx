import React from "react";
import Marquee from "react-fast-marquee";

// --- DYNAMICALLY IMPORTED LOGOS (FROM ASSETS FOLDER) ---
// These are necessary for Vite/React to resolve the correct paths to your images.
import logo1 from "./../../assets/logo1.jpeg";
import logo2 from "./../../assets/logo2.jpeg";
import logo3 from "./../../assets/logo3.jpeg";
import logo4 from "./../../assets/logo4.jpeg"; // Assuming you have a logo4, though it wasn't explicitly used in the data map below
import logo5 from "./../../assets/logo5.jpeg";
import logo6 from "./../../assets/logo6.jpeg";
import logo7 from "./../../assets/logo7.jpeg";
import logo8 from "./../../assets/logo8.jpeg";
import logo9 from "./../../assets/logo9.jpeg"; // Assuming you have a logo9
import logo10 from "./../../assets/logo10.jpeg";
import logo11 from "./../../assets/logo11.jpeg";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
];

// --- CLIENT REVIEW DATA (FIXED TO USE IMPORTED LOGO VARIABLES) ---
const clientReviews = [
  {
    name: "NOORAY",
    logo: logo1, // Correctly references the imported variable
    service: "High-End Branding",
    rating: 5,
    review:
      "The brand identity design was flawless, perfectly capturing our luxury aesthetic and professional standard. Exceptional service and transparency.",
  },
  {
    name: "ATSAH FASHION",
    logo: logo2,
    service: "Digital Strategy & Content",
    rating: 4,
    review:
      "CPB's strategic ad campaign management brought us a significant increase in engagement and prepared us for our major launch.",
  },
  {
    name: "ZALORA",
    logo: logo3,
    service: "Aggressive Ad Campaigns",
    rating: 5,
    review:
      "Their expertise in ad campaign strategy proved highly effective. The detailed, transparent reporting made tracking ROI simple and reliable.",
  },
  {
    name: "monzo LIVINGS",
    logo: logo5,
    service: "Digital Launch Setup",
    rating: 4,
    review:
      "CPB provided a strong digital setup and consultation for our new venture. The foundational website and social work was highly professional.",
  },
  {
    name: "SUSHI TIE",
    logo: logo6,
    service: "F&B Brand Identity",
    rating: 5,
    review:
      "Their design team captured our unique F&B brand personality perfectly. The support team was highly responsive to all our needs.",
  },
  {
    name: "MAJUHOME",
    logo: logo7,
    service: "Printing & Physical Assets",
    rating: 4,
    review:
      "Excellent project management. They handled our corporate catalog design and large-scale printing with great precision and timely delivery.",
  },
  {
    name: "CANDOUR",
    logo: logo8,
    service: "24/7 Management",
    rating: 5,
    review:
      "The support provided by the 24/7 moderator team was invaluable. Our client messages are now handled instantly and professionally.",
  },
  {
    name: "DERA DHABA 2",
    logo: logo10,
    service: "Creative Refresh",
    rating: 4,
    review:
      "CPB gave our established restaurant business a vibrant visual refresh. The new marketing materials truly pop!",
  },
  {
    name: "eAdventure",
    logo: logo11,
    service: "Full Digital Launch",
    rating: 5,
    review:
      "For our launch, CPB provided a full website setup and promotional video production. Flawless execution and great value.",
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-5 h-5 ${i <= rating ? "text-red-500" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.968a1 1 0 00.95.691h4.17c.969 0 1.371 1.24.588 1.839l-3.374 2.454a1 1 0 00-.364 1.118l1.287 3.968c.3.921-.755 1.688-1.542 1.118l-3.374-2.454a1 1 0 00-1.176 0l-3.374 2.454c-.787.57-1.842-.197-1.542-1.118l1.287-3.968a1 1 0 00-.364-1.118L2.404 9.425c-.783-.599-.38-1.839.588-1.839h4.17c.365 0 .71.22.846.542l1.287 3.968z" />
      </svg>
    );
  }
  return <div className="flex">{stars}</div>;
};

const Review = () => {
  const overallRating = 4.5;
  const reviewCount = clientReviews.length;

  return (
    <div className=" pt-16 pb-24 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Overall Rating */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight sm:text-6xl">
            Client Success Stories
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Showcasing our dedication to full-service marketing, design, and
            event execution.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center">
            <div className="flex items-center space-x-3">
              <StarRating rating={Math.round(overallRating)} />
              <p className="text-3xl font-bold text-red-600">
                {overallRating} / 5.0
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Based on {reviewCount} verified client reviews
            </p>
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientReviews.map((client, index) => (
            <div
              key={index}
              className="bg-base-300 p-6 rounded-xl shadow-lg border hover:border-2 border-red-500 hover:shadow-2xl hover:shadow-red-500 transition duration-300 flex flex-col min-h-full"
            >
              {/* Company Logo and Rating */}
              <div className="flex items-center justify-between border-b pb-4 mb-4">
                <img
                  src={client.logo} // Uses the imported logo variable for correct path
                  alt={`${client.name} Logo`}
                  className="w-24 h-auto object-contain rounded-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/100x50/FEE2E2/DC2626?text=LOGO";
                  }}
                />
                <StarRating rating={client.rating} />
              </div>

              {/* Review Content */}
              <blockquote className="flex-grow">
                <p className="text-lg font-semibold text-gray-800 italic">
                  "{client.review}"
                </p>
              </blockquote>

              {/* Recommendation and Service Area */}
              <div className="mt-4 pt-4 border-t border-red-500">
                <p className="text-sm font-medium text-red-600">
                  Client: {client.name}
                </p>
                <span className="mt-1 inline-block text-xs font-semibold text-gray-500 bg-base-300 border border-red-500 rounded-full px-3 py-1">
                  Service Area: {client.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendation Section */}
        <div className="mt-20 bg-red-600 p-10 rounded-xl text-white shadow-3xl">
          <h2 className="flex items-center text-3xl font-bold mb-4">
            <svg
              width="46px"
              height="46px"
              viewBox="0 0 1024.00 1024.00"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="matrix(1, 0, 0, 1, 0, 0)"
              className="mx-2"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="18.432"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M512 469.333333m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
                  fill="#FFF59D"
                ></path>
                <path
                  d="M789.333333 469.333333c0-164.266667-140.8-294.4-309.333333-275.2-128 14.933333-230.4 117.333333-243.2 245.333334-10.666667 98.133333 29.866667 185.6 98.133333 241.066666 29.866667 25.6 49.066667 61.866667 49.066667 102.4v6.4h256v-2.133333c0-38.4 17.066667-76.8 46.933333-102.4 61.866667-51.2 102.4-128 102.4-215.466667z"
                  fill="#FBC02D"
                ></path>
                <path
                  d="M652.8 430.933333l-64-42.666666c-6.4-4.266667-17.066667-4.266667-23.466667 0L512 422.4l-51.2-34.133333c-6.4-4.266667-17.066667-4.266667-23.466667 0l-64 42.666666c-4.266667 4.266667-8.533333 8.533333-8.533333 14.933334s0 12.8 4.266667 17.066666l81.066666 100.266667V789.333333h42.666667V554.666667c0-4.266667-2.133333-8.533333-4.266667-12.8l-70.4-87.466667 32-21.333333 51.2 34.133333c6.4 4.266667 17.066667 4.266667 23.466667 0l51.2-34.133333 32 21.333333-70.4 87.466667c-2.133333 4.266667-4.266667 8.533333-4.266667 12.8v234.666666h42.666667V563.2l81.066667-100.266667c4.266667-4.266667 6.4-10.666667 4.266666-17.066666s-4.266667-12.8-8.533333-14.933334z"
                  fill="#FFF59D"
                ></path>
                <path
                  d="M512 938.666667m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                  fill="#5C6BC0"
                ></path>
                <path
                  d="M554.666667 960h-85.333334c-46.933333 0-85.333333-38.4-85.333333-85.333333v-106.666667h256v106.666667c0 46.933333-38.4 85.333333-85.333333 85.333333z"
                  fill="#9FA8DA"
                ></path>
                <path
                  d="M640 874.666667l-247.466667 34.133333c6.4 14.933333 19.2 29.866667 34.133334 38.4l200.533333-27.733333c8.533333-12.8 12.8-27.733333 12.8-44.8zM384 825.6v42.666667L640 832v-42.666667z"
                  fill="#5C6BC0"
                ></path>
              </g>
            </svg>
            Our Recommendation for Future Clients
          </h2>
          <p className="text-lg mb-4 opacity-90">
            If your business needs a cohesive strategy that connects your
            digital campaigns with your physical presence, **CPB is the
            answer**. Their **Full Service Ecosystem** is their key advantage.
          </p>
          <ul className="space-y-2 list-disc list-inside ml-4">
            <li>
              <strong className="font-semibold">For New Brands:</strong> Start
              with the **Digital Launch Package** to secure your logo, website,
              and social media presence efficiently.
            </li>
            <li>
              <strong className="font-semibold">For Growing Brands:</strong>{" "}
              Utilize the **Monthly Marketing Management** packages for
              guaranteed content consistency and dedicated 24/7 client support.
            </li>
            <li>
              <strong className="font-semibold">For Corporate Needs:</strong>{" "}
              Engage CPB for **Event Planning & Corporate Video Production** for
              assured professional execution.
            </li>
          </ul>

          <a
            href="https://wa.me/601139638206?text=I%20saw%20your%20reviews%20and%20want%20to%20book%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block font-bold py-3 px-6 shadow-lg transition duration-150 rounded-full border-2 hover:border-white hover:text-white! border-red-500 bg-white text-center text-red-600 hover:bg-transparent focus:ring-3 focus:outline-hidden"
          >
            Book Your Free Consultation Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Review;
