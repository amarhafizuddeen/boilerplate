const axios = require("axios");
const { BadRequestError } = require("../../../errors");

const parseMessage = (message) => {
  switch (message) {
    case `This user ID already exists. Please try logging in.`:
      return `User with this email has already been created. Please try logging in.`;
    default:
      return message;
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    throw new BadRequestError(`email is required`);
  }

  if (!password) {
    throw new BadRequestError(`password is required`);
  }

  const response = await axios.post("http://localhost:8080/rest/v2/admin/users/login", req.body);

  if (response.data.success) {
    return res.send({
      success: true,
      message: response.data.message,
      data: response.data.data,
    });
  }

  return res.status(400).send({
    success: false,
    message: `Invalid credentials`,
  });
};

exports.logout = async (req, res) => {
  const response = await axios.post("http://localhost:8080/rest/v2/admin/users/logout", {}, { headers: req.headers });

  if (response.data.success) {
    return res.send({
      success: true,
      message: response.data.message,
    });
  }

  return res.status(400).send({
    success: false,
    message: response.data.message,
  });
};

exports.validate = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new BadRequestError(`email is required`);
  }

  const response = await axios.post("http://localhost:8080/rest/v2/admin/users/validate_user", req.body);

  if (response.data.success) {
    return res.send({
      success: true,
      message: response.data.message,
      data: response.data.data,
    });
  }

  return res.status(400).send({
    success: false,
    message: response.data.message,
  });
};
