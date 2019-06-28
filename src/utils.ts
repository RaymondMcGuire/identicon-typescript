export namespace Utils {
  export function CreateIconImgBuf(
    patternSize: number,
    size: number,
    pixel: number,
    frame: number,
    bgColor: number,
    frontColor: Array<number>,
    patternArray: Array<boolean>
  ) {
    let image = new Array<number>(size * size * 3)
    for (let idx = 0; idx < image.length; idx++) {
      image[idx] = bgColor
    }

    for (let i = 0; i < patternSize; i++) {
      for (let j = 0; j < patternSize; j++) {
        for (let k = 0; k < pixel; k++) {
          for (let l = 0; l < pixel; l++) {
            if (patternArray[i * patternSize + j]) {
              image[
                ((frame + i * pixel + k) * size + (frame + j * pixel + l)) * 3 +
                  0
              ] = frontColor[0]
              image[
                ((frame + i * pixel + k) * size + (frame + j * pixel + l)) * 3 +
                  1
              ] = frontColor[1]
              image[
                ((frame + i * pixel + k) * size + (frame + j * pixel + l)) * 3 +
                  2
              ] = frontColor[2]
            }
          }
        }
      }
    }
    return image
  }

  export function MD5ToHSL(md5Value: string) {
    let hueStr = ''
    for (let i = 0; i < 3; i++) {
      hueStr += md5Value[25 + i]
    }
    let hue = (parseInt(hueStr, 16) / 4095) * 360

    let satStr = ''
    for (let i = 0; i < 2; i++) {
      satStr += md5Value[28 + i]
    }
    let sat = 65 - (parseInt(satStr, 16) / 255) * 20

    let lumStr = ''
    for (let i = 0; i < 2; i++) {
      lumStr += md5Value[30 + i]
    }
    let lum = 75 - (parseInt(lumStr, 16) / 255) * 20

    // console.log('hue =', hue, 'lum =', lum, 'sat =', sat)
    return [hue, sat, lum]
  }

  export function HSL2RGB(hsl: Array<number>) {
    let hue = hsl[0]
    let sat = hsl[1]
    let lum = hsl[2]
    let max = 0
    let min = 0

    if (lum < 50) {
      max = 2.55 * (lum + lum * (sat / 100))
      min = 2.55 * (lum - lum * (sat / 100))
    } else if (lum >= 50) {
      max = 2.55 * (lum + (100 - lum) * (sat / 100))
      min = 2.55 * (lum - (100 - lum) * (sat / 100))
    }

    let red = 0
    let blue = 0
    let green = 0
    if (hue >= 0 && hue < 60) {
      red = max
      green = (hue / 60) * (max - min) + min
      blue = min
    } else if (hue >= 60 && hue < 120) {
      red = ((120 - hue) / 60) * (max - min) + min
      green = max
      blue = min
    } else if (hue >= 120 && hue < 180) {
      red = min
      green = max
      blue = ((hue - 120) / 60) * (max - min) + min
    } else if (hue >= 180 && hue < 240) {
      red = min
      green = ((240 - hue) / 60) * (max - min) + min
      blue = max
    } else if (hue >= 240 && hue < 300) {
      red = ((hue - 240) / 60) * (max - min) + min
      green = min
      blue = max
    } else if (hue >= 300 && hue <= 360) {
      red = max
      green = min
      blue = ((360 - hue) / 60) * (max - min) + min
    }

    return [red, green, blue]
  }

  export function MD5ToPattern(
    md5Value: string,
    patternSize: number,
    printB: boolean = false
  ) {
    let patternTotalSize = patternSize * patternSize
    let centerCol = Math.ceil(patternSize / 2)
    let calculateSize = centerCol * patternSize

    let patArray = new Array<boolean>(patternTotalSize)

    for (let i = 0; i < calculateSize; i++) {
      const bDraw = !(parseInt(md5Value[i], 16) % 2)
      const row = i % patternSize
      const colR = centerCol - 1 + Math.floor(i / patternSize)
      const colL = centerCol - 1 - Math.floor(i / patternSize)

      if (colR !== colL) {
        patArray[row * patternSize + colR] = bDraw
        patArray[row * patternSize + colL] = bDraw
      } else {
        patArray[row * patternSize + colR] = bDraw
      }
    }

    if (printB) {
      for (let i = 0; i < patternSize; i++) {
        let str = ''
        for (let j = 0; j < patternSize; j++) {
          const element = patArray[i * patternSize + j]
          str += element + ','
        }
        console.log(str)
      }
    }

    return patArray
  }
}
