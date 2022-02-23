"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Property_RequestOrderByWithRelationAndSearchRelevanceInput");
const Property_RequestWhereInput_1 = require("../../../inputs/Property_RequestWhereInput");
const Property_RequestWhereUniqueInput_1 = require("../../../inputs/Property_RequestWhereUniqueInput");
const Property_RequestScalarFieldEnum_1 = require("../../../../enums/Property_RequestScalarFieldEnum");
let UserRequestArgs = class UserRequestArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereInput_1.Property_RequestWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereInput_1.Property_RequestWhereInput)
], UserRequestArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestOrderByWithRelationAndSearchRelevanceInput_1.Property_RequestOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserRequestArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput)
], UserRequestArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserRequestArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserRequestArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestScalarFieldEnum_1.Property_RequestScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserRequestArgs.prototype, "distinct", void 0);
UserRequestArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UserRequestArgs);
exports.UserRequestArgs = UserRequestArgs;
