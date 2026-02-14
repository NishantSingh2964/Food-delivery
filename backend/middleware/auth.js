import jwt from "jsonwebtoken";

const authmiddleware = async (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.json({
      success: false,
      message: "Not authorized, Login again!"
    });
  }

  try {
    const pureToken = token.startsWith("Bearer ")
      ? token.split(" ")[1]
      : token;

    const token_decode = jwt.verify(pureToken, process.env.JWT_SECRET);

    req.userId = token_decode.id; // ✅ FIX IS HERE
    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Invalid token"
    });
  }
};

export default authmiddleware;
