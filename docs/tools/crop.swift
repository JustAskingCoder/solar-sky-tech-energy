import Foundation
import AppKit

// crop.swift <input> <x> <y> <w> <h> <scaleFactor> <output>
let args = CommandLine.arguments
guard args.count == 8,
      let x = Int(args[2]), let y = Int(args[3]),
      let w = Int(args[4]), let h = Int(args[5]),
      let scale = Double(args[6]) else {
    print("usage: crop <input> <x> <y> <w> <h> <scale> <output>")
    exit(1)
}
guard let img = NSImage(contentsOfFile: args[1]),
      let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
    print("ERR: cannot load"); exit(2)
}
let rect = CGRect(x: x, y: y, width: w, height: h)
guard let cropped = cg.cropping(to: rect) else {
    print("ERR: crop failed"); exit(3)
}
let final: CGImage
if scale != 1.0 {
    let nw = Int(CGFloat(cropped.width) * CGFloat(scale))
    let nh = Int(CGFloat(cropped.height) * CGFloat(scale))
    let cs = CGColorSpaceCreateDeviceRGB()
    let ctx = CGContext(data: nil, width: nw, height: nh, bitsPerComponent: 8,
                        bytesPerRow: nw * 4, space: cs,
                        bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)!
    ctx.interpolationQuality = .high
    ctx.draw(cropped, in: CGRect(x: 0, y: 0, width: nw, height: nh))
    final = ctx.makeImage()!
} else {
    final = cropped
}
let rep = NSBitmapImageRep(cgImage: final)
guard let png = rep.representation(using: .png, properties: [:]) else { exit(4) }
try? png.write(to: URL(fileURLWithPath: args[7]))
print("ok \(final.width)x\(final.height)")