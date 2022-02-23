"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySaveResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupBySaveArgs_1 = require("./args/GroupBySaveArgs");
const Save_1 = require("../../../models/Save");
const SaveGroupBy_1 = require("../../outputs/SaveGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySaveResolver = class GroupBySaveResolver {
    async groupBySave(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [SaveGroupBy_1.SaveGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupBySaveArgs_1.GroupBySaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupBySaveResolver.prototype, "groupBySave", null);
GroupBySaveResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Save_1.Save)
], GroupBySaveResolver);
exports.GroupBySaveResolver = GroupBySaveResolver;
