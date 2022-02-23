import { GraphQLResolveInfo } from "graphql";
import { FindManySaveArgs } from "./args/FindManySaveArgs";
import { Save } from "../../../models/Save";
export declare class FindManySaveResolver {
    saves(ctx: any, info: GraphQLResolveInfo, args: FindManySaveArgs): Promise<Save[]>;
}
