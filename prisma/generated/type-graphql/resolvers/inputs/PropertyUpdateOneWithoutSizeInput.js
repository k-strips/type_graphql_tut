"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpdateOneWithoutSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateOrConnectWithoutSizeInput_1 = require("../inputs/PropertyCreateOrConnectWithoutSizeInput");
const PropertyCreateWithoutSizeInput_1 = require("../inputs/PropertyCreateWithoutSizeInput");
const PropertyUpdateWithoutSizeInput_1 = require("../inputs/PropertyUpdateWithoutSizeInput");
const PropertyUpsertWithoutSizeInput_1 = require("../inputs/PropertyUpsertWithoutSizeInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyUpdateOneWithoutSizeInput = class PropertyUpdateOneWithoutSizeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutSizeInput_1.PropertyCreateWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutSizeInput_1.PropertyCreateWithoutSizeInput)
], PropertyUpdateOneWithoutSizeInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateOrConnectWithoutSizeInput_1.PropertyCreateOrConnectWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateOrConnectWithoutSizeInput_1.PropertyCreateOrConnectWithoutSizeInput)
], PropertyUpdateOneWithoutSizeInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpsertWithoutSizeInput_1.PropertyUpsertWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpsertWithoutSizeInput_1.PropertyUpsertWithoutSizeInput)
], PropertyUpdateOneWithoutSizeInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PropertyUpdateOneWithoutSizeInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PropertyUpdateOneWithoutSizeInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyUpdateOneWithoutSizeInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateWithoutSizeInput_1.PropertyUpdateWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateWithoutSizeInput_1.PropertyUpdateWithoutSizeInput)
], PropertyUpdateOneWithoutSizeInput.prototype, "update", void 0);
PropertyUpdateOneWithoutSizeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpdateOneWithoutSizeInput", {
        isAbstract: true
    })
], PropertyUpdateOneWithoutSizeInput);
exports.PropertyUpdateOneWithoutSizeInput = PropertyUpdateOneWithoutSizeInput;
