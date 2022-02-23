"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpdateManyWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateManyOrganizationInputEnvelope_1 = require("../inputs/PropertyCreateManyOrganizationInputEnvelope");
const PropertyCreateOrConnectWithoutOrganizationInput_1 = require("../inputs/PropertyCreateOrConnectWithoutOrganizationInput");
const PropertyCreateWithoutOrganizationInput_1 = require("../inputs/PropertyCreateWithoutOrganizationInput");
const PropertyScalarWhereInput_1 = require("../inputs/PropertyScalarWhereInput");
const PropertyUpdateManyWithWhereWithoutOrganizationInput_1 = require("../inputs/PropertyUpdateManyWithWhereWithoutOrganizationInput");
const PropertyUpdateWithWhereUniqueWithoutOrganizationInput_1 = require("../inputs/PropertyUpdateWithWhereUniqueWithoutOrganizationInput");
const PropertyUpsertWithWhereUniqueWithoutOrganizationInput_1 = require("../inputs/PropertyUpsertWithWhereUniqueWithoutOrganizationInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyUpdateManyWithoutOrganizationInput = class PropertyUpdateManyWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCreateWithoutOrganizationInput_1.PropertyCreateWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOrganizationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCreateOrConnectWithoutOrganizationInput_1.PropertyCreateOrConnectWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOrganizationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyUpsertWithWhereUniqueWithoutOrganizationInput_1.PropertyUpsertWithWhereUniqueWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOrganizationInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateManyOrganizationInputEnvelope_1.PropertyCreateManyOrganizationInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateManyOrganizationInputEnvelope_1.PropertyCreateManyOrganizationInputEnvelope)
], PropertyUpdateManyWithoutOrganizationInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyWhereUniqueInput_1.PropertyWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOrganizationInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyWhereUniqueInput_1.PropertyWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOrganizationInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyWhereUniqueInput_1.PropertyWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOrganizationInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyWhereUniqueInput_1.PropertyWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOrganizationInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyUpdateWithWhereUniqueWithoutOrganizationInput_1.PropertyUpdateWithWhereUniqueWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOrganizationInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyUpdateManyWithWhereWithoutOrganizationInput_1.PropertyUpdateManyWithWhereWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOrganizationInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyScalarWhereInput_1.PropertyScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOrganizationInput.prototype, "deleteMany", void 0);
PropertyUpdateManyWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpdateManyWithoutOrganizationInput", {
        isAbstract: true
    })
], PropertyUpdateManyWithoutOrganizationInput);
exports.PropertyUpdateManyWithoutOrganizationInput = PropertyUpdateManyWithoutOrganizationInput;
