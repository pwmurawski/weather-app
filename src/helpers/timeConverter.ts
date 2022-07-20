const addZero = (value: number) => {
  return value < 10 ? `0${value}` : value.toString();
};

export const timeConverter = (
  unixTime: number,
  timeZone: number,
  onlyHour?: boolean
) => {
  const d = new Date(unixTime * 1000);
  d.setUTCSeconds(timeZone);
  const day = addZero(d.getUTCDate());
  const month = addZero(d.getUTCMonth() + 1);
  const year = addZero(d.getUTCFullYear());
  const hours = addZero(d.getUTCHours());
  const minutes = addZero(d.getUTCMinutes());

  if (onlyHour) return `${hours}:${minutes}`;
  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

export default timeConverter;
