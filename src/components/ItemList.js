import { IMG_CDN_URL } from "../../public/common/constants";
import "../styles/ItemList.css"; // Import the CSS file

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div data-testid="foodItems" key={item.id} className="item-container">
          <div className="item-details">
            <div className="item-info">
              <span>{item.name}</span>
              <span>
                - ₹{item.price ? item.price / 100 : item.defaultPrice / 100}
              </span>
            </div>
            <p className="item-description">{item.description}</p>
          </div>
          <div className="item-image-container">
            <img
              src={IMG_CDN_URL + item.imageId}
              alt={item.name}
              className="item-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
