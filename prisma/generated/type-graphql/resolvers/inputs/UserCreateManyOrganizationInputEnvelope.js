"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateManyOrganizationInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateManyOrganizationInput_1 = require("../inputs/UserCreateManyOrganizationInput");
let UserCreateManyOrganizationInputEnvelope = class UserCreateManyOrganizationInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserCreateManyOrganizationInput_1.UserCreateManyOrganizationInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserCreateManyOrganizationInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateManyOrganizationInputEnvelope.prototype, "skipDuplicates", void 0);
UserCreateManyOrganizationInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateManyOrganizationInputEnvelope", {
        isAbstract: true
    })
], UserCreateManyOrganizationInputEnvelope);
exports.UserCreateManyOrganizationInputEnvelope = UserCreateManyOrganizationInputEnvelope;
