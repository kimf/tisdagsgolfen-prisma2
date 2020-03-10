const { Relationship, Integer } = require("@keystonejs/fields");

module.exports = {
  name: "Hole",
  fields: {
    course: { type: Relationship, ref: "Course", isRequired: true },
    index: { type: Integer, isRequired: true },
    number: { type: Integer, isRequired: true },
    par: { type: Integer, isRequired: true }
  }
};
