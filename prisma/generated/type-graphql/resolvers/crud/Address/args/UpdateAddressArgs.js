"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressUpdateInput_1 = require("../../../inputs/AddressUpdateInput");
const AddressWhereUniqueInput_1 = require("../../../inputs/AddressWhereUniqueInput");
let UpdateAddressArgs = class UpdateAddressArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressUpdateInput_1.AddressUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AddressUpdateInput_1.AddressUpdateInput)
], UpdateAddressArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], UpdateAddressArgs.prototype, "where", void 0);
UpdateAddressArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateAddressArgs);
exports.UpdateAddressArgs = UpdateAddressArgs;
