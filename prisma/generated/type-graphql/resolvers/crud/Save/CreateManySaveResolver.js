"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySaveResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateManySaveArgs_1 = require("./args/CreateManySaveArgs");
const Save_1 = require("../../../models/Save");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManySaveResolver = class CreateManySaveResolver {
    async createManySave(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).save.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManySaveArgs_1.CreateManySaveArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateManySaveResolver.prototype, "createManySave", null);
CreateManySaveResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Save_1.Save)
], CreateManySaveResolver);
exports.CreateManySaveResolver = CreateManySaveResolver;
