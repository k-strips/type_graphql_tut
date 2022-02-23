"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePropertyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdatePropertyArgs_1 = require("./args/UpdatePropertyArgs");
const Property_1 = require("../../../models/Property");
const helpers_1 = require("../../../helpers");
let UpdatePropertyResolver = class UpdatePropertyResolver {
    async updateProperty(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Property_1.Property, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdatePropertyArgs_1.UpdatePropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdatePropertyResolver.prototype, "updateProperty", null);
UpdatePropertyResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Property_1.Property)
], UpdatePropertyResolver);
exports.UpdatePropertyResolver = UpdatePropertyResolver;
