const { Relationship, Select, Checkbox } = require("@keystonejs/fields");

module.exports = {
  name: "Event",
  fields: {
    special: { type: Checkbox, isRequired: true, defaultValue: false },
    type: {
      type: Select,
      options: ["INDIVIDUAL", "TEAM"],
      isRequired: true,
      defaultValue: "INDIVIDUAL"
    },
    scoring: {
      type: Select,
      options: ["POINTS", "STROKES"],
      isRequired: true,
      defaultValue: "POINTS"
    },
    status: {
      type: Select,
      options: ["STARTED", "FINISHED"],
      isRequired: true,
      defaultValue: "STARTED"
    },
    season: { type: Relationship, ref: "Season.events", isRequired: true },
    course: { type: Relationship, ref: "Course.events", isRequired: true },
    scores: {
      type: Relationship,
      ref: "Score.event",
      many: true
    }
  }
};
