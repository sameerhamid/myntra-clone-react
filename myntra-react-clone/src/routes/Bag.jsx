import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const items = useSelector((store) => store.items);
  const bagItems = useSelector((state) => state.bag);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem item={item} key={item.id} />
          ))}
        </div>

        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
