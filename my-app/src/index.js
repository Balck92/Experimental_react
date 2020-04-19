import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';
import CustomButton from './components/CustomButton';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const action = (type) => store.dispatch({ type });
function render() {
    ReactDOM.render(
        <div>
            <CustomButton
                value={store.getState()}
                onIncrement={() => action("INCREMENT")}
                onDecrement={() => action("DECREMENT")}
                onIncrementAsync={() => action("INCREMENT_ASYNC")}
                onDecrementAsync={() => action("DECREMENT_ASYNC")}
            ></CustomButton>
        </div>
        , document.getElementById('root'));
}

render();
store.subscribe(render);
serviceWorker.unregister();
