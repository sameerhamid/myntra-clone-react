import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controler = new AbortController();
    const signal = controler.signal;
    dispatch(fetchStatusAction.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(itemsActions.addInitialItems(data.items[0]));

        dispatch(fetchStatusAction.markFetchingFinished());
      });

    return () => {
      controler.abort();
    };
  }, []);

  return <></>;
};

export default FetchItems;
