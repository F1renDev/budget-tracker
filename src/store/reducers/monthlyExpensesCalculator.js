import * as actionTypes from "../actions";
import { v4 as uuidv4 } from "uuid";

const bgColorsArray = [
  "#040994",
  "#fc352d",
  "#f3ff08",
  "#23eb05",
  "#540094",
  "#ff7803",
  "#0357ff",
  "#b8006e",
  "#990c39",
  "#0d821d",
  "#00cad1",
  "#e88989",
  "#e9c5f0",
  "#5ae877",
  "#ad9c00",
  "#91061d",
  "#77b514",
  "#f7c7a8",
  "#7d2b14",
  "#f70000",
];

const initialState = [
  {
    id: uuidv4(),
    name: "Apartment",
    cost: 20000,
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
    //Getting prepopulated data for existing user
    case actionTypes.HANDLE_SET_EXPENSES_ITEMS:
      return [...action.expenseItems];
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
