"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSearchResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateSearchArgs_1 = require("./args/UpdateSearchArgs");
const Search_1 = require("../../../models/Search");
const helpers_1 = require("../../../helpers");
let UpdateSearchResolver = class UpdateSearchResolver {
    async updateSearch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).search.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Search_1.Search, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateSearchArgs_1.UpdateSearchArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateSearchResolver.prototype, "updateSearch", null);
UpdateSearchResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Search_1.Search)
], UpdateSearchResolver);
exports.UpdateSearchResolver = UpdateSearchResolver;
