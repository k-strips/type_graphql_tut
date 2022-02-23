"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProperty_RequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateManyProperty_RequestArgs_1 = require("./args/CreateManyProperty_RequestArgs");
const Property_Request_1 = require("../../../models/Property_Request");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyProperty_RequestResolver = class CreateManyProperty_RequestResolver {
    async createManyProperty_Request(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyProperty_RequestArgs_1.CreateManyProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateManyProperty_RequestResolver.prototype, "createManyProperty_Request", null);
CreateManyProperty_RequestResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Property_Request_1.Property_Request)
], CreateManyProperty_RequestResolver);
exports.CreateManyProperty_RequestResolver = CreateManyProperty_RequestResolver;
