"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstOrganizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstOrganizationArgs_1 = require("./args/FindFirstOrganizationArgs");
const Organization_1 = require("../../../models/Organization");
const helpers_1 = require("../../../helpers");
let FindFirstOrganizationResolver = class FindFirstOrganizationResolver {
    async findFirstOrganization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).organization.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Organization_1.Organization, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstOrganizationArgs_1.FindFirstOrganizationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstOrganizationResolver.prototype, "findFirstOrganization", null);
FindFirstOrganizationResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Organization_1.Organization)
], FindFirstOrganizationResolver);
exports.FindFirstOrganizationResolver = FindFirstOrganizationResolver;
