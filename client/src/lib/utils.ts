/*
 * function: formatDate
 * param: date, date string yyyy-mm-dd
 * param: time, military time hours:minutes
 * return: a readable date string with the format <Month> <Day> at <time>
 *
 * formats a date and time string into a readable string
 */
export function formatDate(date: string, time: string): string {
  const newDate = new Date(`${date}T${time}`);
  return newDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

/*
 * function: getCurrentDate
 * return: returns the current date string with the format <Day of the Week> <Month> <Day>, <Year>
 *
 * Gets the current date
 */
export function getCurrentDate(): string {
  const currentDate = new Date();
  return currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
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
