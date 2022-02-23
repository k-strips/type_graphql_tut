"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSaveResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstSaveArgs_1 = require("./args/FindFirstSaveArgs");
const Save_1 = require("../../../models/Save");
const helpers_1 = require("../../../helpers");
let FindFirstSaveResolver = class FindFirstSaveResolver {
    async findFirstSave(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Save_1.Save, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstSaveArgs_1.FindFirstSaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstSaveResolver.prototype, "findFirstSave", null);
FindFirstSaveResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Save_1.Save)
], FindFirstSaveResolver);
exports.FindFirstSaveResolver = FindFirstSaveResolver;
