var capacitorTracking = (function (exports, core) {
    'use strict';

    exports.AuthorizationStatus = void 0;
    (function (AuthorizationStatus) {
        AuthorizationStatus[AuthorizationStatus["NOT_DETERMINED"] = 0] = "NOT_DETERMINED";
        AuthorizationStatus[AuthorizationStatus["RESTRICTED"] = 1] = "RESTRICTED";
        AuthorizationStatus[AuthorizationStatus["DENIED"] = 2] = "DENIED";
        AuthorizationStatus[AuthorizationStatus["AUTHORIZED"] = 3] = "AUTHORIZED";
    })(exports.AuthorizationStatus || (exports.AuthorizationStatus = {}));

    const Tracking = core.registerPlugin('Tracking', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.TrackingWeb()),
    });

    class TrackingWeb extends core.WebPlugin {
        async getStatus() {
            return Promise.reject('Tracking plugin not configured for web usage - iOS only');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        TrackingWeb: TrackingWeb
    });

    exports.Tracking = Tracking;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
