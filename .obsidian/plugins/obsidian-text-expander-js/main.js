"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/acorn/dist/acorn.js
var require_acorn = __commonJS({
  "node_modules/acorn/dist/acorn.js"(exports, module2) {
    (function(global, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.acorn = {}));
    })(exports, function(exports2) {
      "use strict";
      var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
      var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
      var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
      var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
      var reservedWords = {
        3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
        5: "class enum extends super const export import",
        6: "enum",
        strict: "implements interface let package private protected public static yield",
        strictBind: "eval arguments"
      };
      var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
      var keywords$1 = {
        5: ecma5AndLessKeywords,
        "5module": ecma5AndLessKeywords + " export import",
        6: ecma5AndLessKeywords + " const class extends export import super"
      };
      var keywordRelationalOperator = /^in(stanceof)?$/;
      var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
      var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
      function isInAstralSet(code, set) {
        var pos = 65536;
        for (var i2 = 0; i2 < set.length; i2 += 2) {
          pos += set[i2];
          if (pos > code) {
            return false;
          }
          pos += set[i2 + 1];
          if (pos >= code) {
            return true;
          }
        }
      }
      function isIdentifierStart(code, astral) {
        if (code < 65) {
          return code === 36;
        }
        if (code < 91) {
          return true;
        }
        if (code < 97) {
          return code === 95;
        }
        if (code < 123) {
          return true;
        }
        if (code <= 65535) {
          return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
        }
        if (astral === false) {
          return false;
        }
        return isInAstralSet(code, astralIdentifierStartCodes);
      }
      function isIdentifierChar(code, astral) {
        if (code < 48) {
          return code === 36;
        }
        if (code < 58) {
          return true;
        }
        if (code < 65) {
          return false;
        }
        if (code < 91) {
          return true;
        }
        if (code < 97) {
          return code === 95;
        }
        if (code < 123) {
          return true;
        }
        if (code <= 65535) {
          return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
        }
        if (astral === false) {
          return false;
        }
        return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
      }
      var TokenType = function TokenType2(label, conf) {
        if (conf === void 0)
          conf = {};
        this.label = label;
        this.keyword = conf.keyword;
        this.beforeExpr = !!conf.beforeExpr;
        this.startsExpr = !!conf.startsExpr;
        this.isLoop = !!conf.isLoop;
        this.isAssign = !!conf.isAssign;
        this.prefix = !!conf.prefix;
        this.postfix = !!conf.postfix;
        this.binop = conf.binop || null;
        this.updateContext = null;
      };
      function binop(name, prec) {
        return new TokenType(name, { beforeExpr: true, binop: prec });
      }
      var beforeExpr = { beforeExpr: true }, startsExpr = { startsExpr: true };
      var keywords = {};
      function kw(name, options) {
        if (options === void 0)
          options = {};
        options.keyword = name;
        return keywords[name] = new TokenType(name, options);
      }
      var types$1 = {
        num: new TokenType("num", startsExpr),
        regexp: new TokenType("regexp", startsExpr),
        string: new TokenType("string", startsExpr),
        name: new TokenType("name", startsExpr),
        privateId: new TokenType("privateId", startsExpr),
        eof: new TokenType("eof"),
        bracketL: new TokenType("[", { beforeExpr: true, startsExpr: true }),
        bracketR: new TokenType("]"),
        braceL: new TokenType("{", { beforeExpr: true, startsExpr: true }),
        braceR: new TokenType("}"),
        parenL: new TokenType("(", { beforeExpr: true, startsExpr: true }),
        parenR: new TokenType(")"),
        comma: new TokenType(",", beforeExpr),
        semi: new TokenType(";", beforeExpr),
        colon: new TokenType(":", beforeExpr),
        dot: new TokenType("."),
        question: new TokenType("?", beforeExpr),
        questionDot: new TokenType("?."),
        arrow: new TokenType("=>", beforeExpr),
        template: new TokenType("template"),
        invalidTemplate: new TokenType("invalidTemplate"),
        ellipsis: new TokenType("...", beforeExpr),
        backQuote: new TokenType("`", startsExpr),
        dollarBraceL: new TokenType("${", { beforeExpr: true, startsExpr: true }),
        eq: new TokenType("=", { beforeExpr: true, isAssign: true }),
        assign: new TokenType("_=", { beforeExpr: true, isAssign: true }),
        incDec: new TokenType("++/--", { prefix: true, postfix: true, startsExpr: true }),
        prefix: new TokenType("!/~", { beforeExpr: true, prefix: true, startsExpr: true }),
        logicalOR: binop("||", 1),
        logicalAND: binop("&&", 2),
        bitwiseOR: binop("|", 3),
        bitwiseXOR: binop("^", 4),
        bitwiseAND: binop("&", 5),
        equality: binop("==/!=/===/!==", 6),
        relational: binop("</>/<=/>=", 7),
        bitShift: binop("<</>>/>>>", 8),
        plusMin: new TokenType("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }),
        modulo: binop("%", 10),
        star: binop("*", 10),
        slash: binop("/", 10),
        starstar: new TokenType("**", { beforeExpr: true }),
        coalesce: binop("??", 1),
        _break: kw("break"),
        _case: kw("case", beforeExpr),
        _catch: kw("catch"),
        _continue: kw("continue"),
        _debugger: kw("debugger"),
        _default: kw("default", beforeExpr),
        _do: kw("do", { isLoop: true, beforeExpr: true }),
        _else: kw("else", beforeExpr),
        _finally: kw("finally"),
        _for: kw("for", { isLoop: true }),
        _function: kw("function", startsExpr),
        _if: kw("if"),
        _return: kw("return", beforeExpr),
        _switch: kw("switch"),
        _throw: kw("throw", beforeExpr),
        _try: kw("try"),
        _var: kw("var"),
        _const: kw("const"),
        _while: kw("while", { isLoop: true }),
        _with: kw("with"),
        _new: kw("new", { beforeExpr: true, startsExpr: true }),
        _this: kw("this", startsExpr),
        _super: kw("super", startsExpr),
        _class: kw("class", startsExpr),
        _extends: kw("extends", beforeExpr),
        _export: kw("export"),
        _import: kw("import", startsExpr),
        _null: kw("null", startsExpr),
        _true: kw("true", startsExpr),
        _false: kw("false", startsExpr),
        _in: kw("in", { beforeExpr: true, binop: 7 }),
        _instanceof: kw("instanceof", { beforeExpr: true, binop: 7 }),
        _typeof: kw("typeof", { beforeExpr: true, prefix: true, startsExpr: true }),
        _void: kw("void", { beforeExpr: true, prefix: true, startsExpr: true }),
        _delete: kw("delete", { beforeExpr: true, prefix: true, startsExpr: true })
      };
      var lineBreak = /\r\n?|\n|\u2028|\u2029/;
      var lineBreakG = new RegExp(lineBreak.source, "g");
      function isNewLine(code) {
        return code === 10 || code === 13 || code === 8232 || code === 8233;
      }
      function nextLineBreak(code, from, end) {
        if (end === void 0)
          end = code.length;
        for (var i2 = from; i2 < end; i2++) {
          var next = code.charCodeAt(i2);
          if (isNewLine(next)) {
            return i2 < end - 1 && next === 13 && code.charCodeAt(i2 + 1) === 10 ? i2 + 2 : i2 + 1;
          }
        }
        return -1;
      }
      var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
      var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
      var ref = Object.prototype;
      var hasOwnProperty = ref.hasOwnProperty;
      var toString = ref.toString;
      var hasOwn = Object.hasOwn || function(obj, propName) {
        return hasOwnProperty.call(obj, propName);
      };
      var isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
      };
      function wordsRegexp(words) {
        return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$");
      }
      function codePointToString(code) {
        if (code <= 65535) {
          return String.fromCharCode(code);
        }
        code -= 65536;
        return String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
      }
      var loneSurrogate = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
      var Position = function Position2(line, col) {
        this.line = line;
        this.column = col;
      };
      Position.prototype.offset = function offset(n) {
        return new Position(this.line, this.column + n);
      };
      var SourceLocation = function SourceLocation2(p, start, end) {
        this.start = start;
        this.end = end;
        if (p.sourceFile !== null) {
          this.source = p.sourceFile;
        }
      };
      function getLineInfo(input, offset) {
        for (var line = 1, cur = 0; ; ) {
          var nextBreak = nextLineBreak(input, cur, offset);
          if (nextBreak < 0) {
            return new Position(line, offset - cur);
          }
          ++line;
          cur = nextBreak;
        }
      }
      var defaultOptions = {
        ecmaVersion: null,
        sourceType: "script",
        onInsertedSemicolon: null,
        onTrailingComma: null,
        allowReserved: null,
        allowReturnOutsideFunction: false,
        allowImportExportEverywhere: false,
        allowAwaitOutsideFunction: null,
        allowSuperOutsideMethod: null,
        allowHashBang: false,
        locations: false,
        onToken: null,
        onComment: null,
        ranges: false,
        program: null,
        sourceFile: null,
        directSourceFile: null,
        preserveParens: false
      };
      var warnedAboutEcmaVersion = false;
      function getOptions(opts) {
        var options = {};
        for (var opt in defaultOptions) {
          options[opt] = opts && hasOwn(opts, opt) ? opts[opt] : defaultOptions[opt];
        }
        if (options.ecmaVersion === "latest") {
          options.ecmaVersion = 1e8;
        } else if (options.ecmaVersion == null) {
          if (!warnedAboutEcmaVersion && typeof console === "object" && console.warn) {
            warnedAboutEcmaVersion = true;
            console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.");
          }
          options.ecmaVersion = 11;
        } else if (options.ecmaVersion >= 2015) {
          options.ecmaVersion -= 2009;
        }
        if (options.allowReserved == null) {
          options.allowReserved = options.ecmaVersion < 5;
        }
        if (opts.allowHashBang == null) {
          options.allowHashBang = options.ecmaVersion >= 14;
        }
        if (isArray(options.onToken)) {
          var tokens = options.onToken;
          options.onToken = function(token) {
            return tokens.push(token);
          };
        }
        if (isArray(options.onComment)) {
          options.onComment = pushComment(options, options.onComment);
        }
        return options;
      }
      function pushComment(options, array) {
        return function(block, text, start, end, startLoc, endLoc) {
          var comment = {
            type: block ? "Block" : "Line",
            value: text,
            start,
            end
          };
          if (options.locations) {
            comment.loc = new SourceLocation(this, startLoc, endLoc);
          }
          if (options.ranges) {
            comment.range = [start, end];
          }
          array.push(comment);
        };
      }
      var SCOPE_TOP = 1, SCOPE_FUNCTION = 2, SCOPE_ASYNC = 4, SCOPE_GENERATOR = 8, SCOPE_ARROW = 16, SCOPE_SIMPLE_CATCH = 32, SCOPE_SUPER = 64, SCOPE_DIRECT_SUPER = 128, SCOPE_CLASS_STATIC_BLOCK = 256, SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK;
      function functionFlags(async, generator) {
        return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
      }
      var BIND_NONE = 0, BIND_VAR = 1, BIND_LEXICAL = 2, BIND_FUNCTION = 3, BIND_SIMPLE_CATCH = 4, BIND_OUTSIDE = 5;
      var Parser2 = function Parser3(options, input, startPos) {
        this.options = options = getOptions(options);
        this.sourceFile = options.sourceFile;
        this.keywords = wordsRegexp(keywords$1[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
        var reserved = "";
        if (options.allowReserved !== true) {
          reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : options.ecmaVersion === 5 ? 5 : 3];
          if (options.sourceType === "module") {
            reserved += " await";
          }
        }
        this.reservedWords = wordsRegexp(reserved);
        var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
        this.reservedWordsStrict = wordsRegexp(reservedStrict);
        this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
        this.input = String(input);
        this.containsEsc = false;
        if (startPos) {
          this.pos = startPos;
          this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
          this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
        } else {
          this.pos = this.lineStart = 0;
          this.curLine = 1;
        }
        this.type = types$1.eof;
        this.value = null;
        this.start = this.end = this.pos;
        this.startLoc = this.endLoc = this.curPosition();
        this.lastTokEndLoc = this.lastTokStartLoc = null;
        this.lastTokStart = this.lastTokEnd = this.pos;
        this.context = this.initialContext();
        this.exprAllowed = true;
        this.inModule = options.sourceType === "module";
        this.strict = this.inModule || this.strictDirective(this.pos);
        this.potentialArrowAt = -1;
        this.potentialArrowInForAwait = false;
        this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
        this.labels = [];
        this.undefinedExports = /* @__PURE__ */ Object.create(null);
        if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!") {
          this.skipLineComment(2);
        }
        this.scopeStack = [];
        this.enterScope(SCOPE_TOP);
        this.regexpState = null;
        this.privateNameStack = [];
      };
      var prototypeAccessors = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, allowNewDotTarget: { configurable: true }, inClassStaticBlock: { configurable: true } };
      Parser2.prototype.parse = function parse2() {
        var node = this.options.program || this.startNode();
        this.nextToken();
        return this.parseTopLevel(node);
      };
      prototypeAccessors.inFunction.get = function() {
        return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
      };
      prototypeAccessors.inGenerator.get = function() {
        return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 && !this.currentVarScope().inClassFieldInit;
      };
      prototypeAccessors.inAsync.get = function() {
        return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 && !this.currentVarScope().inClassFieldInit;
      };
      prototypeAccessors.canAwait.get = function() {
        for (var i2 = this.scopeStack.length - 1; i2 >= 0; i2--) {
          var scope = this.scopeStack[i2];
          if (scope.inClassFieldInit || scope.flags & SCOPE_CLASS_STATIC_BLOCK) {
            return false;
          }
          if (scope.flags & SCOPE_FUNCTION) {
            return (scope.flags & SCOPE_ASYNC) > 0;
          }
        }
        return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
      };
      prototypeAccessors.allowSuper.get = function() {
        var ref2 = this.currentThisScope();
        var flags = ref2.flags;
        var inClassFieldInit = ref2.inClassFieldInit;
        return (flags & SCOPE_SUPER) > 0 || inClassFieldInit || this.options.allowSuperOutsideMethod;
      };
      prototypeAccessors.allowDirectSuper.get = function() {
        return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
      };
      prototypeAccessors.treatFunctionsAsVar.get = function() {
        return this.treatFunctionsAsVarInScope(this.currentScope());
      };
      prototypeAccessors.allowNewDotTarget.get = function() {
        var ref2 = this.currentThisScope();
        var flags = ref2.flags;
        var inClassFieldInit = ref2.inClassFieldInit;
        return (flags & (SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK)) > 0 || inClassFieldInit;
      };
      prototypeAccessors.inClassStaticBlock.get = function() {
        return (this.currentVarScope().flags & SCOPE_CLASS_STATIC_BLOCK) > 0;
      };
      Parser2.extend = function extend() {
        var plugins = [], len = arguments.length;
        while (len--)
          plugins[len] = arguments[len];
        var cls = this;
        for (var i2 = 0; i2 < plugins.length; i2++) {
          cls = plugins[i2](cls);
        }
        return cls;
      };
      Parser2.parse = function parse2(input, options) {
        return new this(options, input).parse();
      };
      Parser2.parseExpressionAt = function parseExpressionAt2(input, pos, options) {
        var parser = new this(options, input, pos);
        parser.nextToken();
        return parser.parseExpression();
      };
      Parser2.tokenizer = function tokenizer2(input, options) {
        return new this(options, input);
      };
      Object.defineProperties(Parser2.prototype, prototypeAccessors);
      var pp$9 = Parser2.prototype;
      var literal = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
      pp$9.strictDirective = function(start) {
        if (this.options.ecmaVersion < 5) {
          return false;
        }
        for (; ; ) {
          skipWhiteSpace.lastIndex = start;
          start += skipWhiteSpace.exec(this.input)[0].length;
          var match = literal.exec(this.input.slice(start));
          if (!match) {
            return false;
          }
          if ((match[1] || match[2]) === "use strict") {
            skipWhiteSpace.lastIndex = start + match[0].length;
            var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
            var next = this.input.charAt(end);
            return next === ";" || next === "}" || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "=");
          }
          start += match[0].length;
          skipWhiteSpace.lastIndex = start;
          start += skipWhiteSpace.exec(this.input)[0].length;
          if (this.input[start] === ";") {
            start++;
          }
        }
      };
      pp$9.eat = function(type) {
        if (this.type === type) {
          this.next();
          return true;
        } else {
          return false;
        }
      };
      pp$9.isContextual = function(name) {
        return this.type === types$1.name && this.value === name && !this.containsEsc;
      };
      pp$9.eatContextual = function(name) {
        if (!this.isContextual(name)) {
          return false;
        }
        this.next();
        return true;
      };
      pp$9.expectContextual = function(name) {
        if (!this.eatContextual(name)) {
          this.unexpected();
        }
      };
      pp$9.canInsertSemicolon = function() {
        return this.type === types$1.eof || this.type === types$1.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
      };
      pp$9.insertSemicolon = function() {
        if (this.canInsertSemicolon()) {
          if (this.options.onInsertedSemicolon) {
            this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
          }
          return true;
        }
      };
      pp$9.semicolon = function() {
        if (!this.eat(types$1.semi) && !this.insertSemicolon()) {
          this.unexpected();
        }
      };
      pp$9.afterTrailingComma = function(tokType, notNext) {
        if (this.type === tokType) {
          if (this.options.onTrailingComma) {
            this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
          }
          if (!notNext) {
            this.next();
          }
          return true;
        }
      };
      pp$9.expect = function(type) {
        this.eat(type) || this.unexpected();
      };
      pp$9.unexpected = function(pos) {
        this.raise(pos != null ? pos : this.start, "Unexpected token");
      };
      var DestructuringErrors = function DestructuringErrors2() {
        this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
      };
      pp$9.checkPatternErrors = function(refDestructuringErrors, isAssign) {
        if (!refDestructuringErrors) {
          return;
        }
        if (refDestructuringErrors.trailingComma > -1) {
          this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
        }
        var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
        if (parens > -1) {
          this.raiseRecoverable(parens, isAssign ? "Assigning to rvalue" : "Parenthesized pattern");
        }
      };
      pp$9.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
        if (!refDestructuringErrors) {
          return false;
        }
        var shorthandAssign = refDestructuringErrors.shorthandAssign;
        var doubleProto = refDestructuringErrors.doubleProto;
        if (!andThrow) {
          return shorthandAssign >= 0 || doubleProto >= 0;
        }
        if (shorthandAssign >= 0) {
          this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
        }
        if (doubleProto >= 0) {
          this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
        }
      };
      pp$9.checkYieldAwaitInDefaultParams = function() {
        if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
          this.raise(this.yieldPos, "Yield expression cannot be a default value");
        }
        if (this.awaitPos) {
          this.raise(this.awaitPos, "Await expression cannot be a default value");
        }
      };
      pp$9.isSimpleAssignTarget = function(expr) {
        if (expr.type === "ParenthesizedExpression") {
          return this.isSimpleAssignTarget(expr.expression);
        }
        return expr.type === "Identifier" || expr.type === "MemberExpression";
      };
      var pp$8 = Parser2.prototype;
      pp$8.parseTopLevel = function(node) {
        var exports3 = /* @__PURE__ */ Object.create(null);
        if (!node.body) {
          node.body = [];
        }
        while (this.type !== types$1.eof) {
          var stmt = this.parseStatement(null, true, exports3);
          node.body.push(stmt);
        }
        if (this.inModule) {
          for (var i2 = 0, list2 = Object.keys(this.undefinedExports); i2 < list2.length; i2 += 1) {
            var name = list2[i2];
            this.raiseRecoverable(this.undefinedExports[name].start, "Export '" + name + "' is not defined");
          }
        }
        this.adaptDirectivePrologue(node.body);
        this.next();
        node.sourceType = this.options.sourceType;
        return this.finishNode(node, "Program");
      };
      var loopLabel = { kind: "loop" }, switchLabel = { kind: "switch" };
      pp$8.isLet = function(context) {
        if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
          return false;
        }
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
        if (nextCh === 91 || nextCh === 92 || nextCh > 55295 && nextCh < 56320) {
          return true;
        }
        if (context) {
          return false;
        }
        if (nextCh === 123) {
          return true;
        }
        if (isIdentifierStart(nextCh, true)) {
          var pos = next + 1;
          while (isIdentifierChar(nextCh = this.input.charCodeAt(pos), true)) {
            ++pos;
          }
          if (nextCh === 92 || nextCh > 55295 && nextCh < 56320) {
            return true;
          }
          var ident = this.input.slice(next, pos);
          if (!keywordRelationalOperator.test(ident)) {
            return true;
          }
        }
        return false;
      };
      pp$8.isAsyncFunction = function() {
        if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
          return false;
        }
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, after;
        return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === "function" && (next + 8 === this.input.length || !(isIdentifierChar(after = this.input.charCodeAt(next + 8)) || after > 55295 && after < 56320));
      };
      pp$8.parseStatement = function(context, topLevel, exports3) {
        var starttype = this.type, node = this.startNode(), kind;
        if (this.isLet(context)) {
          starttype = types$1._var;
          kind = "let";
        }
        switch (starttype) {
          case types$1._break:
          case types$1._continue:
            return this.parseBreakContinueStatement(node, starttype.keyword);
          case types$1._debugger:
            return this.parseDebuggerStatement(node);
          case types$1._do:
            return this.parseDoStatement(node);
          case types$1._for:
            return this.parseForStatement(node);
          case types$1._function:
            if (context && (this.strict || context !== "if" && context !== "label") && this.options.ecmaVersion >= 6) {
              this.unexpected();
            }
            return this.parseFunctionStatement(node, false, !context);
          case types$1._class:
            if (context) {
              this.unexpected();
            }
            return this.parseClass(node, true);
          case types$1._if:
            return this.parseIfStatement(node);
          case types$1._return:
            return this.parseReturnStatement(node);
          case types$1._switch:
            return this.parseSwitchStatement(node);
          case types$1._throw:
            return this.parseThrowStatement(node);
          case types$1._try:
            return this.parseTryStatement(node);
          case types$1._const:
          case types$1._var:
            kind = kind || this.value;
            if (context && kind !== "var") {
              this.unexpected();
            }
            return this.parseVarStatement(node, kind);
          case types$1._while:
            return this.parseWhileStatement(node);
          case types$1._with:
            return this.parseWithStatement(node);
          case types$1.braceL:
            return this.parseBlock(true, node);
          case types$1.semi:
            return this.parseEmptyStatement(node);
          case types$1._export:
          case types$1._import:
            if (this.options.ecmaVersion > 10 && starttype === types$1._import) {
              skipWhiteSpace.lastIndex = this.pos;
              var skip = skipWhiteSpace.exec(this.input);
              var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
              if (nextCh === 40 || nextCh === 46) {
                return this.parseExpressionStatement(node, this.parseExpression());
              }
            }
            if (!this.options.allowImportExportEverywhere) {
              if (!topLevel) {
                this.raise(this.start, "'import' and 'export' may only appear at the top level");
              }
              if (!this.inModule) {
                this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
              }
            }
            return starttype === types$1._import ? this.parseImport(node) : this.parseExport(node, exports3);
          default:
            if (this.isAsyncFunction()) {
              if (context) {
                this.unexpected();
              }
              this.next();
              return this.parseFunctionStatement(node, true, !context);
            }
            var maybeName = this.value, expr = this.parseExpression();
            if (starttype === types$1.name && expr.type === "Identifier" && this.eat(types$1.colon)) {
              return this.parseLabeledStatement(node, maybeName, expr, context);
            } else {
              return this.parseExpressionStatement(node, expr);
            }
        }
      };
      pp$8.parseBreakContinueStatement = function(node, keyword) {
        var isBreak = keyword === "break";
        this.next();
        if (this.eat(types$1.semi) || this.insertSemicolon()) {
          node.label = null;
        } else if (this.type !== types$1.name) {
          this.unexpected();
        } else {
          node.label = this.parseIdent();
          this.semicolon();
        }
        var i2 = 0;
        for (; i2 < this.labels.length; ++i2) {
          var lab = this.labels[i2];
          if (node.label == null || lab.name === node.label.name) {
            if (lab.kind != null && (isBreak || lab.kind === "loop")) {
              break;
            }
            if (node.label && isBreak) {
              break;
            }
          }
        }
        if (i2 === this.labels.length) {
          this.raise(node.start, "Unsyntactic " + keyword);
        }
        return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
      };
      pp$8.parseDebuggerStatement = function(node) {
        this.next();
        this.semicolon();
        return this.finishNode(node, "DebuggerStatement");
      };
      pp$8.parseDoStatement = function(node) {
        this.next();
        this.labels.push(loopLabel);
        node.body = this.parseStatement("do");
        this.labels.pop();
        this.expect(types$1._while);
        node.test = this.parseParenExpression();
        if (this.options.ecmaVersion >= 6) {
          this.eat(types$1.semi);
        } else {
          this.semicolon();
        }
        return this.finishNode(node, "DoWhileStatement");
      };
      pp$8.parseForStatement = function(node) {
        this.next();
        var awaitAt = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
        this.labels.push(loopLabel);
        this.enterScope(0);
        this.expect(types$1.parenL);
        if (this.type === types$1.semi) {
          if (awaitAt > -1) {
            this.unexpected(awaitAt);
          }
          return this.parseFor(node, null);
        }
        var isLet = this.isLet();
        if (this.type === types$1._var || this.type === types$1._const || isLet) {
          var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
          this.next();
          this.parseVar(init$1, true, kind);
          this.finishNode(init$1, "VariableDeclaration");
          if ((this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && init$1.declarations.length === 1) {
            if (this.options.ecmaVersion >= 9) {
              if (this.type === types$1._in) {
                if (awaitAt > -1) {
                  this.unexpected(awaitAt);
                }
              } else {
                node.await = awaitAt > -1;
              }
            }
            return this.parseForIn(node, init$1);
          }
          if (awaitAt > -1) {
            this.unexpected(awaitAt);
          }
          return this.parseFor(node, init$1);
        }
        var startsWithLet = this.isContextual("let"), isForOf = false;
        var refDestructuringErrors = new DestructuringErrors();
        var init = this.parseExpression(awaitAt > -1 ? "await" : true, refDestructuringErrors);
        if (this.type === types$1._in || (isForOf = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
          if (this.options.ecmaVersion >= 9) {
            if (this.type === types$1._in) {
              if (awaitAt > -1) {
                this.unexpected(awaitAt);
              }
            } else {
              node.await = awaitAt > -1;
            }
          }
          if (startsWithLet && isForOf) {
            this.raise(init.start, "The left-hand side of a for-of loop may not start with 'let'.");
          }
          this.toAssignable(init, false, refDestructuringErrors);
          this.checkLValPattern(init);
          return this.parseForIn(node, init);
        } else {
          this.checkExpressionErrors(refDestructuringErrors, true);
        }
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }
        return this.parseFor(node, init);
      };
      pp$8.parseFunctionStatement = function(node, isAsync, declarationPosition) {
        this.next();
        return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
      };
      pp$8.parseIfStatement = function(node) {
        this.next();
        node.test = this.parseParenExpression();
        node.consequent = this.parseStatement("if");
        node.alternate = this.eat(types$1._else) ? this.parseStatement("if") : null;
        return this.finishNode(node, "IfStatement");
      };
      pp$8.parseReturnStatement = function(node) {
        if (!this.inFunction && !this.options.allowReturnOutsideFunction) {
          this.raise(this.start, "'return' outside of function");
        }
        this.next();
        if (this.eat(types$1.semi) || this.insertSemicolon()) {
          node.argument = null;
        } else {
          node.argument = this.parseExpression();
          this.semicolon();
        }
        return this.finishNode(node, "ReturnStatement");
      };
      pp$8.parseSwitchStatement = function(node) {
        this.next();
        node.discriminant = this.parseParenExpression();
        node.cases = [];
        this.expect(types$1.braceL);
        this.labels.push(switchLabel);
        this.enterScope(0);
        var cur;
        for (var sawDefault = false; this.type !== types$1.braceR; ) {
          if (this.type === types$1._case || this.type === types$1._default) {
            var isCase = this.type === types$1._case;
            if (cur) {
              this.finishNode(cur, "SwitchCase");
            }
            node.cases.push(cur = this.startNode());
            cur.consequent = [];
            this.next();
            if (isCase) {
              cur.test = this.parseExpression();
            } else {
              if (sawDefault) {
                this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
              }
              sawDefault = true;
              cur.test = null;
            }
            this.expect(types$1.colon);
          } else {
            if (!cur) {
              this.unexpected();
            }
            cur.consequent.push(this.parseStatement(null));
          }
        }
        this.exitScope();
        if (cur) {
          this.finishNode(cur, "SwitchCase");
        }
        this.next();
        this.labels.pop();
        return this.finishNode(node, "SwitchStatement");
      };
      pp$8.parseThrowStatement = function(node) {
        this.next();
        if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) {
          this.raise(this.lastTokEnd, "Illegal newline after throw");
        }
        node.argument = this.parseExpression();
        this.semicolon();
        return this.finishNode(node, "ThrowStatement");
      };
      var empty$1 = [];
      pp$8.parseTryStatement = function(node) {
        this.next();
        node.block = this.parseBlock();
        node.handler = null;
        if (this.type === types$1._catch) {
          var clause = this.startNode();
          this.next();
          if (this.eat(types$1.parenL)) {
            clause.param = this.parseBindingAtom();
            var simple = clause.param.type === "Identifier";
            this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
            this.checkLValPattern(clause.param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
            this.expect(types$1.parenR);
          } else {
            if (this.options.ecmaVersion < 10) {
              this.unexpected();
            }
            clause.param = null;
            this.enterScope(0);
          }
          clause.body = this.parseBlock(false);
          this.exitScope();
          node.handler = this.finishNode(clause, "CatchClause");
        }
        node.finalizer = this.eat(types$1._finally) ? this.parseBlock() : null;
        if (!node.handler && !node.finalizer) {
          this.raise(node.start, "Missing catch or finally clause");
        }
        return this.finishNode(node, "TryStatement");
      };
      pp$8.parseVarStatement = function(node, kind) {
        this.next();
        this.parseVar(node, false, kind);
        this.semicolon();
        return this.finishNode(node, "VariableDeclaration");
      };
      pp$8.parseWhileStatement = function(node) {
        this.next();
        node.test = this.parseParenExpression();
        this.labels.push(loopLabel);
        node.body = this.parseStatement("while");
        this.labels.pop();
        return this.finishNode(node, "WhileStatement");
      };
      pp$8.parseWithStatement = function(node) {
        if (this.strict) {
          this.raise(this.start, "'with' in strict mode");
        }
        this.next();
        node.object = this.parseParenExpression();
        node.body = this.parseStatement("with");
        return this.finishNode(node, "WithStatement");
      };
      pp$8.parseEmptyStatement = function(node) {
        this.next();
        return this.finishNode(node, "EmptyStatement");
      };
      pp$8.parseLabeledStatement = function(node, maybeName, expr, context) {
        for (var i$1 = 0, list2 = this.labels; i$1 < list2.length; i$1 += 1) {
          var label = list2[i$1];
          if (label.name === maybeName) {
            this.raise(expr.start, "Label '" + maybeName + "' is already declared");
          }
        }
        var kind = this.type.isLoop ? "loop" : this.type === types$1._switch ? "switch" : null;
        for (var i2 = this.labels.length - 1; i2 >= 0; i2--) {
          var label$1 = this.labels[i2];
          if (label$1.statementStart === node.start) {
            label$1.statementStart = this.start;
            label$1.kind = kind;
          } else {
            break;
          }
        }
        this.labels.push({ name: maybeName, kind, statementStart: this.start });
        node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
        this.labels.pop();
        node.label = expr;
        return this.finishNode(node, "LabeledStatement");
      };
      pp$8.parseExpressionStatement = function(node, expr) {
        node.expression = expr;
        this.semicolon();
        return this.finishNode(node, "ExpressionStatement");
      };
      pp$8.parseBlock = function(createNewLexicalScope, node, exitStrict) {
        if (createNewLexicalScope === void 0)
          createNewLexicalScope = true;
        if (node === void 0)
          node = this.startNode();
        node.body = [];
        this.expect(types$1.braceL);
        if (createNewLexicalScope) {
          this.enterScope(0);
        }
        while (this.type !== types$1.braceR) {
          var stmt = this.parseStatement(null);
          node.body.push(stmt);
        }
        if (exitStrict) {
          this.strict = false;
        }
        this.next();
        if (createNewLexicalScope) {
          this.exitScope();
        }
        return this.finishNode(node, "BlockStatement");
      };
      pp$8.parseFor = function(node, init) {
        node.init = init;
        this.expect(types$1.semi);
        node.test = this.type === types$1.semi ? null : this.parseExpression();
        this.expect(types$1.semi);
        node.update = this.type === types$1.parenR ? null : this.parseExpression();
        this.expect(types$1.parenR);
        node.body = this.parseStatement("for");
        this.exitScope();
        this.labels.pop();
        return this.finishNode(node, "ForStatement");
      };
      pp$8.parseForIn = function(node, init) {
        var isForIn = this.type === types$1._in;
        this.next();
        if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.options.ecmaVersion < 8 || this.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
          this.raise(
            init.start,
            (isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
          );
        }
        node.left = init;
        node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
        this.expect(types$1.parenR);
        node.body = this.parseStatement("for");
        this.exitScope();
        this.labels.pop();
        return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
      };
      pp$8.parseVar = function(node, isFor, kind) {
        node.declarations = [];
        node.kind = kind;
        for (; ; ) {
          var decl = this.startNode();
          this.parseVarId(decl, kind);
          if (this.eat(types$1.eq)) {
            decl.init = this.parseMaybeAssign(isFor);
          } else if (kind === "const" && !(this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
            this.unexpected();
          } else if (decl.id.type !== "Identifier" && !(isFor && (this.type === types$1._in || this.isContextual("of")))) {
            this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
          } else {
            decl.init = null;
          }
          node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
          if (!this.eat(types$1.comma)) {
            break;
          }
        }
        return node;
      };
      pp$8.parseVarId = function(decl, kind) {
        decl.id = this.parseBindingAtom();
        this.checkLValPattern(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
      };
      var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;
      pp$8.parseFunction = function(node, statement, allowExpressionBody, isAsync, forInit) {
        this.initFunction(node);
        if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
          if (this.type === types$1.star && statement & FUNC_HANGING_STATEMENT) {
            this.unexpected();
          }
          node.generator = this.eat(types$1.star);
        }
        if (this.options.ecmaVersion >= 8) {
          node.async = !!isAsync;
        }
        if (statement & FUNC_STATEMENT) {
          node.id = statement & FUNC_NULLABLE_ID && this.type !== types$1.name ? null : this.parseIdent();
          if (node.id && !(statement & FUNC_HANGING_STATEMENT)) {
            this.checkLValSimple(node.id, this.strict || node.generator || node.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION);
          }
        }
        var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;
        this.enterScope(functionFlags(node.async, node.generator));
        if (!(statement & FUNC_STATEMENT)) {
          node.id = this.type === types$1.name ? this.parseIdent() : null;
        }
        this.parseFunctionParams(node);
        this.parseFunctionBody(node, allowExpressionBody, false, forInit);
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.finishNode(node, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
      };
      pp$8.parseFunctionParams = function(node) {
        this.expect(types$1.parenL);
        node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
        this.checkYieldAwaitInDefaultParams();
      };
      pp$8.parseClass = function(node, isStatement) {
        this.next();
        var oldStrict = this.strict;
        this.strict = true;
        this.parseClassId(node, isStatement);
        this.parseClassSuper(node);
        var privateNameMap = this.enterClassBody();
        var classBody = this.startNode();
        var hadConstructor = false;
        classBody.body = [];
        this.expect(types$1.braceL);
        while (this.type !== types$1.braceR) {
          var element = this.parseClassElement(node.superClass !== null);
          if (element) {
            classBody.body.push(element);
            if (element.type === "MethodDefinition" && element.kind === "constructor") {
              if (hadConstructor) {
                this.raise(element.start, "Duplicate constructor in the same class");
              }
              hadConstructor = true;
            } else if (element.key && element.key.type === "PrivateIdentifier" && isPrivateNameConflicted(privateNameMap, element)) {
              this.raiseRecoverable(element.key.start, "Identifier '#" + element.key.name + "' has already been declared");
            }
          }
        }
        this.strict = oldStrict;
        this.next();
        node.body = this.finishNode(classBody, "ClassBody");
        this.exitClassBody();
        return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
      };
      pp$8.parseClassElement = function(constructorAllowsSuper) {
        if (this.eat(types$1.semi)) {
          return null;
        }
        var ecmaVersion2 = this.options.ecmaVersion;
        var node = this.startNode();
        var keyName = "";
        var isGenerator = false;
        var isAsync = false;
        var kind = "method";
        var isStatic = false;
        if (this.eatContextual("static")) {
          if (ecmaVersion2 >= 13 && this.eat(types$1.braceL)) {
            this.parseClassStaticBlock(node);
            return node;
          }
          if (this.isClassElementNameStart() || this.type === types$1.star) {
            isStatic = true;
          } else {
            keyName = "static";
          }
        }
        node.static = isStatic;
        if (!keyName && ecmaVersion2 >= 8 && this.eatContextual("async")) {
          if ((this.isClassElementNameStart() || this.type === types$1.star) && !this.canInsertSemicolon()) {
            isAsync = true;
          } else {
            keyName = "async";
          }
        }
        if (!keyName && (ecmaVersion2 >= 9 || !isAsync) && this.eat(types$1.star)) {
          isGenerator = true;
        }
        if (!keyName && !isAsync && !isGenerator) {
          var lastValue = this.value;
          if (this.eatContextual("get") || this.eatContextual("set")) {
            if (this.isClassElementNameStart()) {
              kind = lastValue;
            } else {
              keyName = lastValue;
            }
          }
        }
        if (keyName) {
          node.computed = false;
          node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
          node.key.name = keyName;
          this.finishNode(node.key, "Identifier");
        } else {
          this.parseClassElementName(node);
        }
        if (ecmaVersion2 < 13 || this.type === types$1.parenL || kind !== "method" || isGenerator || isAsync) {
          var isConstructor = !node.static && checkKeyName(node, "constructor");
          var allowsDirectSuper = isConstructor && constructorAllowsSuper;
          if (isConstructor && kind !== "method") {
            this.raise(node.key.start, "Constructor can't have get/set modifier");
          }
          node.kind = isConstructor ? "constructor" : kind;
          this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper);
        } else {
          this.parseClassField(node);
        }
        return node;
      };
      pp$8.isClassElementNameStart = function() {
        return this.type === types$1.name || this.type === types$1.privateId || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword;
      };
      pp$8.parseClassElementName = function(element) {
        if (this.type === types$1.privateId) {
          if (this.value === "constructor") {
            this.raise(this.start, "Classes can't have an element named '#constructor'");
          }
          element.computed = false;
          element.key = this.parsePrivateIdent();
        } else {
          this.parsePropertyName(element);
        }
      };
      pp$8.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
        var key = method.key;
        if (method.kind === "constructor") {
          if (isGenerator) {
            this.raise(key.start, "Constructor can't be a generator");
          }
          if (isAsync) {
            this.raise(key.start, "Constructor can't be an async method");
          }
        } else if (method.static && checkKeyName(method, "prototype")) {
          this.raise(key.start, "Classes may not have a static property named prototype");
        }
        var value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
        if (method.kind === "get" && value.params.length !== 0) {
          this.raiseRecoverable(value.start, "getter should have no params");
        }
        if (method.kind === "set" && value.params.length !== 1) {
          this.raiseRecoverable(value.start, "setter should have exactly one param");
        }
        if (method.kind === "set" && value.params[0].type === "RestElement") {
          this.raiseRecoverable(value.params[0].start, "Setter cannot use rest params");
        }
        return this.finishNode(method, "MethodDefinition");
      };
      pp$8.parseClassField = function(field) {
        if (checkKeyName(field, "constructor")) {
          this.raise(field.key.start, "Classes can't have a field named 'constructor'");
        } else if (field.static && checkKeyName(field, "prototype")) {
          this.raise(field.key.start, "Classes can't have a static field named 'prototype'");
        }
        if (this.eat(types$1.eq)) {
          var scope = this.currentThisScope();
          var inClassFieldInit = scope.inClassFieldInit;
          scope.inClassFieldInit = true;
          field.value = this.parseMaybeAssign();
          scope.inClassFieldInit = inClassFieldInit;
        } else {
          field.value = null;
        }
        this.semicolon();
        return this.finishNode(field, "PropertyDefinition");
      };
      pp$8.parseClassStaticBlock = function(node) {
        node.body = [];
        var oldLabels = this.labels;
        this.labels = [];
        this.enterScope(SCOPE_CLASS_STATIC_BLOCK | SCOPE_SUPER);
        while (this.type !== types$1.braceR) {
          var stmt = this.parseStatement(null);
          node.body.push(stmt);
        }
        this.next();
        this.exitScope();
        this.labels = oldLabels;
        return this.finishNode(node, "StaticBlock");
      };
      pp$8.parseClassId = function(node, isStatement) {
        if (this.type === types$1.name) {
          node.id = this.parseIdent();
          if (isStatement) {
            this.checkLValSimple(node.id, BIND_LEXICAL, false);
          }
        } else {
          if (isStatement === true) {
            this.unexpected();
          }
          node.id = null;
        }
      };
      pp$8.parseClassSuper = function(node) {
        node.superClass = this.eat(types$1._extends) ? this.parseExprSubscripts(false) : null;
      };
      pp$8.enterClassBody = function() {
        var element = { declared: /* @__PURE__ */ Object.create(null), used: [] };
        this.privateNameStack.push(element);
        return element.declared;
      };
      pp$8.exitClassBody = function() {
        var ref2 = this.privateNameStack.pop();
        var declared = ref2.declared;
        var used = ref2.used;
        var len = this.privateNameStack.length;
        var parent = len === 0 ? null : this.privateNameStack[len - 1];
        for (var i2 = 0; i2 < used.length; ++i2) {
          var id = used[i2];
          if (!hasOwn(declared, id.name)) {
            if (parent) {
              parent.used.push(id);
            } else {
              this.raiseRecoverable(id.start, "Private field '#" + id.name + "' must be declared in an enclosing class");
            }
          }
        }
      };
      function isPrivateNameConflicted(privateNameMap, element) {
        var name = element.key.name;
        var curr = privateNameMap[name];
        var next = "true";
        if (element.type === "MethodDefinition" && (element.kind === "get" || element.kind === "set")) {
          next = (element.static ? "s" : "i") + element.kind;
        }
        if (curr === "iget" && next === "iset" || curr === "iset" && next === "iget" || curr === "sget" && next === "sset" || curr === "sset" && next === "sget") {
          privateNameMap[name] = "true";
          return false;
        } else if (!curr) {
          privateNameMap[name] = next;
          return false;
        } else {
          return true;
        }
      }
      function checkKeyName(node, name) {
        var computed = node.computed;
        var key = node.key;
        return !computed && (key.type === "Identifier" && key.name === name || key.type === "Literal" && key.value === name);
      }
      pp$8.parseExport = function(node, exports3) {
        this.next();
        if (this.eat(types$1.star)) {
          if (this.options.ecmaVersion >= 11) {
            if (this.eatContextual("as")) {
              node.exported = this.parseModuleExportName();
              this.checkExport(exports3, node.exported, this.lastTokStart);
            } else {
              node.exported = null;
            }
          }
          this.expectContextual("from");
          if (this.type !== types$1.string) {
            this.unexpected();
          }
          node.source = this.parseExprAtom();
          this.semicolon();
          return this.finishNode(node, "ExportAllDeclaration");
        }
        if (this.eat(types$1._default)) {
          this.checkExport(exports3, "default", this.lastTokStart);
          var isAsync;
          if (this.type === types$1._function || (isAsync = this.isAsyncFunction())) {
            var fNode = this.startNode();
            this.next();
            if (isAsync) {
              this.next();
            }
            node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
          } else if (this.type === types$1._class) {
            var cNode = this.startNode();
            node.declaration = this.parseClass(cNode, "nullableID");
          } else {
            node.declaration = this.parseMaybeAssign();
            this.semicolon();
          }
          return this.finishNode(node, "ExportDefaultDeclaration");
        }
        if (this.shouldParseExportStatement()) {
          node.declaration = this.parseStatement(null);
          if (node.declaration.type === "VariableDeclaration") {
            this.checkVariableExport(exports3, node.declaration.declarations);
          } else {
            this.checkExport(exports3, node.declaration.id, node.declaration.id.start);
          }
          node.specifiers = [];
          node.source = null;
        } else {
          node.declaration = null;
          node.specifiers = this.parseExportSpecifiers(exports3);
          if (this.eatContextual("from")) {
            if (this.type !== types$1.string) {
              this.unexpected();
            }
            node.source = this.parseExprAtom();
          } else {
            for (var i2 = 0, list2 = node.specifiers; i2 < list2.length; i2 += 1) {
              var spec = list2[i2];
              this.checkUnreserved(spec.local);
              this.checkLocalExport(spec.local);
              if (spec.local.type === "Literal") {
                this.raise(spec.local.start, "A string literal cannot be used as an exported binding without `from`.");
              }
            }
            node.source = null;
          }
          this.semicolon();
        }
        return this.finishNode(node, "ExportNamedDeclaration");
      };
      pp$8.checkExport = function(exports3, name, pos) {
        if (!exports3) {
          return;
        }
        if (typeof name !== "string") {
          name = name.type === "Identifier" ? name.name : name.value;
        }
        if (hasOwn(exports3, name)) {
          this.raiseRecoverable(pos, "Duplicate export '" + name + "'");
        }
        exports3[name] = true;
      };
      pp$8.checkPatternExport = function(exports3, pat) {
        var type = pat.type;
        if (type === "Identifier") {
          this.checkExport(exports3, pat, pat.start);
        } else if (type === "ObjectPattern") {
          for (var i2 = 0, list2 = pat.properties; i2 < list2.length; i2 += 1) {
            var prop = list2[i2];
            this.checkPatternExport(exports3, prop);
          }
        } else if (type === "ArrayPattern") {
          for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
            var elt = list$1[i$1];
            if (elt) {
              this.checkPatternExport(exports3, elt);
            }
          }
        } else if (type === "Property") {
          this.checkPatternExport(exports3, pat.value);
        } else if (type === "AssignmentPattern") {
          this.checkPatternExport(exports3, pat.left);
        } else if (type === "RestElement") {
          this.checkPatternExport(exports3, pat.argument);
        } else if (type === "ParenthesizedExpression") {
          this.checkPatternExport(exports3, pat.expression);
        }
      };
      pp$8.checkVariableExport = function(exports3, decls) {
        if (!exports3) {
          return;
        }
        for (var i2 = 0, list2 = decls; i2 < list2.length; i2 += 1) {
          var decl = list2[i2];
          this.checkPatternExport(exports3, decl.id);
        }
      };
      pp$8.shouldParseExportStatement = function() {
        return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
      };
      pp$8.parseExportSpecifiers = function(exports3) {
        var nodes = [], first = true;
        this.expect(types$1.braceL);
        while (!this.eat(types$1.braceR)) {
          if (!first) {
            this.expect(types$1.comma);
            if (this.afterTrailingComma(types$1.braceR)) {
              break;
            }
          } else {
            first = false;
          }
          var node = this.startNode();
          node.local = this.parseModuleExportName();
          node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local;
          this.checkExport(
            exports3,
            node.exported,
            node.exported.start
          );
          nodes.push(this.finishNode(node, "ExportSpecifier"));
        }
        return nodes;
      };
      pp$8.parseImport = function(node) {
        this.next();
        if (this.type === types$1.string) {
          node.specifiers = empty$1;
          node.source = this.parseExprAtom();
        } else {
          node.specifiers = this.parseImportSpecifiers();
          this.expectContextual("from");
          node.source = this.type === types$1.string ? this.parseExprAtom() : this.unexpected();
        }
        this.semicolon();
        return this.finishNode(node, "ImportDeclaration");
      };
      pp$8.parseImportSpecifiers = function() {
        var nodes = [], first = true;
        if (this.type === types$1.name) {
          var node = this.startNode();
          node.local = this.parseIdent();
          this.checkLValSimple(node.local, BIND_LEXICAL);
          nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
          if (!this.eat(types$1.comma)) {
            return nodes;
          }
        }
        if (this.type === types$1.star) {
          var node$1 = this.startNode();
          this.next();
          this.expectContextual("as");
          node$1.local = this.parseIdent();
          this.checkLValSimple(node$1.local, BIND_LEXICAL);
          nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
          return nodes;
        }
        this.expect(types$1.braceL);
        while (!this.eat(types$1.braceR)) {
          if (!first) {
            this.expect(types$1.comma);
            if (this.afterTrailingComma(types$1.braceR)) {
              break;
            }
          } else {
            first = false;
          }
          var node$2 = this.startNode();
          node$2.imported = this.parseModuleExportName();
          if (this.eatContextual("as")) {
            node$2.local = this.parseIdent();
          } else {
            this.checkUnreserved(node$2.imported);
            node$2.local = node$2.imported;
          }
          this.checkLValSimple(node$2.local, BIND_LEXICAL);
          nodes.push(this.finishNode(node$2, "ImportSpecifier"));
        }
        return nodes;
      };
      pp$8.parseModuleExportName = function() {
        if (this.options.ecmaVersion >= 13 && this.type === types$1.string) {
          var stringLiteral = this.parseLiteral(this.value);
          if (loneSurrogate.test(stringLiteral.value)) {
            this.raise(stringLiteral.start, "An export name cannot include a lone surrogate.");
          }
          return stringLiteral;
        }
        return this.parseIdent(true);
      };
      pp$8.adaptDirectivePrologue = function(statements) {
        for (var i2 = 0; i2 < statements.length && this.isDirectiveCandidate(statements[i2]); ++i2) {
          statements[i2].directive = statements[i2].expression.raw.slice(1, -1);
        }
      };
      pp$8.isDirectiveCandidate = function(statement) {
        return this.options.ecmaVersion >= 5 && statement.type === "ExpressionStatement" && statement.expression.type === "Literal" && typeof statement.expression.value === "string" && (this.input[statement.start] === '"' || this.input[statement.start] === "'");
      };
      var pp$7 = Parser2.prototype;
      pp$7.toAssignable = function(node, isBinding, refDestructuringErrors) {
        if (this.options.ecmaVersion >= 6 && node) {
          switch (node.type) {
            case "Identifier":
              if (this.inAsync && node.name === "await") {
                this.raise(node.start, "Cannot use 'await' as identifier inside an async function");
              }
              break;
            case "ObjectPattern":
            case "ArrayPattern":
            case "AssignmentPattern":
            case "RestElement":
              break;
            case "ObjectExpression":
              node.type = "ObjectPattern";
              if (refDestructuringErrors) {
                this.checkPatternErrors(refDestructuringErrors, true);
              }
              for (var i2 = 0, list2 = node.properties; i2 < list2.length; i2 += 1) {
                var prop = list2[i2];
                this.toAssignable(prop, isBinding);
                if (prop.type === "RestElement" && (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")) {
                  this.raise(prop.argument.start, "Unexpected token");
                }
              }
              break;
            case "Property":
              if (node.kind !== "init") {
                this.raise(node.key.start, "Object pattern can't contain getter or setter");
              }
              this.toAssignable(node.value, isBinding);
              break;
            case "ArrayExpression":
              node.type = "ArrayPattern";
              if (refDestructuringErrors) {
                this.checkPatternErrors(refDestructuringErrors, true);
              }
              this.toAssignableList(node.elements, isBinding);
              break;
            case "SpreadElement":
              node.type = "RestElement";
              this.toAssignable(node.argument, isBinding);
              if (node.argument.type === "AssignmentPattern") {
                this.raise(node.argument.start, "Rest elements cannot have a default value");
              }
              break;
            case "AssignmentExpression":
              if (node.operator !== "=") {
                this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
              }
              node.type = "AssignmentPattern";
              delete node.operator;
              this.toAssignable(node.left, isBinding);
              break;
            case "ParenthesizedExpression":
              this.toAssignable(node.expression, isBinding, refDestructuringErrors);
              break;
            case "ChainExpression":
              this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
              break;
            case "MemberExpression":
              if (!isBinding) {
                break;
              }
            default:
              this.raise(node.start, "Assigning to rvalue");
          }
        } else if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        return node;
      };
      pp$7.toAssignableList = function(exprList, isBinding) {
        var end = exprList.length;
        for (var i2 = 0; i2 < end; i2++) {
          var elt = exprList[i2];
          if (elt) {
            this.toAssignable(elt, isBinding);
          }
        }
        if (end) {
          var last = exprList[end - 1];
          if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") {
            this.unexpected(last.argument.start);
          }
        }
        return exprList;
      };
      pp$7.parseSpread = function(refDestructuringErrors) {
        var node = this.startNode();
        this.next();
        node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
        return this.finishNode(node, "SpreadElement");
      };
      pp$7.parseRestBinding = function() {
        var node = this.startNode();
        this.next();
        if (this.options.ecmaVersion === 6 && this.type !== types$1.name) {
          this.unexpected();
        }
        node.argument = this.parseBindingAtom();
        return this.finishNode(node, "RestElement");
      };
      pp$7.parseBindingAtom = function() {
        if (this.options.ecmaVersion >= 6) {
          switch (this.type) {
            case types$1.bracketL:
              var node = this.startNode();
              this.next();
              node.elements = this.parseBindingList(types$1.bracketR, true, true);
              return this.finishNode(node, "ArrayPattern");
            case types$1.braceL:
              return this.parseObj(true);
          }
        }
        return this.parseIdent();
      };
      pp$7.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
        var elts = [], first = true;
        while (!this.eat(close)) {
          if (first) {
            first = false;
          } else {
            this.expect(types$1.comma);
          }
          if (allowEmpty && this.type === types$1.comma) {
            elts.push(null);
          } else if (allowTrailingComma && this.afterTrailingComma(close)) {
            break;
          } else if (this.type === types$1.ellipsis) {
            var rest = this.parseRestBinding();
            this.parseBindingListItem(rest);
            elts.push(rest);
            if (this.type === types$1.comma) {
              this.raise(this.start, "Comma is not permitted after the rest element");
            }
            this.expect(close);
            break;
          } else {
            var elem = this.parseMaybeDefault(this.start, this.startLoc);
            this.parseBindingListItem(elem);
            elts.push(elem);
          }
        }
        return elts;
      };
      pp$7.parseBindingListItem = function(param) {
        return param;
      };
      pp$7.parseMaybeDefault = function(startPos, startLoc, left) {
        left = left || this.parseBindingAtom();
        if (this.options.ecmaVersion < 6 || !this.eat(types$1.eq)) {
          return left;
        }
        var node = this.startNodeAt(startPos, startLoc);
        node.left = left;
        node.right = this.parseMaybeAssign();
        return this.finishNode(node, "AssignmentPattern");
      };
      pp$7.checkLValSimple = function(expr, bindingType, checkClashes) {
        if (bindingType === void 0)
          bindingType = BIND_NONE;
        var isBind = bindingType !== BIND_NONE;
        switch (expr.type) {
          case "Identifier":
            if (this.strict && this.reservedWordsStrictBind.test(expr.name)) {
              this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
            }
            if (isBind) {
              if (bindingType === BIND_LEXICAL && expr.name === "let") {
                this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name");
              }
              if (checkClashes) {
                if (hasOwn(checkClashes, expr.name)) {
                  this.raiseRecoverable(expr.start, "Argument name clash");
                }
                checkClashes[expr.name] = true;
              }
              if (bindingType !== BIND_OUTSIDE) {
                this.declareName(expr.name, bindingType, expr.start);
              }
            }
            break;
          case "ChainExpression":
            this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
            break;
          case "MemberExpression":
            if (isBind) {
              this.raiseRecoverable(expr.start, "Binding member expression");
            }
            break;
          case "ParenthesizedExpression":
            if (isBind) {
              this.raiseRecoverable(expr.start, "Binding parenthesized expression");
            }
            return this.checkLValSimple(expr.expression, bindingType, checkClashes);
          default:
            this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
        }
      };
      pp$7.checkLValPattern = function(expr, bindingType, checkClashes) {
        if (bindingType === void 0)
          bindingType = BIND_NONE;
        switch (expr.type) {
          case "ObjectPattern":
            for (var i2 = 0, list2 = expr.properties; i2 < list2.length; i2 += 1) {
              var prop = list2[i2];
              this.checkLValInnerPattern(prop, bindingType, checkClashes);
            }
            break;
          case "ArrayPattern":
            for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
              var elem = list$1[i$1];
              if (elem) {
                this.checkLValInnerPattern(elem, bindingType, checkClashes);
              }
            }
            break;
          default:
            this.checkLValSimple(expr, bindingType, checkClashes);
        }
      };
      pp$7.checkLValInnerPattern = function(expr, bindingType, checkClashes) {
        if (bindingType === void 0)
          bindingType = BIND_NONE;
        switch (expr.type) {
          case "Property":
            this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
            break;
          case "AssignmentPattern":
            this.checkLValPattern(expr.left, bindingType, checkClashes);
            break;
          case "RestElement":
            this.checkLValPattern(expr.argument, bindingType, checkClashes);
            break;
          default:
            this.checkLValPattern(expr, bindingType, checkClashes);
        }
      };
      var TokContext = function TokContext2(token, isExpr, preserveSpace, override, generator) {
        this.token = token;
        this.isExpr = !!isExpr;
        this.preserveSpace = !!preserveSpace;
        this.override = override;
        this.generator = !!generator;
      };
      var types = {
        b_stat: new TokContext("{", false),
        b_expr: new TokContext("{", true),
        b_tmpl: new TokContext("${", false),
        p_stat: new TokContext("(", false),
        p_expr: new TokContext("(", true),
        q_tmpl: new TokContext("`", true, true, function(p) {
          return p.tryReadTemplateToken();
        }),
        f_stat: new TokContext("function", false),
        f_expr: new TokContext("function", true),
        f_expr_gen: new TokContext("function", true, false, null, true),
        f_gen: new TokContext("function", false, false, null, true)
      };
      var pp$6 = Parser2.prototype;
      pp$6.initialContext = function() {
        return [types.b_stat];
      };
      pp$6.curContext = function() {
        return this.context[this.context.length - 1];
      };
      pp$6.braceIsBlock = function(prevType) {
        var parent = this.curContext();
        if (parent === types.f_expr || parent === types.f_stat) {
          return true;
        }
        if (prevType === types$1.colon && (parent === types.b_stat || parent === types.b_expr)) {
          return !parent.isExpr;
        }
        if (prevType === types$1._return || prevType === types$1.name && this.exprAllowed) {
          return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
        }
        if (prevType === types$1._else || prevType === types$1.semi || prevType === types$1.eof || prevType === types$1.parenR || prevType === types$1.arrow) {
          return true;
        }
        if (prevType === types$1.braceL) {
          return parent === types.b_stat;
        }
        if (prevType === types$1._var || prevType === types$1._const || prevType === types$1.name) {
          return false;
        }
        return !this.exprAllowed;
      };
      pp$6.inGeneratorContext = function() {
        for (var i2 = this.context.length - 1; i2 >= 1; i2--) {
          var context = this.context[i2];
          if (context.token === "function") {
            return context.generator;
          }
        }
        return false;
      };
      pp$6.updateContext = function(prevType) {
        var update, type = this.type;
        if (type.keyword && prevType === types$1.dot) {
          this.exprAllowed = false;
        } else if (update = type.updateContext) {
          update.call(this, prevType);
        } else {
          this.exprAllowed = type.beforeExpr;
        }
      };
      pp$6.overrideContext = function(tokenCtx) {
        if (this.curContext() !== tokenCtx) {
          this.context[this.context.length - 1] = tokenCtx;
        }
      };
      types$1.parenR.updateContext = types$1.braceR.updateContext = function() {
        if (this.context.length === 1) {
          this.exprAllowed = true;
          return;
        }
        var out = this.context.pop();
        if (out === types.b_stat && this.curContext().token === "function") {
          out = this.context.pop();
        }
        this.exprAllowed = !out.isExpr;
      };
      types$1.braceL.updateContext = function(prevType) {
        this.context.push(this.braceIsBlock(prevType) ? types.b_stat : types.b_expr);
        this.exprAllowed = true;
      };
      types$1.dollarBraceL.updateContext = function() {
        this.context.push(types.b_tmpl);
        this.exprAllowed = true;
      };
      types$1.parenL.updateContext = function(prevType) {
        var statementParens = prevType === types$1._if || prevType === types$1._for || prevType === types$1._with || prevType === types$1._while;
        this.context.push(statementParens ? types.p_stat : types.p_expr);
        this.exprAllowed = true;
      };
      types$1.incDec.updateContext = function() {
      };
      types$1._function.updateContext = types$1._class.updateContext = function(prevType) {
        if (prevType.beforeExpr && prevType !== types$1._else && !(prevType === types$1.semi && this.curContext() !== types.p_stat) && !(prevType === types$1._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((prevType === types$1.colon || prevType === types$1.braceL) && this.curContext() === types.b_stat)) {
          this.context.push(types.f_expr);
        } else {
          this.context.push(types.f_stat);
        }
        this.exprAllowed = false;
      };
      types$1.backQuote.updateContext = function() {
        if (this.curContext() === types.q_tmpl) {
          this.context.pop();
        } else {
          this.context.push(types.q_tmpl);
        }
        this.exprAllowed = false;
      };
      types$1.star.updateContext = function(prevType) {
        if (prevType === types$1._function) {
          var index = this.context.length - 1;
          if (this.context[index] === types.f_expr) {
            this.context[index] = types.f_expr_gen;
          } else {
            this.context[index] = types.f_gen;
          }
        }
        this.exprAllowed = true;
      };
      types$1.name.updateContext = function(prevType) {
        var allowed = false;
        if (this.options.ecmaVersion >= 6 && prevType !== types$1.dot) {
          if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) {
            allowed = true;
          }
        }
        this.exprAllowed = allowed;
      };
      var pp$5 = Parser2.prototype;
      pp$5.checkPropClash = function(prop, propHash, refDestructuringErrors) {
        if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") {
          return;
        }
        if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) {
          return;
        }
        var key = prop.key;
        var name;
        switch (key.type) {
          case "Identifier":
            name = key.name;
            break;
          case "Literal":
            name = String(key.value);
            break;
          default:
            return;
        }
        var kind = prop.kind;
        if (this.options.ecmaVersion >= 6) {
          if (name === "__proto__" && kind === "init") {
            if (propHash.proto) {
              if (refDestructuringErrors) {
                if (refDestructuringErrors.doubleProto < 0) {
                  refDestructuringErrors.doubleProto = key.start;
                }
              } else {
                this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
              }
            }
            propHash.proto = true;
          }
          return;
        }
        name = "$" + name;
        var other = propHash[name];
        if (other) {
          var redefinition;
          if (kind === "init") {
            redefinition = this.strict && other.init || other.get || other.set;
          } else {
            redefinition = other.init || other[kind];
          }
          if (redefinition) {
            this.raiseRecoverable(key.start, "Redefinition of property");
          }
        } else {
          other = propHash[name] = {
            init: false,
            get: false,
            set: false
          };
        }
        other[kind] = true;
      };
      pp$5.parseExpression = function(forInit, refDestructuringErrors) {
        var startPos = this.start, startLoc = this.startLoc;
        var expr = this.parseMaybeAssign(forInit, refDestructuringErrors);
        if (this.type === types$1.comma) {
          var node = this.startNodeAt(startPos, startLoc);
          node.expressions = [expr];
          while (this.eat(types$1.comma)) {
            node.expressions.push(this.parseMaybeAssign(forInit, refDestructuringErrors));
          }
          return this.finishNode(node, "SequenceExpression");
        }
        return expr;
      };
      pp$5.parseMaybeAssign = function(forInit, refDestructuringErrors, afterLeftParse) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) {
            return this.parseYield(forInit);
          } else {
            this.exprAllowed = false;
          }
        }
        var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldDoubleProto = -1;
        if (refDestructuringErrors) {
          oldParenAssign = refDestructuringErrors.parenthesizedAssign;
          oldTrailingComma = refDestructuringErrors.trailingComma;
          oldDoubleProto = refDestructuringErrors.doubleProto;
          refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
        } else {
          refDestructuringErrors = new DestructuringErrors();
          ownDestructuringErrors = true;
        }
        var startPos = this.start, startLoc = this.startLoc;
        if (this.type === types$1.parenL || this.type === types$1.name) {
          this.potentialArrowAt = this.start;
          this.potentialArrowInForAwait = forInit === "await";
        }
        var left = this.parseMaybeConditional(forInit, refDestructuringErrors);
        if (afterLeftParse) {
          left = afterLeftParse.call(this, left, startPos, startLoc);
        }
        if (this.type.isAssign) {
          var node = this.startNodeAt(startPos, startLoc);
          node.operator = this.value;
          if (this.type === types$1.eq) {
            left = this.toAssignable(left, false, refDestructuringErrors);
          }
          if (!ownDestructuringErrors) {
            refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
          }
          if (refDestructuringErrors.shorthandAssign >= left.start) {
            refDestructuringErrors.shorthandAssign = -1;
          }
          if (this.type === types$1.eq) {
            this.checkLValPattern(left);
          } else {
            this.checkLValSimple(left);
          }
          node.left = left;
          this.next();
          node.right = this.parseMaybeAssign(forInit);
          if (oldDoubleProto > -1) {
            refDestructuringErrors.doubleProto = oldDoubleProto;
          }
          return this.finishNode(node, "AssignmentExpression");
        } else {
          if (ownDestructuringErrors) {
            this.checkExpressionErrors(refDestructuringErrors, true);
          }
        }
        if (oldParenAssign > -1) {
          refDestructuringErrors.parenthesizedAssign = oldParenAssign;
        }
        if (oldTrailingComma > -1) {
          refDestructuringErrors.trailingComma = oldTrailingComma;
        }
        return left;
      };
      pp$5.parseMaybeConditional = function(forInit, refDestructuringErrors) {
        var startPos = this.start, startLoc = this.startLoc;
        var expr = this.parseExprOps(forInit, refDestructuringErrors);
        if (this.checkExpressionErrors(refDestructuringErrors)) {
          return expr;
        }
        if (this.eat(types$1.question)) {
          var node = this.startNodeAt(startPos, startLoc);
          node.test = expr;
          node.consequent = this.parseMaybeAssign();
          this.expect(types$1.colon);
          node.alternate = this.parseMaybeAssign(forInit);
          return this.finishNode(node, "ConditionalExpression");
        }
        return expr;
      };
      pp$5.parseExprOps = function(forInit, refDestructuringErrors) {
        var startPos = this.start, startLoc = this.startLoc;
        var expr = this.parseMaybeUnary(refDestructuringErrors, false, false, forInit);
        if (this.checkExpressionErrors(refDestructuringErrors)) {
          return expr;
        }
        return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit);
      };
      pp$5.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, forInit) {
        var prec = this.type.binop;
        if (prec != null && (!forInit || this.type !== types$1._in)) {
          if (prec > minPrec) {
            var logical = this.type === types$1.logicalOR || this.type === types$1.logicalAND;
            var coalesce = this.type === types$1.coalesce;
            if (coalesce) {
              prec = types$1.logicalAND.binop;
            }
            var op = this.value;
            this.next();
            var startPos = this.start, startLoc = this.startLoc;
            var right = this.parseExprOp(this.parseMaybeUnary(null, false, false, forInit), startPos, startLoc, prec, forInit);
            var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
            if (logical && this.type === types$1.coalesce || coalesce && (this.type === types$1.logicalOR || this.type === types$1.logicalAND)) {
              this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
            }
            return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, forInit);
          }
        }
        return left;
      };
      pp$5.buildBinary = function(startPos, startLoc, left, right, op, logical) {
        if (right.type === "PrivateIdentifier") {
          this.raise(right.start, "Private identifier can only be left side of binary expression");
        }
        var node = this.startNodeAt(startPos, startLoc);
        node.left = left;
        node.operator = op;
        node.right = right;
        return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression");
      };
      pp$5.parseMaybeUnary = function(refDestructuringErrors, sawUnary, incDec, forInit) {
        var startPos = this.start, startLoc = this.startLoc, expr;
        if (this.isContextual("await") && this.canAwait) {
          expr = this.parseAwait(forInit);
          sawUnary = true;
        } else if (this.type.prefix) {
          var node = this.startNode(), update = this.type === types$1.incDec;
          node.operator = this.value;
          node.prefix = true;
          this.next();
          node.argument = this.parseMaybeUnary(null, true, update, forInit);
          this.checkExpressionErrors(refDestructuringErrors, true);
          if (update) {
            this.checkLValSimple(node.argument);
          } else if (this.strict && node.operator === "delete" && node.argument.type === "Identifier") {
            this.raiseRecoverable(node.start, "Deleting local variable in strict mode");
          } else if (node.operator === "delete" && isPrivateFieldAccess(node.argument)) {
            this.raiseRecoverable(node.start, "Private fields can not be deleted");
          } else {
            sawUnary = true;
          }
          expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
        } else if (!sawUnary && this.type === types$1.privateId) {
          if (forInit || this.privateNameStack.length === 0) {
            this.unexpected();
          }
          expr = this.parsePrivateIdent();
          if (this.type !== types$1._in) {
            this.unexpected();
          }
        } else {
          expr = this.parseExprSubscripts(refDestructuringErrors, forInit);
          if (this.checkExpressionErrors(refDestructuringErrors)) {
            return expr;
          }
          while (this.type.postfix && !this.canInsertSemicolon()) {
            var node$1 = this.startNodeAt(startPos, startLoc);
            node$1.operator = this.value;
            node$1.prefix = false;
            node$1.argument = expr;
            this.checkLValSimple(expr);
            this.next();
            expr = this.finishNode(node$1, "UpdateExpression");
          }
        }
        if (!incDec && this.eat(types$1.starstar)) {
          if (sawUnary) {
            this.unexpected(this.lastTokStart);
          } else {
            return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false, false, forInit), "**", false);
          }
        } else {
          return expr;
        }
      };
      function isPrivateFieldAccess(node) {
        return node.type === "MemberExpression" && node.property.type === "PrivateIdentifier" || node.type === "ChainExpression" && isPrivateFieldAccess(node.expression);
      }
      pp$5.parseExprSubscripts = function(refDestructuringErrors, forInit) {
        var startPos = this.start, startLoc = this.startLoc;
        var expr = this.parseExprAtom(refDestructuringErrors, forInit);
        if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") {
          return expr;
        }
        var result = this.parseSubscripts(expr, startPos, startLoc, false, forInit);
        if (refDestructuringErrors && result.type === "MemberExpression") {
          if (refDestructuringErrors.parenthesizedAssign >= result.start) {
            refDestructuringErrors.parenthesizedAssign = -1;
          }
          if (refDestructuringErrors.parenthesizedBind >= result.start) {
            refDestructuringErrors.parenthesizedBind = -1;
          }
          if (refDestructuringErrors.trailingComma >= result.start) {
            refDestructuringErrors.trailingComma = -1;
          }
        }
        return result;
      };
      pp$5.parseSubscripts = function(base, startPos, startLoc, noCalls, forInit) {
        var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" && this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.potentialArrowAt === base.start;
        var optionalChained = false;
        while (true) {
          var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit);
          if (element.optional) {
            optionalChained = true;
          }
          if (element === base || element.type === "ArrowFunctionExpression") {
            if (optionalChained) {
              var chainNode = this.startNodeAt(startPos, startLoc);
              chainNode.expression = element;
              element = this.finishNode(chainNode, "ChainExpression");
            }
            return element;
          }
          base = element;
        }
      };
      pp$5.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
        var optionalSupported = this.options.ecmaVersion >= 11;
        var optional = optionalSupported && this.eat(types$1.questionDot);
        if (noCalls && optional) {
          this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        }
        var computed = this.eat(types$1.bracketL);
        if (computed || optional && this.type !== types$1.parenL && this.type !== types$1.backQuote || this.eat(types$1.dot)) {
          var node = this.startNodeAt(startPos, startLoc);
          node.object = base;
          if (computed) {
            node.property = this.parseExpression();
            this.expect(types$1.bracketR);
          } else if (this.type === types$1.privateId && base.type !== "Super") {
            node.property = this.parsePrivateIdent();
          } else {
            node.property = this.parseIdent(this.options.allowReserved !== "never");
          }
          node.computed = !!computed;
          if (optionalSupported) {
            node.optional = optional;
          }
          base = this.finishNode(node, "MemberExpression");
        } else if (!noCalls && this.eat(types$1.parenL)) {
          var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
          this.yieldPos = 0;
          this.awaitPos = 0;
          this.awaitIdentPos = 0;
          var exprList = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
          if (maybeAsyncArrow && !optional && !this.canInsertSemicolon() && this.eat(types$1.arrow)) {
            this.checkPatternErrors(refDestructuringErrors, false);
            this.checkYieldAwaitInDefaultParams();
            if (this.awaitIdentPos > 0) {
              this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
            }
            this.yieldPos = oldYieldPos;
            this.awaitPos = oldAwaitPos;
            this.awaitIdentPos = oldAwaitIdentPos;
            return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true, forInit);
          }
          this.checkExpressionErrors(refDestructuringErrors, true);
          this.yieldPos = oldYieldPos || this.yieldPos;
          this.awaitPos = oldAwaitPos || this.awaitPos;
          this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
          var node$1 = this.startNodeAt(startPos, startLoc);
          node$1.callee = base;
          node$1.arguments = exprList;
          if (optionalSupported) {
            node$1.optional = optional;
          }
          base = this.finishNode(node$1, "CallExpression");
        } else if (this.type === types$1.backQuote) {
          if (optional || optionalChained) {
            this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          }
          var node$2 = this.startNodeAt(startPos, startLoc);
          node$2.tag = base;
          node$2.quasi = this.parseTemplate({ isTagged: true });
          base = this.finishNode(node$2, "TaggedTemplateExpression");
        }
        return base;
      };
      pp$5.parseExprAtom = function(refDestructuringErrors, forInit) {
        if (this.type === types$1.slash) {
          this.readRegexp();
        }
        var node, canBeArrow = this.potentialArrowAt === this.start;
        switch (this.type) {
          case types$1._super:
            if (!this.allowSuper) {
              this.raise(this.start, "'super' keyword outside a method");
            }
            node = this.startNode();
            this.next();
            if (this.type === types$1.parenL && !this.allowDirectSuper) {
              this.raise(node.start, "super() call outside constructor of a subclass");
            }
            if (this.type !== types$1.dot && this.type !== types$1.bracketL && this.type !== types$1.parenL) {
              this.unexpected();
            }
            return this.finishNode(node, "Super");
          case types$1._this:
            node = this.startNode();
            this.next();
            return this.finishNode(node, "ThisExpression");
          case types$1.name:
            var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
            var id = this.parseIdent(false);
            if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types$1._function)) {
              this.overrideContext(types.f_expr);
              return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true, forInit);
            }
            if (canBeArrow && !this.canInsertSemicolon()) {
              if (this.eat(types$1.arrow)) {
                return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false, forInit);
              }
              if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types$1.name && !containsEsc && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
                id = this.parseIdent(false);
                if (this.canInsertSemicolon() || !this.eat(types$1.arrow)) {
                  this.unexpected();
                }
                return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true, forInit);
              }
            }
            return id;
          case types$1.regexp:
            var value = this.value;
            node = this.parseLiteral(value.value);
            node.regex = { pattern: value.pattern, flags: value.flags };
            return node;
          case types$1.num:
          case types$1.string:
            return this.parseLiteral(this.value);
          case types$1._null:
          case types$1._true:
          case types$1._false:
            node = this.startNode();
            node.value = this.type === types$1._null ? null : this.type === types$1._true;
            node.raw = this.type.keyword;
            this.next();
            return this.finishNode(node, "Literal");
          case types$1.parenL:
            var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit);
            if (refDestructuringErrors) {
              if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) {
                refDestructuringErrors.parenthesizedAssign = start;
              }
              if (refDestructuringErrors.parenthesizedBind < 0) {
                refDestructuringErrors.parenthesizedBind = start;
              }
            }
            return expr;
          case types$1.bracketL:
            node = this.startNode();
            this.next();
            node.elements = this.parseExprList(types$1.bracketR, true, true, refDestructuringErrors);
            return this.finishNode(node, "ArrayExpression");
          case types$1.braceL:
            this.overrideContext(types.b_expr);
            return this.parseObj(false, refDestructuringErrors);
          case types$1._function:
            node = this.startNode();
            this.next();
            return this.parseFunction(node, 0);
          case types$1._class:
            return this.parseClass(this.startNode(), false);
          case types$1._new:
            return this.parseNew();
          case types$1.backQuote:
            return this.parseTemplate();
          case types$1._import:
            if (this.options.ecmaVersion >= 11) {
              return this.parseExprImport();
            } else {
              return this.unexpected();
            }
          default:
            this.unexpected();
        }
      };
      pp$5.parseExprImport = function() {
        var node = this.startNode();
        if (this.containsEsc) {
          this.raiseRecoverable(this.start, "Escape sequence in keyword import");
        }
        var meta = this.parseIdent(true);
        switch (this.type) {
          case types$1.parenL:
            return this.parseDynamicImport(node);
          case types$1.dot:
            node.meta = meta;
            return this.parseImportMeta(node);
          default:
            this.unexpected();
        }
      };
      pp$5.parseDynamicImport = function(node) {
        this.next();
        node.source = this.parseMaybeAssign();
        if (!this.eat(types$1.parenR)) {
          var errorPos = this.start;
          if (this.eat(types$1.comma) && this.eat(types$1.parenR)) {
            this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
          } else {
            this.unexpected(errorPos);
          }
        }
        return this.finishNode(node, "ImportExpression");
      };
      pp$5.parseImportMeta = function(node) {
        this.next();
        var containsEsc = this.containsEsc;
        node.property = this.parseIdent(true);
        if (node.property.name !== "meta") {
          this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'");
        }
        if (containsEsc) {
          this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters");
        }
        if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere) {
          this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module");
        }
        return this.finishNode(node, "MetaProperty");
      };
      pp$5.parseLiteral = function(value) {
        var node = this.startNode();
        node.value = value;
        node.raw = this.input.slice(this.start, this.end);
        if (node.raw.charCodeAt(node.raw.length - 1) === 110) {
          node.bigint = node.raw.slice(0, -1).replace(/_/g, "");
        }
        this.next();
        return this.finishNode(node, "Literal");
      };
      pp$5.parseParenExpression = function() {
        this.expect(types$1.parenL);
        var val = this.parseExpression();
        this.expect(types$1.parenR);
        return val;
      };
      pp$5.parseParenAndDistinguishExpression = function(canBeArrow, forInit) {
        var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          this.next();
          var innerStartPos = this.start, innerStartLoc = this.startLoc;
          var exprList = [], first = true, lastIsComma = false;
          var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
          this.yieldPos = 0;
          this.awaitPos = 0;
          while (this.type !== types$1.parenR) {
            first ? first = false : this.expect(types$1.comma);
            if (allowTrailingComma && this.afterTrailingComma(types$1.parenR, true)) {
              lastIsComma = true;
              break;
            } else if (this.type === types$1.ellipsis) {
              spreadStart = this.start;
              exprList.push(this.parseParenItem(this.parseRestBinding()));
              if (this.type === types$1.comma) {
                this.raise(this.start, "Comma is not permitted after the rest element");
              }
              break;
            } else {
              exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
            }
          }
          var innerEndPos = this.lastTokEnd, innerEndLoc = this.lastTokEndLoc;
          this.expect(types$1.parenR);
          if (canBeArrow && !this.canInsertSemicolon() && this.eat(types$1.arrow)) {
            this.checkPatternErrors(refDestructuringErrors, false);
            this.checkYieldAwaitInDefaultParams();
            this.yieldPos = oldYieldPos;
            this.awaitPos = oldAwaitPos;
            return this.parseParenArrowList(startPos, startLoc, exprList, forInit);
          }
          if (!exprList.length || lastIsComma) {
            this.unexpected(this.lastTokStart);
          }
          if (spreadStart) {
            this.unexpected(spreadStart);
          }
          this.checkExpressionErrors(refDestructuringErrors, true);
          this.yieldPos = oldYieldPos || this.yieldPos;
          this.awaitPos = oldAwaitPos || this.awaitPos;
          if (exprList.length > 1) {
            val = this.startNodeAt(innerStartPos, innerStartLoc);
            val.expressions = exprList;
            this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
          } else {
            val = exprList[0];
          }
        } else {
          val = this.parseParenExpression();
        }
        if (this.options.preserveParens) {
          var par = this.startNodeAt(startPos, startLoc);
          par.expression = val;
          return this.finishNode(par, "ParenthesizedExpression");
        } else {
          return val;
        }
      };
      pp$5.parseParenItem = function(item) {
        return item;
      };
      pp$5.parseParenArrowList = function(startPos, startLoc, exprList, forInit) {
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, false, forInit);
      };
      var empty = [];
      pp$5.parseNew = function() {
        if (this.containsEsc) {
          this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        }
        var node = this.startNode();
        var meta = this.parseIdent(true);
        if (this.options.ecmaVersion >= 6 && this.eat(types$1.dot)) {
          node.meta = meta;
          var containsEsc = this.containsEsc;
          node.property = this.parseIdent(true);
          if (node.property.name !== "target") {
            this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'");
          }
          if (containsEsc) {
            this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters");
          }
          if (!this.allowNewDotTarget) {
            this.raiseRecoverable(node.start, "'new.target' can only be used in functions and class static block");
          }
          return this.finishNode(node, "MetaProperty");
        }
        var startPos = this.start, startLoc = this.startLoc, isImport = this.type === types$1._import;
        node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true, false);
        if (isImport && node.callee.type === "ImportExpression") {
          this.raise(startPos, "Cannot use new with import()");
        }
        if (this.eat(types$1.parenL)) {
          node.arguments = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false);
        } else {
          node.arguments = empty;
        }
        return this.finishNode(node, "NewExpression");
      };
      pp$5.parseTemplateElement = function(ref2) {
        var isTagged = ref2.isTagged;
        var elem = this.startNode();
        if (this.type === types$1.invalidTemplate) {
          if (!isTagged) {
            this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
          }
          elem.value = {
            raw: this.value,
            cooked: null
          };
        } else {
          elem.value = {
            raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
            cooked: this.value
          };
        }
        this.next();
        elem.tail = this.type === types$1.backQuote;
        return this.finishNode(elem, "TemplateElement");
      };
      pp$5.parseTemplate = function(ref2) {
        if (ref2 === void 0)
          ref2 = {};
        var isTagged = ref2.isTagged;
        if (isTagged === void 0)
          isTagged = false;
        var node = this.startNode();
        this.next();
        node.expressions = [];
        var curElt = this.parseTemplateElement({ isTagged });
        node.quasis = [curElt];
        while (!curElt.tail) {
          if (this.type === types$1.eof) {
            this.raise(this.pos, "Unterminated template literal");
          }
          this.expect(types$1.dollarBraceL);
          node.expressions.push(this.parseExpression());
          this.expect(types$1.braceR);
          node.quasis.push(curElt = this.parseTemplateElement({ isTagged }));
        }
        this.next();
        return this.finishNode(node, "TemplateLiteral");
      };
      pp$5.isAsyncProp = function(prop) {
        return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.type === types$1.name || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types$1.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
      };
      pp$5.parseObj = function(isPattern, refDestructuringErrors) {
        var node = this.startNode(), first = true, propHash = {};
        node.properties = [];
        this.next();
        while (!this.eat(types$1.braceR)) {
          if (!first) {
            this.expect(types$1.comma);
            if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types$1.braceR)) {
              break;
            }
          } else {
            first = false;
          }
          var prop = this.parseProperty(isPattern, refDestructuringErrors);
          if (!isPattern) {
            this.checkPropClash(prop, propHash, refDestructuringErrors);
          }
          node.properties.push(prop);
        }
        return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
      };
      pp$5.parseProperty = function(isPattern, refDestructuringErrors) {
        var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
        if (this.options.ecmaVersion >= 9 && this.eat(types$1.ellipsis)) {
          if (isPattern) {
            prop.argument = this.parseIdent(false);
            if (this.type === types$1.comma) {
              this.raise(this.start, "Comma is not permitted after the rest element");
            }
            return this.finishNode(prop, "RestElement");
          }
          prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
          if (this.type === types$1.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
            refDestructuringErrors.trailingComma = this.start;
          }
          return this.finishNode(prop, "SpreadElement");
        }
        if (this.options.ecmaVersion >= 6) {
          prop.method = false;
          prop.shorthand = false;
          if (isPattern || refDestructuringErrors) {
            startPos = this.start;
            startLoc = this.startLoc;
          }
          if (!isPattern) {
            isGenerator = this.eat(types$1.star);
          }
        }
        var containsEsc = this.containsEsc;
        this.parsePropertyName(prop);
        if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
          isAsync = true;
          isGenerator = this.options.ecmaVersion >= 9 && this.eat(types$1.star);
          this.parsePropertyName(prop, refDestructuringErrors);
        } else {
          isAsync = false;
        }
        this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
        return this.finishNode(prop, "Property");
      };
      pp$5.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
        if ((isGenerator || isAsync) && this.type === types$1.colon) {
          this.unexpected();
        }
        if (this.eat(types$1.colon)) {
          prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
          prop.kind = "init";
        } else if (this.options.ecmaVersion >= 6 && this.type === types$1.parenL) {
          if (isPattern) {
            this.unexpected();
          }
          prop.kind = "init";
          prop.method = true;
          prop.value = this.parseMethod(isGenerator, isAsync);
        } else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.type !== types$1.comma && this.type !== types$1.braceR && this.type !== types$1.eq)) {
          if (isGenerator || isAsync) {
            this.unexpected();
          }
          prop.kind = prop.key.name;
          this.parsePropertyName(prop);
          prop.value = this.parseMethod(false);
          var paramCount = prop.kind === "get" ? 0 : 1;
          if (prop.value.params.length !== paramCount) {
            var start = prop.value.start;
            if (prop.kind === "get") {
              this.raiseRecoverable(start, "getter should have no params");
            } else {
              this.raiseRecoverable(start, "setter should have exactly one param");
            }
          } else {
            if (prop.kind === "set" && prop.value.params[0].type === "RestElement") {
              this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
            }
          }
        } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
          if (isGenerator || isAsync) {
            this.unexpected();
          }
          this.checkUnreserved(prop.key);
          if (prop.key.name === "await" && !this.awaitIdentPos) {
            this.awaitIdentPos = startPos;
          }
          prop.kind = "init";
          if (isPattern) {
            prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
          } else if (this.type === types$1.eq && refDestructuringErrors) {
            if (refDestructuringErrors.shorthandAssign < 0) {
              refDestructuringErrors.shorthandAssign = this.start;
            }
            prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
          } else {
            prop.value = this.copyNode(prop.key);
          }
          prop.shorthand = true;
        } else {
          this.unexpected();
        }
      };
      pp$5.parsePropertyName = function(prop) {
        if (this.options.ecmaVersion >= 6) {
          if (this.eat(types$1.bracketL)) {
            prop.computed = true;
            prop.key = this.parseMaybeAssign();
            this.expect(types$1.bracketR);
            return prop.key;
          } else {
            prop.computed = false;
          }
        }
        return prop.key = this.type === types$1.num || this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
      };
      pp$5.initFunction = function(node) {
        node.id = null;
        if (this.options.ecmaVersion >= 6) {
          node.generator = node.expression = false;
        }
        if (this.options.ecmaVersion >= 8) {
          node.async = false;
        }
      };
      pp$5.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
        var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
        this.initFunction(node);
        if (this.options.ecmaVersion >= 6) {
          node.generator = isGenerator;
        }
        if (this.options.ecmaVersion >= 8) {
          node.async = !!isAsync;
        }
        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;
        this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
        this.expect(types$1.parenL);
        node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
        this.checkYieldAwaitInDefaultParams();
        this.parseFunctionBody(node, false, true, false);
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.finishNode(node, "FunctionExpression");
      };
      pp$5.parseArrowExpression = function(node, params, isAsync, forInit) {
        var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
        this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
        this.initFunction(node);
        if (this.options.ecmaVersion >= 8) {
          node.async = !!isAsync;
        }
        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;
        node.params = this.toAssignableList(params, true);
        this.parseFunctionBody(node, true, false, forInit);
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.finishNode(node, "ArrowFunctionExpression");
      };
      pp$5.parseFunctionBody = function(node, isArrowFunction, isMethod, forInit) {
        var isExpression = isArrowFunction && this.type !== types$1.braceL;
        var oldStrict = this.strict, useStrict = false;
        if (isExpression) {
          node.body = this.parseMaybeAssign(forInit);
          node.expression = true;
          this.checkParams(node, false);
        } else {
          var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
          if (!oldStrict || nonSimple) {
            useStrict = this.strictDirective(this.end);
            if (useStrict && nonSimple) {
              this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list");
            }
          }
          var oldLabels = this.labels;
          this.labels = [];
          if (useStrict) {
            this.strict = true;
          }
          this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
          if (this.strict && node.id) {
            this.checkLValSimple(node.id, BIND_OUTSIDE);
          }
          node.body = this.parseBlock(false, void 0, useStrict && !oldStrict);
          node.expression = false;
          this.adaptDirectivePrologue(node.body.body);
          this.labels = oldLabels;
        }
        this.exitScope();
      };
      pp$5.isSimpleParamList = function(params) {
        for (var i2 = 0, list2 = params; i2 < list2.length; i2 += 1) {
          var param = list2[i2];
          if (param.type !== "Identifier") {
            return false;
          }
        }
        return true;
      };
      pp$5.checkParams = function(node, allowDuplicates) {
        var nameHash = /* @__PURE__ */ Object.create(null);
        for (var i2 = 0, list2 = node.params; i2 < list2.length; i2 += 1) {
          var param = list2[i2];
          this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
        }
      };
      pp$5.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
        var elts = [], first = true;
        while (!this.eat(close)) {
          if (!first) {
            this.expect(types$1.comma);
            if (allowTrailingComma && this.afterTrailingComma(close)) {
              break;
            }
          } else {
            first = false;
          }
          var elt = void 0;
          if (allowEmpty && this.type === types$1.comma) {
            elt = null;
          } else if (this.type === types$1.ellipsis) {
            elt = this.parseSpread(refDestructuringErrors);
            if (refDestructuringErrors && this.type === types$1.comma && refDestructuringErrors.trailingComma < 0) {
              refDestructuringErrors.trailingComma = this.start;
            }
          } else {
            elt = this.parseMaybeAssign(false, refDestructuringErrors);
          }
          elts.push(elt);
        }
        return elts;
      };
      pp$5.checkUnreserved = function(ref2) {
        var start = ref2.start;
        var end = ref2.end;
        var name = ref2.name;
        if (this.inGenerator && name === "yield") {
          this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator");
        }
        if (this.inAsync && name === "await") {
          this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function");
        }
        if (this.currentThisScope().inClassFieldInit && name === "arguments") {
          this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer");
        }
        if (this.inClassStaticBlock && (name === "arguments" || name === "await")) {
          this.raise(start, "Cannot use " + name + " in class static initialization block");
        }
        if (this.keywords.test(name)) {
          this.raise(start, "Unexpected keyword '" + name + "'");
        }
        if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf("\\") !== -1) {
          return;
        }
        var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
        if (re.test(name)) {
          if (!this.inAsync && name === "await") {
            this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function");
          }
          this.raiseRecoverable(start, "The keyword '" + name + "' is reserved");
        }
      };
      pp$5.parseIdent = function(liberal, isBinding) {
        var node = this.startNode();
        if (this.type === types$1.name) {
          node.name = this.value;
        } else if (this.type.keyword) {
          node.name = this.type.keyword;
          if ((node.name === "class" || node.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
            this.context.pop();
          }
        } else {
          this.unexpected();
        }
        this.next(!!liberal);
        this.finishNode(node, "Identifier");
        if (!liberal) {
          this.checkUnreserved(node);
          if (node.name === "await" && !this.awaitIdentPos) {
            this.awaitIdentPos = node.start;
          }
        }
        return node;
      };
      pp$5.parsePrivateIdent = function() {
        var node = this.startNode();
        if (this.type === types$1.privateId) {
          node.name = this.value;
        } else {
          this.unexpected();
        }
        this.next();
        this.finishNode(node, "PrivateIdentifier");
        if (this.privateNameStack.length === 0) {
          this.raise(node.start, "Private field '#" + node.name + "' must be declared in an enclosing class");
        } else {
          this.privateNameStack[this.privateNameStack.length - 1].used.push(node);
        }
        return node;
      };
      pp$5.parseYield = function(forInit) {
        if (!this.yieldPos) {
          this.yieldPos = this.start;
        }
        var node = this.startNode();
        this.next();
        if (this.type === types$1.semi || this.canInsertSemicolon() || this.type !== types$1.star && !this.type.startsExpr) {
          node.delegate = false;
          node.argument = null;
        } else {
          node.delegate = this.eat(types$1.star);
          node.argument = this.parseMaybeAssign(forInit);
        }
        return this.finishNode(node, "YieldExpression");
      };
      pp$5.parseAwait = function(forInit) {
        if (!this.awaitPos) {
          this.awaitPos = this.start;
        }
        var node = this.startNode();
        this.next();
        node.argument = this.parseMaybeUnary(null, true, false, forInit);
        return this.finishNode(node, "AwaitExpression");
      };
      var pp$4 = Parser2.prototype;
      pp$4.raise = function(pos, message) {
        var loc = getLineInfo(this.input, pos);
        message += " (" + loc.line + ":" + loc.column + ")";
        var err = new SyntaxError(message);
        err.pos = pos;
        err.loc = loc;
        err.raisedAt = this.pos;
        throw err;
      };
      pp$4.raiseRecoverable = pp$4.raise;
      pp$4.curPosition = function() {
        if (this.options.locations) {
          return new Position(this.curLine, this.pos - this.lineStart);
        }
      };
      var pp$3 = Parser2.prototype;
      var Scope = function Scope2(flags) {
        this.flags = flags;
        this.var = [];
        this.lexical = [];
        this.functions = [];
        this.inClassFieldInit = false;
      };
      pp$3.enterScope = function(flags) {
        this.scopeStack.push(new Scope(flags));
      };
      pp$3.exitScope = function() {
        this.scopeStack.pop();
      };
      pp$3.treatFunctionsAsVarInScope = function(scope) {
        return scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_TOP;
      };
      pp$3.declareName = function(name, bindingType, pos) {
        var redeclared = false;
        if (bindingType === BIND_LEXICAL) {
          var scope = this.currentScope();
          redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
          scope.lexical.push(name);
          if (this.inModule && scope.flags & SCOPE_TOP) {
            delete this.undefinedExports[name];
          }
        } else if (bindingType === BIND_SIMPLE_CATCH) {
          var scope$1 = this.currentScope();
          scope$1.lexical.push(name);
        } else if (bindingType === BIND_FUNCTION) {
          var scope$2 = this.currentScope();
          if (this.treatFunctionsAsVar) {
            redeclared = scope$2.lexical.indexOf(name) > -1;
          } else {
            redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1;
          }
          scope$2.functions.push(name);
        } else {
          for (var i2 = this.scopeStack.length - 1; i2 >= 0; --i2) {
            var scope$3 = this.scopeStack[i2];
            if (scope$3.lexical.indexOf(name) > -1 && !(scope$3.flags & SCOPE_SIMPLE_CATCH && scope$3.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
              redeclared = true;
              break;
            }
            scope$3.var.push(name);
            if (this.inModule && scope$3.flags & SCOPE_TOP) {
              delete this.undefinedExports[name];
            }
            if (scope$3.flags & SCOPE_VAR) {
              break;
            }
          }
        }
        if (redeclared) {
          this.raiseRecoverable(pos, "Identifier '" + name + "' has already been declared");
        }
      };
      pp$3.checkLocalExport = function(id) {
        if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1) {
          this.undefinedExports[id.name] = id;
        }
      };
      pp$3.currentScope = function() {
        return this.scopeStack[this.scopeStack.length - 1];
      };
      pp$3.currentVarScope = function() {
        for (var i2 = this.scopeStack.length - 1; ; i2--) {
          var scope = this.scopeStack[i2];
          if (scope.flags & SCOPE_VAR) {
            return scope;
          }
        }
      };
      pp$3.currentThisScope = function() {
        for (var i2 = this.scopeStack.length - 1; ; i2--) {
          var scope = this.scopeStack[i2];
          if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) {
            return scope;
          }
        }
      };
      var Node = function Node2(parser, pos, loc) {
        this.type = "";
        this.start = pos;
        this.end = 0;
        if (parser.options.locations) {
          this.loc = new SourceLocation(parser, loc);
        }
        if (parser.options.directSourceFile) {
          this.sourceFile = parser.options.directSourceFile;
        }
        if (parser.options.ranges) {
          this.range = [pos, 0];
        }
      };
      var pp$2 = Parser2.prototype;
      pp$2.startNode = function() {
        return new Node(this, this.start, this.startLoc);
      };
      pp$2.startNodeAt = function(pos, loc) {
        return new Node(this, pos, loc);
      };
      function finishNodeAt(node, type, pos, loc) {
        node.type = type;
        node.end = pos;
        if (this.options.locations) {
          node.loc.end = loc;
        }
        if (this.options.ranges) {
          node.range[1] = pos;
        }
        return node;
      }
      pp$2.finishNode = function(node, type) {
        return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc);
      };
      pp$2.finishNodeAt = function(node, type, pos, loc) {
        return finishNodeAt.call(this, node, type, pos, loc);
      };
      pp$2.copyNode = function(node) {
        var newNode = new Node(this, node.start, this.startLoc);
        for (var prop in node) {
          newNode[prop] = node[prop];
        }
        return newNode;
      };
      var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
      var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
      var ecma11BinaryProperties = ecma10BinaryProperties;
      var ecma12BinaryProperties = ecma11BinaryProperties + " EBase EComp EMod EPres ExtPict";
      var ecma13BinaryProperties = ecma12BinaryProperties;
      var unicodeBinaryProperties = {
        9: ecma9BinaryProperties,
        10: ecma10BinaryProperties,
        11: ecma11BinaryProperties,
        12: ecma12BinaryProperties,
        13: ecma13BinaryProperties
      };
      var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
      var ecma9ScriptValues = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
      var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
      var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
      var ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
      var ecma13ScriptValues = ecma12ScriptValues + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";
      var unicodeScriptValues = {
        9: ecma9ScriptValues,
        10: ecma10ScriptValues,
        11: ecma11ScriptValues,
        12: ecma12ScriptValues,
        13: ecma13ScriptValues
      };
      var data = {};
      function buildUnicodeData(ecmaVersion2) {
        var d = data[ecmaVersion2] = {
          binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion2] + " " + unicodeGeneralCategoryValues),
          nonBinary: {
            General_Category: wordsRegexp(unicodeGeneralCategoryValues),
            Script: wordsRegexp(unicodeScriptValues[ecmaVersion2])
          }
        };
        d.nonBinary.Script_Extensions = d.nonBinary.Script;
        d.nonBinary.gc = d.nonBinary.General_Category;
        d.nonBinary.sc = d.nonBinary.Script;
        d.nonBinary.scx = d.nonBinary.Script_Extensions;
      }
      for (var i = 0, list = [9, 10, 11, 12, 13]; i < list.length; i += 1) {
        var ecmaVersion = list[i];
        buildUnicodeData(ecmaVersion);
      }
      var pp$1 = Parser2.prototype;
      var RegExpValidationState = function RegExpValidationState2(parser) {
        this.parser = parser;
        this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "") + (parser.options.ecmaVersion >= 13 ? "d" : "");
        this.unicodeProperties = data[parser.options.ecmaVersion >= 13 ? 13 : parser.options.ecmaVersion];
        this.source = "";
        this.flags = "";
        this.start = 0;
        this.switchU = false;
        this.switchN = false;
        this.pos = 0;
        this.lastIntValue = 0;
        this.lastStringValue = "";
        this.lastAssertionIsQuantifiable = false;
        this.numCapturingParens = 0;
        this.maxBackReference = 0;
        this.groupNames = [];
        this.backReferenceNames = [];
      };
      RegExpValidationState.prototype.reset = function reset(start, pattern, flags) {
        var unicode = flags.indexOf("u") !== -1;
        this.start = start | 0;
        this.source = pattern + "";
        this.flags = flags;
        this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
        this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
      };
      RegExpValidationState.prototype.raise = function raise(message) {
        this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
      };
      RegExpValidationState.prototype.at = function at(i2, forceU) {
        if (forceU === void 0)
          forceU = false;
        var s = this.source;
        var l = s.length;
        if (i2 >= l) {
          return -1;
        }
        var c = s.charCodeAt(i2);
        if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i2 + 1 >= l) {
          return c;
        }
        var next = s.charCodeAt(i2 + 1);
        return next >= 56320 && next <= 57343 ? (c << 10) + next - 56613888 : c;
      };
      RegExpValidationState.prototype.nextIndex = function nextIndex(i2, forceU) {
        if (forceU === void 0)
          forceU = false;
        var s = this.source;
        var l = s.length;
        if (i2 >= l) {
          return l;
        }
        var c = s.charCodeAt(i2), next;
        if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i2 + 1 >= l || (next = s.charCodeAt(i2 + 1)) < 56320 || next > 57343) {
          return i2 + 1;
        }
        return i2 + 2;
      };
      RegExpValidationState.prototype.current = function current(forceU) {
        if (forceU === void 0)
          forceU = false;
        return this.at(this.pos, forceU);
      };
      RegExpValidationState.prototype.lookahead = function lookahead(forceU) {
        if (forceU === void 0)
          forceU = false;
        return this.at(this.nextIndex(this.pos, forceU), forceU);
      };
      RegExpValidationState.prototype.advance = function advance(forceU) {
        if (forceU === void 0)
          forceU = false;
        this.pos = this.nextIndex(this.pos, forceU);
      };
      RegExpValidationState.prototype.eat = function eat(ch, forceU) {
        if (forceU === void 0)
          forceU = false;
        if (this.current(forceU) === ch) {
          this.advance(forceU);
          return true;
        }
        return false;
      };
      pp$1.validateRegExpFlags = function(state) {
        var validFlags = state.validFlags;
        var flags = state.flags;
        for (var i2 = 0; i2 < flags.length; i2++) {
          var flag = flags.charAt(i2);
          if (validFlags.indexOf(flag) === -1) {
            this.raise(state.start, "Invalid regular expression flag");
          }
          if (flags.indexOf(flag, i2 + 1) > -1) {
            this.raise(state.start, "Duplicate regular expression flag");
          }
        }
      };
      pp$1.validateRegExpPattern = function(state) {
        this.regexp_pattern(state);
        if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
          state.switchN = true;
          this.regexp_pattern(state);
        }
      };
      pp$1.regexp_pattern = function(state) {
        state.pos = 0;
        state.lastIntValue = 0;
        state.lastStringValue = "";
        state.lastAssertionIsQuantifiable = false;
        state.numCapturingParens = 0;
        state.maxBackReference = 0;
        state.groupNames.length = 0;
        state.backReferenceNames.length = 0;
        this.regexp_disjunction(state);
        if (state.pos !== state.source.length) {
          if (state.eat(41)) {
            state.raise("Unmatched ')'");
          }
          if (state.eat(93) || state.eat(125)) {
            state.raise("Lone quantifier brackets");
          }
        }
        if (state.maxBackReference > state.numCapturingParens) {
          state.raise("Invalid escape");
        }
        for (var i2 = 0, list2 = state.backReferenceNames; i2 < list2.length; i2 += 1) {
          var name = list2[i2];
          if (state.groupNames.indexOf(name) === -1) {
            state.raise("Invalid named capture referenced");
          }
        }
      };
      pp$1.regexp_disjunction = function(state) {
        this.regexp_alternative(state);
        while (state.eat(124)) {
          this.regexp_alternative(state);
        }
        if (this.regexp_eatQuantifier(state, true)) {
          state.raise("Nothing to repeat");
        }
        if (state.eat(123)) {
          state.raise("Lone quantifier brackets");
        }
      };
      pp$1.regexp_alternative = function(state) {
        while (state.pos < state.source.length && this.regexp_eatTerm(state)) {
        }
      };
      pp$1.regexp_eatTerm = function(state) {
        if (this.regexp_eatAssertion(state)) {
          if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
            if (state.switchU) {
              state.raise("Invalid quantifier");
            }
          }
          return true;
        }
        if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
          this.regexp_eatQuantifier(state);
          return true;
        }
        return false;
      };
      pp$1.regexp_eatAssertion = function(state) {
        var start = state.pos;
        state.lastAssertionIsQuantifiable = false;
        if (state.eat(94) || state.eat(36)) {
          return true;
        }
        if (state.eat(92)) {
          if (state.eat(66) || state.eat(98)) {
            return true;
          }
          state.pos = start;
        }
        if (state.eat(40) && state.eat(63)) {
          var lookbehind = false;
          if (this.options.ecmaVersion >= 9) {
            lookbehind = state.eat(60);
          }
          if (state.eat(61) || state.eat(33)) {
            this.regexp_disjunction(state);
            if (!state.eat(41)) {
              state.raise("Unterminated group");
            }
            state.lastAssertionIsQuantifiable = !lookbehind;
            return true;
          }
        }
        state.pos = start;
        return false;
      };
      pp$1.regexp_eatQuantifier = function(state, noError) {
        if (noError === void 0)
          noError = false;
        if (this.regexp_eatQuantifierPrefix(state, noError)) {
          state.eat(63);
          return true;
        }
        return false;
      };
      pp$1.regexp_eatQuantifierPrefix = function(state, noError) {
        return state.eat(42) || state.eat(43) || state.eat(63) || this.regexp_eatBracedQuantifier(state, noError);
      };
      pp$1.regexp_eatBracedQuantifier = function(state, noError) {
        var start = state.pos;
        if (state.eat(123)) {
          var min = 0, max = -1;
          if (this.regexp_eatDecimalDigits(state)) {
            min = state.lastIntValue;
            if (state.eat(44) && this.regexp_eatDecimalDigits(state)) {
              max = state.lastIntValue;
            }
            if (state.eat(125)) {
              if (max !== -1 && max < min && !noError) {
                state.raise("numbers out of order in {} quantifier");
              }
              return true;
            }
          }
          if (state.switchU && !noError) {
            state.raise("Incomplete quantifier");
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatAtom = function(state) {
        return this.regexp_eatPatternCharacters(state) || state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
      };
      pp$1.regexp_eatReverseSolidusAtomEscape = function(state) {
        var start = state.pos;
        if (state.eat(92)) {
          if (this.regexp_eatAtomEscape(state)) {
            return true;
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatUncapturingGroup = function(state) {
        var start = state.pos;
        if (state.eat(40)) {
          if (state.eat(63) && state.eat(58)) {
            this.regexp_disjunction(state);
            if (state.eat(41)) {
              return true;
            }
            state.raise("Unterminated group");
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatCapturingGroup = function(state) {
        if (state.eat(40)) {
          if (this.options.ecmaVersion >= 9) {
            this.regexp_groupSpecifier(state);
          } else if (state.current() === 63) {
            state.raise("Invalid group");
          }
          this.regexp_disjunction(state);
          if (state.eat(41)) {
            state.numCapturingParens += 1;
            return true;
          }
          state.raise("Unterminated group");
        }
        return false;
      };
      pp$1.regexp_eatExtendedAtom = function(state) {
        return state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
      };
      pp$1.regexp_eatInvalidBracedQuantifier = function(state) {
        if (this.regexp_eatBracedQuantifier(state, true)) {
          state.raise("Nothing to repeat");
        }
        return false;
      };
      pp$1.regexp_eatSyntaxCharacter = function(state) {
        var ch = state.current();
        if (isSyntaxCharacter(ch)) {
          state.lastIntValue = ch;
          state.advance();
          return true;
        }
        return false;
      };
      function isSyntaxCharacter(ch) {
        return ch === 36 || ch >= 40 && ch <= 43 || ch === 46 || ch === 63 || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
      }
      pp$1.regexp_eatPatternCharacters = function(state) {
        var start = state.pos;
        var ch = 0;
        while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
          state.advance();
        }
        return state.pos !== start;
      };
      pp$1.regexp_eatExtendedPatternCharacter = function(state) {
        var ch = state.current();
        if (ch !== -1 && ch !== 36 && !(ch >= 40 && ch <= 43) && ch !== 46 && ch !== 63 && ch !== 91 && ch !== 94 && ch !== 124) {
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_groupSpecifier = function(state) {
        if (state.eat(63)) {
          if (this.regexp_eatGroupName(state)) {
            if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
              state.raise("Duplicate capture group name");
            }
            state.groupNames.push(state.lastStringValue);
            return;
          }
          state.raise("Invalid group");
        }
      };
      pp$1.regexp_eatGroupName = function(state) {
        state.lastStringValue = "";
        if (state.eat(60)) {
          if (this.regexp_eatRegExpIdentifierName(state) && state.eat(62)) {
            return true;
          }
          state.raise("Invalid capture group name");
        }
        return false;
      };
      pp$1.regexp_eatRegExpIdentifierName = function(state) {
        state.lastStringValue = "";
        if (this.regexp_eatRegExpIdentifierStart(state)) {
          state.lastStringValue += codePointToString(state.lastIntValue);
          while (this.regexp_eatRegExpIdentifierPart(state)) {
            state.lastStringValue += codePointToString(state.lastIntValue);
          }
          return true;
        }
        return false;
      };
      pp$1.regexp_eatRegExpIdentifierStart = function(state) {
        var start = state.pos;
        var forceU = this.options.ecmaVersion >= 11;
        var ch = state.current(forceU);
        state.advance(forceU);
        if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
          ch = state.lastIntValue;
        }
        if (isRegExpIdentifierStart(ch)) {
          state.lastIntValue = ch;
          return true;
        }
        state.pos = start;
        return false;
      };
      function isRegExpIdentifierStart(ch) {
        return isIdentifierStart(ch, true) || ch === 36 || ch === 95;
      }
      pp$1.regexp_eatRegExpIdentifierPart = function(state) {
        var start = state.pos;
        var forceU = this.options.ecmaVersion >= 11;
        var ch = state.current(forceU);
        state.advance(forceU);
        if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
          ch = state.lastIntValue;
        }
        if (isRegExpIdentifierPart(ch)) {
          state.lastIntValue = ch;
          return true;
        }
        state.pos = start;
        return false;
      };
      function isRegExpIdentifierPart(ch) {
        return isIdentifierChar(ch, true) || ch === 36 || ch === 95 || ch === 8204 || ch === 8205;
      }
      pp$1.regexp_eatAtomEscape = function(state) {
        if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) {
          return true;
        }
        if (state.switchU) {
          if (state.current() === 99) {
            state.raise("Invalid unicode escape");
          }
          state.raise("Invalid escape");
        }
        return false;
      };
      pp$1.regexp_eatBackReference = function(state) {
        var start = state.pos;
        if (this.regexp_eatDecimalEscape(state)) {
          var n = state.lastIntValue;
          if (state.switchU) {
            if (n > state.maxBackReference) {
              state.maxBackReference = n;
            }
            return true;
          }
          if (n <= state.numCapturingParens) {
            return true;
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatKGroupName = function(state) {
        if (state.eat(107)) {
          if (this.regexp_eatGroupName(state)) {
            state.backReferenceNames.push(state.lastStringValue);
            return true;
          }
          state.raise("Invalid named reference");
        }
        return false;
      };
      pp$1.regexp_eatCharacterEscape = function(state) {
        return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, false) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
      };
      pp$1.regexp_eatCControlLetter = function(state) {
        var start = state.pos;
        if (state.eat(99)) {
          if (this.regexp_eatControlLetter(state)) {
            return true;
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatZero = function(state) {
        if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
          state.lastIntValue = 0;
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_eatControlEscape = function(state) {
        var ch = state.current();
        if (ch === 116) {
          state.lastIntValue = 9;
          state.advance();
          return true;
        }
        if (ch === 110) {
          state.lastIntValue = 10;
          state.advance();
          return true;
        }
        if (ch === 118) {
          state.lastIntValue = 11;
          state.advance();
          return true;
        }
        if (ch === 102) {
          state.lastIntValue = 12;
          state.advance();
          return true;
        }
        if (ch === 114) {
          state.lastIntValue = 13;
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_eatControlLetter = function(state) {
        var ch = state.current();
        if (isControlLetter(ch)) {
          state.lastIntValue = ch % 32;
          state.advance();
          return true;
        }
        return false;
      };
      function isControlLetter(ch) {
        return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
      }
      pp$1.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
        if (forceU === void 0)
          forceU = false;
        var start = state.pos;
        var switchU = forceU || state.switchU;
        if (state.eat(117)) {
          if (this.regexp_eatFixedHexDigits(state, 4)) {
            var lead = state.lastIntValue;
            if (switchU && lead >= 55296 && lead <= 56319) {
              var leadSurrogateEnd = state.pos;
              if (state.eat(92) && state.eat(117) && this.regexp_eatFixedHexDigits(state, 4)) {
                var trail = state.lastIntValue;
                if (trail >= 56320 && trail <= 57343) {
                  state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
                  return true;
                }
              }
              state.pos = leadSurrogateEnd;
              state.lastIntValue = lead;
            }
            return true;
          }
          if (switchU && state.eat(123) && this.regexp_eatHexDigits(state) && state.eat(125) && isValidUnicode(state.lastIntValue)) {
            return true;
          }
          if (switchU) {
            state.raise("Invalid unicode escape");
          }
          state.pos = start;
        }
        return false;
      };
      function isValidUnicode(ch) {
        return ch >= 0 && ch <= 1114111;
      }
      pp$1.regexp_eatIdentityEscape = function(state) {
        if (state.switchU) {
          if (this.regexp_eatSyntaxCharacter(state)) {
            return true;
          }
          if (state.eat(47)) {
            state.lastIntValue = 47;
            return true;
          }
          return false;
        }
        var ch = state.current();
        if (ch !== 99 && (!state.switchN || ch !== 107)) {
          state.lastIntValue = ch;
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_eatDecimalEscape = function(state) {
        state.lastIntValue = 0;
        var ch = state.current();
        if (ch >= 49 && ch <= 57) {
          do {
            state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
            state.advance();
          } while ((ch = state.current()) >= 48 && ch <= 57);
          return true;
        }
        return false;
      };
      pp$1.regexp_eatCharacterClassEscape = function(state) {
        var ch = state.current();
        if (isCharacterClassEscape(ch)) {
          state.lastIntValue = -1;
          state.advance();
          return true;
        }
        if (state.switchU && this.options.ecmaVersion >= 9 && (ch === 80 || ch === 112)) {
          state.lastIntValue = -1;
          state.advance();
          if (state.eat(123) && this.regexp_eatUnicodePropertyValueExpression(state) && state.eat(125)) {
            return true;
          }
          state.raise("Invalid property name");
        }
        return false;
      };
      function isCharacterClassEscape(ch) {
        return ch === 100 || ch === 68 || ch === 115 || ch === 83 || ch === 119 || ch === 87;
      }
      pp$1.regexp_eatUnicodePropertyValueExpression = function(state) {
        var start = state.pos;
        if (this.regexp_eatUnicodePropertyName(state) && state.eat(61)) {
          var name = state.lastStringValue;
          if (this.regexp_eatUnicodePropertyValue(state)) {
            var value = state.lastStringValue;
            this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
            return true;
          }
        }
        state.pos = start;
        if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
          var nameOrValue = state.lastStringValue;
          this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
          return true;
        }
        return false;
      };
      pp$1.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
        if (!hasOwn(state.unicodeProperties.nonBinary, name)) {
          state.raise("Invalid property name");
        }
        if (!state.unicodeProperties.nonBinary[name].test(value)) {
          state.raise("Invalid property value");
        }
      };
      pp$1.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
        if (!state.unicodeProperties.binary.test(nameOrValue)) {
          state.raise("Invalid property name");
        }
      };
      pp$1.regexp_eatUnicodePropertyName = function(state) {
        var ch = 0;
        state.lastStringValue = "";
        while (isUnicodePropertyNameCharacter(ch = state.current())) {
          state.lastStringValue += codePointToString(ch);
          state.advance();
        }
        return state.lastStringValue !== "";
      };
      function isUnicodePropertyNameCharacter(ch) {
        return isControlLetter(ch) || ch === 95;
      }
      pp$1.regexp_eatUnicodePropertyValue = function(state) {
        var ch = 0;
        state.lastStringValue = "";
        while (isUnicodePropertyValueCharacter(ch = state.current())) {
          state.lastStringValue += codePointToString(ch);
          state.advance();
        }
        return state.lastStringValue !== "";
      };
      function isUnicodePropertyValueCharacter(ch) {
        return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
      }
      pp$1.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
        return this.regexp_eatUnicodePropertyValue(state);
      };
      pp$1.regexp_eatCharacterClass = function(state) {
        if (state.eat(91)) {
          state.eat(94);
          this.regexp_classRanges(state);
          if (state.eat(93)) {
            return true;
          }
          state.raise("Unterminated character class");
        }
        return false;
      };
      pp$1.regexp_classRanges = function(state) {
        while (this.regexp_eatClassAtom(state)) {
          var left = state.lastIntValue;
          if (state.eat(45) && this.regexp_eatClassAtom(state)) {
            var right = state.lastIntValue;
            if (state.switchU && (left === -1 || right === -1)) {
              state.raise("Invalid character class");
            }
            if (left !== -1 && right !== -1 && left > right) {
              state.raise("Range out of order in character class");
            }
          }
        }
      };
      pp$1.regexp_eatClassAtom = function(state) {
        var start = state.pos;
        if (state.eat(92)) {
          if (this.regexp_eatClassEscape(state)) {
            return true;
          }
          if (state.switchU) {
            var ch$1 = state.current();
            if (ch$1 === 99 || isOctalDigit(ch$1)) {
              state.raise("Invalid class escape");
            }
            state.raise("Invalid escape");
          }
          state.pos = start;
        }
        var ch = state.current();
        if (ch !== 93) {
          state.lastIntValue = ch;
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_eatClassEscape = function(state) {
        var start = state.pos;
        if (state.eat(98)) {
          state.lastIntValue = 8;
          return true;
        }
        if (state.switchU && state.eat(45)) {
          state.lastIntValue = 45;
          return true;
        }
        if (!state.switchU && state.eat(99)) {
          if (this.regexp_eatClassControlLetter(state)) {
            return true;
          }
          state.pos = start;
        }
        return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
      };
      pp$1.regexp_eatClassControlLetter = function(state) {
        var ch = state.current();
        if (isDecimalDigit(ch) || ch === 95) {
          state.lastIntValue = ch % 32;
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_eatHexEscapeSequence = function(state) {
        var start = state.pos;
        if (state.eat(120)) {
          if (this.regexp_eatFixedHexDigits(state, 2)) {
            return true;
          }
          if (state.switchU) {
            state.raise("Invalid escape");
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatDecimalDigits = function(state) {
        var start = state.pos;
        var ch = 0;
        state.lastIntValue = 0;
        while (isDecimalDigit(ch = state.current())) {
          state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
          state.advance();
        }
        return state.pos !== start;
      };
      function isDecimalDigit(ch) {
        return ch >= 48 && ch <= 57;
      }
      pp$1.regexp_eatHexDigits = function(state) {
        var start = state.pos;
        var ch = 0;
        state.lastIntValue = 0;
        while (isHexDigit(ch = state.current())) {
          state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
          state.advance();
        }
        return state.pos !== start;
      };
      function isHexDigit(ch) {
        return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
      }
      function hexToInt(ch) {
        if (ch >= 65 && ch <= 70) {
          return 10 + (ch - 65);
        }
        if (ch >= 97 && ch <= 102) {
          return 10 + (ch - 97);
        }
        return ch - 48;
      }
      pp$1.regexp_eatLegacyOctalEscapeSequence = function(state) {
        if (this.regexp_eatOctalDigit(state)) {
          var n1 = state.lastIntValue;
          if (this.regexp_eatOctalDigit(state)) {
            var n2 = state.lastIntValue;
            if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
              state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
            } else {
              state.lastIntValue = n1 * 8 + n2;
            }
          } else {
            state.lastIntValue = n1;
          }
          return true;
        }
        return false;
      };
      pp$1.regexp_eatOctalDigit = function(state) {
        var ch = state.current();
        if (isOctalDigit(ch)) {
          state.lastIntValue = ch - 48;
          state.advance();
          return true;
        }
        state.lastIntValue = 0;
        return false;
      };
      function isOctalDigit(ch) {
        return ch >= 48 && ch <= 55;
      }
      pp$1.regexp_eatFixedHexDigits = function(state, length) {
        var start = state.pos;
        state.lastIntValue = 0;
        for (var i2 = 0; i2 < length; ++i2) {
          var ch = state.current();
          if (!isHexDigit(ch)) {
            state.pos = start;
            return false;
          }
          state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
          state.advance();
        }
        return true;
      };
      var Token = function Token2(p) {
        this.type = p.type;
        this.value = p.value;
        this.start = p.start;
        this.end = p.end;
        if (p.options.locations) {
          this.loc = new SourceLocation(p, p.startLoc, p.endLoc);
        }
        if (p.options.ranges) {
          this.range = [p.start, p.end];
        }
      };
      var pp = Parser2.prototype;
      pp.next = function(ignoreEscapeSequenceInKeyword) {
        if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc) {
          this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
        }
        if (this.options.onToken) {
          this.options.onToken(new Token(this));
        }
        this.lastTokEnd = this.end;
        this.lastTokStart = this.start;
        this.lastTokEndLoc = this.endLoc;
        this.lastTokStartLoc = this.startLoc;
        this.nextToken();
      };
      pp.getToken = function() {
        this.next();
        return new Token(this);
      };
      if (typeof Symbol !== "undefined") {
        pp[Symbol.iterator] = function() {
          var this$1$1 = this;
          return {
            next: function() {
              var token = this$1$1.getToken();
              return {
                done: token.type === types$1.eof,
                value: token
              };
            }
          };
        };
      }
      pp.nextToken = function() {
        var curContext = this.curContext();
        if (!curContext || !curContext.preserveSpace) {
          this.skipSpace();
        }
        this.start = this.pos;
        if (this.options.locations) {
          this.startLoc = this.curPosition();
        }
        if (this.pos >= this.input.length) {
          return this.finishToken(types$1.eof);
        }
        if (curContext.override) {
          return curContext.override(this);
        } else {
          this.readToken(this.fullCharCodeAtPos());
        }
      };
      pp.readToken = function(code) {
        if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92) {
          return this.readWord();
        }
        return this.getTokenFromCode(code);
      };
      pp.fullCharCodeAtPos = function() {
        var code = this.input.charCodeAt(this.pos);
        if (code <= 55295 || code >= 56320) {
          return code;
        }
        var next = this.input.charCodeAt(this.pos + 1);
        return next <= 56319 || next >= 57344 ? code : (code << 10) + next - 56613888;
      };
      pp.skipBlockComment = function() {
        var startLoc = this.options.onComment && this.curPosition();
        var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
        if (end === -1) {
          this.raise(this.pos - 2, "Unterminated comment");
        }
        this.pos = end + 2;
        if (this.options.locations) {
          for (var nextBreak = void 0, pos = start; (nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1; ) {
            ++this.curLine;
            pos = this.lineStart = nextBreak;
          }
        }
        if (this.options.onComment) {
          this.options.onComment(
            true,
            this.input.slice(start + 2, end),
            start,
            this.pos,
            startLoc,
            this.curPosition()
          );
        }
      };
      pp.skipLineComment = function(startSkip) {
        var start = this.pos;
        var startLoc = this.options.onComment && this.curPosition();
        var ch = this.input.charCodeAt(this.pos += startSkip);
        while (this.pos < this.input.length && !isNewLine(ch)) {
          ch = this.input.charCodeAt(++this.pos);
        }
        if (this.options.onComment) {
          this.options.onComment(
            false,
            this.input.slice(start + startSkip, this.pos),
            start,
            this.pos,
            startLoc,
            this.curPosition()
          );
        }
      };
      pp.skipSpace = function() {
        loop:
          while (this.pos < this.input.length) {
            var ch = this.input.charCodeAt(this.pos);
            switch (ch) {
              case 32:
              case 160:
                ++this.pos;
                break;
              case 13:
                if (this.input.charCodeAt(this.pos + 1) === 10) {
                  ++this.pos;
                }
              case 10:
              case 8232:
              case 8233:
                ++this.pos;
                if (this.options.locations) {
                  ++this.curLine;
                  this.lineStart = this.pos;
                }
                break;
              case 47:
                switch (this.input.charCodeAt(this.pos + 1)) {
                  case 42:
                    this.skipBlockComment();
                    break;
                  case 47:
                    this.skipLineComment(2);
                    break;
                  default:
                    break loop;
                }
                break;
              default:
                if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
                  ++this.pos;
                } else {
                  break loop;
                }
            }
          }
      };
      pp.finishToken = function(type, val) {
        this.end = this.pos;
        if (this.options.locations) {
          this.endLoc = this.curPosition();
        }
        var prevType = this.type;
        this.type = type;
        this.value = val;
        this.updateContext(prevType);
      };
      pp.readToken_dot = function() {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next >= 48 && next <= 57) {
          return this.readNumber(true);
        }
        var next2 = this.input.charCodeAt(this.pos + 2);
        if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
          this.pos += 3;
          return this.finishToken(types$1.ellipsis);
        } else {
          ++this.pos;
          return this.finishToken(types$1.dot);
        }
      };
      pp.readToken_slash = function() {
        var next = this.input.charCodeAt(this.pos + 1);
        if (this.exprAllowed) {
          ++this.pos;
          return this.readRegexp();
        }
        if (next === 61) {
          return this.finishOp(types$1.assign, 2);
        }
        return this.finishOp(types$1.slash, 1);
      };
      pp.readToken_mult_modulo_exp = function(code) {
        var next = this.input.charCodeAt(this.pos + 1);
        var size = 1;
        var tokentype = code === 42 ? types$1.star : types$1.modulo;
        if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
          ++size;
          tokentype = types$1.starstar;
          next = this.input.charCodeAt(this.pos + 2);
        }
        if (next === 61) {
          return this.finishOp(types$1.assign, size + 1);
        }
        return this.finishOp(tokentype, size);
      };
      pp.readToken_pipe_amp = function(code) {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === code) {
          if (this.options.ecmaVersion >= 12) {
            var next2 = this.input.charCodeAt(this.pos + 2);
            if (next2 === 61) {
              return this.finishOp(types$1.assign, 3);
            }
          }
          return this.finishOp(code === 124 ? types$1.logicalOR : types$1.logicalAND, 2);
        }
        if (next === 61) {
          return this.finishOp(types$1.assign, 2);
        }
        return this.finishOp(code === 124 ? types$1.bitwiseOR : types$1.bitwiseAND, 1);
      };
      pp.readToken_caret = function() {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === 61) {
          return this.finishOp(types$1.assign, 2);
        }
        return this.finishOp(types$1.bitwiseXOR, 1);
      };
      pp.readToken_plus_min = function(code) {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === code) {
          if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
            this.skipLineComment(3);
            this.skipSpace();
            return this.nextToken();
          }
          return this.finishOp(types$1.incDec, 2);
        }
        if (next === 61) {
          return this.finishOp(types$1.assign, 2);
        }
        return this.finishOp(types$1.plusMin, 1);
      };
      pp.readToken_lt_gt = function(code) {
        var next = this.input.charCodeAt(this.pos + 1);
        var size = 1;
        if (next === code) {
          size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
          if (this.input.charCodeAt(this.pos + size) === 61) {
            return this.finishOp(types$1.assign, size + 1);
          }
          return this.finishOp(types$1.bitShift, size);
        }
        if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
          this.skipLineComment(4);
          this.skipSpace();
          return this.nextToken();
        }
        if (next === 61) {
          size = 2;
        }
        return this.finishOp(types$1.relational, size);
      };
      pp.readToken_eq_excl = function(code) {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === 61) {
          return this.finishOp(types$1.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
        }
        if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) {
          this.pos += 2;
          return this.finishToken(types$1.arrow);
        }
        return this.finishOp(code === 61 ? types$1.eq : types$1.prefix, 1);
      };
      pp.readToken_question = function() {
        var ecmaVersion2 = this.options.ecmaVersion;
        if (ecmaVersion2 >= 11) {
          var next = this.input.charCodeAt(this.pos + 1);
          if (next === 46) {
            var next2 = this.input.charCodeAt(this.pos + 2);
            if (next2 < 48 || next2 > 57) {
              return this.finishOp(types$1.questionDot, 2);
            }
          }
          if (next === 63) {
            if (ecmaVersion2 >= 12) {
              var next2$1 = this.input.charCodeAt(this.pos + 2);
              if (next2$1 === 61) {
                return this.finishOp(types$1.assign, 3);
              }
            }
            return this.finishOp(types$1.coalesce, 2);
          }
        }
        return this.finishOp(types$1.question, 1);
      };
      pp.readToken_numberSign = function() {
        var ecmaVersion2 = this.options.ecmaVersion;
        var code = 35;
        if (ecmaVersion2 >= 13) {
          ++this.pos;
          code = this.fullCharCodeAtPos();
          if (isIdentifierStart(code, true) || code === 92) {
            return this.finishToken(types$1.privateId, this.readWord1());
          }
        }
        this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
      };
      pp.getTokenFromCode = function(code) {
        switch (code) {
          case 46:
            return this.readToken_dot();
          case 40:
            ++this.pos;
            return this.finishToken(types$1.parenL);
          case 41:
            ++this.pos;
            return this.finishToken(types$1.parenR);
          case 59:
            ++this.pos;
            return this.finishToken(types$1.semi);
          case 44:
            ++this.pos;
            return this.finishToken(types$1.comma);
          case 91:
            ++this.pos;
            return this.finishToken(types$1.bracketL);
          case 93:
            ++this.pos;
            return this.finishToken(types$1.bracketR);
          case 123:
            ++this.pos;
            return this.finishToken(types$1.braceL);
          case 125:
            ++this.pos;
            return this.finishToken(types$1.braceR);
          case 58:
            ++this.pos;
            return this.finishToken(types$1.colon);
          case 96:
            if (this.options.ecmaVersion < 6) {
              break;
            }
            ++this.pos;
            return this.finishToken(types$1.backQuote);
          case 48:
            var next = this.input.charCodeAt(this.pos + 1);
            if (next === 120 || next === 88) {
              return this.readRadixNumber(16);
            }
            if (this.options.ecmaVersion >= 6) {
              if (next === 111 || next === 79) {
                return this.readRadixNumber(8);
              }
              if (next === 98 || next === 66) {
                return this.readRadixNumber(2);
              }
            }
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return this.readNumber(false);
          case 34:
          case 39:
            return this.readString(code);
          case 47:
            return this.readToken_slash();
          case 37:
          case 42:
            return this.readToken_mult_modulo_exp(code);
          case 124:
          case 38:
            return this.readToken_pipe_amp(code);
          case 94:
            return this.readToken_caret();
          case 43:
          case 45:
            return this.readToken_plus_min(code);
          case 60:
          case 62:
            return this.readToken_lt_gt(code);
          case 61:
          case 33:
            return this.readToken_eq_excl(code);
          case 63:
            return this.readToken_question();
          case 126:
            return this.finishOp(types$1.prefix, 1);
          case 35:
            return this.readToken_numberSign();
        }
        this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
      };
      pp.finishOp = function(type, size) {
        var str = this.input.slice(this.pos, this.pos + size);
        this.pos += size;
        return this.finishToken(type, str);
      };
      pp.readRegexp = function() {
        var escaped, inClass, start = this.pos;
        for (; ; ) {
          if (this.pos >= this.input.length) {
            this.raise(start, "Unterminated regular expression");
          }
          var ch = this.input.charAt(this.pos);
          if (lineBreak.test(ch)) {
            this.raise(start, "Unterminated regular expression");
          }
          if (!escaped) {
            if (ch === "[") {
              inClass = true;
            } else if (ch === "]" && inClass) {
              inClass = false;
            } else if (ch === "/" && !inClass) {
              break;
            }
            escaped = ch === "\\";
          } else {
            escaped = false;
          }
          ++this.pos;
        }
        var pattern = this.input.slice(start, this.pos);
        ++this.pos;
        var flagsStart = this.pos;
        var flags = this.readWord1();
        if (this.containsEsc) {
          this.unexpected(flagsStart);
        }
        var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
        state.reset(start, pattern, flags);
        this.validateRegExpFlags(state);
        this.validateRegExpPattern(state);
        var value = null;
        try {
          value = new RegExp(pattern, flags);
        } catch (e) {
        }
        return this.finishToken(types$1.regexp, { pattern, flags, value });
      };
      pp.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
        var allowSeparators = this.options.ecmaVersion >= 12 && len === void 0;
        var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;
        var start = this.pos, total = 0, lastCode = 0;
        for (var i2 = 0, e = len == null ? Infinity : len; i2 < e; ++i2, ++this.pos) {
          var code = this.input.charCodeAt(this.pos), val = void 0;
          if (allowSeparators && code === 95) {
            if (isLegacyOctalNumericLiteral) {
              this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
            }
            if (lastCode === 95) {
              this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
            }
            if (i2 === 0) {
              this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
            }
            lastCode = code;
            continue;
          }
          if (code >= 97) {
            val = code - 97 + 10;
          } else if (code >= 65) {
            val = code - 65 + 10;
          } else if (code >= 48 && code <= 57) {
            val = code - 48;
          } else {
            val = Infinity;
          }
          if (val >= radix) {
            break;
          }
          lastCode = code;
          total = total * radix + val;
        }
        if (allowSeparators && lastCode === 95) {
          this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
        }
        if (this.pos === start || len != null && this.pos - start !== len) {
          return null;
        }
        return total;
      };
      function stringToNumber(str, isLegacyOctalNumericLiteral) {
        if (isLegacyOctalNumericLiteral) {
          return parseInt(str, 8);
        }
        return parseFloat(str.replace(/_/g, ""));
      }
      function stringToBigInt(str) {
        if (typeof BigInt !== "function") {
          return null;
        }
        return BigInt(str.replace(/_/g, ""));
      }
      pp.readRadixNumber = function(radix) {
        var start = this.pos;
        this.pos += 2;
        var val = this.readInt(radix);
        if (val == null) {
          this.raise(this.start + 2, "Expected number in radix " + radix);
        }
        if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
          val = stringToBigInt(this.input.slice(start, this.pos));
          ++this.pos;
        } else if (isIdentifierStart(this.fullCharCodeAtPos())) {
          this.raise(this.pos, "Identifier directly after number");
        }
        return this.finishToken(types$1.num, val);
      };
      pp.readNumber = function(startsWithDot) {
        var start = this.pos;
        if (!startsWithDot && this.readInt(10, void 0, true) === null) {
          this.raise(start, "Invalid number");
        }
        var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
        if (octal && this.strict) {
          this.raise(start, "Invalid number");
        }
        var next = this.input.charCodeAt(this.pos);
        if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
          var val$1 = stringToBigInt(this.input.slice(start, this.pos));
          ++this.pos;
          if (isIdentifierStart(this.fullCharCodeAtPos())) {
            this.raise(this.pos, "Identifier directly after number");
          }
          return this.finishToken(types$1.num, val$1);
        }
        if (octal && /[89]/.test(this.input.slice(start, this.pos))) {
          octal = false;
        }
        if (next === 46 && !octal) {
          ++this.pos;
          this.readInt(10);
          next = this.input.charCodeAt(this.pos);
        }
        if ((next === 69 || next === 101) && !octal) {
          next = this.input.charCodeAt(++this.pos);
          if (next === 43 || next === 45) {
            ++this.pos;
          }
          if (this.readInt(10) === null) {
            this.raise(start, "Invalid number");
          }
        }
        if (isIdentifierStart(this.fullCharCodeAtPos())) {
          this.raise(this.pos, "Identifier directly after number");
        }
        var val = stringToNumber(this.input.slice(start, this.pos), octal);
        return this.finishToken(types$1.num, val);
      };
      pp.readCodePoint = function() {
        var ch = this.input.charCodeAt(this.pos), code;
        if (ch === 123) {
          if (this.options.ecmaVersion < 6) {
            this.unexpected();
          }
          var codePos = ++this.pos;
          code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
          ++this.pos;
          if (code > 1114111) {
            this.invalidStringToken(codePos, "Code point out of bounds");
          }
        } else {
          code = this.readHexChar(4);
        }
        return code;
      };
      pp.readString = function(quote) {
        var out = "", chunkStart = ++this.pos;
        for (; ; ) {
          if (this.pos >= this.input.length) {
            this.raise(this.start, "Unterminated string constant");
          }
          var ch = this.input.charCodeAt(this.pos);
          if (ch === quote) {
            break;
          }
          if (ch === 92) {
            out += this.input.slice(chunkStart, this.pos);
            out += this.readEscapedChar(false);
            chunkStart = this.pos;
          } else if (ch === 8232 || ch === 8233) {
            if (this.options.ecmaVersion < 10) {
              this.raise(this.start, "Unterminated string constant");
            }
            ++this.pos;
            if (this.options.locations) {
              this.curLine++;
              this.lineStart = this.pos;
            }
          } else {
            if (isNewLine(ch)) {
              this.raise(this.start, "Unterminated string constant");
            }
            ++this.pos;
          }
        }
        out += this.input.slice(chunkStart, this.pos++);
        return this.finishToken(types$1.string, out);
      };
      var INVALID_TEMPLATE_ESCAPE_ERROR = {};
      pp.tryReadTemplateToken = function() {
        this.inTemplateElement = true;
        try {
          this.readTmplToken();
        } catch (err) {
          if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
            this.readInvalidTemplateToken();
          } else {
            throw err;
          }
        }
        this.inTemplateElement = false;
      };
      pp.invalidStringToken = function(position, message) {
        if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
          throw INVALID_TEMPLATE_ESCAPE_ERROR;
        } else {
          this.raise(position, message);
        }
      };
      pp.readTmplToken = function() {
        var out = "", chunkStart = this.pos;
        for (; ; ) {
          if (this.pos >= this.input.length) {
            this.raise(this.start, "Unterminated template");
          }
          var ch = this.input.charCodeAt(this.pos);
          if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
            if (this.pos === this.start && (this.type === types$1.template || this.type === types$1.invalidTemplate)) {
              if (ch === 36) {
                this.pos += 2;
                return this.finishToken(types$1.dollarBraceL);
              } else {
                ++this.pos;
                return this.finishToken(types$1.backQuote);
              }
            }
            out += this.input.slice(chunkStart, this.pos);
            return this.finishToken(types$1.template, out);
          }
          if (ch === 92) {
            out += this.input.slice(chunkStart, this.pos);
            out += this.readEscapedChar(true);
            chunkStart = this.pos;
          } else if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.pos);
            ++this.pos;
            switch (ch) {
              case 13:
                if (this.input.charCodeAt(this.pos) === 10) {
                  ++this.pos;
                }
              case 10:
                out += "\n";
                break;
              default:
                out += String.fromCharCode(ch);
                break;
            }
            if (this.options.locations) {
              ++this.curLine;
              this.lineStart = this.pos;
            }
            chunkStart = this.pos;
          } else {
            ++this.pos;
          }
        }
      };
      pp.readInvalidTemplateToken = function() {
        for (; this.pos < this.input.length; this.pos++) {
          switch (this.input[this.pos]) {
            case "\\":
              ++this.pos;
              break;
            case "$":
              if (this.input[this.pos + 1] !== "{") {
                break;
              }
            case "`":
              return this.finishToken(types$1.invalidTemplate, this.input.slice(this.start, this.pos));
          }
        }
        this.raise(this.start, "Unterminated template");
      };
      pp.readEscapedChar = function(inTemplate) {
        var ch = this.input.charCodeAt(++this.pos);
        ++this.pos;
        switch (ch) {
          case 110:
            return "\n";
          case 114:
            return "\r";
          case 120:
            return String.fromCharCode(this.readHexChar(2));
          case 117:
            return codePointToString(this.readCodePoint());
          case 116:
            return "	";
          case 98:
            return "\b";
          case 118:
            return "\v";
          case 102:
            return "\f";
          case 13:
            if (this.input.charCodeAt(this.pos) === 10) {
              ++this.pos;
            }
          case 10:
            if (this.options.locations) {
              this.lineStart = this.pos;
              ++this.curLine;
            }
            return "";
          case 56:
          case 57:
            if (this.strict) {
              this.invalidStringToken(
                this.pos - 1,
                "Invalid escape sequence"
              );
            }
            if (inTemplate) {
              var codePos = this.pos - 1;
              this.invalidStringToken(
                codePos,
                "Invalid escape sequence in template string"
              );
              return null;
            }
          default:
            if (ch >= 48 && ch <= 55) {
              var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
              var octal = parseInt(octalStr, 8);
              if (octal > 255) {
                octalStr = octalStr.slice(0, -1);
                octal = parseInt(octalStr, 8);
              }
              this.pos += octalStr.length - 1;
              ch = this.input.charCodeAt(this.pos);
              if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
                this.invalidStringToken(
                  this.pos - 1 - octalStr.length,
                  inTemplate ? "Octal literal in template string" : "Octal literal in strict mode"
                );
              }
              return String.fromCharCode(octal);
            }
            if (isNewLine(ch)) {
              return "";
            }
            return String.fromCharCode(ch);
        }
      };
      pp.readHexChar = function(len) {
        var codePos = this.pos;
        var n = this.readInt(16, len);
        if (n === null) {
          this.invalidStringToken(codePos, "Bad character escape sequence");
        }
        return n;
      };
      pp.readWord1 = function() {
        this.containsEsc = false;
        var word = "", first = true, chunkStart = this.pos;
        var astral = this.options.ecmaVersion >= 6;
        while (this.pos < this.input.length) {
          var ch = this.fullCharCodeAtPos();
          if (isIdentifierChar(ch, astral)) {
            this.pos += ch <= 65535 ? 1 : 2;
          } else if (ch === 92) {
            this.containsEsc = true;
            word += this.input.slice(chunkStart, this.pos);
            var escStart = this.pos;
            if (this.input.charCodeAt(++this.pos) !== 117) {
              this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
            }
            ++this.pos;
            var esc = this.readCodePoint();
            if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) {
              this.invalidStringToken(escStart, "Invalid Unicode escape");
            }
            word += codePointToString(esc);
            chunkStart = this.pos;
          } else {
            break;
          }
          first = false;
        }
        return word + this.input.slice(chunkStart, this.pos);
      };
      pp.readWord = function() {
        var word = this.readWord1();
        var type = types$1.name;
        if (this.keywords.test(word)) {
          type = keywords[word];
        }
        return this.finishToken(type, word);
      };
      var version = "8.8.0";
      Parser2.acorn = {
        Parser: Parser2,
        version,
        defaultOptions,
        Position,
        SourceLocation,
        getLineInfo,
        Node,
        TokenType,
        tokTypes: types$1,
        keywordTypes: keywords,
        TokContext,
        tokContexts: types,
        isIdentifierChar,
        isIdentifierStart,
        Token,
        isNewLine,
        lineBreak,
        lineBreakG,
        nonASCIIwhitespace
      };
      function parse(input, options) {
        return Parser2.parse(input, options);
      }
      function parseExpressionAt(input, pos, options) {
        return Parser2.parseExpressionAt(input, pos, options);
      }
      function tokenizer(input, options) {
        return Parser2.tokenizer(input, options);
      }
      exports2.Node = Node;
      exports2.Parser = Parser2;
      exports2.Position = Position;
      exports2.SourceLocation = SourceLocation;
      exports2.TokContext = TokContext;
      exports2.Token = Token;
      exports2.TokenType = TokenType;
      exports2.defaultOptions = defaultOptions;
      exports2.getLineInfo = getLineInfo;
      exports2.isIdentifierChar = isIdentifierChar;
      exports2.isIdentifierStart = isIdentifierStart;
      exports2.isNewLine = isNewLine;
      exports2.keywordTypes = keywords;
      exports2.lineBreak = lineBreak;
      exports2.lineBreakG = lineBreakG;
      exports2.nonASCIIwhitespace = nonASCIIwhitespace;
      exports2.parse = parse;
      exports2.parseExpressionAt = parseExpressionAt;
      exports2.tokContexts = types;
      exports2.tokTypes = types$1;
      exports2.tokenizer = tokenizer;
      exports2.version = version;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// _Plugin.ts
