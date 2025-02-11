import jwt from "jsonwebtoken";


export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  
  const user = { _id: "dummyId", username, email };

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

 
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600000, 
  });

  res.status(201).json({ message: "User registered successfully", user });
};


export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  
  if (email && password) {
    const user = { _id: "dummyId", email };

   
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });

    res.status(200).json({ message: "User logged in successfully", token });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
};
