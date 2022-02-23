import { PriceOrderByWithAggregationInput } from "../../../inputs/PriceOrderByWithAggregationInput";
import { PriceScalarWhereWithAggregatesInput } from "../../../inputs/PriceScalarWhereWithAggregatesInput";
import { PriceWhereInput } from "../../../inputs/PriceWhereInput";
export declare class GroupByPriceArgs {
    where?: PriceWhereInput | undefined;
    orderBy?: PriceOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "figure" | "currency" | "duration" | "propertyId" | "advertisementId" | "property_RequestId">;
    having?: PriceScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
