import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "change_this_secret_in_production";

export const generateToken = (userId: string) => {
  return jwt.sign(
    { userId },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET) as {
    userId: string;
  };
};