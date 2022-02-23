import { GraphQLResolveInfo } from "graphql";
import { CreateSaveArgs } from "./args/CreateSaveArgs";
import { Save } from "../../../models/Save";
export declare class CreateSaveResolver {
    createSave(ctx: any, info: GraphQLResolveInfo, args: CreateSaveArgs): Promise<Save>;
}
