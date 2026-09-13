import Foundation
import Vision
import CoreImage
import AppKit

guard CommandLine.arguments.count > 2 else {
    print("usage: ocr <image> <outfile>")
    exit(1)
}
let path = CommandLine.arguments[1]
let out = CommandLine.arguments[2]
guard let img = NSImage(contentsOfFile: path),
      let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
    print("ERR: cannot load image")
    exit(2)
}
let request = VNRecognizeTextRequest { req, _ in
    guard let results = req.results as? [VNRecognizedTextObservation] else { return }
    var lines: [String] = []
    for obs in results {
        if let top = obs.topCandidates(1).first {
            let b = obs.boundingBox
            lines.append(String(format: "%.3f %.3f %.3f %.3f\t%@", b.origin.x, b.origin.y, b.size.width, b.size.height, top.string))
        }
    }
    try? lines.joined(separator: "\n").write(toFile: out, atomically: true, encoding: .utf8)
    print("lines:", lines.count)
}
request.recognitionLevel = .accurate
request.usesLanguageCorrection = true
request.recognitionLanguages = ["en-US"]
let handler = VNImageRequestHandler(cgImage: cg, options: [:])
try? handler.perform([request])