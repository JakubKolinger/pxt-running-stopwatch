radio.setGroup(53)
let start = false
let runtime = 0

Sensors.SetLightLevel()
radio.setTransmitPower(100)

Sensors.OnLightDrop(function() {
    if (start === true){
        music.playTone(520, 400)
        radio.sendNumber(1)
        start = false
    }
    
})

input.onButtonPressed(Button.AB, function() {
    music.playTone(300, 300)
    radio.sendNumber(0)
    start = false
    basic.showString("N")
    Sensors.SetLightLevel()
    basic.clearScreen()
})

input.onButtonPressed(Button.A, function() {
    start = true
})

radio.onReceivedNumber(function (receivedNumber: number) {
    if (receivedNumber === 2) {
        start = false
        runtime = 0
        basic.clearScreen()
        Sensors.SetLightLevel()
    } else {
        music.playTone(440, 400)
        basic.showNumber(receivedNumber)
        runtime = receivedNumber
    }
})

input.onButtonPressed(Button.B, function () {
    basic.showNumber(runtime)
    basic.clearScreen()
})






