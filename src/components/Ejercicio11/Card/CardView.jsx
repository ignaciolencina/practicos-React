import PropTypes from "prop-types";
import CardNews from "./CardNews";

const CardView = (props) => {
  const { news, isLoading } = props;

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!news.length) {
    return <div>No hay noticias disponibles para esta categoría.</div>;
  }

  return (
    <section className="mt-5 row g-4">
      {news.map((newsItem) => {
        return <CardNews key={newsItem.article_id} news={newsItem} />;
      })}
    </section>
  );
};
export default CardView;

CardView.propTypes = {
  news: PropTypes.array.isRequiered,
  isLoading: PropTypes.bool.isRequiered,
};
