import { User } from './users.model';

export const login = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  const isPasswordMatched = await user.isPasswordMatched(password);

  user = {
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: null,
  };

  if (user && isPasswordMatched) return res.status(200).json(user);
  else {
    res.status(401);

    throw new Error('Invalid email or password');
  }
};
