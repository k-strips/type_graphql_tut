import { AddressCountAggregate } from "../outputs/AddressCountAggregate";
import { AddressMaxAggregate } from "../outputs/AddressMaxAggregate";
import { AddressMinAggregate } from "../outputs/AddressMinAggregate";
export declare class AddressGroupBy {
    id: string;
    email: string;
    mobile: string | null;
    work: string | null;
    office: string | null;
    createdAt: Date;
    updatedAt: Date;
    organizationId: string | null;
    userId: string | null;
    _count: AddressCountAggregate | null;
    _min: AddressMinAggregate | null;
    _max: AddressMaxAggregate | null;
}
