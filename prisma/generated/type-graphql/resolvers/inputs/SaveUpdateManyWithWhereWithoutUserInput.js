"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveScalarWhereInput_1 = require("../inputs/SaveScalarWhereInput");
const SaveUpdateManyMutationInput_1 = require("../inputs/SaveUpdateManyMutationInput");
let SaveUpdateManyWithWhereWithoutUserInput = class SaveUpdateManyWithWhereWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveScalarWhereInput_1.SaveScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveScalarWhereInput_1.SaveScalarWhereInput)
], SaveUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveUpdateManyMutationInput_1.SaveUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveUpdateManyMutationInput_1.SaveUpdateManyMutationInput)
], SaveUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
SaveUpdateManyWithWhereWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], SaveUpdateManyWithWhereWithoutUserInput);
exports.SaveUpdateManyWithWhereWithoutUserInput = SaveUpdateManyWithWhereWithoutUserInput;
