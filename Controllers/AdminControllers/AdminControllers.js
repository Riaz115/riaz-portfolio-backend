//requiring
const forServiceSave = require("../../Models/ServicesShema");
const forContacts = require("../../Models/ContactsSceham");
const forUserData = require("../../Models/RegisterSchema");
const contactSchema = require("../../Models/ContactsSceham");

//_________________________________

// all get functions

//_________________________________

//this  is for the get contacts
const forGetContact = async (req, res) => {
  try {
    const getContactData = await forContacts.find();
    res.status(200).json({ getContactData });
  } catch (err) {
    res.status(500).json({
      msg: `there is error in the admin contact create function ${err} `,
    });
  }
};

//this is for the get users
const forGetUsers = async (req, res) => {
  try {
    const getUser = await forUserData.find().select({ password: 0 });
    res.status(200).json({ getUser });
  } catch (err) {
    res.status(500).json({
      msg: `there is error in the admin user get  function ${err} `,
    });
  }
};

//this is get for update servcies
const getForUpdateServices = async (req, res) => {
  const _id = req.params.id;
  try {
    const myService = await forServiceSave.findById({ _id });
    res.status(200).json({ myService });
  } catch (err) {
    res.status(500).json({
      msg: `there is error in the admin services get for edit  function ${err} `,
    });
  }
};

//this is for the get user data with id
const forUserGet = async (req, res) => {
  const _id = req.params.id;
  try {
    const myUser = await forUserData.findById({ _id });
    res.status(200).json({ myUser });
  } catch (err) {
    res.status(500).json({
      msg: `there is error in the admin user get with id  function ${err} `,
    });
  }
};

//_________________________________

// all post functions

//_________________________________

//this is for the services page to create post
const createService = async (req, res) => {
  const { title, subtitle, description, amountFrom, amountTo } = req.body;
  try {
    const myCreatedService = await forServiceSave.create({
      title,
      subtitle,
      description,
      amountFrom,
      amountTo,
    });
    res.status(201).json({ myCreatedService });
  } catch (err) {
    res
      .status(500)
      .json({ msg: `there is error in the service create function ${err} ` });
  }
};

//_________________________________

// all update functions

//_________________________________

//this is for services update
const forServiceUpdate = async (req, res) => {
  const _id = req.params.id;
  try {
    const updateService = await forServiceSave.findByIdAndUpdate(
      { _id },
      { $set: req.body }
    );
    res.status(201).json({ updateService });
  } catch (err) {
    res
      .status(500)
      .json({ msg: `there is error in the service update function ${err} ` });
  }
};

//this is for update user
const forUserUpdate = async (req, res) => {
  const _id = req.params.id;
  try {
    const updatedUser = await forUserData.findByIdAndUpdate(
      { _id },
      { $set: req.body }
    );

    res.status(201).json({ updatedUser });
  } catch (err) {
    res
      .status(500)
      .json({ msg: `there is error in the user update function ${err} ` });
  }
};

//_________________________________

// all delete functions

//_________________________________

//this is for the service delete
const forServiceDelete = async (req, res) => {
  const _id = req.params.id;
  try {
    const forDelete = await forServiceSave.findByIdAndDelete({ _id });
    res.status(200).json({ forDelete });
  } catch (err) {
    res.status(500).json({
      msg: `there is error in the admin servcie delete function ${err} `,
    });
  }
};

//this is for the user delete
const forUserDelete = async (req, res) => {
  const _id = req.params.id;
  try {
    const deleteUser = await forUserData.findByIdAndDelete({ _id });
    res.status(200).json({ deleteUser });
  } catch (err) {
    res.status(500).json({
      msg: `there is error in the admin user delete function ${err} `,
    });
  }
};

//this is for contacts delete
const forContactDelete = async (req, res) => {
  const _id = req.params.id;
  try {
    const deleteContact = await contactSchema.findByIdAndDelete({ _id });
    res.status(200).json({ deleteContact });
  } catch (err) {
    res.status(500).json({
      msg: `there is error in the admin contact delete function ${err} `,
    });
  }
};

//exporting
module.exports = {
  createService,
  forGetContact,
  forServiceDelete,
  forGetUsers,
  forUserDelete,
  forContactDelete,
  getForUpdateServices,
  forServiceUpdate,
  forUserGet,
  forUserUpdate,
};
