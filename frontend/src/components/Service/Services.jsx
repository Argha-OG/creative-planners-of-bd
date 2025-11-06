import React from "react";

// --- A. SERVICE DATA ARRAY (UNCHANGED) ---
const serviceData = [
  // CATEGORY: DIGITAL PLATFORM & LAUNCH
  {
    name: "Professional Logo Design",
    description:
      "Creation of a unique, high-impact logo and full brand identity assets.",
    price: "RM 300",
    badge: "Design",
    image:
      "https://i.pinimg.com/originals/2e/a7/f5/2ea7f5d29b0fe88cc8e1c93bb50d3c40.gif",
  },
  {
    name: "Website Setup (Initial Structure)",
    description:
      "Building the foundational structure for your professional website.",
    price: "RM 500",
    badge: "Digital",
    image:
      "https://i.pinimg.com/originals/fe/4a/3f/fe4a3f469fa8324c0d9a650e4656d7b1.gif",
  },
  {
    name: "FB, TikTok & Instagram Page Setup",
    description:
      "Complete activation and optimization of core social media platforms.",
    price: "RM 250",
    badge: "Digital",
    image:
      "https://i.pinimg.com/originals/51/dc/e6/51dce6f2a7efa8981c57ebe54943fa01.gif",
  },
  {
    name: "Email & Google Business Setup",
    description:
      "Establishing professional email and optimizing your presence on Google Maps and Search.",
    price: "RM 150",
    badge: "Digital",
    image:
      "https://cdn.dribbble.com/userupload/22646236/file/original-fa674436334c46413a5545a4f9240ee5.gif",
  },
  {
    name: "Business Partner Profile Setup",
    description:
      "Creating initial partner profiles for network visibility and potential collaboration.",
    price: "RM 100",
    badge: "Digital",
    image:
      "https://i.pinimg.com/1200x/d3/f7/21/d3f7211b8826460f65e8e041e4ab40c4.jpg",
  },
  // CATEGORY: CONTENT CREATION & MANAGEMENT
  {
    name: "Content Creation & Posting (A La Carte)",
    description:
      "Regular creation and scheduling of professional content to keep pages active.",
    price: "RM 15/post",
    badge: "Content",
    image:
      "https://i.pinimg.com/originals/de/ce/4e/dece4ea122d5b9b9a34308594aa91f47.gif",
  },
  {
    name: "Promotional Video Creation",
    description:
      "Production of short, high-impact videos for product promotion and ads.",
    price: "Custom Quote",
    badge: "Content",
    image:
      "https://i.pinimg.com/originals/1a/b7/a6/1ab7a60cb83bbe749183f8b48b719243.gif",
  },
  {
    name: "Custom Poster Designs",
    description:
      "Creation of bespoke, high-quality static graphic posters for campaigns.",
    price: "RM 30/design",
    badge: "Design",
    image:
      "https://i.pinimg.com/originals/e7/cd/ff/e7cdffa5fc1d11269005bb15bfdb3998.gif",
  },
  {
    name: "Audience Research & Strategy",
    description:
      "Deep dive into target audience demographics to inform all engagement strategies.",
    price: "RM 600",
    badge: "Strategy",
    image:
      "https://i.pinimg.com/originals/91/16/8b/91168b4873f6659b3e9fdfe4b89cd864.gif",
  },
  {
    name: "Page Moderation & Engagement",
    description:
      "Salary-based moderator team service to reply to messages and engage with clients 24/7.",
    price: "RM 1,200/mo",
    badge: "Management",
    image:
      "https://i.pinimg.com/originals/b2/76/90/b276903193d6ab4e79cbbf16c2df16a5.gif",
  },
  {
    name: "Ad Campaign Strategy & Setup",
    description:
      "Strategic setup of ad campaigns focused on boosting visibility and increasing sales.",
    price: "RM 450",
    badge: "Strategy",
    image:
      "https://i.pinimg.com/originals/10/cc/f8/10ccf82991d3bfbe106a11f1bbb0803a.gif",
  },
  {
    name: "Weekly & Monthly Performance Reports",
    description:
      "Providing full transparency and analysis of campaign performance metrics and progress.",
    price: "RM 200/mo",
    badge: "Management",
    image:
      "https://i.pinimg.com/originals/55/67/48/5567482439d1c89c0ce0bb818afd6c5a.gif",
  },
  // CATEGORY: CREATIVE, PRINTING & EVENTS
  {
    name: "Event Planning & Management",
    description:
      "Full planning, coordination, and management of corporate and private events.",
    price: "Custom Quote",
    badge: "Event",
    image:
      "https://i.pinimg.com/originals/97/78/9e/97789e8395f0b64f804ddb988a43e952.gif",
  },
  {
    name: "Corporate Video Production",
    description:
      "High-quality video production for internal communication or large-scale brand marketing.",
    price: "Custom Quote",
    badge: "Content",
    image:
      "https://i.pinimg.com/originals/45/1f/2b/451f2bafe45ce6cace325efe0aaeef4e.gif",
  },
  {
    name: "Professional Staff Support",
    description:
      "Provision of trained staff for flawless event execution and operational support.",
    price: "Custom Quote",
    badge: "Event",
    image:
      "https://i.pinimg.com/originals/d7/57/3b/d7573b3e236d935c3f87f3d5668a4695.gif",
  },
  {
    name: "Corporate Catalogs & Profile Design",
    description:
      "Design and printing of comprehensive company profiles and product catalogs.",
    price: "RM 400",
    badge: "Design",
    image:
      "https://i.pinimg.com/originals/ea/51/0e/ea510e956bd8ba2320a88c5b7a225049.gif",
  },
  {
    name: "Signboards & Banner Printing",
    description:
      "Design and printing of large-format banners and permanent physical signboards.",
    price: "RM 180",
    badge: "Printing",
    image:
      "https://i.pinimg.com/originals/a6/b9/77/a6b9772f51429b30df7603f93d3c8a3d.gif",
  },
  {
    name: "T-Shirt Printing",
    description:
      "Custom design and printing for staff uniforms or promotional merchandise.",
    price: "RM 50/unit",
    badge: "Printing",
    image:
      "https://static.wixstatic.com/media/57ab3a_a6978a3b60ba4fe2bd0f90529bd09788~mv2.gif",
  },
];

