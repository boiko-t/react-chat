import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { AuthActionType } from './auth/actions';
import { AuthState, authReducer } from './auth/reducer';
import { ConversationActionType } from './conversation/actions';
import {
  conversationsReducer,
  ConversationsState,
} from './conversation/reducer';
import { UsersActionType } from './users/actions';
import { usersReducer, UsersState } from './users/reducer';

export interface RootState {
  auth: AuthState;
  users: UsersState;
  conversations: ConversationsState;
}

const reducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  conversations: conversationsReducer,
});

const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

type CombinedActionType =
  | AuthActionType
  | UsersActionType
  | ConversationActionType;

export const store = createStore<RootState, CombinedActionType, any, any>(
  reducer,
  enhancers
);
