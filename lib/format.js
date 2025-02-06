export function formatDate(date) {
  const options = {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata', // specify the correct time zone (IST)
  };
  
  // Ensure that the date is converted into a Date object and then formatted.
  const formattedDate = new Date(date);  // Converts the string to a Date object if necessary
  return formattedDate.toLocaleString('en-IN', options);
}
