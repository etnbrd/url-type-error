"use strict";
exports.__esModule = true;
exports.getURLTypeError = void 0;
var getURLTypeError = function () {
    try {
        new URL('garbage');
    }
    catch (error) {
        return error instanceof TypeError;
    }
};
exports.getURLTypeError = getURLTypeError;
if (require.main === module) {
    console.log((0, exports.getURLTypeError)());
}
