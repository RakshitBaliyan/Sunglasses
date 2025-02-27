import React from "react";

const products = [
  {
    id: 1,
    image: "https://media.istockphoto.com/id/894361286/photo/mr-cool-himself.jpg?s=612x612&w=0&k=20&c=m9hfsqOm149_SY_C3w79MgwEncru9X61oJwZHec3Xr8=",
    name: "Classic Aviators",
    description: "Timeless design with UV protection.",
    price: "$100",
    discountedPrice: "$75",
    rating: 4.5,
  },
  {
    id: 2,
    image: "https://www.verywellhealth.com/thmb/TO6jldxux4c0yycBefpjnHOl5dk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-527993989-5695c76a5f9b58eba49d98a1.jpg",
    name: "Modern Wayfarers",
    description: "Stylish frames with polarized lenses.",
    price: "$120",
    discountedPrice: "$90",
    rating: 4.8,
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36ELBj1BIJiGXlcfbH6uhozTWUjQ890Q8dQ&s",
    name: "Sporty Wraparounds",
    description: "Perfect for outdoor activities.",
    price: "$80",
    discountedPrice: "$60",
    rating: 4.3,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              {/* Product Name */}
              <h3 className="text-xl font-semibold">{product.name}</h3>
              {/* Description */}
              <p className="text-gray-600">{product.description}</p>
              {/* Price Section */}
              <p className="mt-2 text-lg font-semibold text-gray-800">
                <span className="line-through text-gray-500">{product.price}</span>
                <span className="ml-2 text-red-500">{product.discountedPrice}</span>
              </p>
              {/* Rating Stars */}
              <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className={`text-yellow-500 text-xl ${index < product.rating ? "fas fa-star" : "far fa-star"}`} />
                ))}
              </div>
              {/* Shop Now Button */}
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
