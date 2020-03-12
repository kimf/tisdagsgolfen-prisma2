const { Relationship, Text, Integer } = require("@keystonejs/fields");

module.exports = {
  name: "Course",
  fields: {
    club: { type: Text, isRequired: true },
    name: { type: Text, isRequired: true },
    par: { type: Integer, isRequired: true, defaultValue: 72 },
    holes: { type: Relationship, ref: "Hole.course", many: true },
    events: { type: Relationship, ref: "Event.course", many: true }
  }
};
