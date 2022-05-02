input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
keyboard.startKeyboardService()
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 100) {
        keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.control) + keyboard.modifiers(keyboard._Modifier.windows) + keyboard.keys(keyboard._Key.right), true)
        basic.pause(100)
        keyboard.releaseKeys()
    } else {
    	
    }
})
