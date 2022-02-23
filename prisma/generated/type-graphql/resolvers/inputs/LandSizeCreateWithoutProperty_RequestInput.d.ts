import { PropertyCreateNestedOneWithoutSizeInput } from "../inputs/PropertyCreateNestedOneWithoutSizeInput";
export declare class LandSizeCreateWithoutProperty_RequestInput {
    id?: string | undefined;
    measurement: number;
    unit: "ACRE" | "PLOT" | "HECTARE" | "SQUAREMETER";
    Property?: PropertyCreateNestedOneWithoutSizeInput | undefined;
}
