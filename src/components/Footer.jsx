import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="bg-[#181A25] px-48 py-8 text-white">
        <div className="grid grid-cols-4 gap-10">
          {/* About Section */}
          <div className="col-span-3">
            <h2 className="mb-4 text-xl font-bold">ABOUT FLIGHT FARE</h2>
            <p className="mb-4">
              We provide our customers with a range of discount and savings
              options when searching for airfares. Our comprehensive search
              process encompasses over 500 airlines and compares hundreds of
              travel sites at once, ensuring you find the most competitive rates
              available. We are passionate about making travel more accessible
              and enjoyable for everyone, and we are constantly striving to
              improve our offerings and exceed customer expectations.
            </p>
          </div>
          {/* Useful Links Section */}
          <div className="col-span-1">
            <h2 className="mb-4 text-xl font-bold">USEFUL LINKS</h2>
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="border-b border-cyan-600 pb-1 hover:text-gray-200"
              >
                Contact Us
              </a>

              <a
                href="#"
                className="border-b border-cyan-600 pb-1 hover:text-gray-200"
              >
                Terms of Use
              </a>

              <a
                href="#"
                className="border-b border-cyan-600 pb-1 hover:text-gray-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs font-thin">
          Flight-Fare.com is a digital-first travel company, revolutionizing the
          industry by harnessing technology to simplify, personalize, and
          elevate our customers' travel experiences. Our cutting-edge platform
          seamlessly integrates flight planning and booking, offering a
          personalized experience tailor-made to each customer's preferences. We
          partner with major travel providers to negotiate deep discounts on
          unsold inventory. This means you can save big on your next trip, even
          if you're booking at the last minute.
        </p>
      </div>
      <div className="bg-[#002537] px-48 py-3 text-[#3A98BB]">
        Copyright © 2024 Flight Fare. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
