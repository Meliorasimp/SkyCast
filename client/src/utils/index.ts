export const convertToCelsius = (kelvin: number) => {
  return Math.round(kelvin - 273.15);
};

export const convertToHourandMinute = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12; // Convert to 12-hour format, 0 becomes 12
  return `${displayHours}:${minutes} ${ampm}`;
};
