"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AddressWhereUniqueInput = class AddressWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressWhereUniqueInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressWhereUniqueInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressWhereUniqueInput.prototype, "organizationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressWhereUniqueInput.prototype, "userId", void 0);
AddressWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AddressWhereUniqueInput", {
        isAbstract: true
    })
], AddressWhereUniqueInput);
exports.AddressWhereUniqueInput = AddressWhereUniqueInput;
