"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestUpdateWithoutUserInput_1 = require("../inputs/Property_RequestUpdateWithoutUserInput");
const Property_RequestWhereUniqueInput_1 = require("../inputs/Property_RequestWhereUniqueInput");
let Property_RequestUpdateWithWhereUniqueWithoutUserInput = class Property_RequestUpdateWithWhereUniqueWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput)
], Property_RequestUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateWithoutUserInput_1.Property_RequestUpdateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateWithoutUserInput_1.Property_RequestUpdateWithoutUserInput)
], Property_RequestUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
Property_RequestUpdateWithWhereUniqueWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], Property_RequestUpdateWithWhereUniqueWithoutUserInput);
exports.Property_RequestUpdateWithWhereUniqueWithoutUserInput = Property_RequestUpdateWithWhereUniqueWithoutUserInput;
