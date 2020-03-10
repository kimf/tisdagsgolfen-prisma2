const { Relationship, Text, Integer } = require("@keystonejs/fields");

module.exports = {
  name: "Course",
  fields: {
    club: { type: Text, isRequired: true },
    name: { type: Text, isRequired: true },
    par: { type: Integer, isRequired: true },
    holes: { type: Relationship, ref: "Hole", many: true },
    events: { type: Relationship, ref: "Event", many: true }
  }
};
