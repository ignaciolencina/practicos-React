import PropTypes from "prop-types";

import "./style.css";

const CardNews = (props) => {
  const { news } = props;

  const trimDescription = (description) => {
    if (description.length > 70) {
      return description.substring(0, 70) + "...";
    }
    return description;
  };
  return (
    <article className="col-sm-3">
      <div className="card">
        <img src={news.image_url} className="card-img-top" alt={news.keyword} />
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
      article_id: PropTypes.string,
      image_url: PropTypes.string,
      keyword: PropTypes.string,
      title: PropTypes.string,
      pubDate: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
    }).isRequired,
  };
