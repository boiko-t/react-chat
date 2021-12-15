import { APIError } from '../../types/APIError';
import { getConversations } from '../../dal/conversations';
import { Conversation } from '../../types/Chat';

export const CONVERSATIONS_FETCHED = 'CONVERSATIONS_FETCHED';
export const CONVERSATION_OPENED = 'CONVERSATION_OPENED';

export interface ChatActionType {
  type: 'CONVERSATIONS_FETCHED' | 'CONVERSATION_OPENED';
  payload: {
    conversations?: Conversation[];
    openedChatId?: string;
  };
}

export const fetchConversations = () => async (dispatch) => {
  try {
    const response = (await getConversations()) as Conversation[];
    dispatch(conversationsFetchedAction(response));
  } catch (e) {
    const error = e as APIError;
    console.log(error.message);
    dispatch(conversationsFetchedAction([]));
  }
};

export const openChat = (id) => async (dispatch) => {
  dispatch(chatOpenedAction(id));
};

const conversationsFetchedAction: (
  conversations: Conversation[]
) => ChatActionType = (conversations) => {
  return {
    type: CONVERSATIONS_FETCHED,
    payload: {
      conversations,
    },
  };
};

const chatOpenedAction: (openedChatId: string) => ChatActionType = (
  openedChatId
) => {
  return {
    type: CONVERSATION_OPENED,
    payload: {
      openedChatId,
    },
  };
};
