// When will we be there??

// The estimated time of arrival (ETA) is the time when a ship,
// vehicle, aircraft, cargo, person, or emergency service is expected to arrive at a certain place.

// Write a function where you speficy your speed in km/h and how far
// you have to go in km. The function has to return the time it will take to arrive at ¨
// your destination. The time should be formatted like this: 3 hours and 34 minutes.

// Hint: For formatting your best friend is Google!

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const timeToArriveMessage = (obj) => {
  const time = obj.destinationDistance / obj.speed;
  const minutes = (time - parseInt(time)) * 60;
  return `${Math.floor(time)} hours and ${minutes.toFixed()} minutes`;
};

const travelTime = timeToArriveMessage(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
