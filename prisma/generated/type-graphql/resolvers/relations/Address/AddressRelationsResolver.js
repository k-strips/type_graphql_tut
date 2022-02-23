"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Address_1 = require("../../../models/Address");
const Organization_1 = require("../../../models/Organization");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let AddressRelationsResolver = class AddressRelationsResolver {
    async Organization(address, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findUnique({
            where: {
                id: address.id,
            },
        }).Organization({});
    }
    async User(address, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).address.findUnique({
            where: {
                id: address.id,
            },
        }).User({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Organization_1.Organization, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Address_1.Address, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AddressRelationsResolver.prototype, "Organization", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Address_1.Address, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AddressRelationsResolver.prototype, "User", null);
AddressRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], AddressRelationsResolver);
exports.AddressRelationsResolver = AddressRelationsResolver;
