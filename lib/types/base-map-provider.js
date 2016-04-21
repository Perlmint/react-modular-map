"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const Q = require('q');
class BaseMapProvider {
    constructor(options) {
        this.initDefer = Q.defer();
        this.initPromise = this.initDefer.promise;
    }
    setCenter(center) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initPromise;
            this.__setCenter(center);
        });
    }
    setZoom(zoomLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initPromise;
            this.__setZoom(zoomLevel);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseMapProvider;