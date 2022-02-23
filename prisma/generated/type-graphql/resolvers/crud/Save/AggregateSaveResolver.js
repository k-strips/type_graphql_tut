"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSaveResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateSaveArgs_1 = require("./args/AggregateSaveArgs");
const Save_1 = require("../../../models/Save");
const AggregateSave_1 = require("../../outputs/AggregateSave");
const helpers_1 = require("../../../helpers");
let AggregateSaveResolver = class AggregateSaveResolver {
    async aggregateSave(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).save.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateSave_1.AggregateSave, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateSaveArgs_1.AggregateSaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateSaveResolver.prototype, "aggregateSave", null);
AggregateSaveResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Save_1.Save)
], AggregateSaveResolver);
exports.AggregateSaveResolver = AggregateSaveResolver;
