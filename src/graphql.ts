import { schema } from 'nexus-future'

schema.objectType({
  name: 'Season',
  definition(t) {
    t.typeName
    t.model.id()
    t.model.status()
  },
})

schema.objectType({
  name: 'Event',
  definition(t) {
    t.model.id()
    t.model.status()
  },
})

schema.mutationType({
  definition(t) {
    t.crud.createOneSeason()
    t.crud.createOneEvent()
  },
})

schema.objectType({
  name: 'Player',
  definition(t) {
    t.model.id()
  },
})

schema.queryType({
  definition(t) {
    t.crud.seasons()
    t.crud.events()
    t.crud.players()
  },
})
