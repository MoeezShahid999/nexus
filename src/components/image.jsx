export const Image = ({ title, largeImage, smallImage }) => {
  console.log("largeImage", largeImage);
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          {largeImage.includes("mp4") ? (
            <video src={smallImage} className="img-responsive" alt={title} />
          ) : null}
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
