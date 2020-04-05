import { schema } from 'nexus'

export const Season = schema.objectType({
  name: 'Season',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.status()
    t.model.events()
    t.model.finalInfo()
  },
})

export const seasonQuery = schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.season()
    t.crud.seasons({ filtering: true, ordering: true })
  },
})

export const seasonMutation = schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneSeason()
    t.crud.updateOneSeason()
    t.crud.deleteOneSeason()
    t.crud.upsertOneSeason()
    t.crud.updateManySeason()
    t.crud.deleteManySeason()
  },
})
