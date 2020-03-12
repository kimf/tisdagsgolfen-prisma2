const { Relationship, Integer, Float } = require("@keystonejs/fields");

module.exports = {
  name: "Score",
  fields: {
    resultValue: { type: Float, isRequired: true },
    eventPoints: { type: Float, isRequired: true },
    kr: { type: Integer, isRequired: true, defaultValue: 0 },
    beers: { type: Float, isRequired: true, defaultValue: 0 },
    event: { type: Relationship, ref: "Event.scores", isRequired: true },
    player: { type: Relationship, ref: "Player.scores", isRequired: true }
  }
};
