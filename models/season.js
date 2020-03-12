const { Text, Relationship, Select } = require("@keystonejs/fields");

module.exports = {
  name: "Season",
  fields: {
    name: { type: Text, isRequired: true, isUnique: true },
    status: {
      type: Select,
      options: ["REGULAR", "FINALS", "FINISHED"],
      isRequired: true,
      defaultValue: "REGULAR"
    },
    events: {
      type: Relationship,
      ref: "Event.season",
      many: true
    },
    // TODO: move to FinalInfo model?
    photo: { type: Text },
    winner: { type: Text },
    finalInfo: { type: Text, isMultiline: true } // type: Content...https://www.keystonejs.com/keystonejs/field-content/
  }
};
