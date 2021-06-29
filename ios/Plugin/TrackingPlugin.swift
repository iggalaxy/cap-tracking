import Foundation
import Capacitor
import AppTrackingTransparency

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(TrackingPlugin)
public class TrackingPlugin: CAPPlugin {
    private let implementation = Tracking()

    @objc func getStatus(_ call: CAPPluginCall) {
        if #available(iOS 14, *) {
            ATTrackingManager.requestTrackingAuthorization(completionHandler: { status in
                call.resolve(["status": ATTrackingManager.trackingAuthorizationStatus.rawValue])
            })
        } else {
            call.resolve(["status": 3]) // Send as authorised as this functionality is only available from iOS 14+
        }
        
    }
}
