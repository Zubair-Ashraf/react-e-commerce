import { isEqual } from 'lodash';
import { User } from './users.model';
import generateToken from '../../utils/generateToken';

//login
export const login = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    res.status(401);

    throw new Error('Invalid email or password');
  }

  const isPasswordMatched = await user.isPasswordMatched(password);

  user = {
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken({ id: user._id, isAdmin: user.isAdmin }),
  };

  if (user && isPasswordMatched) return res.status(200).json(user);
  else {
    res.status(401);

    throw new Error('Invalid email or password');
  }
};

//register
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    res.status(400);

    throw new Error('This email already exist');
  }

  let user = await User.create({ name, email, password });

  if (!user) {
    res.status(400);

    throw new Error('User registration failed');
  }

  user = {
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken({ id: user._id, isAdmin: user.isAdmin }),
  };

  res.status(200).json(user);
};

//getProfile
export const getProfile = async (req, res) => {
  const { id } = req.body.user;

  const user = await User.findById(id).select('-password');

  res.status(200).send(user);
};

//updateProfile
export const updateProfile = async (req, res) => {
  const { id } = req.body.user;

  const { name, email } = req.body || {};

  const currentUser = await User.findById(id);

  if (!currentUser) {
    res.status(404);

    throw new Error('User not found');
  }

  const userExist = await User.findOne({ email });

  if (userExist && !isEqual(currentUser.email, email)) {
    res.status(400);

    throw new Error('This email already exist');
  }

  currentUser.name = name || currentUser.name;
  currentUser.email = email || currentUser.email;

  const updatedUser = await currentUser.save();

  res.status(200).send(updatedUser);
};

//changePassword
export const changePassword = async (req, res) => {
  const { id } = req.body.user;

  const { currentPassword, newPassword } = req.body || {};

  const currentUser = await User.findById(id);

  if (!currentUser) {
    res.status(404);

    throw new Error('User not found');
  }

  const isPasswordMatched = await currentUser.isPasswordMatched(
    currentPassword
  );

  if (!isPasswordMatched) {
    res.status(400);

    throw new Error('Invalid current password provided');
  }

  currentUser.password = newPassword;

  await currentUser.save();

  res.status(200).json({ message: 'Your password has been changed' });
};
