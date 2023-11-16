import "./cards.css";

const Card = ({ item, type }) => {
  const addEllipsis = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className={`${type}-card`}>
      <img
        src={item.thumbnail.path + "." + item.thumbnail.extension}
        alt={item.name || item.title}
      />
      <div>
        <div>{item.name || item.title}</div>
        <p>
          {item.description &&
            addEllipsis(item.description, type === "char" ? 60 : 250)}
        </p>
      </div>
    </div>
  );
};
export default Card;
