import { GraphQLResolveInfo } from "graphql";
import { UpdateSaveArgs } from "./args/UpdateSaveArgs";
import { Save } from "../../../models/Save";
export declare class UpdateSaveResolver {
    updateSave(ctx: any, info: GraphQLResolveInfo, args: UpdateSaveArgs): Promise<Save | null>;
}
