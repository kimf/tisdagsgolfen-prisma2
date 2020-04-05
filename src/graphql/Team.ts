import { schema } from 'nexus'

export const Team = schema.objectType({
  name: 'Team',
  definition(t) {
    t.model.id()
    t.model.players()
  },
})

export const teamQuery = schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.team()
    t.crud.teams({ filtering: true, ordering: true })
  },
})

export const teamMutation = schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneTeam()
    t.crud.updateOneTeam()
    t.crud.upsertOneTeam()
    t.crud.deleteOneTeam()

    t.crud.updateManyTeam()
    t.crud.deleteManyTeam()
  },
})
