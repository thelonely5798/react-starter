import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { counterReducer } from "../redux/counterSlice";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({thunk:false}), sagaMiddleware];

const store = configureStore({
    reducer:{
        counter: counterReducer,
    },
    middleware:middleware,
})

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store;
