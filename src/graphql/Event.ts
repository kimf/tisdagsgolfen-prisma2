import { schema } from 'nexus-future'

export const Event = schema.objectType({
  name: 'Event',
  definition(t) {
    t.model.id()
    t.model.special()
    t.model.scoring()
    t.model.status()
    t.model.type()
    t.model.course()
    t.model.season()
    t.model.scores()
  },
})

export const eventQuery = schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.event()
    t.crud.events({ filtering: true, ordering: true })
  },
})

export const eventMutation = schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneEvent()
    t.crud.updateOneEvent()
    t.crud.upsertOneEvent()
    t.crud.deleteOneEvent()

    t.crud.updateManyEvent()
    t.crud.deleteManyEvent()
  },
})
