"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateWithoutUserInput_1 = require("../inputs/Property_RequestCreateWithoutUserInput");
const Property_RequestUpdateWithoutUserInput_1 = require("../inputs/Property_RequestUpdateWithoutUserInput");
const Property_RequestWhereUniqueInput_1 = require("../inputs/Property_RequestWhereUniqueInput");
let Property_RequestUpsertWithWhereUniqueWithoutUserInput = class Property_RequestUpsertWithWhereUniqueWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput)
], Property_RequestUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateWithoutUserInput_1.Property_RequestUpdateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateWithoutUserInput_1.Property_RequestUpdateWithoutUserInput)
], Property_RequestUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateWithoutUserInput_1.Property_RequestCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateWithoutUserInput_1.Property_RequestCreateWithoutUserInput)
], Property_RequestUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
Property_RequestUpsertWithWhereUniqueWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], Property_RequestUpsertWithWhereUniqueWithoutUserInput);
exports.Property_RequestUpsertWithWhereUniqueWithoutUserInput = Property_RequestUpsertWithWhereUniqueWithoutUserInput;
