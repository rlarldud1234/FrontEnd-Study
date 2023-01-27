export const sale = () => {
  return { type: "SALE" };
};

export const soldOut = () => {
  return { type: "SOLD_OUT" };
};

const initialState = {
  message: "판매중!!!",
};

const stockReducer = (state = initialState, action) => {
  console.log(action);
  console.log(action.type);
  switch (action.type) {
    case "SALE":
      return {
        ...state,
        message: "할인 행사 중입니다.",
      };
    case "SOLD_OUT":
      return {
        ...state,
        message: "남아 있는 제고가 없습니다..",
      };
    default:
      return state;
  }
};

export default stockReducer;
