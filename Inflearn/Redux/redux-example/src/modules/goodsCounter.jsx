export const addNumber = () => {
  return { type: "ADD" };
};

export const subNumber = () => {
  return { type: "SUB" };
};

const initialState = {
  stock: 10, // 재고
  goods: 1, // 구매한 개수
};

const goodsReducer = (state = initialState, action) => {
  console.log(action);
  console.log(action.type);
  console.log(state);

  switch (action.type) {
    case "ADD":
      return {
        ...state,
        stock: state.stock - 1,
        goods: state.goods + 1,
      };
    case "SUB":
      return {
        ...state,
        stock: state.stock + 1,
        goods: state.goods - 1,
      };
    default:
      return state;
  }
};

export default goodsReducer;
