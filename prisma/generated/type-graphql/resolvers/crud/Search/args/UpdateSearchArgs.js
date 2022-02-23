"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSearchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SearchUpdateInput_1 = require("../../../inputs/SearchUpdateInput");
const SearchWhereUniqueInput_1 = require("../../../inputs/SearchWhereUniqueInput");
let UpdateSearchArgs = class UpdateSearchArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchUpdateInput_1.SearchUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SearchUpdateInput_1.SearchUpdateInput)
], UpdateSearchArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchWhereUniqueInput_1.SearchWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SearchWhereUniqueInput_1.SearchWhereUniqueInput)
], UpdateSearchArgs.prototype, "where", void 0);
UpdateSearchArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateSearchArgs);
exports.UpdateSearchArgs = UpdateSearchArgs;
