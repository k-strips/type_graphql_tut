import { Organization } from "../models/Organization";
import { User } from "../models/User";
export declare class Address {
    id: string;
    email: string;
    mobile?: string | null;
    work?: string | null;
    office?: string | null;
    createdAt: Date;
    updatedAt: Date;
    Organization?: Organization | null;
    organizationId?: string | null;
    User?: User | null;
    userId?: string | null;
}
