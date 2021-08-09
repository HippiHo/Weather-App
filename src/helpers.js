export function formatTempToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

export function formatToHours(date) {
  return new Date(date).getHours();
}

export function formatToDay(date) {
  const newDate = new Date(date);
  const day = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
  }).format(newDate);
  const month = new Intl.DateTimeFormat("en-GB", {
    month: "long",
  }).format(newDate);
  return day + ". " + month;
}
