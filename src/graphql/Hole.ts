import { schema } from 'nexus'

export const Hole = schema.objectType({
  name: 'Hole',
  definition(t) {
    t.model.id()
    t.model.index()
    t.model.number()
    t.model.par()
    t.model.course()
  },
})

export const holeQuery = schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.hole()
    t.crud.holes({ filtering: true, ordering: true })
  },
})

export const holeMutation = schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneHole()
    t.crud.updateOneHole()
    t.crud.upsertOneHole()
    t.crud.deleteOneHole()

    t.crud.updateManyHole()
    t.crud.deleteManyHole()
  },
})
