import { PropertyCreateNestedOneWithoutSizeInput } from "../inputs/PropertyCreateNestedOneWithoutSizeInput";
import { Property_RequestCreateNestedOneWithoutSizeInput } from "../inputs/Property_RequestCreateNestedOneWithoutSizeInput";
export declare class LandSizeCreateInput {
    id?: string | undefined;
    measurement: number;
    unit: "ACRE" | "PLOT" | "HECTARE" | "SQUAREMETER";
    Property?: PropertyCreateNestedOneWithoutSizeInput | undefined;
    Property_Request?: Property_RequestCreateNestedOneWithoutSizeInput | undefined;
}
