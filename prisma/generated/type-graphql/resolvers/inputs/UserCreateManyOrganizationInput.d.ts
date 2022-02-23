export declare class UserCreateManyOrganizationInput {
    id?: string | undefined;
    firstName: string;
    lastName: string;
    middleName?: string | undefined;
    status?: "SEEKER" | "PROPERTYOWNER" | "INVESTORS" | undefined;
    isVerified?: boolean | undefined;
    isRegistrated?: boolean | undefined;
    isDeleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
