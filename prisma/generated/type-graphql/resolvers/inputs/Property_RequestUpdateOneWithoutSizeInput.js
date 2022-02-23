"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestUpdateOneWithoutSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateOrConnectWithoutSizeInput_1 = require("../inputs/Property_RequestCreateOrConnectWithoutSizeInput");
const Property_RequestCreateWithoutSizeInput_1 = require("../inputs/Property_RequestCreateWithoutSizeInput");
const Property_RequestUpdateWithoutSizeInput_1 = require("../inputs/Property_RequestUpdateWithoutSizeInput");
const Property_RequestUpsertWithoutSizeInput_1 = require("../inputs/Property_RequestUpsertWithoutSizeInput");
const Property_RequestWhereUniqueInput_1 = require("../inputs/Property_RequestWhereUniqueInput");
let Property_RequestUpdateOneWithoutSizeInput = class Property_RequestUpdateOneWithoutSizeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateWithoutSizeInput_1.Property_RequestCreateWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateWithoutSizeInput_1.Property_RequestCreateWithoutSizeInput)
], Property_RequestUpdateOneWithoutSizeInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateOrConnectWithoutSizeInput_1.Property_RequestCreateOrConnectWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateOrConnectWithoutSizeInput_1.Property_RequestCreateOrConnectWithoutSizeInput)
], Property_RequestUpdateOneWithoutSizeInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpsertWithoutSizeInput_1.Property_RequestUpsertWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpsertWithoutSizeInput_1.Property_RequestUpsertWithoutSizeInput)
], Property_RequestUpdateOneWithoutSizeInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Property_RequestUpdateOneWithoutSizeInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Property_RequestUpdateOneWithoutSizeInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput)
], Property_RequestUpdateOneWithoutSizeInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateWithoutSizeInput_1.Property_RequestUpdateWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateWithoutSizeInput_1.Property_RequestUpdateWithoutSizeInput)
], Property_RequestUpdateOneWithoutSizeInput.prototype, "update", void 0);
Property_RequestUpdateOneWithoutSizeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestUpdateOneWithoutSizeInput", {
        isAbstract: true
    })
], Property_RequestUpdateOneWithoutSizeInput);
exports.Property_RequestUpdateOneWithoutSizeInput = Property_RequestUpdateOneWithoutSizeInput;
