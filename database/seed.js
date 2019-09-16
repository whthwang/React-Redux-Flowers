const db = require('./model.js');

const seedData = [
  {
    id: 1,
    first: "John",
    last: "Roberts",
    age: 51,
    location: "Chicago, IL",
    description: "John is a retired YouTuber"
  },
  {
    id: 2,
    first: "Frita",
    last: "Waters",
    age: 27,
    location: "Phoenix, AZ",
    description: "Frita loves the desert, cheese, and turtles."
  },
  {
    id: 3,
    first: "Bart",
    last: "Simpson",
    age: 24,
    location: "Springfield, IL",
    description: "Bart skateboards everywhere."
  }
]

db.insertMany(seedData).then(() => { console.log('database successfully seeded') }).catch((error) => { console.log(`failed to seed ${error}`) });