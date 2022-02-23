import { GraphQLResolveInfo } from "graphql";
import { CreateManySearchArgs } from "./args/CreateManySearchArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySearchResolver {
    createManySearch(ctx: any, info: GraphQLResolveInfo, args: CreateManySearchArgs): Promise<AffectedRowsOutput>;
}
