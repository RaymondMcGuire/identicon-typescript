import { Identicon } from './identicon'

// config
const size = 420
const pixel = 70
const frame = 35
const patternSize = 5
const bgColor = 240
// const usrId: string = 'raymondmcguire'

let canvas = document.getElementById('canvas') as any
canvas.height = size
canvas.width = size
let context = canvas.getContext('2d')

let usrId = document.getElementById('usrid') as HTMLInputElement
GenerateIdenticon(usrId.value)
usrId.addEventListener('change', () => {
  GenerateIdenticon(usrId.value)
})

let exportBtn = document.getElementById('export') as HTMLButtonElement
exportBtn.addEventListener('click', () => {
  ExportIdenticon()
})

function GenerateIdenticon(usrId: string) {
  let imageBuf = Identicon.Generate(
    usrId,
    patternSize,
    size,
    pixel,
    frame,
    bgColor
  )
  Identicon.Write2Canvas(context, imageBuf, size)
}

function ExportIdenticon() {
  let image = canvas
    .toDataURL('image/png')
    .replace('image/png', 'image/octet-stream')

  let link = document.createElement('a')
  link.href = image
  link.download = 'identicon.png'
  link.click()
}
