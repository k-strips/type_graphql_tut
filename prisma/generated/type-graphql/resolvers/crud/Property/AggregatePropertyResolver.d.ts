import { GraphQLResolveInfo } from "graphql";
import { AggregatePropertyArgs } from "./args/AggregatePropertyArgs";
import { AggregateProperty } from "../../outputs/AggregateProperty";
export declare class AggregatePropertyResolver {
    aggregateProperty(ctx: any, info: GraphQLResolveInfo, args: AggregatePropertyArgs): Promise<AggregateProperty>;
}
