"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestUpdateOneWithoutPriceRangeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateOrConnectWithoutPriceRangeInput_1 = require("../inputs/Property_RequestCreateOrConnectWithoutPriceRangeInput");
const Property_RequestCreateWithoutPriceRangeInput_1 = require("../inputs/Property_RequestCreateWithoutPriceRangeInput");
const Property_RequestUpdateWithoutPriceRangeInput_1 = require("../inputs/Property_RequestUpdateWithoutPriceRangeInput");
const Property_RequestUpsertWithoutPriceRangeInput_1 = require("../inputs/Property_RequestUpsertWithoutPriceRangeInput");
const Property_RequestWhereUniqueInput_1 = require("../inputs/Property_RequestWhereUniqueInput");
let Property_RequestUpdateOneWithoutPriceRangeInput = class Property_RequestUpdateOneWithoutPriceRangeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateWithoutPriceRangeInput_1.Property_RequestCreateWithoutPriceRangeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateWithoutPriceRangeInput_1.Property_RequestCreateWithoutPriceRangeInput)
], Property_RequestUpdateOneWithoutPriceRangeInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateOrConnectWithoutPriceRangeInput_1.Property_RequestCreateOrConnectWithoutPriceRangeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateOrConnectWithoutPriceRangeInput_1.Property_RequestCreateOrConnectWithoutPriceRangeInput)
], Property_RequestUpdateOneWithoutPriceRangeInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpsertWithoutPriceRangeInput_1.Property_RequestUpsertWithoutPriceRangeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpsertWithoutPriceRangeInput_1.Property_RequestUpsertWithoutPriceRangeInput)
], Property_RequestUpdateOneWithoutPriceRangeInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Property_RequestUpdateOneWithoutPriceRangeInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Property_RequestUpdateOneWithoutPriceRangeInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput)
], Property_RequestUpdateOneWithoutPriceRangeInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateWithoutPriceRangeInput_1.Property_RequestUpdateWithoutPriceRangeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateWithoutPriceRangeInput_1.Property_RequestUpdateWithoutPriceRangeInput)
], Property_RequestUpdateOneWithoutPriceRangeInput.prototype, "update", void 0);
Property_RequestUpdateOneWithoutPriceRangeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestUpdateOneWithoutPriceRangeInput", {
        isAbstract: true
    })
], Property_RequestUpdateOneWithoutPriceRangeInput);
exports.Property_RequestUpdateOneWithoutPriceRangeInput = Property_RequestUpdateOneWithoutPriceRangeInput;
