import { schema } from 'nexus'

export const Course = schema.objectType({
  name: 'Course',
  definition(t) {
    t.model.id()
    t.model.club()
    t.model.name()
    t.model.par()
    t.model.events()
    t.model.holes()
  },
})

export const courseQuery = schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.course()
    t.crud.courses({ filtering: true, ordering: true })
  },
})

export const courseMutation = schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCourse()
    t.crud.updateOneCourse()
    t.crud.upsertOneCourse()
    t.crud.deleteOneCourse()

    t.crud.updateManyCourse()
    t.crud.deleteManyCourse()
  },
})