var Plugin_exports = {};
__export(Plugin_exports, {
  default: () => InlineScriptsPlugin
});
module.exports = __toCommonJS(Plugin_exports);
var import_obsidian14 = require("obsidian");

// ui_userNotifier.ts
var import_obsidian = require("obsidian");
var LONG_NOTE_TIME = 8 * 1e3;
var INDENT = " ".repeat(4);
var UserNotifier;
((UserNotifier2) => {
  function run(parameters) {
    run_internal(parameters);
  }
  UserNotifier2.run = run;
  function getFunction_print() {
    return print;
  }
  UserNotifier2.getFunction_print = getFunction_print;
  function print(message) {
    new import_obsidian.Notice("Inline Script Shortcut:\n" + message, LONG_NOTE_TIME);
    console.info("Inline Script Shortcut:\n	" + message);
    return message;
  }
  ;
  function run_internal(parameters) {
    if (typeof parameters !== "object") {
      parameters = {};
    }
    const popupMessage = parameters.popupMessage || parameters.message || "";
    const consoleMessage = (parameters.consoleMessage || parameters.message || "").replaceAll("\n", "\n" + INDENT);
    const messageType = parameters.messageType || "";
    const messageLevel = parameters.messageLevel === "info" ? 0 : parameters.messageLevel === "warn" ? 1 : 2;
    const consoleHasDetails = !!parameters.consoleHasDetails;
    const popupTime = LONG_NOTE_TIME * (parameters.popupTime ?? 1);
    if (popupMessage) {
      new import_obsidian.Notice(
        (messageLevel === 2 ? "ERROR: " : "") + popupMessage + (consoleHasDetails ? "\n\n(see console for details)" : ""),
        popupTime
      );
    }
    if (consoleMessage) {
      const message = InlineScriptsPlugin.getInstance().manifest.name + "\n" + (messageType ? INDENT + messageType + "\n" : "") + INDENT + consoleMessage;
      switch (messageLevel) {
        case 0:
          console.info(message);
          break;
        case 1:
          console.warn(message);
          break;
        default:
          console.error(message);
          break;
      }
    }
  }
})(UserNotifier || (UserNotifier = {}));

