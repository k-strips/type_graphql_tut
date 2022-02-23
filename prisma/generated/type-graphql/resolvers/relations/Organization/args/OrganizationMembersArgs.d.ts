import { UserOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
export declare class OrganizationMembersArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: UserWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "firstName" | "lastName" | "middleName" | "status" | "isVerified" | "isRegistrated" | "isDeleted" | "createdAt" | "updatedAt" | "organizationId"> | undefined;
}
