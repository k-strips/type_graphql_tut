import { Address } from "../models/Address";
import { Advertisement } from "../models/Advertisement";
import { Property } from "../models/Property";
import { User } from "../models/User";
import { OrganizationCount } from "../resolvers/outputs/OrganizationCount";
export declare class Organization {
    id: string;
    title: string;
    address?: Address | null;
    members?: User[];
    properties?: Property[];
    advertisement?: Advertisement[];
    isVerified: boolean;
    isRegistrated: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count?: OrganizationCount | null;
}
