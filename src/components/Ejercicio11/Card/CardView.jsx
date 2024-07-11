import PropTypes from "prop-types";
import CardNews from "./CardNews";

const CardView = (props) => {
  const { news } = props;
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
};
