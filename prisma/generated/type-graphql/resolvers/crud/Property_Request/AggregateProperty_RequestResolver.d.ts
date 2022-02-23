import { GraphQLResolveInfo } from "graphql";
import { AggregateProperty_RequestArgs } from "./args/AggregateProperty_RequestArgs";
import { AggregateProperty_Request } from "../../outputs/AggregateProperty_Request";
export declare class AggregateProperty_RequestResolver {
    aggregateProperty_Request(ctx: any, info: GraphQLResolveInfo, args: AggregateProperty_RequestArgs): Promise<AggregateProperty_Request>;
}
