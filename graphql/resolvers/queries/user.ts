import User from "@/mongoose/model/user";

export const userQuery = async () => {
  const users = await User.find();
  return users;
};
