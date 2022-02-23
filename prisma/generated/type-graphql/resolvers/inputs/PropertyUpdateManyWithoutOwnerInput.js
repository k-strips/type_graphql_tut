"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpdateManyWithoutOwnerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateManyOwnerInputEnvelope_1 = require("../inputs/PropertyCreateManyOwnerInputEnvelope");
const PropertyCreateOrConnectWithoutOwnerInput_1 = require("../inputs/PropertyCreateOrConnectWithoutOwnerInput");
const PropertyCreateWithoutOwnerInput_1 = require("../inputs/PropertyCreateWithoutOwnerInput");
const PropertyScalarWhereInput_1 = require("../inputs/PropertyScalarWhereInput");
const PropertyUpdateManyWithWhereWithoutOwnerInput_1 = require("../inputs/PropertyUpdateManyWithWhereWithoutOwnerInput");
const PropertyUpdateWithWhereUniqueWithoutOwnerInput_1 = require("../inputs/PropertyUpdateWithWhereUniqueWithoutOwnerInput");
const PropertyUpsertWithWhereUniqueWithoutOwnerInput_1 = require("../inputs/PropertyUpsertWithWhereUniqueWithoutOwnerInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyUpdateManyWithoutOwnerInput = class PropertyUpdateManyWithoutOwnerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCreateWithoutOwnerInput_1.PropertyCreateWithoutOwnerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOwnerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCreateOrConnectWithoutOwnerInput_1.PropertyCreateOrConnectWithoutOwnerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOwnerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyUpsertWithWhereUniqueWithoutOwnerInput_1.PropertyUpsertWithWhereUniqueWithoutOwnerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOwnerInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateManyOwnerInputEnvelope_1.PropertyCreateManyOwnerInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateManyOwnerInputEnvelope_1.PropertyCreateManyOwnerInputEnvelope)
], PropertyUpdateManyWithoutOwnerInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyWhereUniqueInput_1.PropertyWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOwnerInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyWhereUniqueInput_1.PropertyWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOwnerInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyWhereUniqueInput_1.PropertyWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOwnerInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyWhereUniqueInput_1.PropertyWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOwnerInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyUpdateWithWhereUniqueWithoutOwnerInput_1.PropertyUpdateWithWhereUniqueWithoutOwnerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOwnerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyUpdateManyWithWhereWithoutOwnerInput_1.PropertyUpdateManyWithWhereWithoutOwnerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOwnerInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyScalarWhereInput_1.PropertyScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyUpdateManyWithoutOwnerInput.prototype, "deleteMany", void 0);
PropertyUpdateManyWithoutOwnerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpdateManyWithoutOwnerInput", {
        isAbstract: true
    })
], PropertyUpdateManyWithoutOwnerInput);
exports.PropertyUpdateManyWithoutOwnerInput = PropertyUpdateManyWithoutOwnerInput;
