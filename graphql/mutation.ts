import { schema } from 'nexus-future'

const Mutation = schema.mutationType({
  definition(t) {
    t.crud.createOneSeason()
    t.crud.createOneEvent()
  },
})
