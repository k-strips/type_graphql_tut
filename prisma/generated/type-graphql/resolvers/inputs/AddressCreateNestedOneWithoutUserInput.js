"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateNestedOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateOrConnectWithoutUserInput_1 = require("../inputs/AddressCreateOrConnectWithoutUserInput");
const AddressCreateWithoutUserInput_1 = require("../inputs/AddressCreateWithoutUserInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressCreateNestedOneWithoutUserInput = class AddressCreateNestedOneWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateWithoutUserInput_1.AddressCreateWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateWithoutUserInput_1.AddressCreateWithoutUserInput)
], AddressCreateNestedOneWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateOrConnectWithoutUserInput_1.AddressCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateOrConnectWithoutUserInput_1.AddressCreateOrConnectWithoutUserInput)
], AddressCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
AddressCreateNestedOneWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AddressCreateNestedOneWithoutUserInput", {
        isAbstract: true
    })
], AddressCreateNestedOneWithoutUserInput);
exports.AddressCreateNestedOneWithoutUserInput = AddressCreateNestedOneWithoutUserInput;
