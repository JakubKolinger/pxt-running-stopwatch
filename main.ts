radio.setGroup(999)
let start: boolean
start = false
let timer: boolean
timer = false
Sensors.SetLightLevel()

Sensors.OnLightDrop(function() {
    if (start = true){
        radio.sendNumber(1)
    }
    
})

input.onButtonPressed(Button.AB, function() {
    radio.sendNumber(0)
})

radio.onReceivedNumber(function(receivedNumber: number) {
    
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index)
    }

    
})


basic.forever(function() {

    if (input.buttonIsPressed(Button.A)){
        start = true
    }

    if (input.buttonIsPressed(Button.B)){
        start = false
    }
    
})