import mongoose from 'mongoose';

const userScheme = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  picture: String,
});

const User = mongoose.model('User', userScheme);

export const addUserIfNotExists = async ({ name, email, picture }) => {
  const user = await User.find({ email }).exec();
  if (!user.length) {
    return addUser(name, email, picture);
  } else {
    return user[0].toObject();
  }
};

const addUser = (name, email, picture) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name,
    email,
    picture,
  });

  user.save(function (err) {
    if (err) return console.log(err);
  });
  return user.toObject();
};

export const getUserById = async (userID) => {
  return await User.findById(userID, '_id name email picture', {
    lean: true,
  }).exec();
};
