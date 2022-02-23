import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSaveArgs } from "./args/FindUniqueSaveArgs";
import { Save } from "../../../models/Save";
export declare class FindUniqueSaveResolver {
    save(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSaveArgs): Promise<Save | null>;
}
