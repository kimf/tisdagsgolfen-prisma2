import { schema } from 'nexus-future'

export const Player = schema.objectType({
  name: 'Player',
  definition(t) {
    t.model.id()
    t.model.firstName()
    t.model.lastName()
    t.model.photo()
  },
})

export const playerQuery = schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.player()
    t.crud.players({ filtering: true, ordering: true })
  },
})

export const playerMutation = schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnePlayer()
    t.crud.updateOnePlayer()
    t.crud.upsertOnePlayer()
    t.crud.deleteOnePlayer()

    t.crud.updateManyPlayer()
    t.crud.deleteManyPlayer()
  },
})
