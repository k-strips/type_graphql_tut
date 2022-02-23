"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpsertWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateWithoutUserInput_1 = require("../inputs/AddressCreateWithoutUserInput");
const AddressUpdateWithoutUserInput_1 = require("../inputs/AddressUpdateWithoutUserInput");
let AddressUpsertWithoutUserInput = class AddressUpsertWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressUpdateWithoutUserInput_1.AddressUpdateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AddressUpdateWithoutUserInput_1.AddressUpdateWithoutUserInput)
], AddressUpsertWithoutUserInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateWithoutUserInput_1.AddressCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateWithoutUserInput_1.AddressCreateWithoutUserInput)
], AddressUpsertWithoutUserInput.prototype, "create", void 0);
AddressUpsertWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AddressUpsertWithoutUserInput", {
        isAbstract: true
    })
], AddressUpsertWithoutUserInput);
exports.AddressUpsertWithoutUserInput = AddressUpsertWithoutUserInput;
