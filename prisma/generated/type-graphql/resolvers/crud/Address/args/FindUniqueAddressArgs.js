"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressWhereUniqueInput_1 = require("../../../inputs/AddressWhereUniqueInput");
let FindUniqueAddressArgs = class FindUniqueAddressArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], FindUniqueAddressArgs.prototype, "where", void 0);
FindUniqueAddressArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueAddressArgs);
exports.FindUniqueAddressArgs = FindUniqueAddressArgs;
