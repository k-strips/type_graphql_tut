"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySaveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCreateManyInput_1 = require("../../../inputs/SaveCreateManyInput");
let CreateManySaveArgs = class CreateManySaveArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveCreateManyInput_1.SaveCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManySaveArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManySaveArgs.prototype, "skipDuplicates", void 0);
CreateManySaveArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManySaveArgs);
exports.CreateManySaveArgs = CreateManySaveArgs;
