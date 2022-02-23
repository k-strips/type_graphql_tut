import { GraphQLResolveInfo } from "graphql";
import { CreateManySaveArgs } from "./args/CreateManySaveArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySaveResolver {
    createManySave(ctx: any, info: GraphQLResolveInfo, args: CreateManySaveArgs): Promise<AffectedRowsOutput>;
}
