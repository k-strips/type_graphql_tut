import { GraphQLResolveInfo } from "graphql";
import { FindFirstSaveArgs } from "./args/FindFirstSaveArgs";
import { Save } from "../../../models/Save";
export declare class FindFirstSaveResolver {
    findFirstSave(ctx: any, info: GraphQLResolveInfo, args: FindFirstSaveArgs): Promise<Save | null>;
}
