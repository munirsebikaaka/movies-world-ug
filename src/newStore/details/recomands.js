const Recomands = () => {
  const recImgs = [
    { src: "imgs/img1.png", name: "movie 1", year: 2000 },
    { src: "imgs/img2.png", name: "movie 1", year: 2000 },
    { src: "imgs/img4.png", name: "movie 1", year: 2000 },
    { src: "imgs/img3.png", name: "movie 1", year: 2000 },
  ];
  return (
    <div>
      <h1>Recomanded for you</h1>
      <ul>
        {recImgs.map((el) => {
          // console.log(el)
          <li className="list" style={{ backgroundImage: `url(${el.src})` }}>
            <h1>
              <img src={`${el.src}`} alt="me" />
              codesmann
            </h1>
          </li>;
          console.log(el);
        })}
        <li className="list" style={{ backgroundImage: `url(imgs/img1.png)` }}>
          codesmann
        </li>
      </ul>
    </div>
  );
};
export default Recomands;
