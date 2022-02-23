"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let OrganizationWhereUniqueInput = class OrganizationWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationWhereUniqueInput.prototype, "title", void 0);
OrganizationWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationWhereUniqueInput", {
        isAbstract: true
    })
], OrganizationWhereUniqueInput);
exports.OrganizationWhereUniqueInput = OrganizationWhereUniqueInput;
