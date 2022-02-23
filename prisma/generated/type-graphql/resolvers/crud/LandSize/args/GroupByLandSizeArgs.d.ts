import { LandSizeOrderByWithAggregationInput } from "../../../inputs/LandSizeOrderByWithAggregationInput";
import { LandSizeScalarWhereWithAggregatesInput } from "../../../inputs/LandSizeScalarWhereWithAggregatesInput";
import { LandSizeWhereInput } from "../../../inputs/LandSizeWhereInput";
export declare class GroupByLandSizeArgs {
    where?: LandSizeWhereInput | undefined;
    orderBy?: LandSizeOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "measurement" | "unit" | "propertyId" | "property_RequestId">;
    having?: LandSizeScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
