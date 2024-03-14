const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/*
 * function: getDate
 * param: timestamp, an EpochTimeStamp
 * return: returns a string with the format <Day of the Week> <Month> <Day>, <Year>
 *
 * converts a timestamp into a readable string
 */
export function getDate(timestamp: EpochTimeStamp) {
  const date = new Date(timestamp * 1000);

  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return dayName + " " + monthName + " " + day + ", " + year;
}

/*
 * function: decode64
 * param: b64, a based-64 encoded string
 * return: the decoded b64 object
 *
 * Decodes a based-64 string back into an object
 */
export function decode64<T>(b64: string): T {
  return JSON.parse(atob(b64));
}

/*
 * function: encode64
 * param: obj, an object to decode
 * return: based-64 encoded string of the given object
 *
 * Encodes an object to base 64 and returns the encoded string
 */
export function encode64<T>(obj: T): string {
  return btoa(JSON.stringify(obj));
}
