// Allocating Hotel Rooms
function allocateRooms(customers) {
  // Sort customers by arrival time; if arrival times are the same, sort by departure time
  customers = customers.map((cust, index) => [...cust, index]);
  console.log(customers);
  customers.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  console.log(customers);
  // Min-heap to keep track of room end times
  let roomHeap = [];
  let roomAllocation = new Array(customers.length).fill(0);

  let roomNumber = 0;
  let roomEndTimes = [];
  for (let [arrival, departure, index] of customers) {
    let roomAssigned = false;
    for (let i = 0; i < roomEndTimes.length; i++) {
      if (roomEndTimes[i] < arrival) {
        // Reuse this room
        console.log(roomAssigned);
        roomAllocation[index] = i + 1;
        roomEndTimes[i] = departure;
        roomAssigned = true;
        break;
      }
    }
    if (!roomAssigned) {
      // Need a new room
      roomNumber += 1;
      roomAllocation[index] = roomNumber;
      roomEndTimes.push(departure);
    }
  }
  return roomAllocation;
}

console.log(
  allocateRooms([
    [1, 2],
    [2, 4],
    [4, 4],
  ])
);
// [1,2,1] or [2,1,1]

// function allocateRooms1(customers) {
//   customers = customers.map();
//   console.log(customers);
// }
// console.log(
//   allocateRooms1([
//     [1, 2],
//     [2, 4],
//     [4, 4],
//   ])
// );
