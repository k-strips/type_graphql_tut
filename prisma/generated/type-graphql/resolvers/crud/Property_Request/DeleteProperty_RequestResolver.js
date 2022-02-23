"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProperty_RequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteProperty_RequestArgs_1 = require("./args/DeleteProperty_RequestArgs");
const Property_Request_1 = require("../../../models/Property_Request");
const helpers_1 = require("../../../helpers");
let DeleteProperty_RequestResolver = class DeleteProperty_RequestResolver {
    async deleteProperty_Request(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Property_Request_1.Property_Request, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteProperty_RequestArgs_1.DeleteProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DeleteProperty_RequestResolver.prototype, "deleteProperty_Request", null);
DeleteProperty_RequestResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Property_Request_1.Property_Request)
], DeleteProperty_RequestResolver);
exports.DeleteProperty_RequestResolver = DeleteProperty_RequestResolver;
