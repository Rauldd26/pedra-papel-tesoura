let JOGO = 0
input.onGesture(Gesture.Shake, function () {
    JOGO = randint(1, 3)
    if (JOGO == 1) {
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # # .
            # # . # .
            # # . . #
            `)
    } else if (JOGO == 2) {
        music.playTone(220, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # #
            # # # # #
            # # # # #
            `)
    }
})
