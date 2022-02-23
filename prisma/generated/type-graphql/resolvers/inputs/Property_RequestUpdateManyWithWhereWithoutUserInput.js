"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestScalarWhereInput_1 = require("../inputs/Property_RequestScalarWhereInput");
const Property_RequestUpdateManyMutationInput_1 = require("../inputs/Property_RequestUpdateManyMutationInput");
let Property_RequestUpdateManyWithWhereWithoutUserInput = class Property_RequestUpdateManyWithWhereWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestScalarWhereInput_1.Property_RequestScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestScalarWhereInput_1.Property_RequestScalarWhereInput)
], Property_RequestUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateManyMutationInput_1.Property_RequestUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateManyMutationInput_1.Property_RequestUpdateManyMutationInput)
], Property_RequestUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
Property_RequestUpdateManyWithWhereWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], Property_RequestUpdateManyWithWhereWithoutUserInput);
exports.Property_RequestUpdateManyWithWhereWithoutUserInput = Property_RequestUpdateManyWithWhereWithoutUserInput;
