import { Property } from "../models/Property";
import { User } from "../models/User";
export declare class Save {
    id: string;
    createdAt: Date;
    User?: User | null;
    userId?: string | null;
    Property?: Property | null;
    propertyId?: string | null;
}