// ui_settings.ts
var import_obsidian12 = require("obsidian");

// ui_setting_shortcutFiles.ts
var import_obsidian6 = require("obsidian");

// ui_Popups.ts
var import_obsidian2 = require("obsidian");
var CLOSE_CHECK_INTERVAL = 250;
var Popups = class extends import_obsidian2.Modal {
  constructor() {
    super(InlineScriptsPlugin.getInstance().app);
    this.ALERT_DEFINITION = Object.freeze(
      {
        buttonIds: ["Ok"]
      }
    );
    this.CONFIRM_DEFINITION = Object.freeze(
      {
        buttonIds: ["Confirm", "Cancel"],
        onClose: async (data, resolveFnc, buttonId) => {
          resolveFnc(buttonId === "Confirm");
        }
      }
    );
    this.INPUT_DEFINITION = Object.freeze(
      {
        onOpen: async (data, parent, firstButton, SettingType) => {
          let textUi = null;
          new SettingType(parent).addText((text) => {
            data.resultUi = text;
            text.setValue("" + (data.defaultValue ?? ""));
            text.inputEl.select();
            text.inputEl.parentElement.previousSibling.remove();
            text.inputEl.addEventListener("keypress", (e) => {
              if (e.key === "Enter") {
                firstButton.click();
              }
            });
            textUi = text.inputEl;
            return text;
          });
          if (data.suggestions?.length) {
            let suggestionsUi = document.createElement("datalist");
            suggestionsUi.id = "suggestionsUi";
            for (const suggestion of data.suggestions) {
              suggestionsUi.appendChild(new Option(suggestion));
            }
            textUi.parentNode.appendChild(suggestionsUi);
            textUi.setAttr("list", "suggestionsUi");
          }
        },
        onClose: async (data, resolveFnc, buttonId) => {
          resolveFnc(buttonId === "Ok" ? data.resultUi.getValue() : null);
        }
      }
    );
    this.PICK_DEFINITION = Object.freeze(
      {
        onOpen: async (data, parent, firstButton, SettingType) => {
          let result = false;
          new SettingType(parent).addDropdown((dropdown) => {
            data.resultUi = dropdown;
            let options = data.options;
            if (options === null || options === void 0) {
              result = true;
              return;
            }
            if (!Array.isArray(options)) {
              options = [options];
            }
            let defaultValue = parseInt(data.defaultValue ?? 0);
            if (isNaN(defaultValue)) {
              defaultValue = options.indexOf(data.defaultValue);
            }
            defaultValue = Math.clamp(defaultValue, 0, options.length - 1);
            dropdown.addOptions(options);
            dropdown.setValue(defaultValue || 0);
            if (isNaN(data.showCount)) {
              if (data.showCount.toLowerCase().startsWith("adaptive")) {
                const max = data.showCount.toLowerCase().match(/adaptive:([0-9]+)/)?.[1] || 20;
                data.showCount = Math.min(data.options.length, max);
              } else {
                data.showCount = 1;
              }
            }
            if (data.showCount > 1) {
              dropdown.selectEl.setAttr("size", data.showCount);
              dropdown.selectEl.classList.add("iscript_listSelect");
            }
            dropdown.selectEl.parentElement.previousSibling.remove();
            dropdown.selectEl.addEventListener("keypress", (e) => {
              if (e.key === "Enter") {
                firstButton.click();
              }
            });
            return dropdown;
          });
          return result;
        },
        onClose: async (data, resolveFnc, buttonId) => {
          resolveFnc(buttonId === "Ok" ? Number(data.resultUi.getValue()) : null);
        }
      }
    );
    this.modalEl.classList.add("iscript_popup");
  }
  static getInstance() {
    return this.getInstance_internal();
  }
  async alert(message, buttonLabel) {
    await this.alert_internal(message, buttonLabel);
  }
  async confirm(message, buttonLabels) {
    return await this.confirm_internal(message, buttonLabels);
  }
  async input(message, defaultValue, suggestions, buttonLabels) {
    return await this.input_internal(message, defaultValue, suggestions, buttonLabels);
  }
  async pick(message, options, defaultValue, showCount, buttonLabels) {
    return await this.pick_internal(message, options, defaultValue, showCount, buttonLabels);
  }
  async custom(message, definition, data, buttonLabels) {
    return await this.custom_internal(message, definition, data, buttonLabels);
  }
  onOpen() {
    this.onOpen_internal();
  }
  onClose() {
    this.onClose_internal();
  }
  static getInstance_internal() {
    if (!this._instance) {
      this._instance = new Popups();
    }
    return this._instance;
  }
  onButton() {
    const p = Popups.getInstance();
    p._clickedButtonId = this.dataset.id;
    p.close();
  }
  async alert_internal(message, buttonLabel) {
    return await this.custom(message, this.ALERT_DEFINITION, null, [buttonLabel]);
  }
  async confirm_internal(message, buttonLabels) {
    return await this.custom(message, this.CONFIRM_DEFINITION, null, buttonLabels);
  }
  async input_internal(message, defaultValue, suggestions, buttonLabels) {
    return await this.custom(
      message,
      this.INPUT_DEFINITION,
      { defaultValue, suggestions },
      buttonLabels
    );
  }
  async pick_internal(message, options, defaultValue, showCount, buttonLabels) {
    showCount ||= 1;
    return await this.custom(
      message,
      this.PICK_DEFINITION,
      { options, defaultValue, showCount },
      buttonLabels
    );
  }
  async custom_internal(message, definition, data, buttonLabels) {
    this._message = message ?? "";
    this._definition = definition || {};
    this._data = data || {};
    this._buttonLabels = buttonLabels || [];
    this._clickedButtonId = null;
    return await new Promise((resolve) => {
      this._resolve = resolve;
      this.open();
    });
  }
  async onOpen_internal() {
    let inputBlockerDimmer = document.getElementById("iscript_inputBlocker");
    if (inputBlockerDimmer) {
      inputBlockerDimmer.style.display = "none";
    }
    this.contentEl.setText("");
    this.titleEl.setText("");
    if (typeof this._message === "string") {
      this.titleEl.innerHTML = this._message.replaceAll("\n", "<br/>");
    } else if (this._message) {
      this.titleEl.innerHTML = this._message;
    }
    const typeSpecificUi = document.createElement("div");
    this.contentEl.appendChild(typeSpecificUi);
    let firstButton = null;
    const buttonsUi = new import_obsidian2.Setting(this.contentEl);
    buttonsUi.settingEl.style.padding = "0";
    const buttonIds = this._definition.buttonIds || ["Ok", "Cancel"];
    for (let i = 0; i < buttonIds.length; i++) {
      buttonsUi.addButton((button) => {
        button.setButtonText(this._buttonLabels[i] || buttonIds[i]).onClick(this.onButton.bind(button.buttonEl));
        button.buttonEl.dataset.id = buttonIds[i];
        if (!firstButton) {
          button.setCta();
          firstButton = button.buttonEl;
        }
      });
    }
    if (this._definition.onOpen) {
      if (await this._definition.onOpen(
        this._data,
        typeSpecificUi,
        firstButton,
        import_obsidian2.Setting,
        this._resolve
      )) {
        this._definition = {};
        this.close();
      }
    }
    let looper = setInterval(async () => {
      if (!this.contentEl.parentNode.parentNode.parentNode) {
        clearInterval(looper);
        if (this._definition.onClose) {
          await this._definition.onClose(
            this._data,
            this._resolve,
            this._clickedButtonId
          );
        }
        this._resolve(null);
      }
    }, CLOSE_CHECK_INTERVAL);
  }
  onClose_internal() {
    const inputBlockerDimmer = document.getElementById("iscript_inputBlocker");
    if (inputBlockerDimmer) {
      inputBlockerDimmer.style.display = "unset";
    }
  }
};

