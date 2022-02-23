"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveUpdateWithoutUserInput_1 = require("../inputs/SaveUpdateWithoutUserInput");
const SaveWhereUniqueInput_1 = require("../inputs/SaveWhereUniqueInput");
let SaveUpdateWithWhereUniqueWithoutUserInput = class SaveUpdateWithWhereUniqueWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereUniqueInput_1.SaveWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereUniqueInput_1.SaveWhereUniqueInput)
], SaveUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveUpdateWithoutUserInput_1.SaveUpdateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveUpdateWithoutUserInput_1.SaveUpdateWithoutUserInput)
], SaveUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
SaveUpdateWithWhereUniqueWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], SaveUpdateWithWhereUniqueWithoutUserInput);
exports.SaveUpdateWithWhereUniqueWithoutUserInput = SaveUpdateWithWhereUniqueWithoutUserInput;
