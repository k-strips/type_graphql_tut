import { OrganizationCountAggregate } from "../outputs/OrganizationCountAggregate";
import { OrganizationMaxAggregate } from "../outputs/OrganizationMaxAggregate";
import { OrganizationMinAggregate } from "../outputs/OrganizationMinAggregate";
export declare class AggregateOrganization {
    _count: OrganizationCountAggregate | null;
    _min: OrganizationMinAggregate | null;
    _max: OrganizationMaxAggregate | null;
}