// ui_setting_helper.ts
var SettingUi_Helper;
((SettingUi_Helper2) => {
  async function deleteButtonClicked() {
    if (await Popups.getInstance().confirm("Confirm removing a " + this.typeTitle + ".")) {
      this.group.remove();
    }
  }
  SettingUi_Helper2.deleteButtonClicked = deleteButtonClicked;
  function upButtonClicked() {
    let p = this.group.parentElement;
    let index = Array.from(p.childNodes).indexOf(this.group);
    if (index === this.listOffset) {
      return;
    }
    p.insertBefore(p.childNodes[index], p.childNodes[index - 1]);
  }
  SettingUi_Helper2.upButtonClicked = upButtonClicked;
  function downButtonClicked() {
    let p = this.group.parentElement;
    let index = Array.from(p.childNodes).indexOf(this.group);
    if (index === p.childNodes.length - 1) {
      return;
    }
    index++;
    p.insertBefore(p.childNodes[index], p.childNodes[index - 1]);
  }
  SettingUi_Helper2.downButtonClicked = downButtonClicked;
})(SettingUi_Helper || (SettingUi_Helper = {}));

// LibraryImporter.ts
var import_obsidian5 = require("obsidian");

// ui_InputBlocker.ts
var InputBlocker;
((InputBlocker2) => {
  function setEnabled(value) {
    if (value) {
      if (document.getElementById("iscript_inputBlocker")) {
        return;
      }
      let blockerUi = document.createElement("div");
      blockerUi.id = "iscript_inputBlocker";
      blockerUi.classList.add("iscript_preFadein");
      document.getElementsByTagName("body")[0].prepend(blockerUi);
      window.getComputedStyle(blockerUi).opacity;
      blockerUi.classList.remove("iscript_preFadein");
      InlineScriptsPlugin.getInstance().inputDisabled = true;
    } else {
      let blockerUi = document.getElementById("iscript_inputBlocker");
      if (blockerUi) {
        blockerUi.remove();
      }
      InlineScriptsPlugin.getInstance().inputDisabled = false;
    }
  }
  InputBlocker2.setEnabled = setEnabled;
})(InputBlocker || (InputBlocker = {}));

