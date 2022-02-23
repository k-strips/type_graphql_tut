import { Address } from "../models/Address";
import { Advertisement } from "../models/Advertisement";
import { Organization } from "../models/Organization";
import { Property } from "../models/Property";
import { Property_Request } from "../models/Property_Request";
import { Save } from "../models/Save";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    status: "SEEKER" | "PROPERTYOWNER" | "INVESTORS";
    address?: Address | null;
    property?: Property[];
    saves?: Save[];
    advertisement?: Advertisement[];
    request?: Property_Request[];
    isVerified: boolean;
    isRegistrated: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    organization?: Organization | null;
    organizationId?: string | null;
    _count?: UserCount | null;
}
