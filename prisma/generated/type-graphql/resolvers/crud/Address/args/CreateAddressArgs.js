"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateInput_1 = require("../../../inputs/AddressCreateInput");
let CreateAddressArgs = class CreateAddressArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateInput_1.AddressCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateInput_1.AddressCreateInput)
], CreateAddressArgs.prototype, "data", void 0);
CreateAddressArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateAddressArgs);
exports.CreateAddressArgs = CreateAddressArgs;