// HelperFncs.ts
var import_obsidian4 = require("obsidian");

// ui_dragReorder.ts
var DragReorder = class {
  constructor(container, onDragged, dragScale) {
    this.preDragDistanceSqr = 200;
    this.container = null;
    this.items = null;
    this.dragged = null;
    this.downPoint = null;
    this.onDragged = null;
    dragScale ||= 0.5;
    this.onDragged = onDragged;
    this.container = container;
    container.classList.add("iscript_drag_container");
    const emSize = Number(window.getComputedStyle(container, null).getPropertyValue("font-size").replace("px", ""));
    this.preDragDistanceSqr = Math.pow(emSize, 2) * dragScale;
    this.items = [];
    for (let item of container.childNodes) {
      if (!item.classList) {
        continue;
      }
      this.items.push(item);
      item.classList.add("iscript_drag_item");
      item.addEventListener("pointerdown", (evt) => {
        this.downPoint = [evt.offsetX, evt.offsetY];
      });
      item.addEventListener("pointermove", (evt) => {
        if (this.dragged || !this.downPoint) {
          return;
        }
        const distance = Math.pow(this.downPoint[0] - evt.offsetX, 2) + Math.pow(this.downPoint[1] - evt.offsetY, 2);
        if (distance > this.preDragDistanceSqr) {
          this.initDrag(evt.target);
        }
      });
      item.addEventListener("pointerenter", (evt) => {
        if (this.dragged && evt.target !== this.dragged) {
          this.dragOver(evt.target);
        }
      });
      item.addEventListener("pointerout", (evt) => {
        if (this.dragged || !this.downPoint) {
          return;
        }
        this.initDrag(evt.target);
      });
      item.addEventListener(
        "gotpointercapture",
        (e) => e.target.releasePointerCapture(e.pointerId)
      );
    }
    document.addEventListener("pointerup", () => {
      if (this.downPoint) {
        this.downPoint = null;
      }
      if (this.dragged) {
        this.endDrag();
      }
    });
  }
  initDrag(item) {
    this.dragged = item;
    this.container.classList.add("iscript_drag_container_dragging");
    this.dragged.classList.add("iscript_drag_item_dragged");
    for (const item2 of this.items) {
      if (item2 === this.dragged) {
        continue;
      }
      item2.classList.add("iscript_drag_item_notDragged");
    }
  }
  dragOver(target) {
    for (const child of this.container.getElementsByClassName("iscript_drag_item")) {
      if (child === this.dragged) {
        this.dragged.parentNode.insertBefore(this.dragged, target);
        this.dragged.parentNode.insertBefore(target, this.dragged);
        break;
      } else if (child === target) {
        this.dragged.parentNode.insertBefore(this.dragged, target);
        break;
      }
    }
  }
  endDrag() {
    this.container.classList.remove("iscript_drag_container_dragging");
    this.dragged.classList.remove("iscript_drag_item_dragged");
    for (const item of this.items) {
      item.classList.remove("iscript_drag_item_notDragged");
    }
    this.dragged = null;
    this.onDragged?.();
  }
};

// ExternalRunner.ts
var import_obsidian3 = require("obsidian");
var exec = null;
var ExternalRunner;
((ExternalRunner2) => {
  async function run(command, failSilently, dontFixSlashes) {
    if (import_obsidian3.Platform.isMobile) {
      UserNotifier.run(
        {
          popupMessage: 'Unauthorized "runExternal" call',
          consoleMessage: 'Unauthorized "runExternal" call (not available on mobile):\nrunExternal("' + command + '")',
          messageType: "RUNEXTERNAL-ERROR",
          consoleHasDetails: true
        }
      );
      return null;
    } else if (!exec) {
      try {
        exec = require("util").promisify(require("child_process").exec);
      } catch (e) {
        console.error('External runner failed to load "child_process": ' + e);
      }
    }
    const plugin = InlineScriptsPlugin.getInstance();
    if (!plugin.settings.allowExternal) {
      UserNotifier.run(
        {
          popupMessage: 'Unauthorized "runExternal" call',
          consoleMessage: 'Unauthorized "runExternal" call (disallowed by user):\nrunExternal("' + command + '")\nNOTE: User can allow runExternal by turning on "Allow external" in the settings.',
          messageType: "RUNEXTERNAL-ERROR",
          consoleHasDetails: true
        }
      );
      return null;
    }
    if (!command) {
      return null;
    }
    if (navigator.appVersion.includes("Windows") && !dontFixSlashes) {
      command = command.replaceAll("/", "\\");
    }
    const vaultDir = plugin.app.fileManager.vault.adapter.basePath;
    try {
      const result = (await exec(command, { cwd: vaultDir })).stdout;
      return (result + "").replaceAll("\r", "");
    } catch (e) {
      if (!failSilently) {
        UserNotifier.run(
          {
            popupMessage: 'Failed "runExternal" call',
            consoleMessage: 'Failed "runExternal" call:\ncurDir: ' + vaultDir + "\n" + e.message,
            messageType: "RUNEXTERNAL-ERROR",
            consoleHasDetails: true
          }
        );
      }
      return null;
    }
  }
  ExternalRunner2.run = run;
})(ExternalRunner || (ExternalRunner = {}));

// HelperFncs.ts
(function(n, t) {
  "use strict";
  var i = "!important;", r = "position:absolute" + i + "visibility:hidden" + i + "width:1em" + i + "font-size:1em" + i + "padding:0" + i;
  window.getEmPixels = function(u) {
    var f, e, o;
    return u || (u = f = n.createElement("body"), f.style.cssText = "font-size:1em" + i, t.insertBefore(f, n.body)), e = n.createElement("i"), e.style.cssText = r, u.appendChild(e), o = e.clientWidth, f ? t.removeChild(f) : u.removeChild(e), o;
  };
})(document, document.documentElement);
var HelperFncs;
((HelperFncs2) => {
  function staticConstructor() {
    confirmObjectPath("_inlineScripts.inlineScripts.HelperFncs");
    Object.assign(
      window._inlineScripts.inlineScripts.HelperFncs,
      {
        runExternal: ExternalRunner.run,
        print: UserNotifier.getFunction_print(),
        popups: Popups.getInstance(),
        confirmObjectPath,
        getLeavesForFile,
        addToNote,
        parseMarkdown,
        callEventListenerCollection,
        addCss,
        removeCss,
        ItemView: import_obsidian4.ItemView,
        addIcon: import_obsidian4.addIcon,
        DragReorder,
        unblock,
        expFormat,
        expUnformat,
        getSettings,
        registerView,
        fileWrite,
        asyncFilter,
        asyncMap,
        asyncForEach
      }
    );
  }
  HelperFncs2.staticConstructor = staticConstructor;
  function versionCompare(version1, version2) {
    return versionCompare_internal(version1, version2);
  }
  HelperFncs2.versionCompare = versionCompare;
  async function fileWrite(filepath, content) {
    await fileWrite_internal(filepath, content);
  }
  HelperFncs2.fileWrite = fileWrite;
  function confirmObjectPath(path, leaf) {
    confirmObjectPath_internal(path, leaf);
  }
  HelperFncs2.confirmObjectPath = confirmObjectPath;
  function getLeavesForFile(file) {
    return getLeavesForFile_internal(file);
  }
  HelperFncs2.getLeavesForFile = getLeavesForFile;
  async function addToNote(toAdd, targetPosition, path) {
    await addToNote_internal(toAdd, targetPosition, path);
  }
  HelperFncs2.addToNote = addToNote;
  function parseMarkdown(md) {
    return parseMarkdown_internal(md);
  }
  HelperFncs2.parseMarkdown = parseMarkdown;
  async function callEventListenerCollection(title, collection, parameters, onReturn) {
    await callEventListenerCollection_internal(title, collection, parameters, onReturn);
  }
  HelperFncs2.callEventListenerCollection = callEventListenerCollection;
  function addCss(id, css) {
    addCss_internal(id, css);
  }
  HelperFncs2.addCss = addCss;
  function removeCss(id) {
    removeCss_internal(id);
  }
  HelperFncs2.removeCss = removeCss;
  function unblock() {
    InputBlocker.setEnabled(false);
  }
  HelperFncs2.unblock = unblock;
  function expFormat(expansion, skipPrefix, skipLinePrefix, skipSuffix) {
    return expFormat_internal(expansion, skipPrefix, skipLinePrefix, skipSuffix);
  }
  HelperFncs2.expFormat = expFormat;
  function expUnformat(expansion, skipPrefix, skipLinePrefix, skipSuffix) {
    return expUnformat_internal(expansion, skipPrefix, skipLinePrefix, skipSuffix);
  }
  HelperFncs2.expUnformat = expUnformat;
  function getSettings() {
    return Object.assign({}, InlineScriptsPlugin.getInstance().settings);
  }
  HelperFncs2.getSettings = getSettings;
  function registerView(id, viewCreator) {
    return InlineScriptsPlugin.getInstance().registerView(id, viewCreator);
  }
  HelperFncs2.registerView = registerView;
  async function asyncFilter(arr, fnc) {
    return await asyncFilter_internal(arr, fnc);
  }
  HelperFncs2.asyncFilter = asyncFilter;
  async function asyncMap(arr, fnc) {
    return await asyncMap_internal(arr, fnc);
  }
  HelperFncs2.asyncMap = asyncMap;
  async function asyncForEach(arr, fnc) {
    return await asyncForEach_internal(arr, fnc);
  }
  HelperFncs2.asyncForEach = asyncForEach;
  function versionCompare_internal(version1, version2) {
    const convert = (v) => v.split(".").map((x) => x.padStart(5, "0")).join(".");
    version1 = convert(version1);
    version2 = convert(version2);
    return version1.localeCompare(version2);
  }
  ;
  async function fileWrite_internal(filepath, content) {
    const plugin = InlineScriptsPlugin.getInstance();
    const file = plugin.app.vault.fileMap[filepath];
    if (file) {
      await plugin.app.vault.modify(file, content);
    } else {
      await plugin.app.vault.create(filepath, content);
    }
  }
  function confirmObjectPath_internal(path, leaf) {
    const pathChain = path.split(".");
    let parent = window;
    for (let i = 0; i < pathChain.length - 1; i++) {
      parent = parent[pathChain[i]] ||= {};
    }
    parent[pathChain[pathChain.length - 1]] ||= leaf === void 0 ? {} : leaf;
  }
  function getLeavesForFile_internal(file) {
    let result = [];
    for (const leaf of InlineScriptsPlugin.getInstance().app.workspace.getLeavesOfType("markdown")) {
      if (leaf.view?.file === file) {
        result.push(leaf);
      }
    }
    return result;
  }
  async function addToNote_internal(toAdd, targetPosition, path) {
    targetPosition ||= { start: Number.MAX_SAFE_INTEGER, end: Number.MAX_SAFE_INTEGER };
    const plugin = InlineScriptsPlugin.getInstance();
    const file = !path ? plugin.app.workspace.getActiveFile() : plugin.app.vault.fileMap[path];
    if (!file || file.children) {
      return;
    }
    let isNoteActive = !path || file === plugin.app.workspace.getActiveFile();
    const leaves = HelperFncs2.getLeavesForFile(file);
    const currentMode = leaves[0]?.view?.currentMode;
    if (isNoteActive && currentMode?.type === "source") {
      plugin.app.workspace.setActiveLeaf(leaves[0], false, true);
    }
    if (!toAdd) {
      return;
    }
    if (Array.isArray(toAdd)) {
      toAdd = toAdd.join("");
    }
    if (!leaves.length) {
      let content = await plugin.app.vault.cachedRead(file);
      content = content.slice(0, targetPosition.start) + toAdd + content.slice(targetPosition.end);
      await plugin.app.vault.modify(file, content);
    } else if (currentMode.type === "source") {
      const inputDisabled = plugin.inputDisabled;
      plugin.inputDisabled = false;
      let content = leaves[0].view.editor.getValue();
      const oldContentSize = content.length;
      content = content.slice(0, targetPosition.start) + toAdd + content.slice(targetPosition.end);
      await leaves[0].view.editor.setValue(content);
      plugin.inputDisabled = inputDisabled;
      if (isNoteActive && targetPosition.start >= oldContentSize) {
        const scroller = currentMode?.contentContainerEl?.parentElement;
        if (scroller) {
          const oldScrollTop = scroller.scrollTop;
          leaves[0].view.editor.setSelection({ line: Number.MAX_SAFE_INTEGER, ch: 0 });
          setTimeout(() => {
            if (scroller.scrollTop != oldScrollTop) {
              scroller.scrollTop += window.getEmPixels(scroller) * 2;
            }
          }, 100);
        } else {
          leaves[0].view.editor.setSelection({ line: Number.MAX_SAFE_INTEGER, ch: 0 });
        }
      }
    } else {
      let content = leaves[0].view.data;
      const oldContentSize = content.length;
      content = content.slice(0, targetPosition.start) + toAdd + content.slice(targetPosition.end);
      await plugin.app.vault.modify(file, content);
      if (isNoteActive && targetPosition.start >= oldContentSize) {
        const scroller = currentMode.containerEl.childNodes[0];
        const scrollerChild = scroller.childNodes[0];
        const paddingBottom = scrollerChild.style["padding-bottom"];
        scrollerChild.style["padding-bottom"] = 0;
        setTimeout(() => {
          scroller.scrollTop = scroller.scrollHeight;
          scrollerChild.style["padding-bottom"] = paddingBottom;
        }, 100);
      }
    }
  }
  function parseMarkdown_internal(md) {
    const ui = document.createElement("div");
    import_obsidian4.MarkdownRenderer.renderMarkdown(md, ui, "", null);
    let result = ui.innerHTML;
    if (result.startsWith("<p>") && result.endsWith("</p>")) {
      result = result.slice(3, -4);
    }
    return result;
  }
  async function callEventListenerCollection_internal(title, collection, parameters, onReturn) {
    if (!collection) {
      return;
    }
    let toCall = Object.keys(collection).map((v) => {
      return { key: v, fnc: collection[v] };
    });
    const sfileIndices = window._inlineScripts.inlineScripts.sfileIndices;
    for (const toCallItem of toCall) {
      if (sfileIndices[toCallItem.key]) {
        toCallItem.key = (sfileIndices[toCallItem.key] + "").padStart(3, "0") + toCallItem.key;
      }
    }
    toCall = toCall.sort((lhs, rhs) => {
      return lhs.key.localeCompare(rhs.key);
    }).map((v) => v.fnc);
    for (const fnc of toCall) {
      if (typeof fnc === "function") {
        const result = await fnc(parameters);
        if (result != void 0 && onReturn) {
          onReturn(result);
        }
      } else {
        console.warn('Non-function in collection "' + title + '": ' + fnc);
      }
    }
  }
  function addCss_internal(id, css) {
    id = id + "_css";
    let e = document.getElementById(id);
    if (!e) {
      e = document.createElement("style");
      e.id = id;
      document.head.appendChild(e);
    }
    e.innerText = css;
  }
  function removeCss_internal(id) {
    id = id + "_css";
    const e = document.getElementById(id);
    e?.remove();
  }
  function expFormat_internal(expansion, skipPrefix, skipLinePrefix, skipSuffix) {
    function unescapeText(src) {
      return src.replaceAll("\\n", "\n").replaceAll("\\t", "	").replaceAll('\\"', '"');
    }
    let result = Array.isArray(expansion) ? expansion : [expansion];
    const settings = InlineScriptsPlugin.getInstance().settings;
    if (!skipLinePrefix) {
      const linePrefix = unescapeText(settings.expansionLinePrefix);
      result[0] = linePrefix + result[0];
      for (let i = 0; i < result.length; i++) {
        if (!result[i].replaceAll) {
          continue;
        }
        result[i] = result[i].replaceAll("\n", "\n" + linePrefix);
      }
    }
    if (!skipPrefix) {
      const prefix = unescapeText(settings.expansionPrefix);
      result[0] = prefix + result[0];
    }
    if (!skipSuffix) {
      const suffix = unescapeText(settings.expansionSuffix);
      result[result.length - 1] = result[result.length - 1] + suffix;
    }
    return Array.isArray(expansion) ? result : result[0];
  }
  function expUnformat_internal(expansion, skipPrefix, skipLinePrefix, skipSuffix) {
    function unescapeText(src) {
      return src.replaceAll("\\n", "\n").replaceAll("\\t", "	").replaceAll('\\"', '"');
    }
    let result = Array.isArray(expansion) ? expansion : [expansion];
    const settings = InlineScriptsPlugin.getInstance().settings;
    if (!skipPrefix) {
      const prefix = unescapeText(settings.expansionPrefix);
      result[0] = result[0].replace(new RegExp("^" + prefix), "");
    }
    if (!skipSuffix) {
      const suffix = unescapeText(settings.expansionSuffix);
      result[result.length - 1] = result[result.length - 1].replace(new RegExp(suffix + "$"), "");
    }
    if (!skipLinePrefix) {
      const linePrefix = unescapeText(settings.expansionLinePrefix);
      result[0] = result[0].replace(new RegExp("^" + linePrefix), "");
      for (let i = 0; i < result.length; i++) {
        if (!result[i].replaceAll) {
          continue;
        }
        result[i] = result[i].replaceAll("\n" + linePrefix, "\n");
      }
    }
    return Array.isArray(expansion) ? result : result[0];
  }
  async function asyncFilter_internal(arr, fnc) {
    const predicateResults = await Promise.all(arr.map(fnc));
    return arr.filter((v, i) => predicateResults[i]);
  }
  async function asyncMap_internal(arr, fnc) {
    return await Promise.all(arr.map(fnc));
  }
  async function asyncForEach_internal(arr, fnc) {
    for (let i = 0; i < arr.length; i++) {
      await fnc(arr[i], i, arr);
    }
  }
})(HelperFncs || (HelperFncs = {}));

