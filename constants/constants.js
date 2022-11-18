const serverDetails = [
  "This is rendered using ejs.",
  "lightening fast",
  "lightweight",
  "can handle json data",
  "styled using static css file",
];

const database = {
  products: [
    {
      id: 1,
      name: "Kaala Chasma",
      price: 100,
    },
    {
      id: 2,
      name: "Laal Chaddi",
      price: 55,
    },
    {
      id: 3,
      name: "Peeli pant",
      price: 101,
    },
  ],
};

module.exports = { database, serverDetails };
