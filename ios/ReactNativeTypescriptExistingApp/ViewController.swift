//
//  ViewController.swift
//  ReactNativeTypescriptExistingApp
//
//  Created by Fabrizio Duroni on 23.05.18.
//

import UIKit
import React

class ViewController: UIViewController {
    override func viewDidLoad() {
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "NasaPhotoViewerScreen",
            initialProperties: nil,
            launchOptions: nil
        )
        self.view = rootView
    }
}
