import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";
import { MdAddCircleOutline, MdDelete } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const elementFound = bag.indexOf(item.id) >= 0;
  console.log(elementFound);
  const handleAddToBag = (id) => {
    console.log(id);
    dispatch(bagAction.addToBag(id));
  };

  const handleRemoveFromBag = (id) => {
    console.log(id);
    dispatch(bagAction.removeFromBag(id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item?.image} alt="item image" />
      <div className="rating">
        {item?.rating?.stars} ⭐ | {item?.rating?.count}
      </div>
      <div className="company-name">{item?.company}</div>
      <div className="item-name">{item?.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item?.current_price}</span>
        <span className="original-price">Rs {item?.original_price}</span>
        <span className="discount">({item?.discount_percentage}% OFF)</span>
      </div>

      {elementFound ? (
        <button
          className="btn btn-add-bag btn-danger"
          onClick={() => handleRemoveFromBag(item.id)}>
          <MdDelete />
          Remove from Bag
        </button>
      ) : (
        <button
          className="btn btn-add-bag btn-success"
          onClick={() => handleAddToBag(item.id)}>
          <MdAddCircleOutline />
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
