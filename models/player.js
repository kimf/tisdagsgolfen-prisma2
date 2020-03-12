const { Text, Relationship } = require("@keystonejs/fields");

module.exports = {
  name: "Player",
  fields: {
    firstName: { type: Text, isRequired: true },
    lastName: { type: Text, isRequired: true },
    photo: { type: Text },
    scores: {
      type: Relationship,
      ref: "Score.player",
      many: true
    }
  }
};
