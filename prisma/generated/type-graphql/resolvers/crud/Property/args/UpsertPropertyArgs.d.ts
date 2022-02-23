import { PropertyCreateInput } from "../../../inputs/PropertyCreateInput";
import { PropertyUpdateInput } from "../../../inputs/PropertyUpdateInput";
import { PropertyWhereUniqueInput } from "../../../inputs/PropertyWhereUniqueInput";
export declare class UpsertPropertyArgs {
    where: PropertyWhereUniqueInput;
    create: PropertyCreateInput;
    update: PropertyUpdateInput;
}
