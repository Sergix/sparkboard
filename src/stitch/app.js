import { Stitch } from 'mongodb-stitch-browser-sdk'

const APP_ID = 'sparkboard-ksykh'
const stitchApp = Stitch.hasAppClient(APP_ID)
  ? Stitch.getAppClient(APP_ID)
  : Stitch.initializeAppClient(APP_ID)

export { stitchApp }
