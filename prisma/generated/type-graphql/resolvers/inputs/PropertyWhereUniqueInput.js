"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PropertyWhereUniqueInput = class PropertyWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyWhereUniqueInput.prototype, "id", void 0);
PropertyWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyWhereUniqueInput", {
        isAbstract: true
    })
], PropertyWhereUniqueInput);
exports.PropertyWhereUniqueInput = PropertyWhereUniqueInput;
