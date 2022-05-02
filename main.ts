input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
let _set = 0
input.calibrateCompass()
keyboard.startKeyboardService()
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 200) {
        if (_set < 1) {
            _set += 1
            keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.control) + keyboard.modifiers(keyboard._Modifier.windows) + keyboard.keys(keyboard._Key.right), true)
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
            basic.pause(100)
            music.stopAllSounds()
            keyboard.releaseKeys()
        }
    } else {
        _set = 0
    }
})
