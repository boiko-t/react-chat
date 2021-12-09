import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import { AuthActionType } from './user/actions';
import { AuthState, authReducer } from './user/reducer';

export interface RootState {
  auth: AuthState;
}

const reducer = combineReducers({
  auth: authReducer,
});

const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore<RootState, AuthActionType, any, any>(
  reducer,
  enhancers
);
