// reset button so you don't have to wait for the entire controls to be shown
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    control.reset()
})
input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
input.onGesture(Gesture.ScreenUp, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.ScreenDown, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("RESET")
    control.reset()
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
