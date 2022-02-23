import { Property_RequestOrderByWithAggregationInput } from "../../../inputs/Property_RequestOrderByWithAggregationInput";
import { Property_RequestScalarWhereWithAggregatesInput } from "../../../inputs/Property_RequestScalarWhereWithAggregatesInput";
import { Property_RequestWhereInput } from "../../../inputs/Property_RequestWhereInput";
export declare class GroupByProperty_RequestArgs {
    where?: Property_RequestWhereInput | undefined;
    orderBy?: Property_RequestOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "type" | "acquisition" | "state" | "amenities" | "parkingCapacity" | "seating" | "bedrooms" | "bathrooms" | "additionalInfo" | "region" | "city" | "town" | "createdAt" | "updatedAt" | "userId">;
    having?: Property_RequestScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
