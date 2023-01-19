const db = require("./connection");
require("dotenv").config();
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "RINGS" },
    { name: "EARRINGS" },
    { name: "NECKLACE" },
    { name: "WRISTWEAR" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Pink Sunflower Ring",
      description:
        "The Sunflower Ring features 0.06ct of rare pink diamonds from the Argyle mine in Western Australia.",
      image: "R1.jpg",
      category: categories[0]._id,
      price: 229,
      quantity: 500,
    },
    {
      name: "Sapphire Ring",
      description: "Alice - 2.55 Cushion Teal Sapphire Engagement Ring.",
      image: "R2.jpg",
      category: categories[0]._id,
      price: 199,
      quantity: 500,
    },
    {
      name: "Pink leverback",
      category: categories[1]._id,
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      image: "ER3.jpg",
      price: 149,
      quantity: 30,
    },
    {
      name: "Flower necklace",
      category: categories[2]._id,
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image: "NP3.jpg",
      price: 199,
      quantity: 100,
    },
    {
      name: "Pink Nile Ring",
      category: categories[0]._id,
      description: "Radiant Cut Diamond Eternity Ring",
      image: "R3.jpg",
      price: 150,
      quantity: 20,
    },
    {
      name: "Teal Montana Sapphire",
      category: categories[0]._id,
      description:
        "Prong-Set Round 3 Stone Teal Montana Sapphire and Diamond Ring",
      image: "R4.jpg",
      price: 99,
      quantity: 20,
    },
    {
      name: "Sapphire Ring",
      category: categories[0]._id,
      description: "Victoria - 4.09 Round White Sapphire Engagement Ring",
      image: "R5.jpg",
      price: 150,
      quantity: 20,
    },
    {
      name: "Round Solitaire",
      category: categories[0]._id,
      description: "Icon Round 4 Claw Diamond Solitaire Ring",
      image: "R6.jpg",
      price: 199,
      quantity: 20,
    },
    {
      name: "9ct Yellow Gold",
      category: categories[3]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "WW3.jpg",
      price: 99,
      quantity: 600,
    },

    {
      name: "Pear-Shaped Earrings",
      category: categories[1]._id,
      description: "Solitaire Pear-Shaped Ruby Leverback Earrings _ Angara.",
      image: "ER4.jpg",
      price: 99,
      quantity: 50,
    },
    {
      name: "9ct Yellow Gold",
      category: categories[3]._id,
      description:
        "London 9ct Yellow Gold with Round Brilliant Cut 1/2 CARAT tw of Diamond Bangle",
      image: "WW6.jpg",
      price: 449,
      quantity: 600,
    },
    {
      name: "Silver huggies",
      category: categories[1]._id,
      description:
        "Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
      image: "ER1.jpg",
      price: 69,
      quantity: 100,
    },
    {
      name: "Green Leverback",
      category: categories[1]._id,
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      image: "ER2.jpg",
      price: 125,
      quantity: 30,
    },
    {
      name: "4 Carat Aquamarine",
      category: categories[1]._id,
      description:
        "Simple and timeless, the 4 carat Bella Earrings are perfect for adding a little brilliance to the everyday.Each 10mm Aquamarine Crystal is precisely polished into a brilliant gemstone cut before before being handset into a perfectly fitted thin bezel earring base.",
      image: "ER5.jpg",
      price: 99,
      quantity: 30,
    },
    {
      name: "Sterling Silver",
      category: categories[1]._id,
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      image: "ER6.jpg",
      price: 49,
      quantity: 30,
    },

    {
      name: "Gold chain",
      category: categories[2]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "NP1.jpg",
      price: 199,
      quantity: 1000,
    },
   
    {
      name: "Wave Necklace",
      category: categories[2]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "NP4.jpg",
      price: 99,
      quantity: 600,
    },
    {
      name: "Wave Necklace",
      category: categories[2]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "NP5.jpg",
      price: 79,
      quantity: 600,
    },
    {
      name: "ACACIA PETITE PENDANT",
      category: categories[2]._id,
      description:
        "This classical Acacia Petite Pendant features a 7mm AAA grade Australian Akoya Broken Bay (NSW) pearl set in gold",
      image: "NP6.jpg",
      price: 199,
      quantity: 600,
    },
    {
      name: "Sterling Silver ",
      category: categories[3]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "WW1.jpg",
      price: 49,
      quantity: 600,
    },
    {
      name: "Diamond Bangle",
      category: categories[3]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "WW2.jpg",
      price: 149,
      quantity: 600,
    },
    {
      name: "Silver-filled Fancy",
      category: categories[3]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "WW4.jpg",
      price: 49,
      quantity: 600,
    },
    {
      name: "Silver 1/4 CARAT",
      category: categories[3]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "WW5.jpg",
      price: 49,
      quantity: 600,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Vidhi",
    lastName: "Sharma",
    email: "vidhi@abc.com",
    password: "abc123",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Lily",
    lastName: "Holt",
    email: "lily@abc.com",
    password: "12345678",
  });

  console.log("users seeded");

  process.exit();
});
