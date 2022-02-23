import { NestedEnumUserStatusFilter } from "../inputs/NestedEnumUserStatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumUserStatusWithAggregatesFilter {
    equals?: "SEEKER" | "PROPERTYOWNER" | "INVESTORS" | undefined;
    in?: Array<"SEEKER" | "PROPERTYOWNER" | "INVESTORS"> | undefined;
    notIn?: Array<"SEEKER" | "PROPERTYOWNER" | "INVESTORS"> | undefined;
    not?: NestedEnumUserStatusWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumUserStatusFilter | undefined;
    _max?: NestedEnumUserStatusFilter | undefined;
}
