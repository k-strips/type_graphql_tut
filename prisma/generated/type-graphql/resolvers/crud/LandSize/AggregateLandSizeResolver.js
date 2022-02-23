"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLandSizeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateLandSizeArgs_1 = require("./args/AggregateLandSizeArgs");
const LandSize_1 = require("../../../models/LandSize");
const AggregateLandSize_1 = require("../../outputs/AggregateLandSize");
const helpers_1 = require("../../../helpers");
let AggregateLandSizeResolver = class AggregateLandSizeResolver {
    async aggregateLandSize(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).landSize.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateLandSize_1.AggregateLandSize, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateLandSizeArgs_1.AggregateLandSizeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateLandSizeResolver.prototype, "aggregateLandSize", null);
AggregateLandSizeResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => LandSize_1.LandSize)
], AggregateLandSizeResolver);
exports.AggregateLandSizeResolver = AggregateLandSizeResolver;
