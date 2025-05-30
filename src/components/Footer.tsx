// import React from "react";

// const Footer = () => {
//     return (
//       <footer className="bg-gradient-to-r from-[#1a252f] via-[#34495e] to-[#8e44ad] text-white py-8 mt-10">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">TravelEase</h3>
//               <p className="text-gray-300">
//                 Find your perfect stay anywhere in the world.
//               </p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Explore</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Destinations</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Deals</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Reviews</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Company</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Legal</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Cancellation Policy</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
//             <p>© {new Date().getFullYear()} TravelEase. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     );
// };

// export default Footer;


import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1a252f] via-[#34495e] to-[#8e44ad] text-white py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">TravelEase</h3>
            <p className="text-gray-300 leading-relaxed">
              Find your perfect stay anywhere in the world. From city escapes to nature retreats—we’ve got you covered.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Destinations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Deals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Reviews</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Cancellation Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-white">TravelEase</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
