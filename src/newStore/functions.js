export const changePlay = (id, setAction, action) => {
  setAction(
    action.map((items) =>
      items.imdbID === id ? { ...items, play: true } : items
    )
  );
};
export const setDefault = (id, setAction, action) => {
  setAction(
    action.map((items) =>
      items.imdbID === id ? { ...items, play: false } : items
    )
  );
};
export function pushToMarked(id, setAction, marked) {
  setAction.map((el) =>
    el.imdbID === id
      ? marked.push({
          photoSrc: el.Poster,
          movieName: el.Title,
          type: el.Type,
          year: el.Year,
          id: el.imdbID,
          play: false,
        })
      : ""
  );
}
export const bookmarked = (id, setAction, action) => {
  setAction(
    action.map((items) =>
      items.imdbID === id ? { ...items, isBookMarked: true } : items
    )
  );
};
