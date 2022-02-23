"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProperty_RequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindUniqueProperty_RequestArgs_1 = require("./args/FindUniqueProperty_RequestArgs");
const Property_Request_1 = require("../../../models/Property_Request");
const helpers_1 = require("../../../helpers");
let FindUniqueProperty_RequestResolver = class FindUniqueProperty_RequestResolver {
    async property_Request(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Property_Request_1.Property_Request, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueProperty_RequestArgs_1.FindUniqueProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindUniqueProperty_RequestResolver.prototype, "property_Request", null);
FindUniqueProperty_RequestResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Property_Request_1.Property_Request)
], FindUniqueProperty_RequestResolver);
exports.FindUniqueProperty_RequestResolver = FindUniqueProperty_RequestResolver;
