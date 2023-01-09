const addZero = (value: number) => {
  return value < 10 ? `0${value}` : value.toString();
};

export const dateTimeConverter = (
  unixTime: number,
  timeZone: number,
  options?: "time" | "date"
) => {
  const date = new Date(unixTime * 1000);
  date.setUTCSeconds(timeZone);
  const day = addZero(date.getUTCDate());
  const month = addZero(date.getUTCMonth() + 1);
  const year = addZero(date.getUTCFullYear());
  const hours = addZero(date.getUTCHours());
  const minutes = addZero(date.getUTCMinutes());

  if (options === "time") return `${hours}:${minutes}`;
  if (options === "date") return `${day}.${month}.${year}`;
  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
