const { Relationship, Integer, Float } = require("@keystonejs/fields");

module.exports = {
  name: "Score",
  fields: {
    resultValue: { type: Float, isRequired: true },
    eventPoints: { type: Float, isRequired: true },
    kr: { type: Integer, isRequired: true },
    beers: { type: Float, isRequired: true },
    event: { type: Relationship, ref: "Event", isRequired: true },
    player: { type: Relationship, ref: "Player", isRequired: true }
  }
};
