import { schema } from 'nexus-future'

const Event = schema.objectType({
  name: 'Event',
  definition(t) {
    t.model.id()
    t.model.status()
  },
})
