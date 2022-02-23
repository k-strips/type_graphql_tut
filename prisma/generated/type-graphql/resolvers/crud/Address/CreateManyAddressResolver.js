"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAddressResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateManyAddressArgs_1 = require("./args/CreateManyAddressArgs");
const Address_1 = require("../../../models/Address");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyAddressResolver = class CreateManyAddressResolver {
    async createManyAddress(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).address.createMany({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyAddressArgs_1.CreateManyAddressArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateManyAddressResolver.prototype, "createManyAddress", null);
CreateManyAddressResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], CreateManyAddressResolver);
exports.CreateManyAddressResolver = CreateManyAddressResolver;
