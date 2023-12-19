import { User } from '../db/models/User';
import { uploadOnCloudinary } from '../utils/cloudinary';

async function registerUser(req, res) {
  const { userName, email, fullName, password } = req.body;

  const arr = [userName, email, fullName, password];

  for(const field of arr) {
    if(!field || field.trim()===''){
        throw new Error('All fields are required');
    }
  }

  const existingUser = await User.findOne({
    $or: [{ userName }, { fullName }],
  });

  if (existingUser) {
    throw new Error('User already exists');
  }

  let avatarLocalPath;
  //const coverImageLocalPath = req.files?.coverImage[0]?.path;

  let coverImageLocalPath;
  if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }

  if (req.files && req.files.avatar[0] && req.files.avatar[0].path) {
    avatarLocalPath = req.files.avatar[0].path;
  } else {
    throw new ApiError(400, 'Avatar file is required');
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, 'Avatar file is required');
  }

  const coverImageUrl = coverImage ? coverImage.url : '';

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImageUrl,
    email,
    password,
    username: userName.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select('-password -refreshToken');

  if (!createdUser) {
    throw new Error('User is not created, please try again');
  }

  return createdUser;
}

module.exports = { registerUser };
