import { APIError } from '../../types/APIError';
import { getConversations } from '../../dal/conversations';
import { Conversation } from '../../types/Chat';

export const CONVERSATIONS_FETCHED = 'CONVERSATIONS_FETCHED';

export interface ConversationActionType {
  type: 'CONVERSATIONS_FETCHED';
  payload: {
    conversations: Conversation[];
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

const conversationsFetchedAction: (
  conversations: Conversation[]
) => ConversationActionType = (conversations) => {
  return {
    type: CONVERSATIONS_FETCHED,
    payload: {
      conversations,
    },
  };
};
