// import { createStore } from "redux"
import { createStore } from "redux";
import rootReducer from "./Redux/mixReducer";

const store = createStore(rootReducer);

export default store;
