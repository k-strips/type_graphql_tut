"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateWithoutUserInput_1 = require("../inputs/AddressCreateWithoutUserInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressCreateOrConnectWithoutUserInput = class AddressCreateOrConnectWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressCreateOrConnectWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateWithoutUserInput_1.AddressCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateWithoutUserInput_1.AddressCreateWithoutUserInput)
], AddressCreateOrConnectWithoutUserInput.prototype, "create", void 0);
AddressCreateOrConnectWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AddressCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], AddressCreateOrConnectWithoutUserInput);
exports.AddressCreateOrConnectWithoutUserInput = AddressCreateOrConnectWithoutUserInput;
