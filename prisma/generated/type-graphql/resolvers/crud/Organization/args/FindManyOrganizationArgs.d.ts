import { OrganizationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/OrganizationOrderByWithRelationAndSearchRelevanceInput";
import { OrganizationWhereInput } from "../../../inputs/OrganizationWhereInput";
import { OrganizationWhereUniqueInput } from "../../../inputs/OrganizationWhereUniqueInput";
export declare class FindManyOrganizationArgs {
    where?: OrganizationWhereInput | undefined;
    orderBy?: OrganizationOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: OrganizationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "isVerified" | "isRegistrated" | "isDeleted" | "createdAt" | "updatedAt"> | undefined;
}
