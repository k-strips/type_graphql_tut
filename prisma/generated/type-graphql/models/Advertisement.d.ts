import { Organization } from "../models/Organization";
import { Price } from "../models/Price";
import { Property } from "../models/Property";
import { User } from "../models/User";
export declare class Advertisement {
    id: string;
    price?: Price | null;
    isExpired: boolean;
    isPaused: boolean;
    createdAt: Date;
    updatedAt: Date;
    user?: User | null;
    userId?: string | null;
    organization?: Organization | null;
    organizationId?: string | null;
    property?: Property | null;
    propertyId?: string | null;
}
