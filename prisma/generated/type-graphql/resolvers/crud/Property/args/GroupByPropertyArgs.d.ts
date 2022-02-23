import { PropertyOrderByWithAggregationInput } from "../../../inputs/PropertyOrderByWithAggregationInput";
import { PropertyScalarWhereWithAggregatesInput } from "../../../inputs/PropertyScalarWhereWithAggregatesInput";
import { PropertyWhereInput } from "../../../inputs/PropertyWhereInput";
export declare class GroupByPropertyArgs {
    where?: PropertyWhereInput | undefined;
    orderBy?: PropertyOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "type" | "acquisition" | "state" | "images" | "amenities" | "parkingCapacity" | "seating" | "bedrooms" | "bathrooms" | "description" | "views" | "source" | "region" | "city" | "town" | "streetName" | "digitalAddress" | "locationDesc" | "lat" | "lon" | "isDeleted" | "createdAt" | "updatedAt" | "organizationId" | "userId">;
    having?: PropertyScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
