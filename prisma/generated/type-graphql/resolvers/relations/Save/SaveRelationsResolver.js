"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_1 = require("../../../models/Property");
const Save_1 = require("../../../models/Save");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let SaveRelationsResolver = class SaveRelationsResolver {
    async User(save, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).save.findUnique({
            where: {
                id: save.id,
            },
        }).User({});
    }
    async Property(save, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).save.findUnique({
            where: {
                id: save.id,
            },
        }).Property({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Save_1.Save, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaveRelationsResolver.prototype, "User", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Property_1.Property, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Save_1.Save, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaveRelationsResolver.prototype, "Property", null);
SaveRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Save_1.Save)
], SaveRelationsResolver);
exports.SaveRelationsResolver = SaveRelationsResolver;
