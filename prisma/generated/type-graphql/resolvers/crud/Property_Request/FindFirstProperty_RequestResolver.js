"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProperty_RequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstProperty_RequestArgs_1 = require("./args/FindFirstProperty_RequestArgs");
const Property_Request_1 = require("../../../models/Property_Request");
const helpers_1 = require("../../../helpers");
let FindFirstProperty_RequestResolver = class FindFirstProperty_RequestResolver {
    async findFirstProperty_Request(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.findFirst({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstProperty_RequestArgs_1.FindFirstProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstProperty_RequestResolver.prototype, "findFirstProperty_Request", null);
FindFirstProperty_RequestResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Property_Request_1.Property_Request)
], FindFirstProperty_RequestResolver);
exports.FindFirstProperty_RequestResolver = FindFirstProperty_RequestResolver;
