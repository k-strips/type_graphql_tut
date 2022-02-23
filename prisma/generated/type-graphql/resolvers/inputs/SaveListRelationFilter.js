"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveWhereInput_1 = require("../inputs/SaveWhereInput");
let SaveListRelationFilter = class SaveListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereInput_1.SaveWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereInput_1.SaveWhereInput)
], SaveListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereInput_1.SaveWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereInput_1.SaveWhereInput)
], SaveListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereInput_1.SaveWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereInput_1.SaveWhereInput)
], SaveListRelationFilter.prototype, "none", void 0);
SaveListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveListRelationFilter", {
        isAbstract: true
    })
], SaveListRelationFilter);
exports.SaveListRelationFilter = SaveListRelationFilter;
