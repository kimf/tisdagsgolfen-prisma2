import { schema } from 'nexus-future'

export const FinalInfo = schema.objectType({
  name: 'FinalInfo',
  definition(t) {
    t.model.id()
    t.model.photo()
    t.model.winner()
    t.model.story()
  },
})

export const finalInfoQuery = schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.finalInfo()
    t.crud.finalInfos({ filtering: true, ordering: true })
  },
})

export const finalInfoMutation = schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneFinalInfo()
    t.crud.updateOneFinalInfo()
    t.crud.upsertOneFinalInfo()
    t.crud.deleteOneFinalInfo()

    t.crud.updateManyFinalInfo()
    t.crud.deleteManyFinalInfo()
  },
})
