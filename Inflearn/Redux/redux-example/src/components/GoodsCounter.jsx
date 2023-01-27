import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, subNumber } from "../modules/goodsCounter";
import { soldOut } from "../modules/stockCounter";

const GoodsCounter = () => {
  const { stock, goods } = useSelector((state) => ({
    stock: state.goodsReducer.stock,
    goods: state.goodsReducer.goods,
  }));
  const { message } = useSelector((state) => ({
    message: state.stockReducer.message,
  }));

  const dispatch = useDispatch();

  const onAddNumber = () => dispatch(addNumber());
  const onSubNumber = () => dispatch(subNumber());
  const onSoldOut = () => dispatch(soldOut());

  useEffect(() => {
    if (stock <= 0) {
      onSoldOut();
    }
  }, [stock]);

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
