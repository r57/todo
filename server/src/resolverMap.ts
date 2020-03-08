// resolverMap.ts
import { IResolvers } from 'graphql-tools'
const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      console.log(args)

      return `👋 Hello world! 👋`
    },
  },
}
export default resolverMap
