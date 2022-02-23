"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePropertyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregatePropertyArgs_1 = require("./args/AggregatePropertyArgs");
const Property_1 = require("../../../models/Property");
const AggregateProperty_1 = require("../../outputs/AggregateProperty");
const helpers_1 = require("../../../helpers");
let AggregatePropertyResolver = class AggregatePropertyResolver {
    async aggregateProperty(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).property.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateProperty_1.AggregateProperty, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregatePropertyArgs_1.AggregatePropertyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregatePropertyResolver.prototype, "aggregateProperty", null);
AggregatePropertyResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Property_1.Property)
], AggregatePropertyResolver);
exports.AggregatePropertyResolver = AggregatePropertyResolver;
