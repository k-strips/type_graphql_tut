"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProperty_RequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateProperty_RequestArgs_1 = require("./args/AggregateProperty_RequestArgs");
const Property_Request_1 = require("../../../models/Property_Request");
const AggregateProperty_Request_1 = require("../../outputs/AggregateProperty_Request");
const helpers_1 = require("../../../helpers");
let AggregateProperty_RequestResolver = class AggregateProperty_RequestResolver {
    async aggregateProperty_Request(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).property_Request.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateProperty_Request_1.AggregateProperty_Request, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateProperty_RequestArgs_1.AggregateProperty_RequestArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateProperty_RequestResolver.prototype, "aggregateProperty_Request", null);
AggregateProperty_RequestResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Property_Request_1.Property_Request)
], AggregateProperty_RequestResolver);
exports.AggregateProperty_RequestResolver = AggregateProperty_RequestResolver;
