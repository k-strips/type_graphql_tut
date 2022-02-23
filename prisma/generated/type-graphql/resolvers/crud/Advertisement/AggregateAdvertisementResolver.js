"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAdvertisementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateAdvertisementArgs_1 = require("./args/AggregateAdvertisementArgs");
const Advertisement_1 = require("../../../models/Advertisement");
const AggregateAdvertisement_1 = require("../../outputs/AggregateAdvertisement");
const helpers_1 = require("../../../helpers");
let AggregateAdvertisementResolver = class AggregateAdvertisementResolver {
    async aggregateAdvertisement(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).advertisement.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateAdvertisement_1.AggregateAdvertisement, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateAdvertisementArgs_1.AggregateAdvertisementArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateAdvertisementResolver.prototype, "aggregateAdvertisement", null);
AggregateAdvertisementResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Advertisement_1.Advertisement)
], AggregateAdvertisementResolver);
exports.AggregateAdvertisementResolver = AggregateAdvertisementResolver;
