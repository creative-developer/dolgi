import { mediaQueries } from './mediaQueries/mediaQueries'
import { popupsInit } from './modules/popups'
import { menuInit } from './modules/menu'
import { inputsMaskInit } from './modules/inputsMask'
import { datePickerInit } from './modules/datePicker'
import { customSelectInit } from './modules/select'
import { validationInit } from './modules/validation'
import { slider } from './modules/sliders'

// initFunctions
mediaQueries()
menuInit()
inputsMaskInit()
popupsInit()
datePickerInit()
customSelectInit()
validationInit()
slider()
