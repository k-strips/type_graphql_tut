import { NestedEnumUserStatusFilter } from "../inputs/NestedEnumUserStatusFilter";
export declare class EnumUserStatusFilter {
    equals?: "SEEKER" | "PROPERTYOWNER" | "INVESTORS" | undefined;
    in?: Array<"SEEKER" | "PROPERTYOWNER" | "INVESTORS"> | undefined;
    notIn?: Array<"SEEKER" | "PROPERTYOWNER" | "INVESTORS"> | undefined;
    not?: NestedEnumUserStatusFilter | undefined;
}
