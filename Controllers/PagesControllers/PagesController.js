//requiring
const UsersData = require("../../Models/RegisterSchema");
const contactSchema = require("../../Models/ContactsSceham");
const servicesData = require("../../Models/ServicesShema");

// ************************
// all get functions
// ************************

//this is for the home section
const home = (req, res) => {
  res.send("i am home section with controllers  ");
};

//this is for the get services
const forGetServices = async (req, res) => {
  try {
    const services = await servicesData.find();
    res.status(200).json({ services });
  } catch (err) {
    res.status(500).json({ msg: "server error in services function", err });
  }
};

//this is for user get
const forUserGet = async (req, res) => {
  const AuthUser = req.user;

  try {
    res.status(200).json({ AuthUser });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "server error in users auth function function", err });
  }
};

// ************************
// all post functions
// ************************

//this is for the registration function
const register = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    const userExist = await UsersData.findOne({ email });
    if (userExist) {
      res.status(401).json({ emailmsg: "email already exists" });
    } else {
      const createdUser = await UsersData.create({
        name,
        email,
        phone,
        password,
      });

      res.status(201).json({
        msg: createdUser,
        userId: createdUser._id.toString(),
        token: await createdUser.generateToken(),
      });
    }
  } catch (err) {
    res.status(500).json({ msg: "server error in register function", err });
  }
};

//this is for the login part
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const findUser = await UsersData.findOne({ email });

    if (!findUser) {
      res.status(401).json({ emailmsg: "Email not Exists" });
    } else {
      const forCompPassword = await findUser.ComparePassword(password);
      if (forCompPassword) {
        res.status(201).json({
          msg: "login successfully",
          token: await findUser.generateToken(),
        });
      } else {
        res.status(401).json({ msg: "incorrect password" });
      }
    }
  } catch (err) {
    res.status(500).json({ msg: "server error in login function", err });
  }
};

//this is for the contacts
const forContacts = async (req, res) => {
  const { name, email, msg } = req.body;
  try {
    const saveContact = await contactSchema.create({ name, email, msg });
    res.status(201).json({ saveContact });
  } catch (err) {
    res.status(500).json({ msg: "server error in contact function", err });
  }
};

//exporting
module.exports = {
  home,
  register,
  login,
  forContacts,
  forGetServices,
  forUserGet,
};
