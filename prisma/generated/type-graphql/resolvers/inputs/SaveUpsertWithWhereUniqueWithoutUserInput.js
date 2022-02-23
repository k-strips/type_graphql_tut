"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCreateWithoutUserInput_1 = require("../inputs/SaveCreateWithoutUserInput");
const SaveUpdateWithoutUserInput_1 = require("../inputs/SaveUpdateWithoutUserInput");
const SaveWhereUniqueInput_1 = require("../inputs/SaveWhereUniqueInput");
let SaveUpsertWithWhereUniqueWithoutUserInput = class SaveUpsertWithWhereUniqueWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereUniqueInput_1.SaveWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereUniqueInput_1.SaveWhereUniqueInput)
], SaveUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveUpdateWithoutUserInput_1.SaveUpdateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveUpdateWithoutUserInput_1.SaveUpdateWithoutUserInput)
], SaveUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateWithoutUserInput_1.SaveCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateWithoutUserInput_1.SaveCreateWithoutUserInput)
], SaveUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
SaveUpsertWithWhereUniqueWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], SaveUpsertWithWhereUniqueWithoutUserInput);
exports.SaveUpsertWithWhereUniqueWithoutUserInput = SaveUpsertWithWhereUniqueWithoutUserInput;
