// There will be three collection:

// New Arrivals
// Trending
// Custom Made


https://handal-store-demo.myshopify.com/
https://handal-store-demo.myshopify.com/
https://handal-store-demo.myshopify.com/



// Product JSON: 

const products = [
  {
    id: 1,
    name: "Harriet Vegan Backpack",
    price: 89.99,
    rating: 4.1,
    image: "images/products/new-arrivals/na-1.jpg",
    productSlider: [
        "images/products/new-arrivals/na-1.jpg",
        "images/products/new-arrivals/na-1.jpg",
        "images/products/new-arrivals/na-1.jpg",
        "images/products/new-arrivals/na-1.jpg",
        "images/products/new-arrivals/na-1.jpg"
    ],
    description: "Casual crossbody bag made with durable canvas.",
    collection: "New Arrivals",
  },
  {
    id: 2,
    name: "Lenny Vegan Tote Bag",
    price: 90.99,
    rating: 4.4,
    image: "images/products/new-arrivals/na-2.jpg",
    productSlider: [
        "images/products/new-arrivals/na-2.jpg",
        "images/products/new-arrivals/na-2.jpg",
        "images/products/new-arrivals/na-2.jpg",
        "images/products/new-arrivals/na-2.jpg",
        "images/products/new-arrivals/na-2.jpg"
    ],
    description: "Casual crossbody bag made with durable canvas.",
    collection: "New Arrivals",
  },
  {
    id: 3,
    name: "Juliet Shopper Bag",
    price: 40.99,
    rating: 3.8,
    image: "images/products/new-arrivals/na-3.jpg",
    productSlider: [
        "images/products/new-arrivals/na-3.jpg",
        "images/products/new-arrivals/na-3.jpg",
        "images/products/new-arrivals/na-3.jpg",
        "images/products/new-arrivals/na-3.jpg",
        "images/products/new-arrivals/na-3.jpg"
    ],
    description: "Casual crossbody bag made with durable canvas.",
    collection: "New Arrivals",
  },
  {
    id: 4,
    name: "Lucy Mini Bucket Bag",
    price: 80.99,
    rating: 4.8,
    image: "images/products/new-arrivals/na-4.jpg",
    productSlider: [
        "images/products/new-arrivals/na-4.jpg",
        "images/products/new-arrivals/na-4.jpg",
        "images/products/new-arrivals/na-4.jpg",
        "images/products/new-arrivals/na-4.jpg",
        "images/products/new-arrivals/na-4.jpg"
    ],
    description: "Casual crossbody bag made with durable canvas.",
    collection: "New Arrivals",
  },
  {
    id: 5,
    name: "Snake-Effect Bowler Bag",
    price: 60.99,
    rating: 4.2,
    image: "images/products/new-arrivals/na-5.jpg",
    productSlider: [
        "images/products/new-arrivals/na-5.jpg",
        "images/products/new-arrivals/na-5.jpg",
        "images/products/new-arrivals/na-5.jpg",
        "images/products/new-arrivals/na-5.jpg",
        "images/products/new-arrivals/na-5.jpg"
    ],
    description: "Casual crossbody bag made with durable canvas.",
    collection: "New Arrivals",
  },
  {
    id: 6,
    name: "Canvas Crossbody",
    price: 67.99,
    rating: 4.7,
    image: "images/products/trending/t1.jpg",
    productSlider: [
        "images/products/trending/t1.jpg",
        "images/products/trending/t1.jpg",
        "images/products/trending/t1.jpg",
        "images/products/trending/t1.jpg",
        "images/products/trending/t1.jpg"
    ],
    description: "Trending crossbody bag made with durable canvas.",
    collection: "Trending"
  },
  {
    id: 7,
    name: "Colorful bags",
    price: 80.99,
    rating: 4.2,
    image: "images/products/trending/t2.jpg",
    productSlider: [
        "images/products/trending/t2.jpg",
        "images/products/trending/t2.jpg",
        "images/products/trending/t2.jpg",
        "images/products/trending/t2.jpg",
        "images/products/trending/t2.jpg"
    ],
    description: "Trending crossbody bag made with durable canvas.",
    collection: "Trending"
  },
  {
    id: 8,
    name: "Bespoke Clutch",
    price: 129.99,
    rating: 4.1,
    image: "images/products/trending/t3.jpg",
    productSlider: [
        "images/products/trending/t3.jpg",
        "images/products/trending/t3.jpg",
        "images/products/trending/t3.jpg",
        "images/products/trending/t3.jpg",
        "images/products/trending/t3.jpg"
    ],
    description: "Trending clutch tailored to your style.",
    collection: "Trending"
  },
  {
    id: 9,
    name: "Cylindrical bag",
    price: 119.99,
    rating: 3.5,
    image: "images/products/trending/t4.jpg",
    productSlider: [
        "images/products/trending/t4.jpg",
        "images/products/trending/t4.jpg",
        "images/products/trending/t4.jpg",
        "images/products/trending/t4.jpg",
        "images/products/trending/t4.jpg"
    ],
    description: "Trending clutch tailored to your style.",
    collection: "Trending"
  },
  {
    id: 10,
    name: "Large bag",
    price: 109.99,
    rating: 4.8,
    image: "images/products/trending/t5.jpg",
    productSlider: [
        "images/products/trending/t5.jpg",
        "images/products/trending/t5.jpg",
        "images/products/trending/t5.jpg",
        "images/products/trending/t5.jpg",
        "images/products/trending/t5.jpg"
    ],
    description: "Trending clutch tailored to your style.",
    collection: "Trending"
  },
  {
    id: 11,
    name: "Bags with handles",
    price: 50.99,
    rating: 4.8,
    image: "images/products/custom-made/cm-1.jpg",
    productSlider: [
        "images/products/custom-made/cm-1.jpg",
        "images/products/custom-made/cm-1.jpg",
        "images/products/custom-made/cm-1.jpg",
        "images/products/custom-made/cm-1.jpg",
        "images/products/custom-made/cm-1.jpg"
    ],
    description: "handmade clutch tailored to your style.",
    collection: "Custom Made"
  },
  {
    id: 12,
    name: "Cylindrical bag",
    price: 119.99,
    rating: 3.5,
    image: "images/products/custom-made/cm-2.jpg",
    productSlider: [
        "images/products/custom-made/cm-2.jpg",
        "images/products/custom-made/cm-2.jpg",
        "images/products/custom-made/cm-2.jpg",
        "images/products/custom-made/cm-2.jpg",
        "images/products/custom-made/cm-2.jpg"
    ],
    description: "handmade clutch tailored to your style.",
    collection: "Custom Made"
  },
  {
    id: 13,
    name: "Crossbody bag",
    price: 70.00,
    rating: 4.5,
    image: "images/products/custom-made/cm-3.jpg",
    productSlider: [
        "images/products/custom-made/cm-3.jpg",
        "images/products/custom-made/cm-3.jpg",
        "images/products/custom-made/cm-3.jpg",
        "images/products/custom-made/cm-3.jpg",
        "images/products/custom-made/cm-3.jpg"
    ],
    description: "handmade clutch tailored to your style.",
    collection: "Custom Made"
  },
  {
    id: 14,
    name: "Rino bag",
    price: 90.00,
    rating: 4.6,
    image: "images/products/custom-made/cm-4.jpg",
    productSlider: [
        "images/products/custom-made/cm-4.jpg",
        "images/products/custom-made/cm-4.jpg",
        "images/products/custom-made/cm-4.jpg",
        "images/products/custom-made/cm-4.jpg",
        "images/products/custom-made/cm-4.jpg"
    ],
    description: "handmade clutch tailored to your style.",
    collection: "Custom Made"
  },
  {
    id: 15,
    name: "Colorful bags",
    price: 80.99,
    rating: 4.2,
    image: "images/products/custom-made/cm-5.jpg",
    productSlider: [
        "images/products/custom-made/cm-5.jpg",
        "images/products/custom-made/cm-5.jpg",
        "images/products/custom-made/cm-5.jpg",
        "images/products/custom-made/cm-5.jpg",
        "images/products/custom-made/cm-5.jpg"
    ],
    description: "handmade clutch tailored to your style.",
    collection: "Custom Made"
  }
];
