const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { Keystone } = require("@keystonejs/keystone");
const { KnexAdapter } = require("@keystonejs/adapter-knex");
// const { NextApp } = require("@keystonejs/app-next");

const course = require("./models/course");
const event = require("./models/event");
const hole = require("./models/hole");
const player = require("./models/player");
const score = require("./models/score");
const season = require("./models/season");

const keystone = new Keystone({
  name: "Tisdagsgolfen",
  adapter: new KnexAdapter({ dropDatabase: false })
  // onConnect: async keystone => {
  //   await keystone.createItems({
  //     Season: [{ name: "2020", status: "REGULAR" }],
  //     Season: [{ name: "2019", status: "FINISHED" }]
  //   });
  // }
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
