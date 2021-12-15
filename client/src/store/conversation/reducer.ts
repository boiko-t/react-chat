import { Conversation } from '../../types/Chat';
import { ConversationActionType, CONVERSATIONS_FETCHED } from './actions';

export type ConversationsState = Conversation[];

export const conversationsReducer = (
  state = [] as ConversationsState,
  action: ConversationActionType
): ConversationsState => {
  if (action.type === CONVERSATIONS_FETCHED) {
    return [...action.payload.conversations];
  }

  return state;
};
