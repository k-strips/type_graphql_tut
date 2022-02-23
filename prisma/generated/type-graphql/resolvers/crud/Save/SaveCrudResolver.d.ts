import { GraphQLResolveInfo } from "graphql";
import { AggregateSaveArgs } from "./args/AggregateSaveArgs";
import { CreateManySaveArgs } from "./args/CreateManySaveArgs";
import { CreateSaveArgs } from "./args/CreateSaveArgs";
import { DeleteManySaveArgs } from "./args/DeleteManySaveArgs";
import { DeleteSaveArgs } from "./args/DeleteSaveArgs";
import { FindFirstSaveArgs } from "./args/FindFirstSaveArgs";
import { FindManySaveArgs } from "./args/FindManySaveArgs";
import { FindUniqueSaveArgs } from "./args/FindUniqueSaveArgs";
import { GroupBySaveArgs } from "./args/GroupBySaveArgs";
import { UpdateManySaveArgs } from "./args/UpdateManySaveArgs";
import { UpdateSaveArgs } from "./args/UpdateSaveArgs";
import { UpsertSaveArgs } from "./args/UpsertSaveArgs";
import { Save } from "../../../models/Save";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSave } from "../../outputs/AggregateSave";
import { SaveGroupBy } from "../../outputs/SaveGroupBy";
export declare class SaveCrudResolver {
    save(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSaveArgs): Promise<Save | null>;
    findFirstSave(ctx: any, info: GraphQLResolveInfo, args: FindFirstSaveArgs): Promise<Save | null>;
    saves(ctx: any, info: GraphQLResolveInfo, args: FindManySaveArgs): Promise<Save[]>;
    createSave(ctx: any, info: GraphQLResolveInfo, args: CreateSaveArgs): Promise<Save>;
    createManySave(ctx: any, info: GraphQLResolveInfo, args: CreateManySaveArgs): Promise<AffectedRowsOutput>;
    deleteSave(ctx: any, info: GraphQLResolveInfo, args: DeleteSaveArgs): Promise<Save | null>;
    updateSave(ctx: any, info: GraphQLResolveInfo, args: UpdateSaveArgs): Promise<Save | null>;
    deleteManySave(ctx: any, info: GraphQLResolveInfo, args: DeleteManySaveArgs): Promise<AffectedRowsOutput>;
    updateManySave(ctx: any, info: GraphQLResolveInfo, args: UpdateManySaveArgs): Promise<AffectedRowsOutput>;
    upsertSave(ctx: any, info: GraphQLResolveInfo, args: UpsertSaveArgs): Promise<Save>;
    aggregateSave(ctx: any, info: GraphQLResolveInfo, args: AggregateSaveArgs): Promise<AggregateSave>;
    groupBySave(ctx: any, info: GraphQLResolveInfo, args: GroupBySaveArgs): Promise<SaveGroupBy[]>;
}