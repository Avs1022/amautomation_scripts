const dateString = "2023-08-04T00:00:00.000Z";

// Convert the string to a Date object
const originalDate = new Date(dateString);

// Create a new Date object that is 10 days after the original date
const futureDate = new Date(originalDate);
futureDate.setDate(originalDate.getDate() + 10);

// Create a JSON object with the future date components
const jsonOutput = {
  day: futureDate.getDate(),
  month: futureDate.getMonth(),
  year: futureDate.getFullYear()
};

console.log(jsonOutput);
