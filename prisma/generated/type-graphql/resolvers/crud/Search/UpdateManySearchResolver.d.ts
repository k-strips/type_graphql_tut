import { GraphQLResolveInfo } from "graphql";
import { UpdateManySearchArgs } from "./args/UpdateManySearchArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySearchResolver {
    updateManySearch(ctx: any, info: GraphQLResolveInfo, args: UpdateManySearchArgs): Promise<AffectedRowsOutput>;
}
