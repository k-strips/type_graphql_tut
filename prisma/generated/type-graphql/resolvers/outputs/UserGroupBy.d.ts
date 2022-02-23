import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
export declare class UserGroupBy {
    id: string;
    firstName: string;
    lastName: string;
    middleName: string | null;
    status: "SEEKER" | "PROPERTYOWNER" | "INVESTORS";
    isVerified: boolean;
    isRegistrated: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    organizationId: string | null;
    _count: UserCountAggregate | null;
    _min: UserMinAggregate | null;
    _max: UserMaxAggregate | null;
}
