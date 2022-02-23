import { GraphQLResolveInfo } from "graphql";
import { DeleteSaveArgs } from "./args/DeleteSaveArgs";
import { Save } from "../../../models/Save";
export declare class DeleteSaveResolver {
    deleteSave(ctx: any, info: GraphQLResolveInfo, args: DeleteSaveArgs): Promise<Save | null>;
}
