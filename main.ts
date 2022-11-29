radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -120) {
        pins.analogWritePin(AnalogPin.P0, 125)
        pins.analogWritePin(AnalogPin.P1, 128)
    }
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -80) {
        pins.analogWritePin(AnalogPin.P0, 256)
        pins.analogWritePin(AnalogPin.P1, 258)
    }
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -70) {
        pins.analogWritePin(AnalogPin.P0, 500)
        pins.analogWritePin(AnalogPin.P1, 512)
    }
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -60) {
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.analogWritePin(AnalogPin.P1, 1023)
    }
})
/**
 * The code is both for receiver and sender, For the arms we only need the radio received and the start function and for probe bit we only need the send function on the forever loop
 */
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    radio.sendNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
