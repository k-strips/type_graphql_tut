import { PropertyCreateOrConnectWithoutAdvertisementInput } from "../inputs/PropertyCreateOrConnectWithoutAdvertisementInput";
import { PropertyCreateWithoutAdvertisementInput } from "../inputs/PropertyCreateWithoutAdvertisementInput";
import { PropertyUpdateWithoutAdvertisementInput } from "../inputs/PropertyUpdateWithoutAdvertisementInput";
import { PropertyUpsertWithoutAdvertisementInput } from "../inputs/PropertyUpsertWithoutAdvertisementInput";
import { PropertyWhereUniqueInput } from "../inputs/PropertyWhereUniqueInput";
export declare class PropertyUpdateOneWithoutAdvertisementInput {
    create?: PropertyCreateWithoutAdvertisementInput | undefined;
    connectOrCreate?: PropertyCreateOrConnectWithoutAdvertisementInput | undefined;
    upsert?: PropertyUpsertWithoutAdvertisementInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: PropertyWhereUniqueInput | undefined;
    update?: PropertyUpdateWithoutAdvertisementInput | undefined;
}