// LibraryImporter.ts
var REGEX_LIBRARY_README_SHORTCUT_FILE = /### ([_a-zA-Z0-9]+.sfile)\n(_\(disabled by default)?/g;
var DEFAULT_REMOTE_ADDRESS = "https://raw.githubusercontent.com/jon-heard/obsidian-inline-scripts-library/main";
var DEFAULT_LOCAL_ADDRESS = "support/inlineScripts";
var FILE_README = "README.md";
var PRE_REFACTOR_SFILES = ["tejs_state", "tejs_lists", "tejs_mythicv2", "tejs_mythicgme", "tejs_une", "tejs_adventurecrafter", "tejs_rpgtools", "tejs_clips", "tejs_arrows", "tejs_lipsum", "tejs_support"];
var LibraryImporter;
((LibraryImporter2) => {
  async function run() {
    return await run_internal();
  }
  LibraryImporter2.run = run;
  async function run_internal(useCustomSource) {
    const plugin = InlineScriptsPlugin.getInstance();
    InputBlocker.setEnabled(true);
    let addressRemote = DEFAULT_REMOTE_ADDRESS;
    if (useCustomSource) {
      addressRemote = await Popups.getInstance().input(
        "What is the library source?",
        DEFAULT_REMOTE_ADDRESS
      );
      if (addressRemote === null) {
        InputBlocker.setEnabled(false);
        return false;
      }
    }
    let readmeContent;
    try {
      readmeContent = await window.request({
        url: addressRemote + "/" + FILE_README,
        method: "GET",
        headers: { "Cache-Control": "no-cache" }
      });
    } catch (e) {
      UserNotifier.run({
        popupMessage: "Library importing failed.\nUnable to connect.",
        consoleMessage: "Library importing failed.",
        messageType: e.message
      });
      InputBlocker.setEnabled(false);
      return false;
    }
    readmeContent = readmeContent.replaceAll("\r", "");
    let libShortcutFiles = [];
    let disabledShortcutFiles = [];
    for (const match of readmeContent.matchAll(REGEX_LIBRARY_README_SHORTCUT_FILE)) {
      libShortcutFiles.push(match[1]);
      if (match[2]) {
        disabledShortcutFiles.push(match[1]);
      }
    }
    const libSFiles_currentAndPrerefactor = libShortcutFiles.concat(PRE_REFACTOR_SFILES);
    const sfNoteAddresses = SettingUi_ShortcutFiles.getContents().shortcutFiles.map((f) => f.address);
    const sfNoteNames = sfNoteAddresses.map((s) => s.slice(s.lastIndexOf("/") + 1, -3));
    const sfNotePaths = sfNoteAddresses.map((s, i) => {
      return s.slice(0, s.length - sfNoteNames[i].length - 4);
    });
    let commonPath = null;
    for (let i = 0; i < sfNoteAddresses.length; i++) {
      if (libSFiles_currentAndPrerefactor.includes(sfNoteNames[i])) {
        if (commonPath === null) {
          commonPath = sfNotePaths[i];
        } else {
          if (sfNotePaths[i] !== commonPath) {
            commonPath = null;
            break;
          }
        }
      }
    }
    const libDstSuggestions = Object.keys(plugin.app.vault.fileMap).filter((v) => plugin.app.vault.fileMap[v].children).filter((v) => v !== "/");
    let libraryDestinationPath = await Popups.getInstance().input(
      "What path should the library be placed in?",
      commonPath || DEFAULT_LOCAL_ADDRESS,
      libDstSuggestions
    );
    if (libraryDestinationPath === null) {
      InputBlocker.setEnabled(false);
      return false;
    }
    if (libraryDestinationPath.trim().toLowerCase() === "customlibsrc") {
      return run_internal(true);
    }
    libraryDestinationPath = (0, import_obsidian5.normalizePath)(libraryDestinationPath);
    disabledShortcutFiles = disabledShortcutFiles.map((v) => libraryDestinationPath + "/" + v + ".md");
    if (!plugin.app.vault.fileMap.hasOwnProperty(libraryDestinationPath)) {
      await plugin.app.vault.createFolder(libraryDestinationPath);
    }
    for (const libShortcutFile of libShortcutFiles) {
      const content = await window.request({
        url: addressRemote + "/" + libShortcutFile + ".md",
        method: "GET",
        headers: { "Cache-Control": "no-cache" }
      });
      const filename = libraryDestinationPath + "/" + libShortcutFile + ".md";
      await HelperFncs.fileWrite(filename, content);
    }
    for (let i = 0; i < sfNoteAddresses.length; i++) {
      if (PRE_REFACTOR_SFILES.includes(sfNoteNames[i])) {
        await plugin.app.vault.delete(plugin.app.vault.fileMap[sfNoteAddresses[i]]);
      }
    }
    {
      const libVersion = readmeContent.match(/# Version (.*)/)[1] || "";
      const filename = libraryDestinationPath + "/\u039E_libraryVersion.md";
      await HelperFncs.fileWrite(filename, libVersion);
    }
    plugin.settings.shortcutFiles = SettingUi_ShortcutFiles.getContents().shortcutFiles;
    for (const libShortcutFile of libSFiles_currentAndPrerefactor) {
      const shortcutFileAddresses = plugin.settings.shortcutFiles.map((f) => f.address);
      const libAddress = libraryDestinationPath + "/" + libShortcutFile + ".md";
      const index = shortcutFileAddresses.indexOf(libAddress);
      if (index >= 0) {
        if (!plugin.settings.shortcutFiles[index].enabled) {
          disabledShortcutFiles.push(libAddress);
        }
        plugin.settings.shortcutFiles.splice(index, 1);
      }
    }
    for (const libShortcutFile of libShortcutFiles) {
      const address = libraryDestinationPath + "/" + libShortcutFile + ".md";
      plugin.settings.shortcutFiles.push(
        {
          enabled: !disabledShortcutFiles.includes(address),
          address
        }
      );
    }
    InlineScriptsPlugin.getInstance().settingsUi.display();
    InputBlocker.setEnabled(false);
    return true;
  }
})(LibraryImporter || (LibraryImporter = {}));

// ui_setting_shortcutFiles.ts
var SettingUi_ShortcutFiles = class {
  static create(parent, settings, app2) {
    return this.create_internal(parent, settings, app2);
  }
  static getContents() {
    return this.getContents_internal();
  }
  static create_internal(parent, settings, app2) {
    this._vaultFiles = [];
    for (const key in app2.vault.fileMap) {
      if (key.endsWith(".md")) {
        this._vaultFiles.push(key.slice(0, -3));
      }
    }
    new import_obsidian6.Setting(parent).setName("Shortcut-files").setDesc("Addresses of notes containing shortcut-file content.").addButton((button) => {
      return button.setButtonText("Add shortcut-file").setClass("iscript_spacedUi").onClick(() => this.addShortcutFileUi(app2));
    }).addButton((button) => {
      return button.setButtonText("Import full library").setClass("iscript_spacedUi").onClick(async () => {
        if (await LibraryImporter.run()) {
          document.getElementById("alert_libraryUpdates").toggleClass("iscript_hidden", true);
        }
      });
    });
    this._shortcutFileUis = parent.createEl("div", { cls: "iscript_shortcutFiles" });
    this._shortcutFileUis.createEl("div", {
      text: "Red means the file does not exist.",
      cls: "setting-item-description iscript_extraMessage iscript_onSiblings"
    });
    for (const shortcutFile of settings.shortcutFiles) {
      this.addShortcutFileUi(app2, shortcutFile);
    }
  }
  static getContents_internal() {
    let result = [];
    for (const shortcutFileUi of this._shortcutFileUis.childNodes) {
      if (shortcutFileUi.classList.contains("iscript_shortcutFile") && shortcutFileUi.childNodes[1].value) {
        result.push(
          {
            enabled: shortcutFileUi.childNodes[0].classList.contains("is-enabled"),
            address: (0, import_obsidian6.normalizePath)(shortcutFileUi.childNodes[1].value + ".md")
          }
        );
      }
    }
    return { shortcutFiles: result };
  }
  static addShortcutFileUi(app2, shortcutFile) {
    let fileListUiId = "fileList" + this._shortcutFileUis.childNodes.length;
    let g = this._shortcutFileUis.createEl("div", { cls: "iscript_shortcutFile" });
    let e = g.createEl("div", { cls: "checkbox-container iscript_toggle" });
    e.toggleClass("is-enabled", shortcutFile ? shortcutFile.enabled : true);
    e.addEventListener("click", function() {
      this.classList.toggle("is-enabled");
    });
    e = g.createEl("input", { cls: "iscript_shortcutFileAddress" });
    e.setAttr("type", "text");
    e.setAttr("placeholder", "Filename");
    e.setAttr("list", fileListUiId);
    e.settings = this;
    e.addEventListener("input", function() {
      const isBadInput = this.value && !this.settings._vaultFiles.contains(this.value);
      this.toggleClass("iscript_badInput", isBadInput);
    });
    if (shortcutFile) {
      e.setAttr("value", shortcutFile.address.slice(0, -3));
    }
    e.dispatchEvent(new Event("input"));
    e = g.createEl("datalist");
    e.id = fileListUiId;
    for (const file of this._vaultFiles) {
      e.createEl("option").value = file;
    }
    e = g.createEl("button", { cls: "iscript_upButton iscript_spacedUi" });
    e.group = g;
    e.onclick = SettingUi_Helper.upButtonClicked;
    e.listOffset = 1;
    e = g.createEl("button", { cls: "iscript_downButton iscript_spacedUi" });
    e.group = g;
    e.onclick = SettingUi_Helper.downButtonClicked;
    e = g.createEl("button", { cls: "iscript_deleteButton iscript_spacedUi" });
    e.group = g;
    e.onclick = SettingUi_Helper.deleteButtonClicked;
    e.app = app2;
    e.typeTitle = "shortcut-file";
  }
};

// ui_setting_shortcuts.ts
var import_obsidian8 = require("obsidian");

// AutoAsyncWrapper.ts
var REGEX_AWAIT_TEMPLATE = "(?:~1~)[s]*\\(";
var REGEX_ASYNC = /function[\s]*\(/g;
var UNNESTABLE_BLOCK_PAIRS = Object.freeze(
  {
    '"': '"',
    "'": "'",
    "`": "`"
  }
);
var NESTABLE_BLOCK_PAIRS = Object.freeze(
  {
    "(": ")",
    "[": "]",
    "{": "}"
  }
);
var AutoAsyncWrapper;
((AutoAsyncWrapper2) => {
  function initialize(toAwaitWrap) {
    _regex_await = new RegExp(REGEX_AWAIT_TEMPLATE.replace("~1~", toAwaitWrap.join("|")), "g");
  }
  AutoAsyncWrapper2.initialize = initialize;
  function run(source) {
    return run_internal(source);
  }
  AutoAsyncWrapper2.run = run;
  let _regex_await;
  function run_internal(source) {
    source = addPrefixToAllInstances(source, "async ", REGEX_ASYNC);
    source = wrapPrefixToAllInstances(source, "await ", _regex_await);
    return source;
  }
  function addPrefixToAllInstances(source, prefix, regex_searchToWrap) {
    let matchPositions = [];
    for (const match of source.matchAll(regex_searchToWrap)) {
      matchPositions.push({ start: match.index, end: match.index + match[0].length });
    }
    matchPositions.reverse();
    for (const matchPosition of matchPositions) {
      source = source.slice(0, matchPosition.start) + prefix + source.slice(matchPosition.start);
    }
    return source;
  }
  function wrapPrefixToAllInstances(source, prefix, regex_searchToWrap) {
    let matchPositions = [];
    for (const match of source.matchAll(regex_searchToWrap)) {
      matchPositions.push({ start: match.index, end: match.index + match[0].length });
    }
    matchPositions.reverse();
    for (const matchPosition of matchPositions) {
      const stack = [")"];
      let index = matchPosition.end;
      const sLength = source.length;
      let isNestable = true;
      while (index < sLength) {
        if (source[index] === stack[stack.length - 1] && source[index - 1] != "\\") {
          stack.pop();
          isNestable = true;
          if (!stack.length) {
            break;
          }
        } else if (isNestable) {
          let pairing = UNNESTABLE_BLOCK_PAIRS[source[index]];
          if (pairing) {
            stack.push(pairing);
            isNestable = false;
          } else {
            pairing = NESTABLE_BLOCK_PAIRS[source[index]];
            if (pairing) {
              stack.push(pairing);
            }
          }
        }
        index++;
      }
      source = source.slice(0, matchPosition.start) + "(" + prefix + source.slice(matchPosition.start, index) + ")" + source.slice(index);
    }
    return source;
  }
})(AutoAsyncWrapper || (AutoAsyncWrapper = {}));

// ShortcutExpander.ts
var import_acorn = __toESM(require_acorn());
var AsyncFunction = Object.getPrototypeOf(async function() {
}).constructor;
var ShortcutExpander = class {
  static staticConstructor() {
    this.staticConstructor_internal();
  }
  static async expand(shortcutText, failSilently, expansionInfo, parameterData) {
    return await this.expand_internal(shortcutText, failSilently, expansionInfo, parameterData);
  }
  static async runExpansionScript(expansionScript, failSilently, expansionInfo) {
    return await this.runExpansionScript_internal(expansionScript, failSilently, expansionInfo);
  }
  static staticConstructor_internal() {
    AutoAsyncWrapper.initialize([
      "expand",
      "popupss*.s*alert",
      "popupss*.s*confirm",
      "popupss*.s*input",
      "popupss*.s*pick",
      "popupss*.s*custom"
    ]);
    this._boundExpand = this.expand.bind(this);
    HelperFncs.confirmObjectPath("_inlineScripts.inlineScripts.HelperFncs");
    window._inlineScripts.inlineScripts.HelperFncs.expand = this._boundExpand;
  }
  static async expand_internal(shortcutText, failSilently, expansionInfo, parameterData) {
    if (!shortcutText) {
      return;
    }
    expansionInfo = Object.assign(
      {
        isUserTriggered: false,
        line: shortcutText,
        inputStart: 0,
        inputEnd: shortcutText.length,
        shortcutText,
        prefix: "",
        suffix: ""
      },
      expansionInfo
    );
    let foundMatch = false;
    const matches = [...shortcutText.matchAll(/\?\?\?/g)];
    let replacements = [];
    for (let i = 0; i < matches.length; i++) {
      const caption = parameterData?.[i]?.caption ?? "Parameter #" + (i + 1);
      const value = parameterData?.[i]?.value || "";
      const replacement = await Popups.getInstance().input(caption, value);
      if (replacement === null) {
        return null;
      }
      replacements.push(replacement);
    }
    for (let i = matches.length - 1; i >= 0; i--) {
      shortcutText = shortcutText.slice(0, matches[i].index) + replacements[i] + shortcutText.slice(matches[i].index + 3);
    }
    let expansionScript = "";
    for (const shortcut of InlineScriptsPlugin.getInstance().shortcuts) {
      if ((!shortcut.test || shortcut.test.source === "(?:)") && !shortcut.expansion) {
        expansionScript = "";
        continue;
      }
      const matchInfo = shortcutText.match(shortcut.test);
      if (!matchInfo) {
        continue;
      }
      for (let k = 1; k < matchInfo.length; k++) {
        expansionScript += "let $" + k + ' = "' + matchInfo[k].replaceAll("\\", "\\\\").replaceAll('"', '\\"') + '";\n';
      }
      expansionScript += shortcut.expansion;
      if (shortcut.test.source !== "(?:)") {
        foundMatch = true;
        break;
      } else {
        expansionScript += "\n";
      }
    }
    let expansionText = null;
    if (foundMatch) {
      try {
        expansionText = await this.runExpansionScript(
          expansionScript,
          failSilently,
          expansionInfo
        );
      } catch (e) {
        if (!failSilently) {
          throw e;
        }
      }
    }
    expansionInfo.expansionText = expansionText;
    if (expansionText === null) {
      if (!failSilently) {
        UserNotifier.run(
          {
            message: 'Shortcut unidentified:\n"' + shortcutText + '"',
            messageLevel: "warn"
          }
        );
      }
    } else if (expansionInfo.isUserTriggered && !expansionInfo.cancel && window._inlineScripts?.inlineScripts?.listeners?.onExpansion) {
      let replacementInput = null;
      HelperFncs.callEventListenerCollection(
        "inlineScripts.onExpansion",
        window._inlineScripts.inlineScripts.listeners.onExpansion,
        expansionInfo,
        (result) => {
          if (typeof result === "string") {
            replacementInput = result;
          }
        }
      );
      if (typeof replacementInput === "string") {
        return this.expand(replacementInput, false);
      }
    }
    if (expansionInfo.cancel) {
      expansionText = null;
    }
    return expansionText;
  }
  static async runExpansionScript_internal(expansionScript, failSilently, expansionInfo) {
    expansionInfo = expansionInfo || { isUserTriggered: false };
    expansionInfo.cancel = false;
    expansionScript = AutoAsyncWrapper.run(expansionScript);
    let errorPosition = null;
    try {
      import_acorn.Parser.parse(
        "(async function(){\n" + expansionScript + "\n})",
        { ecmaVersion: 2021 }
      );
    } catch (e) {
      errorPosition = {
        line: e.loc.line - 1,
        column: e.loc.column + 1
      };
    }
    if (failSilently && errorPosition) {
      throw null;
    }
    try {
      return await new AsyncFunction(
        "expand",
        "runExternal",
        "print",
        "expansionInfo",
        "popups",
        "expFormat",
        "expUnformat",
        expansionScript
      )(
        this._boundExpand,
        ExternalRunner.run,
        UserNotifier.getFunction_print(),
        expansionInfo,
        Popups.getInstance(),
        HelperFncs.expFormat,
        HelperFncs.expUnformat
      ) ?? "";
    } catch (e) {
      if (failSilently) {
        throw null;
      }
      if (!errorPosition && e?.stack) {
        let match = e.stack.split("\n")[1].match(/([0-9]+):([0-9]+)/);
        if (match) {
          errorPosition = { line: Number(match[1]) - 2, column: Number(match[2]) };
        }
      }
      this.handleExpansionError(
        expansionScript,
        e?.message || "Un-listed error",
        errorPosition,
        expansionInfo?.shortcutText
      );
      throw null;
    }
  }
  static handleExpansionError(expansionScript, message, position, shortcutText) {
    expansionScript = expansionScript.replaceAll("	", "    ");
    let positionText = "\nline,column: ?,?";
    let expansionText = "";
    if (position) {
      let expansionLines = expansionScript.split("\n");
      for (let i = 0; i < expansionLines.length; i++) {
        expansionLines[i] = String(i + 1).padStart(4, "0") + " " + expansionLines[i];
      }
      expansionLines.splice(position.line, 0, "-".repeat(position.column + 4) + "^");
      expansionLines.splice(position.line - 1, 0, "-".repeat(position.column + 4) + "v");
      positionText = "\nline,column: " + position.line + "," + position.column;
      expansionText = "\n" + "\u2500".repeat(20) + "\n" + expansionLines.join("\n");
    }
    const errorMessage = message + positionText + '\nshortcut-text: "' + (shortcutText ?? "") + '"' + expansionText;
    UserNotifier.run(
      {
        popupMessage: "Shortcut expansion issues.",
        consoleMessage: errorMessage,
        messageType: "SHORTCUT-EXPANSION-ERROR",
        consoleHasDetails: true
      }
    );
    if (window._inlineScripts?.inlineScripts?.listeners?.onError) {
      HelperFncs.callEventListenerCollection(
        "inlineScripts.onError",
        window._inlineScripts.inlineScripts.listeners.onError,
        errorMessage
      );
    }
  }
};

// ui_ButtonView.ts
var import_obsidian7 = require("obsidian");
var SFILE_BUTTON_PARAMETER_CAPTION = "Enter a value for\n<b>%1</b>\n<i>%2</i>\n";
var SFILE_GROUP_PREFIX = "[sfile] ";
var BUTTON_VIEW_STATES = {
  normal: {
    prefix: "",
    onClick: async (buttonUi) => {
      const buttonDefinition = ButtonView.getInstance().getButtonGroup().buttons[buttonUi.dataset.index];
      const expansion = await ShortcutExpander.expand(
        buttonDefinition.shortcut,
        false,
        { isUserTriggered: true },
        buttonDefinition.parameterData
      );
      HelperFncs.addToNote(expansion);
    }
  },
  help: {
    prefix: "\u2754\xA0\xA0\xA0",
    onClick: async (buttonUi) => {
      const buttonDefinition = ButtonView.getInstance().getButtonGroup().buttons[buttonUi.dataset.index];
      ButtonView.getInstance().helpUi.innerHTML = buttonDefinition.help ? "<b>" + buttonDefinition.display.replaceAll("<", "&lt;") + "</b><br/>" + HelperFncs.parseMarkdown(buttonDefinition.help) : "";
    },
    onStateStart: () => {
      const helpUi = ButtonView.getInstance().helpUi;
      helpUi.innerText = "";
      ButtonView.getInstance().helpUi.style.display = "block";
    },
    onStateEnd: () => {
      const helpUi = ButtonView.getInstance().helpUi;
      helpUi.style.display = "none";
    }
  },
  delete: {
    prefix: "\u2716\xA0\xA0\xA0",
    onClick: async (buttonUi) => {
      const buttonTitle = buttonUi.innerText.slice(3);
      if (!await Popups.getInstance().confirm(
        'Confirm removing the shortcut button "' + buttonTitle + '"'
      )) {
        return;
      }
      buttonUi.remove();
    },
    onStateEnd: () => {
      ButtonView.getInstance().refreshSettingsFromUi();
    }
  },
  edit: {
    prefix: "\u2699\xA0\xA0\xA0",
    onClick: async (buttonUi) => {
      ButtonView.getInstance().toggleState("normal");
      const buttonDefinition = ButtonView.getInstance().getButtonGroup().buttons[buttonUi.dataset.index];
      await Popups.getInstance().custom(
        "Modify this button",
        POPUP_DEFINITION_BUTTON,
        { definition: buttonDefinition }
      );
    }
  },
  reorder: {
    prefix: "\u2195\xA0\xA0\xA0",
    onButtonsAdded: (container) => {
      BUTTON_VIEW_STATES.reorder.dragSystem = new DragReorder(container);
    },
    onStateEnd: () => {
      BUTTON_VIEW_STATES.reorder.dragSystem = null;
      ButtonView.getInstance().refreshSettingsFromUi();
    }
  }
};
var POPUP_DEFINITION_BUTTON = Object.freeze(
  {
    onOpen: async (data, parent, firstButton, SettingType) => {
      new SettingType(parent).setName("Display").setDesc("Text shown on the button.").addText((text) => {
        data.displayUi = text;
        text.setValue(data.definition?.display ?? "");
        text.inputEl.setAttr("placeholder", "Display text");
        text.inputEl.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            data.shortcutUi.inputEl.select();
          }
        });
        text.inputEl.select();
        return text;
      });
      const settings = InlineScriptsPlugin.getInstance().settings;
      new SettingType(parent).setName("Shortcut").addText((text) => {
        data.shortcutUi = text;
        text.setValue("" + (data.definition?.shortcut ?? ""));
        text.inputEl.setAttr("placeholder", "Shortcut text");
        text.inputEl.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            data.helpUi.inputEl.select();
          }
        });
        return text;
      }).descEl.innerHTML += "When the button is clicked, this is expanded.  The<br/>expansion is then appended to the current note.<br/>Don't include a prefix or suffix ( <b>" + settings.prefix + "</b> or <b>" + settings.suffix + '</b> ).  <br/>Add "???" blocks to be defined at button click.';
      new SettingType(parent).setName("Help").setDesc("Help text for this button.").addText((text) => {
        data.helpUi = text;
        text.setValue("" + (data.definition?.help ?? ""));
        text.inputEl.setAttr("placeholder", "Help text");
        text.inputEl.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            firstButton.click();
          }
        });
        return text;
      });
      data.detailUis = [];
      const addParameterDatum = (parameterDatum) => {
        let newDetailUi = { value: null, caption: null };
        new SettingType(detailsUiContainer).setName("Detail #" + (data.detailUis.length + 1)).addText((text) => {
          text.inputEl.setAttr("placeholder", "Default value");
          text.inputEl.classList.add("iscript_spacedUi");
          text.inputEl.style.width = "40%";
          newDetailUi.value = text;
          if (parameterDatum) {
            text.setValue(parameterDatum.value);
          }
          return text;
        }).addText((text) => {
          text.inputEl.setAttr("placeholder", "Caption");
          text.inputEl.classList.add("iscript_spacedUi");
          newDetailUi.caption = text;
          if (parameterDatum) {
            text.setValue(parameterDatum.caption);
          }
          return text;
        }).settingEl.toggleClass("iscript_settingBundled", true);
        data.detailUis.push(newDetailUi);
      };
      const detailsUiContainer = parent.createDiv();
      detailsUiContainer.style["margin-bottom"] = "1em";
      new SettingType(detailsUiContainer).setName("Parameter details").setDesc('Details for each "???" in the shortcut.').addButton((button) => {
        return button.setButtonText("Add parameter details").onClick(addParameterDatum);
      }).settingEl.toggleClass("iscript_settingBundledTop", true);
      if (data.definition) {
        for (const parameterDatum of data.definition.parameterData) {
          addParameterDatum(parameterDatum);
        }
      }
    },
    onClose: async (data, resolveFnc, buttonId) => {
      if (buttonId !== "Ok") {
        return;
      }
      if (!data.displayUi.getValue() || !data.shortcutUi.getValue()) {
        return;
      }
      let parameterData = [];
      for (const detailUi of data.detailUis) {
        if (!detailUi.value.getValue() && !detailUi.caption.getValue()) {
          continue;
        }
        parameterData.push(
          {
            value: detailUi.value.getValue(),
            caption: detailUi.caption.getValue()
          }
        );
      }
      const buttonView = ButtonView.getInstance();
      if (data.definition) {
        data.definition.display = data.displayUi.getValue();
        data.definition.shortcut = data.shortcutUi.getValue();
        data.definition.help = data.helpUi.getValue();
        data.definition.parameterData = parameterData;
      } else {
        let definition = {
          display: data.displayUi.getValue(),
          shortcut: data.shortcutUi.getValue(),
          help: data.helpUi.getValue(),
          parameterData
        };
        buttonView.getButtonGroup().buttons.push(definition);
      }
      InlineScriptsPlugin.getInstance().saveSettings();
      buttonView.refreshButtonUi();
    }
  }
);
var ICONS = Object.freeze(
  {
    buttonView: `<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" class="widget-icon" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 2500 2500">
	 <g class="layer">
	  <rect fill="currentcolor" fill-opacity="0.01" height="424" id="button" rx="62" ry="62" stroke="currentcolor" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-opacity="null" stroke-width="51" width="424" x="44" y="44"/>
	  <path d="m300.34,118.66l2.4,36.42l-28.24,6.34c-71.5,16.05 -141.59,84.08 -180.61,175.33c-7,16.37 -11.69,32.14 -10.41,35.05c2.92,6.67 74.12,59.76 80.14,59.76c2.46,0 8.36,-9.76 13.11,-21.7c20.28,-50.89 72.77,-103.98 109.72,-110.97l14.98,-2.83l-2.58,31.47c-2.67,32.67 -1.92,39.54 4.33,39.54c4,0 123.41,-125.48 126.82,-133.27c2.59,-5.91 -13.83,-27.83 -72.64,-96.96c-25.54,-30.03 -49.36,-54.6 -52.94,-54.6c-5.72,0 -6.21,4.36 -4.1,36.42l0.02,0z" fill="currentcolor" id="svg_4" stroke="currentcolor" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-opacity="null"/>
	 </g>
	</svg>`,
    plus: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" class="widget-icon" enable-background="new 0 0 512 512" version="1.1">
	 <g class="layer">
	  <rect fill="currentcolor" fill-opacity="0.01" height="424" id="button" rx="62" ry="62" stroke="currentcolor" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-opacity="null" stroke-width="51" width="424" x="44" y="44"/>
	  <path d="m97.67,202.77l105.1,0l0,-105.1l107.81,0l0,105.1l105.1,0l0,107.81l-105.1,0l0,105.1l-107.81,0l0,-105.1l-105.1,0z" fill="currentcolor" fill-opacity="null" id="svg_2" stroke="currentcolor" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-opacity="null"/>
	 </g>
	</svg>`,
    x: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" class="widget-icon" enable-background="new 0 0 512 512" version="1.1">
	 <g class="layer">
	  <rect fill="currentcolor" fill-opacity="0.01" height="424" id="button" rx="62" ry="62" stroke="currentcolor" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-opacity="null" stroke-width="51" width="424" x="44" y="44"/>
	  <path d="m97.67,202.77l105.1,0l0,-105.1l107.81,0l0,105.1l105.1,0l0,107.81l-105.1,0l0,105.1l-107.81,0l0,-105.1l-105.1,0l0,-107.81z" fill="currentcolor" fill-opacity="null" id="svg_2" stroke="currentcolor" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-opacity="null" transform="rotate(45, 256.675, 256.675)"/>
	 </g>
	</svg>`,
    gear: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" class="widget-icon" enable-background="new 0 0 512 512" version="1.1">
	 <g class="layer">
	  <rect fill="currentcolor" fill-opacity="0.01" height="424" id="button" rx="62" ry="62" stroke="currentcolor" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-opacity="null" stroke-width="51" width="424" x="44" y="44"/>
	  <path d="m375.12,264.74l41.05,-21.71c-0.81,-8.05 -2.37,-15.85 -4.32,-23.52l-45.59,-6.31c-3.95,-9.51 -9.16,-18.33 -15.29,-26.42l17.38,-42.75c-5.71,-5.57 -11.88,-10.65 -18.38,-15.33l-38.71,24.3c-9.08,-4.78 -18.86,-8.39 -29.13,-10.73l-13.99,-43.35c-3.97,-0.29 -7.94,-0.61 -11.98,-0.61s-8,0.31 -11.98,0.61l-13.86,42.97c-10.54,2.26 -20.54,5.92 -29.85,10.75l-38.12,-23.94c-6.49,4.68 -12.66,9.76 -18.37,15.33l16.9,41.56c-6.59,8.45 -12.1,17.76 -16.24,27.8l-44.16,6.11c-1.94,7.66 -3.51,15.46 -4.31,23.52l39.63,20.97c0.45,11.04 2.28,21.74 5.52,31.81l-29.89,33.06c3.48,7.21 7.35,14.21 11.83,20.77l44.01,-9.45c7.22,7.85 15.44,14.73 24.51,20.42l-1.67,45.04c7.23,3.26 14.74,5.99 22.48,8.17l27.85,-35.79c4.94,0.63 9.94,1.06 15.05,1.06c5.53,0 10.94,-0.5 16.26,-1.23l27.99,35.99c7.75,-2.18 15.25,-4.91 22.48,-8.17l-1.7,-45.85c8.65,-5.59 16.48,-12.29 23.4,-19.85l45.16,9.69c4.48,-6.56 8.35,-13.55 11.83,-20.77l-30.87,-34.14c2.97,-9.54 4.62,-19.61 5.1,-30zm-68.22,52.15l-19.46,12.67l-11.97,-18.39c-6.23,2.4 -12.93,3.85 -20,3.85c-30.87,0 -55.88,-25.02 -55.88,-55.88c0,-30.87 25.01,-55.88 55.88,-55.88c30.85,0 55.88,25.01 55.88,55.88c0,15.42 -6.25,29.36 -16.34,39.48l11.89,18.27z" fill="currentcolor" fill-opacity="null" id="svg_1" stroke="currentcolor" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-opacity="null"/>
	 </g>
	</svg>`,
    pencil: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" class="widget-icon" enable-background="new 0 0 512 512" version="1.1">
	 <g class="layer">
	  <rect fill="currentcolor" fill-opacity="0.01" height="424" id="button" rx="62" ry="62" stroke="currentcolor" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-opacity="null" stroke-width="51" width="424" x="44" y="44"/>
	  <path d="m365.59,110.82l-38.75,-24.35c-9.78,-6.14 -22.66,-3.18 -28.82,6.6l-15.27,24.31l74.13,46.56l15.29,-24.3c6.14,-9.79 3.21,-22.68 -6.57,-28.81zm-214.75,216.57l74.13,46.56l120.82,-192.34l-74.16,-46.57l-120.79,192.35zm-11.32,59.15l-1.64,43.73l38.69,-20.46l35.95,-18.98l-71.52,-44.94l-1.49,40.66z" fill="currentcolor" fill-opacity="null" id="svg_2" stroke="currentcolor" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-opacity="null"/>
	 </g>
	</svg>`,
    upDown: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" class="widget-icon" enable-background="new 0 0 512 512" version="1.1">
	 <g class="layer">
	  <rect fill="currentcolor" fill-opacity="0.01" height="424" id="button" rx="62" ry="62" stroke="currentcolor" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-opacity="null" stroke-width="51" width="424" x="44" y="44"/>
	  <path d="m78.29,255.78l101.47,-101.47l0,50.73l147.06,0l0,-50.73l101.47,101.47l-101.47,101.47l0,-50.73l-147.06,0l0,50.73l-101.47,-101.47z" fill="currentcolor" id="svg_1" stroke="currentcolor" transform="rotate(90, 253.289, 255.78)"/>
	 </g>
	</svg>`,
    impExp: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" class="widget-icon" enable-background="new 0 0 512 512" version="1.1">
	 <g class="layer">
	  <g class="layer" id="svg_4">
	   <g class="layer" id="svg_2">
		<path d="m44,106c0,-33.69 28.31,-62 62,-62l185,2c-0.31,85 96,172.31 179,171l-2,189c0,33.69 -28.31,62 -62,62l-300,0c-33.69,0 -62,-28.31 -62,-62l0,-300z" fill="currentcolor" fill-opacity="0.01" id="button" stroke="currentcolor" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-opacity="null" stroke-width="51"/>
		<path d="m222.44,288.64l5.66,-159.42l38.44,38.44l119.62,-119.62l-38.44,-38.44l159.42,-5.66l-5.66,159.42l-38.44,-38.44l-119.62,119.62l38.44,38.44l-159.42,5.66z" fill="currentcolor" id="svg_1" stroke="currentcolor"/>
	   </g>
	  </g>
	 </g>
	</svg>`,
    question: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" class="widget-icon" enable-background="new 0 0 512 512" version="1.1">
	 <g class="layer">
	  <g class="layer" id="svg_1">
	   <rect fill="currentcolor" fill-opacity="0.01" height="424" id="button" rx="62" ry="62" stroke="currentcolor" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-opacity="null" stroke-width="51" width="424" x="44" y="44"/>
	  </g>
	  <text fill="currentcolor" fill-opacity="null" font-family="Serif" font-size="512" font-weight="bold" id="svg_2" stroke="currentcolor" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-opacity="null" stroke-width="0" text-anchor="middle" x="258.4" xml:space="preserve" y="425.4">?</text>
	 </g>
	</svg>`
  }
);
var BUTTON_VIEW_TYPE = "inline-scripts-button-view";
var ButtonView = class extends import_obsidian7.ItemView {
  constructor(leaf) {
    super(leaf);
    this._currentGroup = "";
    this._settingsUi = {};
    this._state = BUTTON_VIEW_STATES.normal;
  }
  static staticConstructor() {
    this.staticConstructor_internal();
  }
  static staticDestructor() {
    this.staticDestructor_internal();
  }
  static getInstance() {
    return ButtonView._instance;
  }
  static isOpen() {
    return this.isOpen_internal();
  }
  static async activateView(doUiRefresh) {
    return await this.activateView_internal(doUiRefresh);
  }
  getButtonGroup() {
    return this.getButtonGroup_internal();
  }
  refreshGroupUi() {
    this.refreshGroupUi_internal();
  }
  refreshButtonUi() {
    this.refreshButtonUi_internal();
  }
  refreshSettingsFromUi() {
    this.refreshSettingsFromUi_internal();
  }
  toggleState(state) {
    this.toggleState_internal(state);
  }
  async onOpen() {
    ButtonView.setVisible(true);
  }
  async onClose() {
    ButtonView.setVisible(false);
  }
  load() {
    this.load_internal();
  }
  getViewType() {
    return BUTTON_VIEW_TYPE;
  }
  getDisplayText() {
    return "Inline Scripts - Buttons";
  }
  getIcon() {
    return BUTTON_VIEW_TYPE;
  }
  static staticConstructor_internal() {
    const plugin = InlineScriptsPlugin.getInstance();
    (0, import_obsidian7.addIcon)(BUTTON_VIEW_TYPE, ICONS.buttonView);
    plugin.registerView(BUTTON_VIEW_TYPE, (leaf) => new ButtonView(leaf));
    plugin.addCommand(
      {
        id: "show-inline-scripts-buttons-view",
        name: "Open buttons view",
        checkCallback: (checking) => {
          const isViewOpened = this.isOpen();
          if (!checking && !isViewOpened) {
            this.activateView(true);
          }
          return !isViewOpened;
        }
      }
    );
    if (plugin.settings.buttonView.visible) {
      plugin.app.workspace.onLayoutReady(() => this.activateView());
    }
  }
  static staticDestructor_internal() {
    InlineScriptsPlugin.getInstance().app.workspace.detachLeavesOfType(BUTTON_VIEW_TYPE);
  }
  static setVisible(visible) {
    const plugin = InlineScriptsPlugin.getInstance();
    if (!plugin._loaded) {
      return;
    }
    if (plugin.settings.buttonView.visible !== visible) {
      plugin.settings.buttonView.visible = visible;
      plugin.saveSettings();
    }
  }
  static isOpen_internal() {
    const plugin = InlineScriptsPlugin.getInstance();
    return !!plugin.app.workspace.getLeavesOfType(BUTTON_VIEW_TYPE).length;
  }
  static async activateView_internal(doUiRefresh) {
    const plugin = InlineScriptsPlugin.getInstance();
    if (this.isOpen()) {
      return false;
    }
    await plugin.app.workspace.getRightLeaf(false).setViewState({ type: BUTTON_VIEW_TYPE });
    if (doUiRefresh) {
      ButtonView.getInstance().refreshGroupUi();
    }
    return true;
  }
  load_internal() {
    ButtonView._instance = this;
    const root = document.createElement("div");
    this._groupSelect = document.createElement("select");
    this._groupSelect.classList.add("iscript_buttonView_groupSelect");
    this._groupSelect.onchange = () => {
      ButtonView.getInstance().toggleState("normal");
      this._currentGroup = ButtonView.getInstance()._groupSelect.value;
      ButtonView.getInstance().refreshButtonUi();
    };
    root.appendChild(this._groupSelect);
    var buttonGroup = root.createDiv({ cls: "nav-buttons-container" });
    this.addSettingsButton(buttonGroup, "plus", "New group", async () => {
      const groups = InlineScriptsPlugin.getInstance().settings.buttonView.groups;
      let name;
      let id = 0;
      do {
        id++;
        name = "Group " + (id + "").padStart(2, "0");
      } while (groups[name]);
      groups[name] = { buttons: [] };
      this._currentGroup = name;
      InlineScriptsPlugin.getInstance().saveSettings();
      this.refreshGroupUi();
    });
    this._settingsUi.groupRename = this.addSettingsButton(
      buttonGroup,
      "pencil",
      "Rename group",
      async () => {
        if (this._currentGroup.startsWith(SFILE_GROUP_PREFIX)) {
          return;
        }
        const name = await Popups.getInstance().input('Enter a new name for group "' + this._currentGroup + '"', this._currentGroup);
        if (name === "") {
          await Popups.getInstance().alert("Name not changed.\nInvalid name: blank");
          return;
        }
        if (!name || name === this._currentGroup) {
          return;
        }
        let groups = InlineScriptsPlugin.getInstance().settings.buttonView.groups;
        if (groups[name]) {
          await Popups.getInstance().alert(
            'Name not changed.\nThe name "' + name + '" is already taken'
          );
          return;
        }
        groups[name] = groups[this._currentGroup];
        delete groups[this._currentGroup];
        this._currentGroup = name;
        InlineScriptsPlugin.getInstance().saveSettings();
        this.refreshGroupUi();
      }
    );
    this.addSettingsButton(buttonGroup, "impExp", "Import / Export group", async () => {
      const plugin = InlineScriptsPlugin.getInstance();
      let oldGroupCode = JSON.stringify(this.getButtonGroup().buttons).slice(1, -1);
      oldGroupCode += oldGroupCode ? "," : "";
      const isSFile = this._currentGroup.startsWith(SFILE_GROUP_PREFIX);
      let message = 'Copy this code to export from group "' + this._currentGroup + '"\n' + (isSFile ? "This group is locked, so ignores importing." : 'Replace this code to import to group "' + this._currentGroup + '"');
      let newGroupCode = await Popups.getInstance().input(message, oldGroupCode);
      if (isSFile || newGroupCode === null) {
        return;
      }
      if (newGroupCode !== oldGroupCode) {
        try {
          plugin.settings.buttonView.groups[this._currentGroup].buttons = JSON.parse("[" + newGroupCode.replace(/,$/, "") + "]");
          plugin.saveSettings();
          this.refreshButtonUi();
        } catch (e) {
          UserNotifier.run(
            {
              message: "Import failed.\nThe given group code had errors"
            }
          );
        }
      }
    });
    this._settingsUi.groupRemove = this.addSettingsButton(
      buttonGroup,
      "x",
      "Remove group",
      async () => {
        if (this._currentGroup.startsWith(SFILE_GROUP_PREFIX)) {
          return;
        }
        if (!await Popups.getInstance().confirm(
          'Confirm removing the group "' + this._currentGroup + '"'
        )) {
          return;
        }
        let groups = InlineScriptsPlugin.getInstance().settings.buttonView.groups;
        delete groups[this._currentGroup];
        InlineScriptsPlugin.getInstance().saveSettings();
        this._currentGroup = null;
        this.refreshGroupUi();
      }
    );
    const hr = document.createElement("hr");
    hr.classList.add("iscript_buttonView_hr");
    root.appendChild(hr);
    const allButtonSettings = root.createDiv({ cls: "nav-buttons-container" });
    allButtonSettings.style["margin-bottom"] = ".37em";
    BUTTON_VIEW_STATES["help"].button = this.addSettingsButton(
      allButtonSettings,
      "question",
      "Help with buttons",
      function() {
        ButtonView.getInstance().toggleState("help");
      }
    );
    this._settingsUi.buttonSettings = allButtonSettings.createDiv({ cls: "nav-buttons-container" });
    this.addSettingsButton(
      this._settingsUi.buttonSettings,
      "plus",
      "Add button",
      async function() {
        ButtonView.getInstance().toggleState("normal");
        await Popups.getInstance().custom("Define a new button", POPUP_DEFINITION_BUTTON);
      }
    );
    BUTTON_VIEW_STATES["edit"].button = this.addSettingsButton(
      this._settingsUi.buttonSettings,
      "gear",
      "Edit button",
      function() {
        ButtonView.getInstance().toggleState("edit");
      }
    );
    BUTTON_VIEW_STATES["reorder"].button = this.addSettingsButton(
      this._settingsUi.buttonSettings,
      "upDown",
      "Re-order buttons",
      function() {
        ButtonView.getInstance().toggleState("reorder");
      }
    );
    BUTTON_VIEW_STATES["delete"].button = this.addSettingsButton(
      this._settingsUi.buttonSettings,
      "x",
      "Remove buttons",
      function() {
        ButtonView.getInstance().toggleState("delete");
      }
    );
    this._settingsUi.buttonSettingsBlock = allButtonSettings.createDiv(
      { text: "Group locked", cls: "iscript_buttonView_uiBlock iscript_hidden" }
    );
    this.helpUi = root.createDiv({ cls: "iscript_buttonView_help" });
    this._buttonUiParent = root.createDiv();
    const container = this.containerEl.children[1];
    container.empty();
    container.appendChild(root);
  }
  addSettingsButton(parent, icon, title, fnc) {
    let newButton = parent.createDiv(
      { cls: "nav-action-button iscript_buttonView_uiButton", title }
    );
    newButton.onclick = fnc;
    newButton.appendChild(
      new DOMParser().parseFromString(ICONS[icon], "text/xml").documentElement
    );
    return newButton;
  }
  getButtonGroup_internal() {
    const plugin = InlineScriptsPlugin.getInstance();
    if (!this._currentGroup.startsWith(SFILE_GROUP_PREFIX)) {
      return plugin.settings.buttonView.groups[this._currentGroup];
    }
    if (!this._sfileGroupDefinitions[this._currentGroup]) {
      let buttonDefinitions = [];
      const sfile = this._currentGroup.slice(SFILE_GROUP_PREFIX.length);
      const syntaxes = plugin.syntaxes.filter((v) => v.sfile === sfile);
      for (const syntax of syntaxes) {
        let display = syntax.text;
        let shortcut = syntax.text;
        let parameterData = [];
        const matches = [...syntax.text.matchAll(/{[^}]+}/g)];
        for (let i = matches.length - 1; i >= 0; i--) {
          display = display.slice(0, matches[i].index) + matches[i][0].replace(/:[^}]*/, "") + display.slice(matches[i].index + matches[i][0].length);
          shortcut = shortcut.slice(0, matches[i].index) + "???" + shortcut.slice(matches[i].index + matches[i][0].length);
          const pName = matches[i][0].slice(1, matches[i][0].indexOf(":"));
          const pFeatures = matches[i][0].slice(matches[i][0].indexOf(":") + 2, -1).replaceAll(/, ?/g, "<br/>");
          const caption = SFILE_BUTTON_PARAMETER_CAPTION.replace("%1", pName.toUpperCase()).replace("%2", pFeatures);
          parameterData.push({ value: "", caption });
        }
        parameterData.reverse();
        let help = syntax.description;
        const helpCutoff = help.indexOf("	- Alternative");
        if (helpCutoff >= 0) {
          help = help.slice(0, helpCutoff);
        }
        buttonDefinitions.push({ display, shortcut, parameterData, help });
      }
      this._sfileGroupDefinitions[this._currentGroup] = { buttons: buttonDefinitions };
    }
    return this._sfileGroupDefinitions[this._currentGroup];
  }
  toggleState_internal(state) {
    if (!BUTTON_VIEW_STATES[state]) {
      return;
    }
    if (state === "normal" && this._state === BUTTON_VIEW_STATES["normal"]) {
      return;
    }
    if (this._state.onStateEnd) {
      this._state.onStateEnd();
    }
    this._state = this._state === BUTTON_VIEW_STATES[state] ? BUTTON_VIEW_STATES["normal"] : BUTTON_VIEW_STATES[state];
    if (this._state.onStateStart) {
      this._state.onStateStart();
    }
    this.refreshButtonUi();
  }
  refreshGroupUi_internal() {
    let plugin = InlineScriptsPlugin.getInstance();
    let groups = plugin.settings.buttonView.groups;
    let groupList = Object.keys(groups);
    if (!groupList.length) {
      groups["Group 01"] = { buttons: [] };
      groupList = Object.keys(groups);
    }
    groupList.sort();
    let sfileGroups = [...new Set(plugin.syntaxes.map((v) => v.sfile))].filter((v) => v).map((v) => SFILE_GROUP_PREFIX + v).sort();
    groupList = groupList.concat(sfileGroups);
    this._sfileGroupDefinitions = [];
    this._currentGroup ||= groupList[0];
    this._groupSelect.options.length = 0;
    for (const groupName of groupList) {
      const selected = groupName === this._currentGroup;
      this._groupSelect.options[this._groupSelect.options.length] = new Option(groupName, void 0, void 0, selected);
    }
    this.refreshButtonUi();
  }
  refreshButtonUi_internal() {
    if (this._currentGroup.startsWith(SFILE_GROUP_PREFIX)) {
      this._settingsUi.buttonSettings.classList.add("iscript_hidden");
      this._settingsUi.buttonSettingsBlock.classList.remove("iscript_hidden");
      this._settingsUi.groupRename.classList.remove("nav-action-button");
      this._settingsUi.groupRename.classList.add("iscript_button_disabled");
      this._settingsUi.groupRemove.classList.remove("nav-action-button");
      this._settingsUi.groupRemove.classList.add("iscript_button_disabled");
    } else {
      this._settingsUi.buttonSettings.classList.remove("iscript_hidden");
      this._settingsUi.buttonSettingsBlock.classList.add("iscript_hidden");
      this._settingsUi.groupRename.classList.add("nav-action-button");
      this._settingsUi.groupRename.classList.remove("iscript_button_disabled");
      this._settingsUi.groupRemove.classList.add("nav-action-button");
      this._settingsUi.groupRemove.classList.remove("iscript_button_disabled");
    }
    this._buttonUiParent.innerText = "";
    const buttonDefinitions = this.getButtonGroup().buttons;
    for (let i = 0; i < buttonDefinitions.length; i++) {
      let newButton = document.createElement("button");
      newButton.classList.add("iscript_buttonView_shortcutButton");
      newButton.innerText = this._state.prefix + buttonDefinitions[i].display;
      newButton.dataset.index = i + "";
      this._buttonUiParent.appendChild(newButton);
      if (this._state.onClick) {
        newButton.onclick = this._state.onClick.bind(newButton, newButton);
      }
    }
    if (this._state.onButtonsAdded) {
      this._state.onButtonsAdded(this._buttonUiParent);
    }
    for (const key in BUTTON_VIEW_STATES) {
      if (!BUTTON_VIEW_STATES[key].button) {
        continue;
      }
      if (this._state === BUTTON_VIEW_STATES[key]) {
        BUTTON_VIEW_STATES[key].button.classList.add("iscript_buttonView_uiButton_selected");
      } else {
        BUTTON_VIEW_STATES[key].button.classList.remove("iscript_buttonView_uiButton_selected");
      }
    }
    this.helpUi.innerText = "";
  }
  refreshSettingsFromUi_internal() {
    const buttonDefinitions = this.getButtonGroup().buttons;
    let newButtonDefinitions = [];
    for (const button of this._buttonUiParent.childNodes) {
      newButtonDefinitions.push(buttonDefinitions[button.dataset.index]);
    }
    this.getButtonGroup().buttons = newButtonDefinitions;
    InlineScriptsPlugin.getInstance().saveSettings();
  }
};

// ShortcutLoader.ts
var REGEX_NOTE_METADATA = /^\n*---\n(?:[^-]+\n)?---\n/;
var REGEX_SPLIT_FIRST_DASH = / - (.*)/s;
var REGEX_SFILE_SECTION_SPLIT = /^__$/gm;
var REGEX_ALTERNATIVE_SYNTAX = /\n\t- Alternative: __([^_]+)__/;
var ESCAPED_CHARACTERS = /* @__PURE__ */ new Set(
  [
    ".",
    "+",
    "*",
    "?",
    "[",
    "^",
    "]",
    "$",
    "(",
    ")",
    "{",
    "}",
    "=",
    "!",
    "<",
    ">",
    "|",
    ":",
    "-",
    "\\",
    '"',
    "'",
    "`"
  ]
);
var GENERAL_HELP_PREAMBLE = `return [ "#### Help - General
Here are shortcuts for help with __Inline Scripts__.
- __help__ - Shows this text.
- __ref settings__ - Describes shortcuts defined in the Settings.
- __ref all__ - Describes _all_ shortcuts (except for the ones in this list).`;
var GENERAL_HELP_PREAMBLE_SHORTCUT_FILES = `
- For help on specific shortcut-files, __help__ and __ref__ can be followed by:`;
var SFILE_HELP_PREAMBLE = `return "#### Help - $1
_Use shortcut __ref $2__ for a list of shortcuts._

`;
var SFILE_REF_PREAMBLE = `let result = "#### Reference - $1
_Use shortcut __help $2__ for general help._
";`;
var SORT_SYNTAXES = (a, b) => {
  if (a.text === "help") {
    return -1;
  } else if (b.text === "help") {
    return 1;
  } else {
    const lhs = a.text.replaceAll("{", "0").replaceAll(/(^|[^\\])~/g, "$1" + String.fromCharCode(9));
    const rhs = b.text.replaceAll("{", "0").replaceAll(/(^|[^\\])~/g, "$1" + String.fromCharCode(9));
    return lhs.localeCompare(rhs);
  }
};
var ShortcutLoader = class {
  static parseShortcutFile(filename, content, maintainCodeFence, maintainAboutString) {
    return this.parseShortcutFile_internal(
      filename,
      content,
      maintainCodeFence,
      maintainAboutString
    );
  }
  static getFunction_setupShortcuts() {
    return this.setupShortcuts_internal.bind(this);
  }
  static parseShortcutFile_internal(filename, content, maintainCodeFence, maintainAboutString) {
    content = content.replaceAll("\r", "");
    content = content.replace(REGEX_NOTE_METADATA, "");
    let fileAbout = "";
    let shortcuts = [];
    let shortcutAbouts = [];
    let fileHasErrors = false;
    const sections = content.split(REGEX_SFILE_SECTION_SPLIT).map((v) => v.trim());
    fileAbout = sections[0];
    if (sections.length === 1) {
      UserNotifier.run(
        {
          message: 'Shortcut-file "' + filename + '"\nhas no shortcuts.\n\n(Shortcut-files are sectioned with "__")',
          messageLevel: "warn"
        }
      );
    } else if ((sections.length - 1) % 3) {
      UserNotifier.run(
        {
          consoleMessage: 'In shortcut-file "' + filename + '"',
          messageType: "MISNUMBERED-SECTION-COUNT-ERROR"
        }
      );
      fileHasErrors = true;
    }
    for (let i = 1; i + 2 < sections.length; i += 3) {
      let testRegex = null;
      if (maintainCodeFence) {
        testRegex = { source: sections[i] };
      } else {
        let c = sections[i];
        if (c.startsWith("```") && c.endsWith("```")) {
          c = c.slice(3, -3).trim();
        }
        try {
          testRegex = new RegExp(c, "i");
        } catch (e) {
          UserNotifier.run(
            {
              consoleMessage: 'In shortcut-file "' + filename + '":\n' + c,
              messageType: "BAD-TEST-STRING-ERROR"
            }
          );
          fileHasErrors = true;
          continue;
        }
      }
      let exp = sections[i + 1];
      if (!maintainCodeFence) {
        if (exp.startsWith("```js") && exp.endsWith("```")) {
          exp = exp.slice(5, -3).trim();
        }
      }
      if (maintainAboutString) {
        shortcuts.push({
          test: testRegex,
          expansion: exp,
          about: sections[i + 2]
        });
      } else {
        shortcuts.push({ test: testRegex, expansion: exp });
      }
      if (testRegex.source !== "(?:)" && testRegex.source.toLowerCase() !== "^sfile setup$" && testRegex.source.toLowerCase() !== "^sfile shutdown$" && !sections[i + 2].startsWith("hidden - ")) {
        let aboutParts = sections[i + 2].split(REGEX_SPLIT_FIRST_DASH).map((v) => v.trim());
        if (aboutParts.length === 1) {
          aboutParts = [testRegex.source, aboutParts[0]];
        }
        shortcutAbouts.push({ syntax: aboutParts[0], description: aboutParts[1] });
      }
    }
    if (fileHasErrors) {
      UserNotifier.run(
        {
          popupMessage: "Shortcut-file issues\n" + filename,
          consoleHasDetails: true
        }
      );
    }
    return { shortcuts, fileAbout, shortcutAbouts };
  }
  static async setupShortcuts_internal() {
    if (this.isSettingUpShortcuts) {
      return;
    }
    this.isSettingUpShortcuts = true;
    const plugin = InlineScriptsPlugin.getInstance();
    let abouts = [];
    plugin.shortcuts = [{ test: /^help ?$/, expansion: "" }];
    let shortcutFiles = [];
    this.updateGeneralHelpShortcut(shortcutFiles);
    plugin.syntaxes = [];
    let parseResult = this.parseShortcutFile("settings", plugin.settings.shortcuts);
    plugin.shortcuts = plugin.shortcuts.concat(parseResult.shortcuts);
    abouts.push({ filename: "", shortcutAbouts: parseResult.shortcutAbouts });
    this.addShortcutFileSyntaxes(
      "settings",
      parseResult.shortcutAbouts,
      [
        ["help", "A list of helpful shortcuts"],
        ["ref settings", "A list of shortcuts defined in settings"],
        ["ref all", "A list of ALL shortcuts"]
      ]
    );
    plugin.shortcuts.push({});
    HelperFncs.confirmObjectPath("_inlineScripts.inlineScripts");
    window._inlineScripts.inlineScripts.sfileIndices = {};
    let sfileIndicesIndex = 0;
    for (const shortcutFile of plugin.settings.shortcutFiles) {
      if (!shortcutFile.enabled) {
        continue;
      }
      const file = plugin.app.vault.fileMap[shortcutFile.address];
      if (!file) {
        UserNotifier.run(
          {
            popupMessage: "Missing shortcut-file\n" + shortcutFile.address,
            consoleMessage: shortcutFile.address,
            messageType: "MISSING-SHORTCUT-FILE-ERROR"
          }
        );
        continue;
      }
      const content = await plugin.app.vault.cachedRead(file);
      parseResult = this.parseShortcutFile(shortcutFile.address, content);
      const setupScript = this.getExpansionScript("^sfile setup$", parseResult.shortcuts);
      if (setupScript) {
        InputBlocker.setEnabled(true);
        try {
          if (await ShortcutExpander.runExpansionScript(
            setupScript,
            false,
            { shortcutText: "sfile setup" }
          )) {
            parseResult.shortcuts = null;
          }
        } catch (e) {
          parseResult.shortcuts = null;
        }
        InputBlocker.setEnabled(false);
      }
      if (!parseResult.shortcuts) {
        continue;
      }
      const shutdownScript = this.getExpansionScript("^sfile shutdown$", parseResult.shortcuts);
      if (shutdownScript) {
        plugin.shutdownScripts[shortcutFile.address] = shutdownScript;
      }
      plugin.shortcuts = plugin.shortcuts.concat(parseResult.shortcuts);
      plugin.shortcuts.push({});
      let baseName = shortcutFile.address.slice(shortcutFile.address.lastIndexOf("/") + 1, -3);
      baseName = baseName.endsWith(".sfile") ? baseName.slice(0, -6) : baseName;
      shortcutFiles.push(baseName);
      this.updateGeneralHelpShortcut(shortcutFiles);
      abouts.push(
        {
          filename: baseName,
          fileAbout: parseResult.fileAbout,
          shortcutAbouts: parseResult.shortcutAbouts
        }
      );
      this.addShortcutFileSyntaxes(
        baseName,
        parseResult.shortcutAbouts,
        [
          [
            "help " + baseName,
            'Description of the "' + baseName + '" shortcut-file.'
          ],
          [
            "ref " + baseName,
            'A list of shortcuts defined in the "' + baseName + '" shortcut-file.'
          ]
        ]
      );
      window._inlineScripts.inlineScripts.sfileIndices[baseName] = sfileIndicesIndex;
      sfileIndicesIndex++;
    }
    plugin.shortcuts = this.generateHelpShortcuts(abouts).concat(plugin.shortcuts);
    this.finalizeShortcutSyntaxes();
    ButtonView.getInstance()?.refreshGroupUi();
    if (window._inlineScripts?.inlineScripts?.listeners?.onShortcutsLoaded) {
      HelperFncs.callEventListenerCollection(
        "inlineScripts.onShortcutsLoaded",
        window._inlineScripts.inlineScripts.listeners.onShortcutsLoaded
      );
    }
    this.isSettingUpShortcuts = false;
  }
  static getExpansionScript(scriptId, shortcuts) {
    let result = "";
    for (const shortcut of shortcuts) {
      if (!shortcut.test.source || shortcut.test.source === "(?:)") {
        if (!shortcut.expansion) {
          result = "";
        } else {
          result += shortcut.expansion;
        }
      } else if (shortcut.test.source.toLowerCase() === scriptId) {
        result += shortcut.expansion;
        break;
      }
    }
    return result;
  }
  static updateGeneralHelpShortcut(shortcutFiles) {
    let expansion = GENERAL_HELP_PREAMBLE.replaceAll("\n", "\\n");
    if (shortcutFiles.length > 0) {
      expansion += GENERAL_HELP_PREAMBLE_SHORTCUT_FILES.replaceAll("\n", "\\n") + '", "\\n    - ' + shortcutFiles.join('","\\n    - ');
    }
    expansion += '", "\\n\\n" ];';
    InlineScriptsPlugin.getInstance().shortcuts[0].expansion = expansion;
  }
  static generateHelpShortcuts(abouts) {
    let result = [];
    function capitalize(s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
    function stringifyString(s) {
      return s.replaceAll('"', '\\"').replaceAll("\n", "\\n");
    }
    function makeHelpShortcut(name, about) {
      about ||= "No information available.";
      const expansion = SFILE_HELP_PREAMBLE.replaceAll("\n", "\\n").replaceAll("$1", capitalize(name)).replaceAll("$2", name) + stringifyString(about) + '\\n\\n";';
      const test = new RegExp("^help " + name + "$");
      result.push({ test, expansion });
    }
    function makeRefShortcut(groupName, abouts2, displayName, removeHr) {
      displayName = displayName || capitalize(groupName);
      let expansion = SFILE_REF_PREAMBLE.replaceAll("\n", "\\n").replaceAll("$1", displayName).replaceAll("$2", groupName) + "\n";
      for (const about of abouts2) {
        let description = "";
        if (about.description) {
          description = " - " + stringifyString(about.description);
          if (removeHr) {
            description = description.replaceAll("\\n***", "");
          }
        }
        expansion += 'result += "- __' + stringifyString(about.syntax) + "__" + description + '\\n";\n';
      }
      if (!abouts2.length) {
        expansion += 'result += "\\nNo shortcuts\\n";\n';
      }
      expansion += 'return result + "\\n";';
      const test = new RegExp("^ref(?:erence)? " + groupName + "$");
      result.push({ test, expansion });
    }
    let settingsAbouts = [];
    let shortcutFileAbouts = [];
    for (const about of abouts) {
      if (about.filename) {
        if (about.shortcutAbouts.length === 0) {
          continue;
        }
        makeHelpShortcut(about.filename, about.fileAbout);
        makeRefShortcut(about.filename, about.shortcutAbouts);
        shortcutFileAbouts = shortcutFileAbouts.concat(about.shortcutAbouts);
      } else if (about.shortcutAbouts.length > 0) {
        settingsAbouts = about.shortcutAbouts;
      }
    }
    makeRefShortcut(
      "?(?:all)?",
      settingsAbouts.concat(shortcutFileAbouts),
      "All shortcuts",
      true
    );
    makeRefShortcut("settings", settingsAbouts);
    result.reverse();
    return result;
  }
  static addShortcutFileSyntaxes(sfile, abouts, syntaxes) {
    const plugin = InlineScriptsPlugin.getInstance();
    const addSyntax = (syntax, description, about, sfile2) => {
      description = description.replaceAll("\n***", "");
      plugin.syntaxes.push({ text: syntax, description, sfile: sfile2 });
      if (about) {
        about.syntax = this.removeSyntaxSpecialCharacters(syntax);
      }
      const altSyntax = description.match(REGEX_ALTERNATIVE_SYNTAX)?.[1];
      if (altSyntax) {
        const altDescription = description.replace(
          REGEX_ALTERNATIVE_SYNTAX,
          "\n	- Alternative: __" + syntax + "__"
        );
        plugin.syntaxes.push({ text: altSyntax, description: altDescription, sfile: "" });
      }
    };
    for (const about of abouts) {
      addSyntax(about.syntax, about.description, about, sfile);
    }
    for (const syntax of syntaxes) {
      addSyntax(syntax[0], syntax[1], null, "");
    }
  }
  static finalizeShortcutSyntaxes() {
    const plugin = InlineScriptsPlugin.getInstance();
    plugin.syntaxesSorted = [...plugin.syntaxes];
    plugin.syntaxesSorted.sort(SORT_SYNTAXES);
    for (let syntax of plugin.syntaxes) {
      syntax.text = this.removeSyntaxSpecialCharacters(syntax.text);
      syntax.regex = this.generateSyntaxRegex(syntax.text);
    }
  }
  static removeSyntaxSpecialCharacters(src) {
    return src.replaceAll(/(^|[^\\])~/g, "$1").replaceAll(/\\(?=-|~)/g, "");
  }
  static generateSyntaxRegex(syntax) {
    let result = "^";
    for (let i = 0; i < syntax.length; i++) {
      if (syntax[i] === "{") {
        const parameterEnd = syntax.indexOf("}", i);
        const parameterSyntax = syntax.slice(i, parameterEnd + 1);
        const expectRegex = parameterSyntax.match(/: >0(?:}|,)/) ? "[0-9|\u241F]%1" : parameterSyntax.match(/: >=0(?:}|,)/) ? "[0-9|\u241F]%1" : parameterSyntax.match(/: path text(?:}|,)/) ? '"[^"]%1|[^ ]%1' : parameterSyntax.match(/: text(?:}|,| \()/) ? ".%1" : "[^ ]%1";
        const defaultRegex = parameterSyntax.includes(", default:") ? "*" : "+";
        result += "(?:(" + expectRegex.replaceAll("%1", defaultRegex) + ")|$)";
        i = parameterEnd;
      } else {
        result += "(?:" + this.escapeCharacterForRegex(syntax[i]) + "|$)";
      }
    }
    result += "$";
    return new RegExp(result);
  }
  static escapeCharacterForRegex(src) {
    return !ESCAPED_CHARACTERS.has(src) ? src : "\\" + src;
  }
};
ShortcutLoader.isSettingUpShortcuts = false;

