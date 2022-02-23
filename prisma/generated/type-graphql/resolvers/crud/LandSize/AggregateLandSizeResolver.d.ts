import { GraphQLResolveInfo } from "graphql";
import { AggregateLandSizeArgs } from "./args/AggregateLandSizeArgs";
import { AggregateLandSize } from "../../outputs/AggregateLandSize";
export declare class AggregateLandSizeResolver {
    aggregateLandSize(ctx: any, info: GraphQLResolveInfo, args: AggregateLandSizeArgs): Promise<AggregateLandSize>;
}
