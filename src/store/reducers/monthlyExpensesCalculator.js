import * as actionTypes from "../actions";
import { v4 as uuidv4 } from "uuid";

const bgColorsArray = [
  "#161cc9",
  "#C13C37",
  "#c711d4",
  "#ced904",
  "#0dd9c4",
  "#473501",
  "#de0752",
  "#08bd53",
  "#000000",
  "#ff1c1c",
  "#9ead9c",
  "#3494ed",
  "#d68400",
  "#f7238d",
  "#a8a616",
  "#a84c16",
  "#465fb3",
  "#7d1896",
  "#37a339",
  "#9deded",
];

const initialState = [
  {
    id: uuidv4(),
    name: "Apartment",
    cost: 15000,
    bgColor: bgColorsArray.shift(),
  },
  {
    id: uuidv4(),
    name: "Travel costs",
    cost: 2500,
    bgColor: bgColorsArray.shift(),
  },
  {
    id: uuidv4(),
    name: "Groceries",
    cost: 12000,
    bgColor: bgColorsArray.shift(),
  },
  {
    id: uuidv4(),
    name: "Internet",
    cost: 650,
    bgColor: bgColorsArray.shift(),
  },
  {
    id: uuidv4(),
    name: "Cell phone",
    cost: 350,
    bgColor: bgColorsArray.shift(),
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_DELETE_EXPENSE_ITEM:
      const newData = state.filter((item) => {
        bgColorsArray.push(item.bgColor);
        return item.id !== action.id;
      });
      return [...newData];
    case actionTypes.HANDLE_ADD_EXPENSE_ITEM:
      const data = [...state];
      data.push({
        id: uuidv4(),
        name: "",
        cost: "",
        bgColor: bgColorsArray.shift(),
      });
      return [...data];
    case actionTypes.HANDLE_CHANGE_SINGLE_EXPENSE_NAME:
      const targetItem = state.find((item) => item.id === action.id);
      const targetIndex = state.findIndex((item) => item.id === action.id);
      const newArr = [...state];
      newArr[targetIndex] = {
        id: targetItem.id,
        name: action.value,
        cost: targetItem.cost,
        bgColor: targetItem.bgColor,
      };
      return [...newArr];
    case actionTypes.HANDLE_CHANGE_SINGLE_EXPENSE_COST:
      const targetItemCost = state.find((item) => item.id === action.id);
      const targetIndexCost = state.findIndex((item) => item.id === action.id);
      const newArrCost = [...state];
      newArrCost[targetIndexCost] = {
        id: targetItemCost.id,
        name: targetItemCost.name,
        cost: action.value,
        bgColor: targetItemCost.bgColor,
      };
      return [...newArrCost];
    default:
      return state;
  }
};

export default reducer;
