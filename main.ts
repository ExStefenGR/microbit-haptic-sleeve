radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -120) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -70) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -50) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
    }
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -42) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
