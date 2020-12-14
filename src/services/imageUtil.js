export const sizedImg = (imgUrl, size) => {
  let newUrl = imgUrl.match(/media\/games/)
    ? imgUrl.replace("/media/games/", `/media/resize/${size}/-/games/`)
    : imgUrl.replace(
        "/media/screenshots/",
        `/media/resize/${size}/-/screenshots/`
      );

  return newUrl;
};
