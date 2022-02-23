"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSearchResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateSearchArgs_1 = require("./args/CreateSearchArgs");
const Search_1 = require("../../../models/Search");
const helpers_1 = require("../../../helpers");
let CreateSearchResolver = class CreateSearchResolver {
    async createSearch(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).search.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Search_1.Search, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateSearchArgs_1.CreateSearchArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateSearchResolver.prototype, "createSearch", null);
CreateSearchResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Search_1.Search)
], CreateSearchResolver);
exports.CreateSearchResolver = CreateSearchResolver;
