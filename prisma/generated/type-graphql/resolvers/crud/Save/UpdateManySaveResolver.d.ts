import { GraphQLResolveInfo } from "graphql";
import { UpdateManySaveArgs } from "./args/UpdateManySaveArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySaveResolver {
    updateManySave(ctx: any, info: GraphQLResolveInfo, args: UpdateManySaveArgs): Promise<AffectedRowsOutput>;
}
