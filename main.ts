let bearing = 0
input.calibrateCompass()
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing < 45) {
        basic.showString("N")
        music.playMelody("B A G F E D C - ", 120)
    } else if (bearing < 135) {
        basic.showString("E")
        music.stopAllSounds()
    } else if (bearing < 225) {
        basic.showString("S")
        music.stopAllSounds()
    } else if (bearing < 315) {
        basic.showString("W")
        music.stopAllSounds()
    } else {
    	
    }
})
