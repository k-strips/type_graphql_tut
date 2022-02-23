"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SaveWhereUniqueInput = class SaveWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveWhereUniqueInput.prototype, "id", void 0);
SaveWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveWhereUniqueInput", {
        isAbstract: true
    })
], SaveWhereUniqueInput);
exports.SaveWhereUniqueInput = SaveWhereUniqueInput;
