const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { Keystone } = require("@keystonejs/keystone");
const { KnexAdapter } = require("@keystonejs/adapter-knex");

const course = require("./models/course");
const event = require("./models/event");
const hole = require("./models/hole");
const player = require("./models/player");
const score = require("./models/score");
const season = require("./models/season");

const keystone = new Keystone({
  name: "Tisdagsgolfen",
  adapter: new KnexAdapter({ dropDatabase: true }),
  onConnect: async keystone => {
    await keystone.createItems({
      Season: [{ name: "2020", status: "REGULAR" }]
    });
  }
});

[course, event, hole, player, score, season].forEach(model => {
  keystone.createList(model.name, {
    fields: model.fields
  });
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ enableDefaultRoute: false })
    // new NextApp({ dir: "app" })
  ]
};
