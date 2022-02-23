"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressUpdateManyMutationInput_1 = require("../../../inputs/AddressUpdateManyMutationInput");
const AddressWhereInput_1 = require("../../../inputs/AddressWhereInput");
let UpdateManyAddressArgs = class UpdateManyAddressArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressUpdateManyMutationInput_1.AddressUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AddressUpdateManyMutationInput_1.AddressUpdateManyMutationInput)
], UpdateManyAddressArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereInput_1.AddressWhereInput)
], UpdateManyAddressArgs.prototype, "where", void 0);
UpdateManyAddressArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyAddressArgs);
exports.UpdateManyAddressArgs = UpdateManyAddressArgs;
