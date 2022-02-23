"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpdateWithoutOwnerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementUpdateManyWithoutPropertyInput_1 = require("../inputs/AdvertisementUpdateManyWithoutPropertyInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumAcquisitionTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumAcquisitionTypeFieldUpdateOperationsInput");
const EnumPropertyTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumPropertyTypeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const LandSizeUpdateOneWithoutPropertyInput_1 = require("../inputs/LandSizeUpdateOneWithoutPropertyInput");
const NullableEnumPropertyStateFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumPropertyStateFieldUpdateOperationsInput");
const NullableFloatFieldUpdateOperationsInput_1 = require("../inputs/NullableFloatFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrganizationUpdateOneWithoutPropertiesInput_1 = require("../inputs/OrganizationUpdateOneWithoutPropertiesInput");
const PriceUpdateOneWithoutPropertyInput_1 = require("../inputs/PriceUpdateOneWithoutPropertyInput");
const PropertyUpdateamenitiesInput_1 = require("../inputs/PropertyUpdateamenitiesInput");
const PropertyUpdateimagesInput_1 = require("../inputs/PropertyUpdateimagesInput");
const SaveUpdateManyWithoutPropertyInput_1 = require("../inputs/SaveUpdateManyWithoutPropertyInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PropertyUpdateWithoutOwnerInput = class PropertyUpdateWithoutOwnerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumPropertyTypeFieldUpdateOperationsInput_1.EnumPropertyTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumPropertyTypeFieldUpdateOperationsInput_1.EnumPropertyTypeFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumAcquisitionTypeFieldUpdateOperationsInput_1.EnumAcquisitionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumAcquisitionTypeFieldUpdateOperationsInput_1.EnumAcquisitionTypeFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableEnumPropertyStateFieldUpdateOperationsInput_1.NullableEnumPropertyStateFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableEnumPropertyStateFieldUpdateOperationsInput_1.NullableEnumPropertyStateFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUpdateOneWithoutPropertyInput_1.LandSizeUpdateOneWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeUpdateOneWithoutPropertyInput_1.LandSizeUpdateOneWithoutPropertyInput)
], PropertyUpdateWithoutOwnerInput.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpdateOneWithoutPropertyInput_1.PriceUpdateOneWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpdateOneWithoutPropertyInput_1.PriceUpdateOneWithoutPropertyInput)
], PropertyUpdateWithoutOwnerInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateimagesInput_1.PropertyUpdateimagesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateimagesInput_1.PropertyUpdateimagesInput)
], PropertyUpdateWithoutOwnerInput.prototype, "images", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateamenitiesInput_1.PropertyUpdateamenitiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateamenitiesInput_1.PropertyUpdateamenitiesInput)
], PropertyUpdateWithoutOwnerInput.prototype, "amenities", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "views", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveUpdateManyWithoutPropertyInput_1.SaveUpdateManyWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveUpdateManyWithoutPropertyInput_1.SaveUpdateManyWithoutPropertyInput)
], PropertyUpdateWithoutOwnerInput.prototype, "likes", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "source", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "town", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "streetName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "digitalAddress", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "locationDesc", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "lat", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "lon", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PropertyUpdateWithoutOwnerInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpdateOneWithoutPropertiesInput_1.OrganizationUpdateOneWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpdateOneWithoutPropertiesInput_1.OrganizationUpdateOneWithoutPropertiesInput)
], PropertyUpdateWithoutOwnerInput.prototype, "organization", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateManyWithoutPropertyInput_1.AdvertisementUpdateManyWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateManyWithoutPropertyInput_1.AdvertisementUpdateManyWithoutPropertyInput)
], PropertyUpdateWithoutOwnerInput.prototype, "advertisement", void 0);
PropertyUpdateWithoutOwnerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpdateWithoutOwnerInput", {
        isAbstract: true
    })
], PropertyUpdateWithoutOwnerInput);
exports.PropertyUpdateWithoutOwnerInput = PropertyUpdateWithoutOwnerInput;
