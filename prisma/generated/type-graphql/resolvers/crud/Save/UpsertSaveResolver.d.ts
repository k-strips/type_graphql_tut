import { GraphQLResolveInfo } from "graphql";
import { UpsertSaveArgs } from "./args/UpsertSaveArgs";
import { Save } from "../../../models/Save";
export declare class UpsertSaveResolver {
    upsertSave(ctx: any, info: GraphQLResolveInfo, args: UpsertSaveArgs): Promise<Save>;
}
