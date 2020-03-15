import { schema } from 'nexus-future'

const Season = schema.objectType({
  name: 'Season',
  definition(t) {
    t.typeName
    t.model.id()
    t.model.status()
  },
})
