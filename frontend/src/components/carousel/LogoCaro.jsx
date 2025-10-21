import logo1 from './../../assets/logo1.jpeg'
import logo2 from "./../../assets/logo2.jpeg";
import logo3 from "./../../assets/logo3.jpeg";
import logo4 from "./../../assets/logo4.jpeg";
import logo5 from "./../../assets/logo5.jpeg";
import logo6 from "./../../assets/logo6.jpeg";
import logo7 from "./../../assets/logo7.jpeg";
import logo8 from "./../../assets/logo8.jpeg";
import logo9 from "./../../assets/logo9.jpeg";
import logo10 from "./../../assets/logo10.jpeg";
import logo11 from "./../../assets/logo11.jpeg";
import Marquee from "react-fast-marquee";
import "./caroCard.css";

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

const LogoCaro = () => {
  // Use a different color for testing, as white gradient on a white background
  // won't be visible. I'll use a light gray:
  return (
    <Marquee
      autoFill={true}
      gradient={false}
      // Use a light gray for the gradient color
      gradientColor="#f8f8f8"
      gradientWidth={100} // A smaller, more typical width
      speed={40} // Optional: Adjust speed for better visual testing
    >
      {logos.map((logo, index) => (
        // Key is required when mapping
        // 1. Give the wrapper a fixed width (e.g., w-32)
        // 2. Apply horizontal margin to the wrapper (e.g., mx-4)
        <div key={index} className="w-32 mx-1 ">
          <img
            // Remove w-full and h-26. Use h-full or h-20 for a set height.
            // object-contain ensures the logo fits within the wrapper div.
            className="h-20 w-full object-contain mix-blend-multiply"
            src={logo}
            alt={`Logo ${index + 1}`}
          />
        </div>
      ))}
    </Marquee>
  );
};

export default LogoCaro;
