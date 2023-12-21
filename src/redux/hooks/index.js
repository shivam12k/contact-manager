import { useDispatch, useSelector } from "react-redux";
import { store } from "../store";

export const useAppDispatch=()=>useDispatch(store.dispatch);
export const useAppSelector=(selector)=>useSelector(selector);