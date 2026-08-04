import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "change_this_secret_in_production";

export interface AuthRequest extends Request {
  user: {
    id: string;
  };
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
      return;
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const decoded = jwt.verify(token, JWT_SECRET) as {
      userId: string;
    };

    req.user = {
      id: decoded.userId,
    };

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorized.",
    });
  }
}