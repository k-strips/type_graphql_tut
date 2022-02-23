import { GraphQLResolveInfo } from "graphql";
import { AggregateLandSizeArgs } from "./args/AggregateLandSizeArgs";
import { CreateLandSizeArgs } from "./args/CreateLandSizeArgs";
import { CreateManyLandSizeArgs } from "./args/CreateManyLandSizeArgs";
import { DeleteLandSizeArgs } from "./args/DeleteLandSizeArgs";
import { DeleteManyLandSizeArgs } from "./args/DeleteManyLandSizeArgs";
import { FindFirstLandSizeArgs } from "./args/FindFirstLandSizeArgs";
import { FindManyLandSizeArgs } from "./args/FindManyLandSizeArgs";
import { FindUniqueLandSizeArgs } from "./args/FindUniqueLandSizeArgs";
import { GroupByLandSizeArgs } from "./args/GroupByLandSizeArgs";
import { UpdateLandSizeArgs } from "./args/UpdateLandSizeArgs";
import { UpdateManyLandSizeArgs } from "./args/UpdateManyLandSizeArgs";
import { UpsertLandSizeArgs } from "./args/UpsertLandSizeArgs";
import { LandSize } from "../../../models/LandSize";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLandSize } from "../../outputs/AggregateLandSize";
import { LandSizeGroupBy } from "../../outputs/LandSizeGroupBy";
export declare class LandSizeCrudResolver {
    landSize(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLandSizeArgs): Promise<LandSize | null>;
    findFirstLandSize(ctx: any, info: GraphQLResolveInfo, args: FindFirstLandSizeArgs): Promise<LandSize | null>;
    landSizes(ctx: any, info: GraphQLResolveInfo, args: FindManyLandSizeArgs): Promise<LandSize[]>;
    createLandSize(ctx: any, info: GraphQLResolveInfo, args: CreateLandSizeArgs): Promise<LandSize>;
    createManyLandSize(ctx: any, info: GraphQLResolveInfo, args: CreateManyLandSizeArgs): Promise<AffectedRowsOutput>;
    deleteLandSize(ctx: any, info: GraphQLResolveInfo, args: DeleteLandSizeArgs): Promise<LandSize | null>;
    updateLandSize(ctx: any, info: GraphQLResolveInfo, args: UpdateLandSizeArgs): Promise<LandSize | null>;
    deleteManyLandSize(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLandSizeArgs): Promise<AffectedRowsOutput>;
    updateManyLandSize(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLandSizeArgs): Promise<AffectedRowsOutput>;
    upsertLandSize(ctx: any, info: GraphQLResolveInfo, args: UpsertLandSizeArgs): Promise<LandSize>;
    aggregateLandSize(ctx: any, info: GraphQLResolveInfo, args: AggregateLandSizeArgs): Promise<AggregateLandSize>;
    groupByLandSize(ctx: any, info: GraphQLResolveInfo, args: GroupByLandSizeArgs): Promise<LandSizeGroupBy[]>;
}