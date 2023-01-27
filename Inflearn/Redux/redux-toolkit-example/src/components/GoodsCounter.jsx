import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, counterSlice } from "../modules/goodsCounter";
import { soldOut } from "../modules/stockCounter";

const GoodsCounter = () => {
  const { stock, goods } = useSelector((state) => state.goodsReducer);
  const { message } = useSelector((state) => state.stockReducer);

  const dispatch = useDispatch();

  const onAddNumber = () => dispatch(increment());
  const onSubNumber = () => dispatch(decrement());
  const onSoldOut = () => dispatch(soldOut());

  console.log(counterSlice.reducer);
  useEffect(() => {
    if (stock <= 0) {
      onSoldOut();
    }
  });

  return (
    <div>
      <h2>딥러닝 개발자 무료 담요</h2>
      <span>
        <strong>17,500</strong>
      </span>
      <div>
        <button type="button" onClick={onSubNumber}>
          MINUS
        </button>
        <span>{goods}</span>
        <button onClick={onAddNumber}>PLUS</button>
      </div>
      <div>
        총 수량 <strong>{goods}</strong>
      </div>
      <div>
        <strong>{goods * 17500}</strong>원
      </div>
      <div>
        재고 <strong>{stock}</strong>
      </div>
      <p />
      <strong>{message}</strong>
    </div>
  );
};

export default GoodsCounter;
