import mongoose from 'mongoose';
import { getUserById } from './users.js';

const MessageSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    from: String,
    text: String,
  },
  { timestamps: { createdAt: 'createdAt' } }
);

const ConversationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  members: [String],
  messages: {
    type: [MessageSchema],
    default: [],
  },
});

const Conversation = mongoose.model('Conversation', ConversationSchema);
// const Message = mongoose.model('Message', MessageSchema);

export const addConversation = (
  members = ['61b1fc2eafc9338f9ee07ad8', '61b37528f9a69dd9a690a6d2']
) => {
  const conversation = new Conversation({
    _id: new mongoose.Types.ObjectId(),
    members,
    messages: [],
  });

  conversation.save(function (err) {
    if (err) return console.log(err);
  });
  return conversation.toObject();
};

export const getUsersConversations = async (userId) => {
  const doc = await Conversation.find({ members: userId }).lean().exec();

  for await (let item of doc) {
    // const item = doc[i];
    const memberId = item.members.find((id) => id !== userId);
    const member = await getUserById(memberId);
    item.conversationName = member.name;
    item.conversationPicture = member.picture;
  }

  return doc;
};
// export const getUsersConversations = async (userId) => {
//   const update = {
//     messages: [
//       {
//         _id: new mongoose.Types.ObjectId(),
//         from: '61b1fc2eafc9338f9ee07ad8',
//         text: 'Hello, Friend!',
//       },
//       {
//         _id: new mongoose.Types.ObjectId(),
//         from: '61b37528f9a69dd9a690a6d2',
//         text: 'Hello 2 u too',
//       },
//       {
//         _id: new mongoose.Types.ObjectId(),
//         from: '61b1fc2eafc9338f9ee07ad8',
//         text: 'Testing the app',
//       },
//     ],
//   };
//   const doc = await Conversation.findOneAndUpdate({ members: userId }, update, {
//     new: true,
//   });

//   console.log(doc);
//   return doc.toObject();
// };

// export const getUsersConversations = async (userId) => {
//   const update = {
//     messages: [
//       {
//         _id: new mongoose.Types.ObjectId(),
//         from: '61b1fc2eafc9338f9ee07ad8',
//         text: 'Hello, Friend!',
//       },
//       {
//         _id: new mongoose.Types.ObjectId(),
//         from: '61b37528f9a69dd9a690a6d2',
//         text: 'Hello 2 u too',
//       },
//       {
//         _id: new mongoose.Types.ObjectId(),
//         from: '61b1fc2eafc9338f9ee07ad8',
//         text: 'Testing the app',
//       },
//     ],
//   };
//   const doc = await Conversation.findOneAndUpdate({ members: userId }, update, {
//     new: true,
//   });

//   console.log(doc);
//   return doc.toObject();
// };