// defaultSettings.ts
var DEFAULT_SETTINGS = Object.freeze(
  {
    prefix: ";;",
    suffix: "::",
    expansionPrefix: "",
    expansionLinePrefix: "> ",
    expansionSuffix: "\\n\\n",
    autocomplete: true,
    autocompleteHelp: true,
    devMode: false,
    allowExternal: false,
    version: app.plugins.manifests["obsidian-text-expander-js"].version,
    shortcutFiles: [],
    shortcuts: `
__
^hi$
__
return "Hello! How are you?";
__
hi - Expands into "Hello! How are you?".  A simple shortcut to see if Inline Scripts plugin is running.

__
^date$
__
return new Date().toLocaleDateString();
__
date - Expands into the current, local date.

__
^time$
__
return new Date().toLocaleTimeString();
__
time - Expands into the current, local time.

__
^datetime$
__
return new Date().toLocaleString();
__
datetime - Expands into the current, local date and time.

__
__
function roll(max) { return Math.trunc(Math.random() * max + 1); }
__
A dice roller function used in other shortcuts.

__
^[d|D]([0-9]+)$
__
return "\u{1F3B2} __" + roll($1) + "__ /D" + $1;
__
d{max: >0} - A dice roller shortcut.  Expands into "\u{1F3B2} {roll result} /D{max}".  {max} is the size of dice to roll.
    - Examples - d3, d20, d57, d999

__
^([0-9]*)[d|D]([1-9][0-9]*)(|(?:[+-][0-9]+))$
__
$1 = Number($1) || 1;
$3 ||= "+0";
let result = 0;
let label = "D" + $2;
if ($1 > 1) { label += "x" + $1; }
for (let i = 0; i < $1; i++) { result += roll($2); }
if (Number($3)) {
	result += Number($3);
	label += $3;
}
if (isNaN(label.slice(1))) { label = "(" + label + ")"; }
return "\u{1F3B2} __" + result + "__ /" + label;
__
{count: >0, default: 1}d{max: >0}{add: + or \\- followed by >0, default: +0} - A dice roller shortcut, same as d{max}, but with optional {count} and {add} parameters.  {count} is the number of dice to roll and add together.  {add} is "+" or "-" followed by an amount to adjust the result by.
    - Examples - d100, 3d20, d10+5, 3d6+6
`,
    buttonView: { visible: true, groups: {} }
  }
);

// ui_setting_shortcuts.ts
var SettingUi_Shortcuts = class {
  static create(parent, settings, app2) {
    return this.create_internal(parent, settings, app2);
  }
  static getContents() {
    return this.getContents_internal();
  }
  static create_internal(parent, settings, app2) {
    new import_obsidian8.Setting(parent).setName("Shortcuts").setDesc("Define shortcuts here (in addition to shortcut-files).").addButton((button) => {
      return button.setButtonText("Add shortcut").setClass("iscript_spacedUi").onClick(() => this.addShortcutUi(app2));
    }).addButton((button) => {
      return button.setButtonText("Add defaults").setClass("iscript_spacedUi").onClick((() => {
        let defaultShortcuts = ShortcutLoader.parseShortcutFile(
          "Settings",
          DEFAULT_SETTINGS.shortcuts,
          true,
          true
        ).shortcuts;
        this.removeShortcutsFromUi(defaultShortcuts);
        for (const defaultShortcut of defaultShortcuts) {
          this.addShortcutUi(app2, defaultShortcut);
        }
      }).bind(this));
    });
    this._shortcutUis = parent.createEl("div", { cls: "iscript_shortcuts" });
    const shortcuts = ShortcutLoader.parseShortcutFile(
      "Settings",
      settings.shortcuts,
      true,
      true
    ).shortcuts;
    for (const shortcut of shortcuts) {
      this.addShortcutUi(app2, shortcut);
    }
  }
  static getContents_internal() {
    let result = "";
    for (const shortcutUi of this._shortcutUis.childNodes) {
      if (!shortcutUi.childNodes[4].value) {
        continue;
      }
      result += "\n__\n" + shortcutUi.childNodes[0].value + "\n__\n" + shortcutUi.childNodes[4].value + "\n__\n" + shortcutUi.childNodes[5].value + "\n";
    }
    return { shortcuts: result };
  }
  static addShortcutUi(app2, shortcut) {
    let g = this._shortcutUis.createEl("div", { cls: "iscript_shortcut" });
    let e = g.createEl("input", { cls: "iscript_shortcutTest" });
    e.setAttr("type", "text");
    e.setAttr("placeholder", "Test (regex)");
    if (shortcut) {
      e.value = shortcut.test.source;
      if (e.value === "(?:)") {
        e.value = "";
      }
    }
    e = g.createEl("button", { cls: "iscript_upButton iscript_spacedUi" });
    e.group = g;
    e.onclick = SettingUi_Helper.upButtonClicked;
    e.listOffset = 0;
    e = g.createEl("button", { cls: "iscript_downButton iscript_spacedUi" });
    e.group = g;
    e.onclick = SettingUi_Helper.downButtonClicked;
    e = g.createEl("button", { cls: "iscript_deleteButton iscript_spacedUi" });
    e.group = g;
    e.onclick = SettingUi_Helper.deleteButtonClicked;
    e.app = app2;
    e.typeTitle = "shortcut";
    e = g.createEl("textarea", { cls: "iscript_shortcutExpansion" });
    e.setAttr("placeholder", "Expansion (JavaScript)");
    if (shortcut) {
      e.value = shortcut.expansion;
    }
    e = g.createEl("textarea", { cls: "iscript_shortcutAbout" });
    e.setAttr("placeholder", "About (text)");
    if (shortcut) {
      e.value = shortcut.about;
    }
  }
  static removeShortcutsFromUi(shortcuts) {
    let toRemove = [];
    for (const shortcutUi of this._shortcutUis.childNodes) {
      const test = shortcutUi.childNodes[0].value;
      const expansion = shortcutUi.childNodes[4].value;
      for (let k = 0; k < shortcuts.length; k++) {
        if (shortcuts[k].expansion !== expansion) {
          continue;
        }
        if (shortcuts[k].test.source !== test && (shortcuts[k].test.source !== "(?:)" || test !== "")) {
          continue;
        }
        toRemove.push(shortcutUi);
        break;
      }
    }
    for (const shortcutUi of toRemove) {
      shortcutUi.remove();
    }
  }
};

