import { GraphQLResolveInfo } from "graphql";
import { AggregateAdvertisementArgs } from "./args/AggregateAdvertisementArgs";
import { AggregateAdvertisement } from "../../outputs/AggregateAdvertisement";
export declare class AggregateAdvertisementResolver {
    aggregateAdvertisement(ctx: any, info: GraphQLResolveInfo, args: AggregateAdvertisementArgs): Promise<AggregateAdvertisement>;
}
