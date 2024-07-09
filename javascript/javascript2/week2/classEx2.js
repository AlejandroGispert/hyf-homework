/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}

// What type the listing should be, the price, size, location

const listings = generateListings(20);

// const filter = {
//   type: "farm",
// };

// const farmListings = filterListings(listings, filter);

const filterListings = () => (listings, filter) => {
  const result = 0;

  if (filter.type) {
    result = listings.filter((listing) => listing.type === filter.type);
  }

  if (filter.hasGarden) {
    result =
      listings.filter((listing) => listing.hasGarden) === filter.hasGarden;
  }

  if (filter.minSize) {
    result = listings.filter((listing) => listing.size >= filter.minPrize);
  }
  if (filter.maxSize) {
    result = listings.filter((listing) => listing.size <= filter.maxPrize);
  }

  if (filter.minPrize) {
    result = listings.filter((listing) => listing.price <= filter.minPrize);
  }
  if (filter.maxPrize) {
    result = listings.filter((listing) => listing.price >= filter.maxPrize);
  }
  if (filter.facilities) {
    result = listings.filter(
      (listing) => listing.facilities === filter.facilities
    );
  }
  return result;
};
// Okay, so the filterListings function takes a filter which is an object.
//  Say the user wants farm listings that cost more than 1.500.000.

const filter2 = {
  type: "farm",
  minPrize: 5000,
};

const cheapFarmListings = filterListings(listings, filter2);
// Your job is to create the filterListings function.
// The function should support these filters: type, facilities, price ,
// hasGarden and size. Use arrow functions!

const renderListings = () => {
  listings.map((e) => `<li>${e}</li>`);
};
