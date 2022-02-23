"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpdateWithoutMembersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressUpdateOneWithoutOrganizationInput_1 = require("../inputs/AddressUpdateOneWithoutOrganizationInput");
const AdvertisementUpdateManyWithoutOrganizationInput_1 = require("../inputs/AdvertisementUpdateManyWithoutOrganizationInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PropertyUpdateManyWithoutOrganizationInput_1 = require("../inputs/PropertyUpdateManyWithoutOrganizationInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let OrganizationUpdateWithoutMembersInput = class OrganizationUpdateWithoutMembersInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OrganizationUpdateWithoutMembersInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OrganizationUpdateWithoutMembersInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressUpdateOneWithoutOrganizationInput_1.AddressUpdateOneWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressUpdateOneWithoutOrganizationInput_1.AddressUpdateOneWithoutOrganizationInput)
], OrganizationUpdateWithoutMembersInput.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateManyWithoutOrganizationInput_1.PropertyUpdateManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateManyWithoutOrganizationInput_1.PropertyUpdateManyWithoutOrganizationInput)
], OrganizationUpdateWithoutMembersInput.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateManyWithoutOrganizationInput_1.AdvertisementUpdateManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateManyWithoutOrganizationInput_1.AdvertisementUpdateManyWithoutOrganizationInput)
], OrganizationUpdateWithoutMembersInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], OrganizationUpdateWithoutMembersInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], OrganizationUpdateWithoutMembersInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], OrganizationUpdateWithoutMembersInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrganizationUpdateWithoutMembersInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrganizationUpdateWithoutMembersInput.prototype, "updatedAt", void 0);
OrganizationUpdateWithoutMembersInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationUpdateWithoutMembersInput", {
        isAbstract: true
    })
], OrganizationUpdateWithoutMembersInput);
exports.OrganizationUpdateWithoutMembersInput = OrganizationUpdateWithoutMembersInput;
