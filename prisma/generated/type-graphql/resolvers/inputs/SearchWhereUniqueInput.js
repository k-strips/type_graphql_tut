"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SearchWhereUniqueInput = class SearchWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchWhereUniqueInput.prototype, "id", void 0);
SearchWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SearchWhereUniqueInput", {
        isAbstract: true
    })
], SearchWhereUniqueInput);
exports.SearchWhereUniqueInput = SearchWhereUniqueInput;
