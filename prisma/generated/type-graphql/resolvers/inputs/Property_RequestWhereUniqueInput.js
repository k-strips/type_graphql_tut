"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Property_RequestWhereUniqueInput = class Property_RequestWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestWhereUniqueInput.prototype, "id", void 0);
Property_RequestWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestWhereUniqueInput", {
        isAbstract: true
    })
], Property_RequestWhereUniqueInput);
exports.Property_RequestWhereUniqueInput = Property_RequestWhereUniqueInput;
