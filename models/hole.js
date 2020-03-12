const { Relationship, Integer } = require("@keystonejs/fields");

module.exports = {
  name: "Hole",
  fields: {
    index: { type: Integer, isRequired: true },
    number: { type: Integer, isRequired: true },
    par: { type: Integer, isRequired: true },
    course: { type: Relationship, ref: "Course.holes", isRequired: true }
  }
};
