import { Property_RequestOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Property_RequestOrderByWithRelationAndSearchRelevanceInput";
import { Property_RequestWhereInput } from "../../../inputs/Property_RequestWhereInput";
import { Property_RequestWhereUniqueInput } from "../../../inputs/Property_RequestWhereUniqueInput";
export declare class UserRequestArgs {
    where?: Property_RequestWhereInput | undefined;
    orderBy?: Property_RequestOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Property_RequestWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "type" | "acquisition" | "state" | "amenities" | "parkingCapacity" | "seating" | "bedrooms" | "bathrooms" | "additionalInfo" | "region" | "city" | "town" | "createdAt" | "updatedAt" | "userId"> | undefined;
}
