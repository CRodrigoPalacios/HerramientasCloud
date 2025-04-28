// src/data/products.js
export const products = [
    {
      id: 1,
      name: "Chronograph Master",
      brand: "Audemars",
      price: 12500,
      rating: 4.9,
      reviews: 28,
      isNewArrival: true,
      image: "/placeholder.jpg",
      description: "Luxury chronograph watch with precision movement",
      inStock: true,
      colors: ["silver", "blue", "black", "pink"],
      sizes: ["38mm", "42mm", "44mm"],
      images: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg"
      ],
      features: {
        freeShipping: true,
        warranty: "2-year warranty",
        returns: "30-day returns"
      }
    },
    {
      id: 2,
      name: "Ocean Diver Pro",
      brand: "Rolex",
      price: 18900,
      rating: 4.8,
      reviews: 42,
      isNewArrival: false,
      image: "/placeholder.jpg",
      description: "Professional diving watch with water resistance up to 300m",
      inStock: true,
      colors: ["blue", "black", "green", "silver"],
      sizes: ["40mm", "42mm", "44mm"],
      images: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg"
      ],
      features: {
        freeShipping: true,
        warranty: "5-year warranty",
        returns: "60-day returns"
      }
    },
    {
      id: 3,
      name: "Classic Fusion Gold",
      brand: "Hublot",
      price: 21500,
      rating: 4.7,
      reviews: 19,
      isNewArrival: true,
      image: "/placeholder.jpg",
      description: "Elegant gold fusion timepiece with sapphire crystal",
      inStock: false,
      colors: ["gold", "rose-gold", "silver", "black"],
      sizes: ["40mm", "42mm", "45mm"],
      images: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg"
      ],
      features: {
        freeShipping: true,
        warranty: "3-year warranty",
        returns: "45-day returns"
      }
    },
    {
      id: 4,
      name: "Nautilus Steel",
      brand: "Patek Philippe",
      price: 35000,
      rating: 5.0,
      reviews: 36,
      isNewArrival: false,
      image: "/placeholder.jpg",
      description: "Iconic Nautilus design in premium stainless steel",
      inStock: true,
      colors: ["steel-blue", "silver", "black", "white"],
      sizes: ["38mm", "40mm", "42mm"],
      images: [
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg",
        "/placeholder.jpg"
      ],
      features: {
        freeShipping: true,
        warranty: "International lifetime warranty",
        returns: "90-day returns"
      }
    }
  ];
  
  // Función para obtener un producto por ID
  export const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id)) || products[0];
  };