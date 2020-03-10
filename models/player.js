// first_name, last_name, photo
const { Text } = require("@keystonejs/fields");

module.exports = {
  name: "Player",
  fields: {
    firstName: { type: Text, isRequired: true },
    lastName: { type: Text, isRequired: true },
    photo: { type: Text }
  }
};