// ui_setting_shortcutFormat.ts
var import_obsidian9 = require("obsidian");
var SettingUi_ShortcutFormat = class {
  static create(parent, settings) {
    return this.create_internal(parent, settings);
  }
  static getContents() {
    return this._settings;
  }
  static finalize() {
    this.finalize_internal();
  }
  static create_internal(parent, settings) {
    this._settings = { prefix: settings.prefix, suffix: settings.suffix };
    this._originalSettings = { prefix: settings.prefix, suffix: settings.suffix };
    parent.createEl("h2", { text: "Shortcut format" });
    this._formatErrMsgContainerUi = parent.createEl("div", { cls: "iscript_alert iscript_hidden" });
    this._formatErrMsgContainerUi.createEl("span", { text: "ERROR", cls: "iscript_errMsgTitle" });
    this._formatErrMsgContentUi = this._formatErrMsgContainerUi.createEl("span");
    new import_obsidian9.Setting(parent).setName("Shortcut prefix").setDesc("What to type BEFORE a shortcut.").addText((text) => {
      return text.setPlaceholder("Prefix").setValue(settings.prefix).onChange((value) => {
        this._settings.prefix = value;
        this.refreshShortcutExample();
        this.isFormatValid();
      });
    }).settingEl.toggleClass("iscript_settingBundledTop", !import_obsidian9.Platform.isMobile);
    new import_obsidian9.Setting(parent).setName("Shortcut suffix").setDesc("What to type AFTER a shortcut.").addText((text) => {
      return text.setPlaceholder("Suffix").setValue(settings.suffix).onChange((value) => {
        this._settings.suffix = value;
        this.refreshShortcutExample();
        this.isFormatValid();
      });
    }).settingEl.toggleClass("iscript_settingBundled", !import_obsidian9.Platform.isMobile);
    const exampleOuter = parent.createEl("div", { cls: "setting-item" });
    exampleOuter.toggleClass("iscript_settingBundled", !import_obsidian9.Platform.isMobile);
    const exampleInfo = exampleOuter.createEl("div", { cls: "setting-item-info" });
    exampleInfo.createEl("div", { text: "Example", cls: "setting-item-name" });
    exampleInfo.createEl(
      "div",
      {
        text: 'How to write the shortcut "D100"',
        cls: "setting-item-description"
      }
    );
    const exampleItemControl = exampleOuter.createEl("div", { cls: "setting-item-control" });
    this._shortcutExampleUi = exampleItemControl.createEl("div", { cls: "iscript_labelControl" });
    this.refreshShortcutExample();
  }
  static finalize_internal() {
    if (!this.isFormatValid()) {
      this._settings.prefix = this._originalSettings.prefix;
      this._settings.suffix = this._originalSettings.suffix;
    }
  }
  static isFormatValid() {
    let err = "";
    if (!this._settings.prefix) {
      err = "Prefix cannot be blank";
    } else if (!this._settings.suffix) {
      err = "Suffix cannot be blank";
    } else if (this._settings.suffix.includes(this._settings.prefix)) {
      err = "Suffix cannot contain prefix";
    } else if (this._settings.prefix.match(/\*|\(|\_|\{|\[|\'|\"|\`/) || this._settings.suffix.match(/\*|\(|\_|\{|\[|\'|\"|\`/)) {
      err = "Prefix and suffix cannot contain characters with auto-complete: * ( _ { [ ' \" `";
    }
    if (!err) {
      this._formatErrMsgContainerUi.toggleClass(
        "iscript_hidden",
        true
      );
      return true;
    } else {
      this._formatErrMsgContainerUi.toggleClass(
        "iscript_hidden",
        false
      );
      this._formatErrMsgContentUi.innerText = err;
      return false;
    }
  }
  static refreshShortcutExample() {
    this._shortcutExampleUi.innerText = this._settings.prefix + "D100" + this._settings.suffix;
  }
};

// ui_setting_expansionFormat.ts
var import_obsidian10 = require("obsidian");
var SettingUi_ExpansionFormat = class {
  static create(parent, settings) {
    return this.create_internal(parent, settings);
  }
  static getContents() {
    return this._settings;
  }
  static create_internal(parent, settings) {
    this._settings = {
      expansionPrefix: settings.expansionPrefix,
      expansionLinePrefix: settings.expansionLinePrefix,
      expansionSuffix: settings.expansionSuffix
    };
    parent.createEl("h2", { text: "Common expansion format" });
    new import_obsidian10.Setting(parent).setName("Prefix").setDesc("Text added to the start of a formatted expansion.").addText((text) => {
      return text.setPlaceholder("").setValue(settings.expansionPrefix).onChange((value) => {
        this._settings.expansionPrefix = value;
      });
    }).settingEl.toggleClass("iscript_settingBundledTop", true);
    new import_obsidian10.Setting(parent).setName("Line-prefix").setDesc("Text added to the start of each line of a formatted expansion.").addText((text) => {
      return text.setPlaceholder("").setValue(settings.expansionLinePrefix).onChange((value) => {
        this._settings.expansionLinePrefix = value;
      });
    }).settingEl.toggleClass("iscript_settingBundled", true);
    new import_obsidian10.Setting(parent).setName("Suffix").setDesc("Text added to the end of a formatted expansion.").addText((text) => {
      return text.setPlaceholder("").setValue(settings.expansionSuffix).onChange((value) => {
        this._settings.expansionSuffix = value;
      });
    }).settingEl.toggleClass("iscript_settingBundled", true);
  }
};

// ui_setting_other.ts
var import_obsidian11 = require("obsidian");
var SettingUi_Other = class {
  static create(parent, settings) {
    return this.create_internal(parent, settings);
  }
  static getContents() {
    return this._settings;
  }
  static create_internal(parent, settings) {
    this._settings = {
      autocomplete: settings.autocomplete,
      autocompleteHelp: settings.autocompleteHelp,
      devMode: settings.devMode,
      allowExternal: settings.allowExternal
    };
    parent.createEl("h2", { text: "Other Settings" });
    new import_obsidian11.Setting(parent).setName("Autocomplete").setDesc("Enable / disable autocomplete for shortcut entry.").addToggle((toggle) => {
      return toggle.setValue(settings.autocomplete === void 0 ? true : settings.autocomplete).onChange((value) => this._settings.autocomplete = value);
    });
    new import_obsidian11.Setting(parent).setName("Autocomplete help popup").setDesc("Enable / disable the shortcut descriptor popup during autocomplete.").addToggle((toggle) => {
      return toggle.setValue(settings.autocompleteHelp === void 0 ? true : settings.autocompleteHelp).onChange((value) => this._settings.autocompleteHelp = value);
    });
    new import_obsidian11.Setting(parent).setName("Developer mode").setDesc("Shortcut-files are monitored for updates if this is on.").addToggle((toggle) => {
      return toggle.setValue(settings.devMode).onChange((value) => this._settings.devMode = value);
    });
    if (!import_obsidian11.Platform.isMobile) {
      new import_obsidian11.Setting(parent).setName("Allow external").setDesc("Shortcuts can run external commands if this is on.").addToggle((toggle) => {
        return toggle.setValue(settings.allowExternal).onChange((value) => this._settings.allowExternal = value);
      }).descEl.createEl("div", {
        cls: "iscript_alert",
        text: "WARNING: enabling this increases the danger from malicious shortcuts"
      });
    }
    parent.createEl("hr");
    let donationCaption = parent.createEl("div", { cls: "iscript_donationsCaption" });
    donationCaption.innerHTML = "If you find this plugin useful, then a donation lets me know<br/>that I should keep working to make it better.";
    let donations = parent.createEl("div", { cls: "iscript_donations" });
    donations.innerHTML = `<a href="https://paypal.me/jonheard99?country.x=US&amp;locale.x=en_US" rel="nofollow" style=""><svg xmlns="http://www.w3.org/2000/svg" width="150" height="40"><path fill="#253B80" d="M46.211 6.749h-6.839a.95.95 0 0 0-.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zM47 13.154c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zM66.654 13.075h-3.275a.57.57 0 0 0-.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.803l1.77-11.209a.568.568 0 0 0-.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zM84.096 13.075h-3.291a.954.954 0 0 0-.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0-.912-.678h-3.234a.57.57 0 0 0-.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0-.468-.895z"></path>
<path fill="#179BD7" d="M94.992 6.749h-6.84a.95.95 0 0 0-.938.802l-2.766 17.537a.569.569 0 0 0 .562.658h3.51a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zM115.434 13.075h-3.273a.567.567 0 0 0-.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.803l1.771-11.209a.571.571 0 0 0-.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zM119.295 7.23l-2.807 17.858a.569.569 0 0 0 .562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 0 0-.562-.659h-3.16a.571.571 0 0 0-.562.482z"></path>
<path fill="#253B80" d="M7.266 29.154l.523-3.322-1.165-.027H1.061L4.927 1.292a.316.316 0 0 1 .314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 0 1 1.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 0 1-1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 0 0-.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 0 1-.096.035H7.266z"></path>
<path fill="#179BD7" d="M23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545H9.326c-.661 0-1.218.48-1.321 1.132L6.596 26.83l-.399 2.533a.704.704 0 0 0 .695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.667 4.667 0 0 0-1.336-1.03z"></path>
<path fill="#222D65" d="M21.754 7.151a9.757 9.757 0 0 0-1.203-.267 15.284 15.284 0 0 0-2.426-.177h-7.352a1.172 1.172 0 0 0-1.159.992L8.05 17.605l-.045.289a1.336 1.336 0 0 1 1.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 0 0-1.017-.429 9.045 9.045 0 0 0-.277-.087z"></path>
<path fill="#253B80" d="M9.614 7.699a1.169 1.169 0 0 1 1.159-.991h7.352c.871 0 1.684.057 2.426.177a9.757 9.757 0 0 1 1.481.353c.365.121.704.264 1.017.429.368-2.347-.003-3.945-1.272-5.392C20.378.682 17.853 0 14.622 0h-9.38c-.66 0-1.223.48-1.325 1.133L.01 25.898a.806.806 0 0 0 .795.932h5.791l1.454-9.225 1.564-9.906z"></path></svg>
</a><a href="https://www.buymeacoffee.com/jonheard" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 45px !important;width: 163px !important;"></a>`;
  }
};

// ui_setting_actions.ts
var SettingUi_Actions = class {
  static create(parent) {
    return this.create_internal(parent);
  }
  static create_internal(parent) {
    parent.createEl("div").innerHTML = "&nbsp;";
    parent.createEl("h2", { text: "Actions" });
    const actionsDiv = parent.createEl("div", { cls: "iscript_actionsSection" });
    const openButtonsView = actionsDiv.createEl("button", { text: "Open buttons view" });
    openButtonsView.toggleClass("iscript_button_disabled", ButtonView.isOpen());
    openButtonsView.onclick = async () => {
      if (openButtonsView.classList.contains("iscript_button_disbled")) {
        return;
      }
      ButtonView.activateView(true);
      openButtonsView.toggleClass("iscript_button_disabled", true);
    };
    actionsDiv.createEl("div").innerHTML = "&nbsp;";
    const resetSettings = actionsDiv.createEl("button", { text: "Reset settings to defaults" });
    resetSettings.onclick = async () => {
      const plugin = InlineScriptsPlugin.getInstance();
      if (await Popups.getInstance().confirm(
        "Confirm resetting ALL settings to their default values."
      )) {
        plugin.settings = InlineScriptsPlugin.getDefaultSettings();
        plugin.settingsUi.display();
        plugin.settings.shortcuts = "";
      }
    };
  }
};

// ui_setting_alerts.ts
var SettingUi_Alerts = class {
  static create(parent) {
    return this.create_internal(parent);
  }
  static create_internal(parent) {
    let alert_pluginUpdate = parent.createEl("div", { cls: "iscript_alert iscript_hidden" });
    alert_pluginUpdate.innerText = "Plugin update available";
    alert_pluginUpdate.style["margin-top"] = "1em";
    (async () => {
      try {
        const latestVersion = (await window.request(
          {
            url: "https://api.github.com/repos/jon-heard/obsidian-inline-scripts/releases/latest",
            method: "GET",
            headers: { "Cache-Control": "no-cache" }
          }
        )).match(/\"name\": \"(.*)\"/)[1];
        const currentVersion = InlineScriptsPlugin.getInstance().manifest.version;
        if (HelperFncs.versionCompare(currentVersion, latestVersion) < 0) {
          alert_pluginUpdate.toggleClass("iscript_hidden", false);
          alert_pluginUpdate.innerHTML += ": &nbsp; <b>" + latestVersion + "</b>";
        }
      } catch {
      }
    })();
    let alert_libraryUpdate = parent.createEl("div", { cls: "iscript_alert iscript_hidden" });
    alert_libraryUpdate.innerHTML = "Library update available <i>(re-import)</i>";
    alert_libraryUpdate.style["margin-top"] = "1em";
    alert_libraryUpdate.id = "alert_libraryUpdates";
    (async () => {
      try {
        const plugin = InlineScriptsPlugin.getInstance();
        const latestVersion = (await window.request(
          {
            url: "https://raw.githubusercontent.com/jon-heard/obsidian-inline-scripts-library/main/README.md",
            method: "GET",
            headers: { "Cache-Control": "no-cache" }
          }
        )).match(/# Version (.*)/)[1] || "";
        let versionFilePath = "";
        const shortcutFiles = plugin.settings.shortcutFiles;
        for (const shortcutFile of shortcutFiles) {
          if (shortcutFile.address.endsWith("state.sfile.md")) {
            versionFilePath = shortcutFile.address.slice(0, -14) + "\u039E_libraryVersion.md";
            break;
          }
        }
        const versionFile = plugin.app.vault.fileMap[versionFilePath];
        const currentVersion = !versionFile ? "" : await plugin.app.vault.cachedRead(versionFile) || "";
        if (HelperFncs.versionCompare(currentVersion, latestVersion) < 0) {
          alert_libraryUpdate.toggleClass("iscript_hidden", false);
          alert_libraryUpdate.innerHTML += ": &nbsp; <b>" + latestVersion + "</b>";
        }
      } catch {
      }
    })();
  }
};

// Dfc.ts
var Dfc = class {
  constructor(filenames, refreshFnc, onFileRemoved, fileOrderImportant) {
    this.constructor_internal(filenames, refreshFnc, onFileRemoved, fileOrderImportant);
  }
  destructor() {
    this.setMonitorType(0 /* None */);
  }
  setMonitorType(monitorType) {
    this.setMonitorType_internal(monitorType);
  }
  updateFileList(newFileList, forceRefresh) {
    this.updateFileList_internal(newFileList, forceRefresh);
  }
  constructor_internal(filenames, refreshFnc, onFileRemoved, fileOrderImportant) {
    this._refreshFnc = refreshFnc;
    this._onFileRemoved = onFileRemoved;
    this._fileOrderImportant = fileOrderImportant;
    this._fileData = {};
    this._monitorType = 0 /* None */;
    this._currentFilesName = this.getApp().workspace.getActiveFile()?.path ?? "";
    this._currentFileWasModified = false;
    this._onAnyFileModified = this.onAnyFileModified.bind(this);
    this._onActiveLeafChanged = this.onActiveLeafChanged.bind(this);
    this._onAnyFileAdded = this.onAnyFileAdded.bind(this);
    this._onAnyFileRemoved = this.onAnyFileRemoved.bind(this);
    this._onAnyFileRenamed = this.onAnyFileRenamed.bind(this);
    setTimeout(() => {
      this.updateFileList(filenames, true);
    }, 0);
  }
  getApp() {
    return InlineScriptsPlugin.getInstance().app;
  }
  setMonitorType_internal(monitorType) {
    if (monitorType === this._monitorType) {
      return;
    }
    const app2 = this.getApp();
    app2.workspace.onLayoutReady(() => {
      if (this._monitorType !== 0 /* None */) {
        app2.vault.off("modify", this._onAnyFileModified);
        app2.workspace.off("active-leaf-change", this._onActiveLeafChanged);
        app2.vault.off("create", this._onAnyFileAdded);
        app2.vault.off("delete", this._onAnyFileRemoved);
        app2.vault.off("rename", this._onAnyFileRenamed);
      }
      this._monitorType = monitorType;
      if (this._monitorType !== 0 /* None */) {
        app2.vault.on("modify", this._onAnyFileModified);
        app2.workspace.on("active-leaf-change", this._onActiveLeafChanged);
        app2.vault.on("create", this._onAnyFileAdded);
        app2.vault.on("delete", this._onAnyFileRemoved);
        app2.vault.on("rename", this._onAnyFileRenamed);
      }
      this._currentFilesName = app2.workspace.getActiveFile()?.path ?? "";
    });
  }
  onAnyFileModified(file) {
    if (!this._fileData[file.path]) {
      return;
    }
    if (file.path === this._currentFilesName) {
      this._currentFileWasModified = true;
    } else {
      this.refresh(true);
    }
  }
  onActiveLeafChanged() {
    if (this._fileData[this._currentFilesName]) {
      if (this._currentFileWasModified || this._monitorType === 2 /* OnTouch */) {
        this.refresh(true);
      }
    }
    this._currentFileWasModified = false;
    this._currentFilesName = this.getApp().workspace.getActiveFile()?.path ?? "";
  }
  onAnyFileAdded(file) {
    if (!this._fileData[file.path]) {
      return;
    }
    this.refresh(true);
  }
  onAnyFileRemoved(file) {
    if (!this._fileData[file.path]) {
      return;
    }
    this.refresh(true);
    if (this._onFileRemoved) {
      this._onFileRemoved(file.path);
    }
  }
  onAnyFileRenamed(file) {
    const app2 = this.getApp();
    if (file === app2.workspace.getActiveFile()) {
      this._currentFilesName = app2.workspace.getActiveFile()?.path ?? "";
    }
  }
  updateFileList_internal(newFileList, forceRefresh) {
    let hasChanged = false;
    for (const filename in this._fileData) {
      if (!newFileList.includes(filename)) {
        if (this._onFileRemoved) {
          this._onFileRemoved(filename);
        }
        delete this._fileData[filename];
        hasChanged = true;
      }
    }
    for (const newFile of newFileList) {
      if (!this._fileData.hasOwnProperty(newFile)) {
        this._fileData[newFile] = { modDate: Number.MIN_SAFE_INTEGER };
        if (this._fileOrderImportant) {
          this._fileData[newFile].ordering = -1;
        }
        hasChanged = true;
      }
    }
    if (this._fileOrderImportant) {
      for (let i = 0; i < newFileList.length; i++) {
        if (this._fileData[newFileList[i]].ordering !== i) {
          this._fileData[newFileList[i]].ordering = i;
          hasChanged = true;
        }
      }
    }
    this.refresh(hasChanged || forceRefresh);
  }
  refresh(forceRefresh) {
    const app2 = this.getApp();
    app2.workspace.onLayoutReady(async () => {
      let hasChanged = false;
      for (const filename in this._fileData) {
        const file = app2.vault.fileMap[filename];
        if (file) {
          if (this._fileData[filename].modDate < file.stat.mtime) {
            this._fileData[filename].modDate = file.stat.mtime;
            hasChanged = true;
          }
        } else if (this._fileData[filename].modDate !== Number.MIN_SAFE_INTEGER) {
          this._fileData[filename].modDate = Number.MIN_SAFE_INTEGER;
          hasChanged = true;
        }
      }
      if ((hasChanged || forceRefresh) && this._refreshFnc) {
        this._refreshFnc();
      }
    });
  }
};

// ui_settings.ts
var InlineScriptsPluginSettings = class extends import_obsidian12.PluginSettingTab {
  constructor(plugin) {
    super(plugin.app, plugin);
  }
  display() {
    this.display_internal();
  }
  hide() {
    this.hide_internal();
  }
  display_internal() {
    const c = this.containerEl;
    c.empty();
    c.createEl("div", { text: this.plugin.manifest.version, cls: "iscript_version" });
    SettingUi_Alerts.create(c);
    SettingUi_Actions.create(c);
    c.createEl("h2", { text: "Shortcut Sources" });
    SettingUi_ShortcutFiles.create(c, this.plugin.settings, this.plugin.app);
    SettingUi_Shortcuts.create(c, this.plugin.settings, this.plugin.app);
    SettingUi_ShortcutFormat.create(c, this.plugin.settings);
    SettingUi_ExpansionFormat.create(c, this.plugin.settings);
    SettingUi_Other.create(c, this.plugin.settings);
    c.createEl("div", { text: this.plugin.manifest.version, cls: "iscript_version" });
  }
  hide_internal() {
    let newSettings = {};
    newSettings.version = this.plugin.manifest.version;
    SettingUi_ShortcutFormat.finalize();
    Object.assign(newSettings, SettingUi_ShortcutFormat.getContents());
    Object.assign(newSettings, SettingUi_ExpansionFormat.getContents());
    Object.assign(newSettings, SettingUi_Other.getContents());
    Object.assign(newSettings, SettingUi_ShortcutFiles.getContents());
    Object.assign(newSettings, SettingUi_Shortcuts.getContents());
    newSettings.buttonView = this.plugin.settings.buttonView;
    const oldShortcuts = ShortcutLoader.parseShortcutFile(
      "",
      this.plugin.settings.shortcuts,
      true,
      true
    ).shortcuts;
    const newShortcuts = ShortcutLoader.parseShortcutFile(
      "",
      newSettings.shortcuts,
      true,
      true
    ).shortcuts;
    let forceRefreshShortcuts = newShortcuts.length !== oldShortcuts.length;
    if (!forceRefreshShortcuts) {
      for (let i = 0; i < newShortcuts.length; i++) {
        if (newShortcuts[i].test.source !== oldShortcuts[i].test.source || newShortcuts[i].expansion !== oldShortcuts[i].expansion || newShortcuts[i].about !== oldShortcuts[i].about) {
          forceRefreshShortcuts = true;
          break;
        }
      }
    }
    this.plugin.settings = newSettings;
    this.plugin.shortcutDfc.setMonitorType(
      this.plugin.settings.devMode ? 2 /* OnTouch */ : 1 /* OnModify */
    );
    this.plugin.shortcutDfc.updateFileList(
      this.plugin.getActiveShortcutFileAddresses(),
      forceRefreshShortcuts
    );
    this.plugin.suffixEndCharacter = this.plugin.settings.suffix.charAt(this.plugin.settings.suffix.length - 1);
    this.plugin.saveSettings();
  }
};

// ShortcutLinks.ts
var ShortcutLinks = class {
  static staticConstructor() {
    this.staticConstructor_internal();
  }
  static staticConstructor_internal() {
    InlineScriptsPlugin.getInstance().registerMarkdownPostProcessor(this.processor);
  }
  static processor(el, ctx) {
    let nodeList = el.querySelectorAll("code");
    if (!nodeList.length) {
      return;
    }
    for (let index = 0; index < nodeList.length; index++) {
      const node = nodeList.item(index);
      const nodeInnerText = node.innerText;
      const notePath = ctx.sourcePath;
      const target = nodeInnerText.indexOf("^") == -1 ? null : nodeInnerText.slice(nodeInnerText.indexOf("^") + 1, nodeInnerText.indexOf(":")).trim();
      const resolutionFnc = nodeInnerText.match("^iscript-once(?: |:)") ? ShortcutLinks.linkResolution_once : nodeInnerText.match("^iscript-append(?: |:)") ? ShortcutLinks.linkResolution_append : nodeInnerText.match("^iscript-prepend(?: |:)") ? ShortcutLinks.linkResolution_prepend : nodeInnerText.match("^iscript(?: |:)") ? ShortcutLinks.linkResolution_standard : null;
      if (!resolutionFnc) {
        continue;
      }
      let parts = nodeInnerText.slice(nodeInnerText.indexOf(":") + 1).split(/ ?\| ?/g);
      if (parts[0] === "") {
        continue;
      }
      let shortcutText = parts[0];
      parts = parts.map((v) => v.trim());
      if (shortcutText.startsWith(" ")) {
        shortcutText = shortcutText.slice(1);
      }
      if (shortcutText.endsWith(" ")) {
        shortcutText = shortcutText.slice(0, -1);
      }
      let a = document.createElement("a");
      a.classList.add("internal-link");
      a.classList.add("iscript-link");
      a.dataset["source"] = nodeInnerText;
      a.innerText = parts[1] || parts[0];
      a.setAttr("href", "#");
      a.onclick = async function() {
        let targetPos = null;
        if (target) {
          const noteFile = app.vault.fileMap[notePath];
          if (!noteFile) {
            return;
          }
          const fileCache = app.metadataCache.getFileCache(noteFile);
          if (!fileCache) {
            return;
          }
          const blockData = fileCache.blocks[target];
          if (!blockData) {
            return;
          }
          targetPos = {
            start: blockData.position.start.offset,
            end: blockData.position.end.offset
          };
          const noteContent = await app.vault.cachedRead(app.vault.fileMap[notePath]);
          const blockContent = noteContent.slice(targetPos.start, targetPos.end);
          const idMatch = blockContent.match(/\s\^[^\n]+$/);
          if (idMatch) {
            targetPos.end -= idMatch[0].length;
          }
        }
        let result = await ShortcutExpander.expand(
          shortcutText,
          false,
          { isUserTriggered: true },
          parts.slice(3).map((v) => {
            return { caption: v };
          })
        );
        if (result) {
          if (parts.length > 2 && parts[2]) {
            result = new Function("$$", "return " + parts[2])(result);
          }
          resolutionFnc(this, result, targetPos);
        }
      };
      node.parentNode.insertBefore(a, node);
      node.remove();
    }
  }
  static linkResolution_standard(ui, expansion, targetPos) {
    if (targetPos) {
      HelperFncs.addToNote(expansion, targetPos);
    } else {
      ui.innerHTML = expansion;
    }
  }
  static linkResolution_once(ui, expansion, targetPos) {
    let newUi = document.createElement("span");
    if (targetPos) {
      newUi.innerHTML = ui.innerHTML;
      HelperFncs.addToNote(expansion, targetPos);
    } else {
      newUi.innerHTML = expansion;
    }
    ui.parentNode.insertBefore(newUi, ui);
    ui.remove();
  }
  static linkResolution_append(ui, expansion, targetPos) {
    if (targetPos) {
      targetPos.start = targetPos.end;
    }
    HelperFncs.addToNote(expansion, targetPos);
  }
  static linkResolution_prepend(ui, expansion, targetPos) {
    if (targetPos) {
      targetPos.end = targetPos.start;
    } else {
      targetPos = { start: 0, end: 0 };
    }
    HelperFncs.addToNote(expansion, targetPos);
  }
};

// AutoComplete.ts
var import_obsidian13 = require("obsidian");
var SUGGESTION_LIMIT = 1e3;
var REGEX_SYNTAX_SPLITTER = /~~}|(?=\{)/;
var REGEX_FIRST_PARAMETER_START = / ?\{/;
var AutoComplete = class extends import_obsidian13.EditorSuggest {
  constructor(plugin) {
    super(plugin.app);
    this.constructor_internal(plugin);
  }
  destructor() {
    document.getElementById("shortcutSuggestionDescription")?.remove();
  }
  onTrigger(cursor, editor) {
    return this.onTrigger_internal(cursor, editor);
  }
  getSuggestions(context) {
    return this.getSuggestions_internal(context);
  }
  renderSuggestion(suggestion, el) {
    this.renderSuggestion_internal(suggestion, el);
  }
  selectSuggestion(suggestion) {
    this.selectSuggestion_internal(suggestion);
  }
  constructor_internal(plugin) {
    this._plugin = plugin;
    this.limit = SUGGESTION_LIMIT;
    this._resortSyntaxes = this.resortSyntaxes.bind(this);
    this._forceSetSelectedItem = this.suggestions.forceSetSelectedItem.bind(this.suggestions);
    this.suggestions.forceSetSelectedItem = this.forceSelectedItem_modified.bind(this);
    this._open = this.open;
    this.open = this.open_modified;
    this._close = this.close;
    this.close = this.close_modified;
    this._suggestionDescriptionUi = document.getElementById("shortcutSuggestionDescription");
    if (!this._suggestionDescriptionUi) {
      plugin.app.workspace.onLayoutReady(() => {
        this._suggestionDescriptionUi = document.createElement("div");
        this._suggestionDescriptionUi.id = "shortcutSuggestionDescription";
        this._suggestionDescriptionUi.classList.add("iscript_suggestionDescription");
        const parent = document.querySelector(".workspace-split.mod-root");
        parent.insertBefore(this._suggestionDescriptionUi, parent.firstChild);
      });
    }
  }
  onTrigger_internal(cursor, editor) {
    if (InlineScriptsPlugin.getInstance().settings.autocomplete === false) {
      return;
    }
    const prefix = this._plugin.settings.prefix;
    const suffix = this._plugin.settings.suffix;
    const lineUpToCursor = editor.getLine(cursor.line).slice(0, cursor.ch);
    let shortcutUnderCaret = null;
    let shortcutStart = lineUpToCursor.lastIndexOf(prefix);
    if (shortcutStart !== -1) {
      if (lineUpToCursor.indexOf(suffix, shortcutStart + prefix.length) === -1) {
        shortcutUnderCaret = lineUpToCursor.slice(shortcutStart + prefix.length);
      }
    }
    if (shortcutUnderCaret !== null) {
      return {
        end: cursor,
        start: {
          ch: lineUpToCursor.length - shortcutUnderCaret.length,
          line: cursor.line
        },
        query: shortcutUnderCaret
      };
    } else {
      return null;
    }
  }
  getSuggestions_internal(context) {
    if (!this._plugin?.syntaxesSorted) {
      return null;
    }
    const result = this._plugin.syntaxesSorted.map((p) => {
      p.match = context.query.match(p.regex);
      return p;
    }).filter((p) => {
      return p.match;
    }).sort(this._resortSyntaxes);
    this._descriptions = result.map((v) => v.description);
    return result;
  }
  renderSuggestion_internal(suggestion, el) {
    let text = suggestion.text.replace("<", "&lt;");
    if (suggestion.match.length > 1) {
      let currentParameterIndex = -1;
      let match = (this.context.query + "\u241F").match(suggestion.regex);
      if (match) {
        for (let i = 1; i < match.length; i++) {
          if (match[i].endsWith("\u241F")) {
            currentParameterIndex = i;
            break;
          }
        }
      } else {
      }
      if (currentParameterIndex !== -1) {
        const parts = text.replaceAll("}", "}~~}").split(REGEX_SYNTAX_SPLITTER);
        let parameterCounter = 0;
        for (let i = 0; i < parts.length; i++) {
          if (parts[i].startsWith("{") && parts[i].endsWith("}")) {
            parameterCounter++;
            if (parameterCounter == currentParameterIndex) {
              parts[i] = "<span class='iscript_suggestionHighlight'>" + parts[i] + "</span>";
              text = parts.join("");
              break;
            }
          }
        }
      }
    }
    el.innerHTML = text;
  }
  selectSuggestion_internal(suggestion) {
    if (!this.context) {
      return;
    }
    const suggestionEndIndex = suggestion.text.match(REGEX_FIRST_PARAMETER_START)?.index ?? suggestion.text.length;
    const fill = suggestion.text.slice(0, suggestionEndIndex);
    if (!this.context.query.startsWith(fill)) {
      this.context.editor.replaceRange(fill, this.context.start, this.context.end);
      this.context.start.ch += fill.length;
      this.context.editor.setCursor(this.context.start);
    } else if (fill === suggestion.text) {
      const plugin = InlineScriptsPlugin.getInstance();
      this.context.editor.replaceRange(
        plugin.settings.suffix,
        this.context.end,
        this.context.end
      );
      this.context.end.ch += plugin.settings.suffix.length;
      this.context.editor.setCursor(this.context.end);
      plugin.tryShortcutExpansion();
    } else {
      const parts = suggestion.text.replaceAll("}", "}~~}").split(REGEX_SYNTAX_SPLITTER);
      let parameterIndex = suggestion.match.length - 1;
      for (let i = parts.length - 1; i >= 0; i--) {
        if (parts[i].startsWith("{")) {
          if (!suggestion.match[parameterIndex] && !parts[i].includes("default")) {
            break;
          }
          parameterIndex--;
        }
        if (parameterIndex === 0) {
          const plugin = InlineScriptsPlugin.getInstance();
          this.context.editor.replaceRange(
            plugin.settings.suffix,
            this.context.end,
            this.context.end
          );
          this.context.end.ch += plugin.settings.suffix.length;
          this.context.editor.setCursor(this.context.end);
          plugin.tryShortcutExpansion();
          break;
        }
      }
    }
  }
  resortSyntaxes(a, b) {
    return this.indexOfDifference(b.text, this.context.query) - this.indexOfDifference(a.text, this.context.query);
  }
  indexOfDifference(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (i >= b.length) {
        return b.length;
      }
      if (a[i] !== b[i]) {
        return i;
      }
    }
    return a.length;
  }
  forceSelectedItem_modified(e, t) {
    this._forceSetSelectedItem(e, t);
    this._suggestionDescriptionUi.setText("");
    this._suggestionDescriptionUi.innerHTML = HelperFncs.parseMarkdown(this._descriptions[this.suggestions.selectedItem]);
  }
  open_modified() {
    this._open();
    if (InlineScriptsPlugin.getInstance().settings.autocompleteHelp === false) {
      return;
    }
    this._suggestionDescriptionUi.style.display = "unset";
    setTimeout(() => {
      const suggestListRect = this.suggestEl.getBoundingClientRect();
      const bottom = suggestListRect.y + suggestListRect.height;
      if (bottom > window.innerHeight * 0.7) {
        this._suggestionDescriptionUi.classList.add("iscript_suggestionDescription_above");
      } else {
        this._suggestionDescriptionUi.classList.remove("iscript_suggestionDescription_above");
      }
    }, 0);
  }
  close_modified() {
    this._close();
    this._suggestionDescriptionUi.style.display = "none";
  }
};

// _Plugin.ts
var ANNOUNCEMENTS = [
  {
    version: "0.21.0",
    message: "0.21.x is a major release for open-beta phase.\nIt has some great features!  However...\n A few of the changes may be incompatible with existing shortcuts and/or shortcut-files.\n<a href='https://github.com/jon-heard/obsidian-text-expander-js/discussions/22'>Please check here for details</a>\n...including some simple steps to resolve any incompatibilities."
  },
  {
    version: "0.22.0",
    message: "0.22.x adds some notable features:<ul style='text-align:left'><li>A side panel onto which you can add custom buttons to quickly run shortcuts.</li><li>Links you can add to your notes that will run a shortcut when clicked.</li><li>Tutorial videos for the more stable and complex shortcut-files in the library</li><li>Support shortcut-files added to the library (X_ui.sfile) to provide more graphical interfaces.</li></ul>Watch <a href='https://www.youtube.com/watch?v=wOxZwovPfxg'>this video</a> for a demonstration of the major features being added in 0.22.0.\nCheck <a href='https://github.com/jon-heard/obsidian-inline-scripts/discussions/30'>here</a> for more details on this release."
  },
  {
    version: "0.23.0",
    message: "<div style='text-align:left;padding:0 1.5em'>NOTE - The old Inline Scripts library is incompatible with this new release.  Re-import the latest library to resolve the errors.<br/><br/>0.23.x adds some quality of life features.  Notably:<ul><li>The state system now automatically maintains state between Obsidian sessions.<br/>No need to manually save and restore session state.</li><li>Various features added to the cards system.</li></ul>Check <a href='https://github.com/jon-heard/obsidian-inline-scripts/releases/tag/0.23.0'>the release notes</a> for details.</div>"
  },
  {
    version: "0.23.2",
    message: `<div style="text-align:left">The save-on-quit feature that was added in 0.23.0 works... most of the time.<br><br>It turns out that "quit" scripts aren't guaranteed!  This update adds auto-save to mitigate data loss if save-on-quit fails.<br><br>NOTE - This release updates the library.  Make sure you import the latest library!</div>`
  },
  {
    version: "0.24.0",
    message: `<div style="text-align:left"><b>Major plugin updates</b><ul>  <li>a standard format for expansion strings.  This includes:  <ul>    <li>settings (prefix, line-prefix, suffix) for format customization</li>    <li>expFormat() - converts a string into the standard format</li>    <li>expUnformat() - removes the standard format from a string</li>  </ul>  <li>Shortcut links can include a block-id for the shortcut expansion destination</li>  <li>Autocomplete and/or its tooltip can be disabled in the settings</li></ul><b>Major library updates</b><ul>  <li><b>Cards</b> - This system has been revamped.  The shortcut "help cards" provides a link to a tutorial video.</li>  <li><b>Tablefiles</b> - A new system to roll on tables in text files.  The shortcut "help tablefiles" provides a link to a tutorial video.</li>  <li><b>State</b> - The state is auto-saved to a file beside the state shortcut-file.  Auto-save is now more reliable.</li>  <li><b>Notevars</b> - Incompatibily with the latest Obsidian is resolved.  A bug where multiple "set" shortcuts only save one of the variables is resolved.</li></ul>Check the <a href='https://github.com/jon-heard/obsidian-inline-scripts/releases/tag/0.24.0'>release notes</a> for details.</div>`
  },
  {
    version: "0.24.11",
    message: '<div style="text-align:left">  <b>Summary of notable changes since 0.24.0</b>  <ul>    <li>tablefiles<ul>      <li>Popup - can change multiple table configurations simultaneously by selecting multiple tables with shift or ctrl/cmd keys</li>      <li>Table files can now include a YAML frontmatter which can define their configuration.  This can be edited from the popup, just like other configurations.</li>      <li>A <b>tbl reroll</b> shortcut has been added to allow re-rolling the prior table roll.</li>      <li>Folder paths are now added recursively (table-files in the folder AND subfolder are added)</li>    </ul></li>    <li>cards<ul>      <li><b>draw</b> and <b>pick</b> shortcuts now have a variation that allows entering the <b>from</b>, <b>to</b> and <b>count</b> parameters in <i>any</i> order.</li>    </ul></li>    <li>plugin<ul>      <li>Settings shows alerts when there are updates available for the plugin and/or library</li>      <li>README - Added documentation for the useful <b>unblock()</b> function and a reference for all helper functions</li>    </ul></li>  </ul></div>'
  }
];
var InlineScriptsPlugin = class extends import_obsidian14.Plugin {
  constructor() {
    super(...arguments);
    this.shutdownScripts = {};
  }
  onload() {
    this.onload_internal();
  }
  onunload() {
    this.onunload_internal();
  }
  saveSettings() {
    this.saveData(this.settings);
  }
  getActiveShortcutFileAddresses() {
    return this.settings.shortcutFiles.filter((f) => f.enabled).map((f) => f.address);
  }
  static getInstance() {
    return this._instance;
  }
  static getDefaultSettings() {
    return Object.assign({}, DEFAULT_SETTINGS);
  }
  tryShortcutExpansion() {
    this.tryShortcutExpansion_internal();
  }
  async onload_internal() {
    InlineScriptsPlugin._instance = this;
    this.settings = await this.loadData();
    if (this.settings && !this.settings.version) {
      this.settings.version = 0;
    }
    this.settings = Object.assign(InlineScriptsPlugin.getDefaultSettings(), this.settings);
    this.settings.shortcuts = this.settings.shortcuts.replaceAll("\n~~\n", "\n__\n");
    this.suffixEndCharacter = this.settings.suffix.charAt(this.settings.suffix.length - 1);
    this.settingsUi = new InlineScriptsPluginSettings(this);
    this.addSettingTab(this.settingsUi);
    ButtonView.staticConstructor();
    this._autocomplete = new AutoComplete(this);
    this.registerEditorSuggest(this._autocomplete);
    HelperFncs.confirmObjectPath("_inlineScripts.inlineScripts.plugin", this);
    ShortcutExpander.staticConstructor();
    ShortcutLinks.staticConstructor();
    HelperFncs.staticConstructor();
    this.shortcutDfc = new Dfc(
      this.getActiveShortcutFileAddresses(),
      ShortcutLoader.getFunction_setupShortcuts(),
      this.runShutdownScript.bind(this),
      true
    );
    this.shortcutDfc.setMonitorType(
      this.settings.devMode ? 2 /* OnTouch */ : 1 /* OnModify */
    );
    this._cm5_handleExpansionTrigger = this.cm5_handleExpansionTrigger.bind(this);
    this._runAllShutdownScripts = this.runAllShutdownScripts.bind(this);
    this.registerCodeMirror((cm) => cm.on("keydown", this._cm5_handleExpansionTrigger));
    this.registerEditorExtension([
      require("@codemirror/state").EditorState.transactionFilter.of(
        this.cm6_handleExpansionTrigger.bind(this)
      )
    ]);
    this.app.workspace.on("quit", this._runAllShutdownScripts);
    UserNotifier.run(
      {
        consoleMessage: "Loaded (" + this.manifest.version + ")",
        messageLevel: "info"
      }
    );
    await this.showAnnouncements();
  }
  async onunload_internal() {
    ButtonView.staticDestructor();
    this.shortcutDfc.destructor();
    this._autocomplete.destructor();
    await this.runAllShutdownScripts();
    this.app.workspace.off("quit", this._runAllShutdownScripts);
    this.app.workspace.iterateCodeMirrors(
      (cm) => cm.off("keydown", this._cm5_handleExpansionTrigger)
    );
    delete window._inlineScripts;
    UserNotifier.run(
      {
        consoleMessage: "Unloaded (" + this.manifest.version + ")",
        messageLevel: "info"
      }
    );
  }
  async runShutdownScript(filename) {
    if (!this.shutdownScripts[filename]) {
      return;
    }
    try {
      await ShortcutExpander.runExpansionScript(
        this.shutdownScripts[filename],
        false,
        { shortcutText: "sfile shutdown" }
      );
    } catch (e) {
    }
    delete this.shutdownScripts[filename];
  }
  async runAllShutdownScripts() {
    for (const filename in this.shutdownScripts) {
      await this.runShutdownScript(filename);
    }
  }
  cm5_handleExpansionTrigger(cm, keydown) {
    if (this.inputDisabled) {
      event.preventDefault();
    }
    if (event?.key === this.suffixEndCharacter) {
      this.tryShortcutExpansion();
    }
  }
  cm6_handleExpansionTrigger(tr) {
    if (this.inputDisabled) {
      return null;
    }
    if (!tr.isUserEvent("input.type") || !tr.docChanged) {
      return tr;
    }
    let shouldTryExpansion = false;
    tr.changes.iterChanges(
      (fromA, toA, fromB, toB, inserted) => {
        if (inserted.text[0] === this.suffixEndCharacter) {
          shouldTryExpansion = true;
        }
      },
      false
    );
    if (shouldTryExpansion) {
      this.tryShortcutExpansion();
    }
    return tr;
  }
  tryShortcutExpansion_internal() {
    setTimeout(async () => {
      const editor = this.app.workspace.getActiveViewOfType(import_obsidian14.MarkdownView)?.editor;
      if (!editor) {
        return;
      }
      const cursor = editor.getCursor();
      const lineText = editor.getLine(cursor.line);
      const prefixIndex = lineText.lastIndexOf(this.settings.prefix, cursor.ch);
      const suffixIndex = lineText.indexOf(
        this.settings.suffix,
        prefixIndex + this.settings.prefix.length
      );
      if (prefixIndex === -1 || suffixIndex === -1 || suffixIndex + this.settings.suffix.length < cursor.ch) {
        return;
      }
      const shortcutText = lineText.slice(prefixIndex + this.settings.prefix.length, suffixIndex);
      const expansionInfo = {
        isUserTriggered: true,
        line: lineText,
        inputStart: prefixIndex,
        inputEnd: suffixIndex + this.settings.suffix.length,
        shortcutText,
        prefix: this.settings.prefix,
        suffix: this.settings.suffix
      };
      InputBlocker.setEnabled(true);
      let expansionText = null;
      try {
        expansionText = await ShortcutExpander.expand(shortcutText, false, expansionInfo);
      } catch (e) {
      }
      InputBlocker.setEnabled(false);
      if (expansionText === null) {
        return;
      }
      if (Array.isArray(expansionText)) {
        expansionText = expansionText.join("");
      }
      expansionText = expansionText + "";
      editor.replaceRange(
        expansionText,
        { line: cursor.line, ch: prefixIndex },
        { line: cursor.line, ch: suffixIndex + this.settings.suffix.length }
      );
    }, 0);
  }
  async showAnnouncements() {
    if (this.settings.version === this.manifest.version) {
      return;
    }
    const toDisplay = [];
    for (const announcement of ANNOUNCEMENTS) {
      if (HelperFncs.versionCompare(announcement.version, this.manifest.version) <= 0 && HelperFncs.versionCompare(announcement.version, this.settings.version) > 0) {
        let title = "Inline Scripts\n";
        if (HelperFncs.versionCompare(announcement.version, "0.21.0") === 0) {
          title += "(formerly Text Expander JS)\n";
        }
        toDisplay.push(
          title + announcement.version + "\n\n<div style='font-size: 75%'>" + announcement.message + "</div>"
        );
      }
    }
    for (let i = 0; i < toDisplay.length; i++) {
      const messageCounter = "<div class='iscript_messageCount'>Message " + (i + 1) + "/" + toDisplay.length + "</div>";
      await Popups.getInstance().alert(messageCounter + toDisplay[i]);
    }
    this.settings.version = this.manifest.version;
    this.saveSettings();
  }
};
/*! getEmPixels  | Author: Tyson Matanich (http://matanich.com), 2013 | License: MIT */
