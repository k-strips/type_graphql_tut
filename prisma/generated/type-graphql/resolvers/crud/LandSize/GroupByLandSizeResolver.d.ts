import { GraphQLResolveInfo } from "graphql";
import { GroupByLandSizeArgs } from "./args/GroupByLandSizeArgs";
import { LandSizeGroupBy } from "../../outputs/LandSizeGroupBy";
export declare class GroupByLandSizeResolver {
    groupByLandSize(ctx: any, info: GraphQLResolveInfo, args: GroupByLandSizeArgs): Promise<LandSizeGroupBy[]>;
}
