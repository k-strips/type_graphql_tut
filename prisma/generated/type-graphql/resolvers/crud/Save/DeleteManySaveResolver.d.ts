import { GraphQLResolveInfo } from "graphql";
import { DeleteManySaveArgs } from "./args/DeleteManySaveArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySaveResolver {
    deleteManySave(ctx: any, info: GraphQLResolveInfo, args: DeleteManySaveArgs): Promise<AffectedRowsOutput>;
}
