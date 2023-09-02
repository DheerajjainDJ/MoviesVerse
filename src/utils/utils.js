//image sizes for tmdb
export const img_300 = "https://image.tmdb.org/t/p/w300";
export const img_500 = "https://image.tmdb.org/t/p/w500";

// contentModal and singleContent
export const unavailable =
  "https://www.movienewz.com/img/films/poster-holder.jpg";

export const durToHr = (duration) => {
  let hr = Math.floor(duration / 60);
  let min = Math.floor(duration % 60);

  if (!hr & !min) {
    return "";
  }
  if (hr === 0) {
    return `${min}min`;
  } else if (min === 0) {
    return `${hr}h`;
  } else {
    return `${hr}h ${min}min`;
  }
};
