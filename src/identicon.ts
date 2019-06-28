import { Md5 } from './md5'
import { Utils } from './utils'

export namespace Identicon {
  export function Generate(
    usrId: string,
    patternSize: number,
    size: number,
    pixel: number,
    frame: number,
    bgColor: number
  ) {
    let usrMd5 = new Md5(usrId)
    let md5Str = usrMd5.output
    // console.log(md5Str)

    let patArray = Utils.MD5ToPattern(md5Str, patternSize)

    let hsl = Utils.MD5ToHSL(md5Str)
    let rgb = Utils.HSL2RGB(hsl)
    // console.log(rgb)

    let iconImageBuf = Utils.CreateIconImgBuf(
      patternSize,
      size,
      pixel,
      frame,
      bgColor,
      rgb,
      patArray
    )

    return iconImageBuf
  }

  export function Write2Canvas(
    context: any,
    imageBuf: Array<number>,
    size: number
  ) {
    let canvasImage = context.getImageData(0, 0, size, size)
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let idx = (i * size + j) * 4
        canvasImage.data[idx + 0] = imageBuf[(i * size + j) * 3 + 0]
        canvasImage.data[idx + 1] = imageBuf[(i * size + j) * 3 + 1]
        canvasImage.data[idx + 2] = imageBuf[(i * size + j) * 3 + 2]
        canvasImage.data[idx + 3] = 255
      }
    }
    context.putImageData(canvasImage, 0, 0)
  }
}
