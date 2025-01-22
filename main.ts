radio.setGroup(77)
let start: boolean = false
Sensors.SetLightLevel()

Sensors.OnLightDrop(function() {
    if (start = true){
        radio.sendNumber(1)
    }
    
})

input.onButtonPressed(Button.AB, function() {
     radio.sendNumber(0)
})

basic.forever(function() {

    if (input.buttonIsPressed(Button.A)){
        start = true
    }

    if (input.buttonIsPressed(Button.B)){
        start = false
    }
    
})