// --- B. SERVICE CARD GRID COMPONENT ---
const ServiceCardGrid = () => {
  // Function to determine the badge color based on category
  const getBadgeColor = (type) => {
    switch (type) {
      case "Digital":
        return "badge-secondary";
      case "Content":
        return "badge-info";
      case "Strategy":
        return "badge-success";
      case "Event":
        return "badge-warning";
      case "Design":
        return "badge-accent";
      case "Printing":
        return "badge-ghost";
      case "Management":
        return "badge-primary";
      default:
        return "badge-neutral";
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

      {/* Responsive Grid using the serviceData array. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {serviceData.map((service, index) => {
          const serviceNameEncoded = service.name.replace(/ /g, "%20");
          const whatsappUrl = `https://wa.me/601121404200?text=I%20need%20a%20quote%20for%20the%20${serviceNameEncoded}%20service.`;

          return (
            <div key={index} className="h-full">
              <div className="card bg-base-100 w-auto shadow-sm shadow-red-600 hover:shadow-lg hover:shadow-red-500 hover:border-red-500 border hover:border-2 border-red-500 transition duration-300 flex flex-col min-h-full">
                <figure>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-48 w-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/400x200/FEE2E2/DC2626?text=CPB+Service";
                    }}
                  />
                </figure>

                <div className="card-body flex flex-col justify-between">
                  {/* Top Content: Title and Description */}
                  <div>
                    {/* FIX: Title can wrap, Price is forced onto one line */}
                    <div className="flex justify-between items-start mb-2">
                      {/* Title (Allowed to wrap) */}
                      <h2 className="text-xl font-bold text-gray-900 pr-2">
                        {service.name}
                      </h2>
                      {/* Price Badge (FORCED NO WRAP) */}
                      <div className="badge bg-red-600 rounded-full text-white font-bold whitespace-nowrap h-auto py-2 flex-shrink-0">
                        {service.price}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mt-2">{service.description}</p>
                  </div>

                  {/* Action Area (Pushed to bottom of card-body) */}
                  <div className="card-actions justify-between items-center mt-4 pt-3 border-t">
                    {/* Category Badge (Sized using base daisyui classes) */}
                    <div
                      className={`badge ${getBadgeColor(
                        service.badge
                      )} text-sm h-auto whitespace-normal`}
                    >
                      {service.badge}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-active rounded-full bg-red-600 text-white hover:bg-red-700 border-none transition duration-150"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCardGrid;
