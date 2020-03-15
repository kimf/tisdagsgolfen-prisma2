import { schema } from 'nexus-future'

const Player = schema.objectType({
  name: 'Player',
  definition(t) {
    t.model.id()
  },
})
