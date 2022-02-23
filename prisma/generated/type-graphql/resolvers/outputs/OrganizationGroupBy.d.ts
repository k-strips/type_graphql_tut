import { OrganizationCountAggregate } from "../outputs/OrganizationCountAggregate";
import { OrganizationMaxAggregate } from "../outputs/OrganizationMaxAggregate";
import { OrganizationMinAggregate } from "../outputs/OrganizationMinAggregate";
export declare class OrganizationGroupBy {
    id: string;
    title: string;
    isVerified: boolean;
    isRegistrated: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: OrganizationCountAggregate | null;
    _min: OrganizationMinAggregate | null;
    _max: OrganizationMaxAggregate | null;
}
