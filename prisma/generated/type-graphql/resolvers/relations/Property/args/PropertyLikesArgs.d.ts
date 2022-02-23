import { SaveOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SaveOrderByWithRelationAndSearchRelevanceInput";
import { SaveWhereInput } from "../../../inputs/SaveWhereInput";
import { SaveWhereUniqueInput } from "../../../inputs/SaveWhereUniqueInput";
export declare class PropertyLikesArgs {
    where?: SaveWhereInput | undefined;
    orderBy?: SaveOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SaveWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "userId" | "propertyId"> | undefined;
}
