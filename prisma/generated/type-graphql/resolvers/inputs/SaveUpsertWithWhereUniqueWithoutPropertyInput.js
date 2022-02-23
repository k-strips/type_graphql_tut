"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUpsertWithWhereUniqueWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCreateWithoutPropertyInput_1 = require("../inputs/SaveCreateWithoutPropertyInput");
const SaveUpdateWithoutPropertyInput_1 = require("../inputs/SaveUpdateWithoutPropertyInput");
const SaveWhereUniqueInput_1 = require("../inputs/SaveWhereUniqueInput");
let SaveUpsertWithWhereUniqueWithoutPropertyInput = class SaveUpsertWithWhereUniqueWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereUniqueInput_1.SaveWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereUniqueInput_1.SaveWhereUniqueInput)
], SaveUpsertWithWhereUniqueWithoutPropertyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveUpdateWithoutPropertyInput_1.SaveUpdateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveUpdateWithoutPropertyInput_1.SaveUpdateWithoutPropertyInput)
], SaveUpsertWithWhereUniqueWithoutPropertyInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateWithoutPropertyInput_1.SaveCreateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateWithoutPropertyInput_1.SaveCreateWithoutPropertyInput)
], SaveUpsertWithWhereUniqueWithoutPropertyInput.prototype, "create", void 0);
SaveUpsertWithWhereUniqueWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveUpsertWithWhereUniqueWithoutPropertyInput", {
        isAbstract: true
    })
], SaveUpsertWithWhereUniqueWithoutPropertyInput);
exports.SaveUpsertWithWhereUniqueWithoutPropertyInput = SaveUpsertWithWhereUniqueWithoutPropertyInput;
