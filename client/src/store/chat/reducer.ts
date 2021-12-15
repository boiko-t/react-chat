import { Conversation } from '../../types/Chat';
import {
  ChatActionType,
  CONVERSATIONS_FETCHED,
  CONVERSATION_OPENED,
} from './actions';

export interface ChatState {
  conversations: Conversation[];
  openedConversationId?: string;
}

const initialState: ChatState = {
  conversations: [],
};

export const conversationsReducer = (
  state = initialState,
  action: ChatActionType
): ChatState => {
  if (action.type === CONVERSATIONS_FETCHED) {
    if (action.payload.conversations) {
      const openedConversationId =
        state.openedConversationId || action.payload.conversations[0]._id;
      return {
        openedConversationId,
        conversations: [...action.payload.conversations],
      };
    }
  }
  if (action.type === CONVERSATION_OPENED) {
    return { ...state, openedConversationId: action.payload.openedChatId };
  }

  return state;
};
