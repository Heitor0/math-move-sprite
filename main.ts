// reset button so you don't have to wait for the entire controls to be shown
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    control.reset()
})
input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
input.onPinPressed(TouchPin.P2, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
function doSomething (num_more: number) {
	
}
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("CONTROLS: Logo: up P2: down B: right A: left")
    control.reset()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
