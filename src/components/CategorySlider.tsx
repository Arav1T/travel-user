// import React from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const CategorySlider = ({ categories }) => {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <section className="my-8 bg-gradient-to-r from-[#1a252f] via-[#34495e] to-[#8e44ad] p-8 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
//       <Slider {...sliderSettings}>
//         {categories.map(category => (
//           <div key={category.id} className="px-2">
//             <Link 
//               to={`/category/${category.name}`} 
//               className="block group"
//             >
//               <div className="bg-white rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
//                 <div className="relative h-40">
//                   {/* <img 
//                     src={category.image} 
//                     alt={category.name} 
//                     className="w-full h-full object-cover"
//                   /> */}
//                   <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                     <h3 className="text-white text-xl font-bold">{category.name}</h3>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default CategorySlider;

import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Category {
  id: string;
  name: string;
  image?: string;
}

interface CategorySliderProps {
  categories: Category[];
}

const CategorySlider: React.FC<CategorySliderProps> = ({ categories }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="my-8 bg-gradient-to-r from-[#1a252f] via-[#34495e] to-[#8e44ad] p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
      <Slider {...sliderSettings}>
        {categories.map((category) => (
          <div key={category.id} className="px-3">
            <Link to={`/category/${category.name}`} className="block group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-40 bg-gray-300">
                  {/* Use image if provided */}
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-gray-600">No image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{category.name}</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CategorySlider;
