import PropTypes from "prop-types";

import "./style.css";

const CardNews = (props) => {
  const { news } = props;

  const replaceImage = (image_url) => {
    if (image_url === null) {
      return (
        <img
          src="https://e7.pngegg.com/pngimages/829/733/png-clipart-logo-brand-product-trademark-font-not-found-logo-brand.png"
          alt="Imagen no encontrada"
        />
      );
    }
    return image_url;
  };
  const trimDescription = (description) => {
    if (description && description.length > 70) {
      return description.substring(0, 70) + "...";
    }
    return description || "No se encontro el resumen de esta noticia";
  };
  return (
    <article className="col-sm-3">
      <div className="card">
        <img
          src={replaceImage(news.image_url)}
          className="card-img-top"
          alt={news.keywords}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.pubDate}</p>
            <p className="card-text">{trimDescription(news.description)}</p>
          </div>
          <div>
            <a
              href={news.link}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer más
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
export default CardNews;

CardNews.propTypes = {
  news: PropTypes.shape({
    image_url: PropTypes.string,
    keywords: PropTypes.string,
    title: PropTypes.string.isRequired,
    pubDate: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
