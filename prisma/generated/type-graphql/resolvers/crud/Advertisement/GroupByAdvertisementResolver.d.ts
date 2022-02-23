import { GraphQLResolveInfo } from "graphql";
import { GroupByAdvertisementArgs } from "./args/GroupByAdvertisementArgs";
import { AdvertisementGroupBy } from "../../outputs/AdvertisementGroupBy";
export declare class GroupByAdvertisementResolver {
    groupByAdvertisement(ctx: any, info: GraphQLResolveInfo, args: GroupByAdvertisementArgs): Promise<AdvertisementGroupBy[]>;
}
