import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { AuthActionType } from './auth/actions';
import { AuthState, authReducer } from './auth/reducer';
import { ChatActionType } from './chat/actions';
import { conversationsReducer, ChatState } from './chat/reducer';
import { UsersActionType } from './users/actions';
import { usersReducer, UsersState } from './users/reducer';

export interface RootState {
  auth: AuthState;
  users: UsersState;
  chat: ChatState;
}

const reducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  chat: conversationsReducer,
});

const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

type CombinedActionType = AuthActionType | UsersActionType | ChatActionType;

export const store = createStore<RootState, CombinedActionType, any, any>(
  reducer,
  enhancers
);
