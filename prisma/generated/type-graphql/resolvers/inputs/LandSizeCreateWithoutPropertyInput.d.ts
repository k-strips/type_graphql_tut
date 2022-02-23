import { Property_RequestCreateNestedOneWithoutSizeInput } from "../inputs/Property_RequestCreateNestedOneWithoutSizeInput";
export declare class LandSizeCreateWithoutPropertyInput {
    id?: string | undefined;
    measurement: number;
    unit: "ACRE" | "PLOT" | "HECTARE" | "SQUAREMETER";
    Property_Request?: Property_RequestCreateNestedOneWithoutSizeInput | undefined;
}
