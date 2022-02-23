"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSearchResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstSearchArgs_1 = require("./args/FindFirstSearchArgs");
const Search_1 = require("../../../models/Search");
const helpers_1 = require("../../../helpers");
let FindFirstSearchResolver = class FindFirstSearchResolver {
    async findFirstSearch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).search.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Search_1.Search, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstSearchArgs_1.FindFirstSearchArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstSearchResolver.prototype, "findFirstSearch", null);
FindFirstSearchResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Search_1.Search)
], FindFirstSearchResolver);
exports.FindFirstSearchResolver = FindFirstSearchResolver;
