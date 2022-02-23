"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressWhereInput_1 = require("../../../inputs/AddressWhereInput");
let DeleteManyAddressArgs = class DeleteManyAddressArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereInput_1.AddressWhereInput)
], DeleteManyAddressArgs.prototype, "where", void 0);
DeleteManyAddressArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyAddressArgs);
exports.DeleteManyAddressArgs = DeleteManyAddressArgs;
