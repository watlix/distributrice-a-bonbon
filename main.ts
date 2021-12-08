let piece = 0
servos.P0.setAngle(150)
basic.forever(function () {
    if (0 < pins.digitalReadPin(DigitalPin.P1)) {
        piece = 0
        servos.P0.setAngle(60)
        basic.pause(2000)
        servos.P0.setAngle(150)
    }
})
