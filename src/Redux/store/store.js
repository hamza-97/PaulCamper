// import { createStore } from "redux";
// import reducer from "../reducers/reducers";
// const store = createStore(taskReducer);
// export default store;

import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers/reducers";
import rootSaga from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
