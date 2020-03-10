const { Relationship, Select, Checkbox } = require("@keystonejs/fields");

module.exports = {
  name: "Event",
  fields: {
    special: { type: Checkbox, isRequired: true },
    type: {
      type: Select,
      options: ["INDIVIDUAL", "TEAM"],
      isRequired: true
    },
    scoring: {
      type: Select,
      options: ["POINTS", "STROKES"],
      isRequired: true
    },
    status: {
      type: Select,
      options: ["STARTED", "FINISHED"],
      isRequired: true
    },
    season: { type: Relationship, ref: "Season", isRequired: true },
    course: { type: Relationship, ref: "Course", isRequired: true }
  }
};
