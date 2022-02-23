"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUpdateManyWithWhereWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveScalarWhereInput_1 = require("../inputs/SaveScalarWhereInput");
const SaveUpdateManyMutationInput_1 = require("../inputs/SaveUpdateManyMutationInput");
let SaveUpdateManyWithWhereWithoutPropertyInput = class SaveUpdateManyWithWhereWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveScalarWhereInput_1.SaveScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveScalarWhereInput_1.SaveScalarWhereInput)
], SaveUpdateManyWithWhereWithoutPropertyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveUpdateManyMutationInput_1.SaveUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SaveUpdateManyMutationInput_1.SaveUpdateManyMutationInput)
], SaveUpdateManyWithWhereWithoutPropertyInput.prototype, "data", void 0);
SaveUpdateManyWithWhereWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveUpdateManyWithWhereWithoutPropertyInput", {
        isAbstract: true
    })
], SaveUpdateManyWithWhereWithoutPropertyInput);
exports.SaveUpdateManyWithWhereWithoutPropertyInput = SaveUpdateManyWithWhereWithoutPropertyInput;
