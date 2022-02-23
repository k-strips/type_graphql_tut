"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySearchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SearchUpdateManyMutationInput_1 = require("../../../inputs/SearchUpdateManyMutationInput");
const SearchWhereInput_1 = require("../../../inputs/SearchWhereInput");
let UpdateManySearchArgs = class UpdateManySearchArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchUpdateManyMutationInput_1.SearchUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SearchUpdateManyMutationInput_1.SearchUpdateManyMutationInput)
], UpdateManySearchArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchWhereInput_1.SearchWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchWhereInput_1.SearchWhereInput)
], UpdateManySearchArgs.prototype, "where", void 0);
UpdateManySearchArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManySearchArgs);
exports.UpdateManySearchArgs = UpdateManySearchArgs;
