// CactusIO-interactive (Smart phone usage app) optional

// Adding an activity

const activities = [];
/**
 *
 *
 * @param {string} date
 * @param {string} activity
 * @param {number} duration
 */
const addActivity = (date, activity, duration) => {
  activities.push({
    date: date,
    activity: activity,
    duration: duration,
  });
};
addActivity("23/7-18", "Youtube", 30);

// Show my status

// This function should use the activities variable and return
// a string saying the following: "You have added 3 activities. They amount to 78 min. of usage"

const usageLimit = 60;

const showStatus = (arr) => {
  let minutesOfUsage = 0;

  for (let i = 0; i < arr.length; i++) {
    minutesOfUsage += arr[i].duration;
  }

  if (minutesOfUsage >= usageLimit) {
    return console.log(
      "You have reached your limit, no more smartphoning for you!"
    );
  } else {
    return console.log(
      arr.length !== 0
        ? `You have added ${arr.length} activities. They amount to ${minutesOfUsage} min. of usage`
        : `Add some activities before calling showStatus`
    );
  }
};
console.log("\x1b[35m%s\x1b[0m", "\nShowstatus");
showStatus(activities);

// Usage limit

// Improved addActivity, so that we dont need to specify the date,
const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateToday = date.toLocaleDateString("en-EN", options);
// function automatically figures out what the date is.
const addActivityWithDate = (activity, duration) => {
  activities.push({
    date: dateToday,
    activity: activity,
    duration: duration,
  });
};
addActivityWithDate("Instagram", 20);
console.log(
  "\x1b[35m%s\x1b[0m",
  "\t\nImproved addActivity, it fetches date automatically"
);
console.log(activities);

// Improve the showStatus function by only showing the number of actitivies for that specific day.

const usageLimit2 = 60;

const showStatus2 = (arr) => {
  let minutesOfUsage = 0;
  const todaysActivities = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].date === dateToday) {
      todaysActivities.push(arr[i]);
      minutesOfUsage += arr[i].duration;
    }
  }

  if (minutesOfUsage >= usageLimit) {
    return console.log(
      "You have reached your limit, no more smartphoning for you!"
    );
  } else {
    return console.log(
      arr.length !== 0
        ? `You have added ${todaysActivities.length} activities today. They amount to ${minutesOfUsage} min. of usage`
        : `Add some activities before calling showStatus`
    );
  }
};

console.log(
  "\x1b[35m%s\x1b[0m",
  "\nImproved showStatus function,now it shows only todays activities and minutes"
);
showStatus2(activities);

// Create a function for calculating the activity a user has spent the most time on.
const findTheLongestActivity = () => {
  allActivityArray = [];
  let longestActivity = "";

  for (let i = 0; i < activities.length; i++) {
    allActivityArray.push(activities[i].duration);
  }
  let longestActivityDuration = Math.max(...allActivityArray);

  for (let i = 0; i < activities.length; i++) {
    if (activities[i].duration === longestActivityDuration) {
      longestActivity = activities[i].activity;
    }
  }

  return console.log(
    "the activity a user has spent the most time on is: " + longestActivity
  );
};
console.log("\x1b[35m%s\x1b[0m", "\nLongest activity - calculator");
findTheLongestActivity();
