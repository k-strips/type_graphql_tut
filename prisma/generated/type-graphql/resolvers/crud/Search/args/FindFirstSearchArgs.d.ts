import { SearchOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SearchOrderByWithRelationAndSearchRelevanceInput";
import { SearchWhereInput } from "../../../inputs/SearchWhereInput";
import { SearchWhereUniqueInput } from "../../../inputs/SearchWhereUniqueInput";
export declare class FindFirstSearchArgs {
    where?: SearchWhereInput | undefined;
    orderBy?: SearchOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SearchWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "userId" | "category" | "type" | "acquisition" | "seating" | "state" | "bedrooms" | "bathrooms" | "parkingCapacity" | "location" | "createdAt"> | undefined;
}
