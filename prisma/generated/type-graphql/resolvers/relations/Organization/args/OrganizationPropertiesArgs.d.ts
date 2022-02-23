import { PropertyOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PropertyOrderByWithRelationAndSearchRelevanceInput";
import { PropertyWhereInput } from "../../../inputs/PropertyWhereInput";
import { PropertyWhereUniqueInput } from "../../../inputs/PropertyWhereUniqueInput";
export declare class OrganizationPropertiesArgs {
    where?: PropertyWhereInput | undefined;
    orderBy?: PropertyOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: PropertyWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "type" | "acquisition" | "state" | "images" | "amenities" | "parkingCapacity" | "seating" | "bedrooms" | "bathrooms" | "description" | "views" | "source" | "region" | "city" | "town" | "streetName" | "digitalAddress" | "locationDesc" | "lat" | "lon" | "isDeleted" | "createdAt" | "updatedAt" | "organizationId" | "userId"> | undefined;
}
