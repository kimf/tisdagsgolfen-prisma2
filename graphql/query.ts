import { schema } from 'nexus-future'

const Query = schema.queryType({
  definition(t) {
    t.crud.seasons()
    t.crud.events()
    t.crud.players()
  },
})
