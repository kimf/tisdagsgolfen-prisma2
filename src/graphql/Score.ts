import { schema } from 'nexus'

export const Score = schema.objectType({
  name: 'Score',
  definition(t) {
    t.model.id()
    t.model.resultValue()
    t.model.eventPoints()
    t.model.event()
    t.model.player()
    t.model.beers()
    t.model.kr()
  },
})

export const scoreQuery = schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.score()
    t.crud.scores({ filtering: true, ordering: true })
  },
})

export const scoreMutation = schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneScore()
    t.crud.updateOneScore()
    t.crud.upsertOneScore()
    t.crud.deleteOneScore()

    t.crud.updateManyScore()
    t.crud.deleteManyScore()
  },
})
