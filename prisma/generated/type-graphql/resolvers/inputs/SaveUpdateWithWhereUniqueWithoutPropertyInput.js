"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUpdateWithWhereUniqueWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveUpdateWithoutPropertyInput_1 = require("../inputs/SaveUpdateWithoutPropertyInput");
const SaveWhereUniqueInput_1 = require("../inputs/SaveWhereUniqueInput");
let SaveUpdateWithWhereUniqueWithoutPropertyInput = class SaveUpdateWithWhereUniqueWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereUniqueInput_1.SaveWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereUniqueInput_1.SaveWhereUniqueInput)
], SaveUpdateWithWhereUniqueWithoutPropertyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveUpdateWithoutPropertyInput_1.SaveUpdateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveUpdateWithoutPropertyInput_1.SaveUpdateWithoutPropertyInput)
], SaveUpdateWithWhereUniqueWithoutPropertyInput.prototype, "data", void 0);
SaveUpdateWithWhereUniqueWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveUpdateWithWhereUniqueWithoutPropertyInput", {
        isAbstract: true
    })
], SaveUpdateWithWhereUniqueWithoutPropertyInput);
exports.SaveUpdateWithWhereUniqueWithoutPropertyInput = SaveUpdateWithWhereUniqueWithoutPropertyInput;
