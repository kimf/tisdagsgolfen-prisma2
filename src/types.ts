import { queryType, mutationType, objectType } from 'nexus';

export const Query = queryType({
  definition(t) {
    t.crud.seasons();
    t.crud.events();
    t.crud.players();
  },
});

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneSeason();
    t.crud.createOneEvent();
  },
});

export const Season = objectType({
  name: 'Season',
  definition(t) {
    t.typeName;
    t.model.id();
    t.model.status();
  },
});

export const Event = objectType({
  name: 'Event',
  definition(t) {
    t.model.id();
    t.model.status();
  },
});

export const Player = objectType({
  name: 'Player',
  definition(t) {
    t.model.id();
  },
});
