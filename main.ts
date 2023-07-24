input.onButtonPressed(Button.A, function () {
    music.setVolume(music.volume() - 5)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(music.volume() + 5)
})
let prevY = 0
let prevX = 0
let x = 2
let y = 2
music.setVolume(75)
basic.forever(function () {
    basic.clearScreen()
    led.plot(x, y)
    prevX = x
    prevY = y
    if (x < 4 && input.rotation(Rotation.Roll) > 0 || x > 0 && input.rotation(Rotation.Roll) < 0) {
        x = x + input.rotation(Rotation.Roll) / 60
    }
    if (y < 4 && input.rotation(Rotation.Pitch) > 0 || y > 0 && input.rotation(Rotation.Pitch) < 0) {
        y = y + input.rotation(Rotation.Pitch) / 60
    }
    if (prevX != x || prevY != y) {
        music.play(music.tonePlayable((y + 1) * 150 + x * 30, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    }
})
