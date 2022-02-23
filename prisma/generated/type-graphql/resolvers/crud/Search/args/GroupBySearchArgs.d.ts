import { SearchOrderByWithAggregationInput } from "../../../inputs/SearchOrderByWithAggregationInput";
import { SearchScalarWhereWithAggregatesInput } from "../../../inputs/SearchScalarWhereWithAggregatesInput";
import { SearchWhereInput } from "../../../inputs/SearchWhereInput";
export declare class GroupBySearchArgs {
    where?: SearchWhereInput | undefined;
    orderBy?: SearchOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "userId" | "category" | "type" | "acquisition" | "seating" | "state" | "bedrooms" | "bathrooms" | "parkingCapacity" | "location" | "createdAt">;
    having?: SearchScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
