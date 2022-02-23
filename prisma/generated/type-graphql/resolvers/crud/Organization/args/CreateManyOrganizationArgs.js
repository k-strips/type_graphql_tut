"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyOrganizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateManyInput_1 = require("../../../inputs/OrganizationCreateManyInput");
let CreateManyOrganizationArgs = class CreateManyOrganizationArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [OrganizationCreateManyInput_1.OrganizationCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyOrganizationArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyOrganizationArgs.prototype, "skipDuplicates", void 0);
CreateManyOrganizationArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyOrganizationArgs);
exports.CreateManyOrganizationArgs = CreateManyOrganizationArgs;
