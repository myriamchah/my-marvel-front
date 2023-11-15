import "./cards.css";

const Card = ({ item, type }) => {
  return (
    <div className={`${type}-card`}>
      <img
        src={item.thumbnail.path + "." + item.thumbnail.extension}
        alt={item.name || item.title}
      />
      <div>
        <div>{item.name || item.title}</div>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
export default Card;
