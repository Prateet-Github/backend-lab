import User  from '../models/user.model.js';
import { hashPassword, comparePassword } from '../utils/password.js';
import { signToken } from '../utils/jwt.js';
import { redisClient } from '../configs/redis.js';

const MAX_FAILED_ATTEMPTS = 2;
const LOCK_TIME_SECONDS = 15 * 60;

export const register = async (req, res) => {
  try {
    const {username, email, password} = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(409).json({ message: 'Username or email already in use' });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const redisKey = `login:fail:${user._id}`;

    const failedAttempts = await redisClient.get(redisKey);
    if (failedAttempts && Number(failedAttempts) >= MAX_FAILED_ATTEMPTS) {
      return res.status(403).json({
        message: "Account temporarily locked. Try again later."
      });
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      const attempts = await redisClient.incr(redisKey);

      if (attempts === 1) {
        await redisClient.expire(redisKey, LOCK_TIME_SECONDS);
      }

      return res.status(401).json({ message: "Invalid credentials" });
    }

    await redisClient.del(redisKey);

    const token = signToken({ id: user._id });

    return res.status(200).json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      },
      token
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error during login" });
  }
};

export const me = async (req, res) => {
  try {

    const userId = req.user.id;
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error('Fetch user error:', error);
    res.status(500).json({ message: 'Server error fetching user data' });
  }
};