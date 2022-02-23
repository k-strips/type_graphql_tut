"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressWhereInput_1 = require("../inputs/AddressWhereInput");
let AddressRelationFilter = class AddressRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressRelationFilter.prototype, "isNot", void 0);
AddressRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AddressRelationFilter", {
        isAbstract: true
    })
], AddressRelationFilter);
exports.AddressRelationFilter = AddressRelationFilter;
