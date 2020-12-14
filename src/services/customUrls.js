const base_url = "https://api.rawg.io/api/games";

//day
const getDay = () => {
  let day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  }
  return day;
};

//months
const getMonth = () => {
  let month = new Date().getMonth();
  if (month < 10) {
    return `0${month}`;
  }
  return month;
};

//years
const currentYear = new Date().getFullYear();
const prevYear = currentYear - 1;

export const upcomingURL = () =>
  `${base_url}?key=${
    process.env.REACT_APP_KEY
  }&dates=${prevYear}-${getMonth()}-${getDay()},${currentYear}-${getMonth()}-${getDay()}&ordering=-added&page_size=10`;

export const latestURL = () =>
  `${base_url}?key=${
    process.env.REACT_APP_KEY
  }&dates=${prevYear}-01-01,${prevYear}-${getMonth()}-${getDay()}&ordering=-added&page_size=10`;

export const popularURL = () =>
  `${base_url}?key=${
    process.env.REACT_APP_KEY
  }&dates=2001-01-01,${currentYear}-${getMonth()}-${getDay()}&ordering=-rating&page_size=10`;
