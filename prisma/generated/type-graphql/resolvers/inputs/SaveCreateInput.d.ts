import { PropertyCreateNestedOneWithoutLikesInput } from "../inputs/PropertyCreateNestedOneWithoutLikesInput";
import { UserCreateNestedOneWithoutSavesInput } from "../inputs/UserCreateNestedOneWithoutSavesInput";
export declare class SaveCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    User?: UserCreateNestedOneWithoutSavesInput | undefined;
    Property?: PropertyCreateNestedOneWithoutLikesInput | undefined;
}
