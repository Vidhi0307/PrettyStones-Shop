const db = require('./connection');
require('dotenv').config();
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'RINGS' },
    { name: 'EARRINGS' },
    { name: 'NECKLACE' },
    { name: 'WRISTWEAR' },
    
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Eminence Pinks Diamond Sunflower Ring',
      description:
        'The Sunflower Ring features 0.06ct of rare pink diamonds from the Argyle mine in Western Australia.',
        image: 'R1.jpg',
        category: categories[0]._id,
      price: 229,
      quantity: 500
    },
    {
      name: 'Sapphire Engagement Ring',
      description:
        'Alice - 2.55 Cushion Teal Sapphire Engagement Ring.',
      image: 'R2.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Blue Nile Ring',
      category: categories[0]._id,
      description:
        'Radiant Cut Diamond Eternity Ring',
      image: 'R3.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Pear-Shaped Earrings',
      category: categories[1]._id,
      description:
        'Solitaire Pear-Shaped Ruby Leverback Earrings _ Angara.',
      image: 'ER4.jpg',
      price: 49,
      quantity: 50
    },
    {
      name: 'Silver huggies',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'ER1.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Green Leverback',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'ER2.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Pink leverback',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'ER3.jpg',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Green Sapphire Ring',
      category: categories[0]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'R4.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Gold chain',
      category: categories[3]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: '10K white Gold',
      category: categories[3]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'Np2.jpg',
      price: 299,
      quantity: 1000
    },
    {
      name: 'Blue sapphire necklace',
      category: categories[3]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'Np3.jpg',
      price: 799,
      quantity: 100
    },
    {
      name: 'Wave Necklace',
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'NP4.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Vidhi',
    lastName: 'Sharma',
    email: 'vidhi@testmail.com',
    password: '12345678',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Lily',
    lastName: 'Holt',
    email: 'lily@testmail.com',
    password: '12345678'
  });

  console.log('users seeded');

  process.exit();
});
