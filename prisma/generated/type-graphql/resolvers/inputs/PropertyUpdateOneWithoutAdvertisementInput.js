"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpdateOneWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateOrConnectWithoutAdvertisementInput_1 = require("../inputs/PropertyCreateOrConnectWithoutAdvertisementInput");
const PropertyCreateWithoutAdvertisementInput_1 = require("../inputs/PropertyCreateWithoutAdvertisementInput");
const PropertyUpdateWithoutAdvertisementInput_1 = require("../inputs/PropertyUpdateWithoutAdvertisementInput");
const PropertyUpsertWithoutAdvertisementInput_1 = require("../inputs/PropertyUpsertWithoutAdvertisementInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyUpdateOneWithoutAdvertisementInput = class PropertyUpdateOneWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutAdvertisementInput_1.PropertyCreateWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutAdvertisementInput_1.PropertyCreateWithoutAdvertisementInput)
], PropertyUpdateOneWithoutAdvertisementInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateOrConnectWithoutAdvertisementInput_1.PropertyCreateOrConnectWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateOrConnectWithoutAdvertisementInput_1.PropertyCreateOrConnectWithoutAdvertisementInput)
], PropertyUpdateOneWithoutAdvertisementInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpsertWithoutAdvertisementInput_1.PropertyUpsertWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpsertWithoutAdvertisementInput_1.PropertyUpsertWithoutAdvertisementInput)
], PropertyUpdateOneWithoutAdvertisementInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PropertyUpdateOneWithoutAdvertisementInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PropertyUpdateOneWithoutAdvertisementInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyUpdateOneWithoutAdvertisementInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateWithoutAdvertisementInput_1.PropertyUpdateWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateWithoutAdvertisementInput_1.PropertyUpdateWithoutAdvertisementInput)
], PropertyUpdateOneWithoutAdvertisementInput.prototype, "update", void 0);
PropertyUpdateOneWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpdateOneWithoutAdvertisementInput", {
        isAbstract: true
    })
], PropertyUpdateOneWithoutAdvertisementInput);
exports.PropertyUpdateOneWithoutAdvertisementInput = PropertyUpdateOneWithoutAdvertisementInput;
