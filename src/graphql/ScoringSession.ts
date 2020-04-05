import { schema } from 'nexus'

export const ScoringSession = schema.objectType({
  name: 'ScoringSession',
  definition(t) {
    t.model.id()
    t.model.event()
    t.model.currentHole()
    t.model.players()
    t.model.teams()
  },
})

export const scoringSessionQuery = schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.scoringSession()
    t.crud.scoringSessions({ filtering: true, ordering: true })
  },
})

export const scoringSessionMutation = schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneScoringSession()
    t.crud.updateOneScoringSession()
    t.crud.upsertOneScoringSession()
    t.crud.deleteOneScoringSession()

    t.crud.updateManyScoringSession()
    t.crud.deleteManyScoringSession()
  },
})
