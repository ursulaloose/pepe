namespace SpriteKind {
    export const Princess = SpriteKind.create()
    export const Ninja = SpriteKind.create()
}
function conversacion () {
    player2.say("Hello!", 500)
    pause(500)
    princess.say("Hello!", 500)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    conversacion()
    changeScore()
})
function changeScore () {
    info.changeScoreBy(1)
    music.playSound(music.sounds(Sounds.PowerUp))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Princess, function (sprite, otherSprite) {
    conversacion()
})
let princess: Sprite = null
let player2: Sprite = null
player2 = sprites.create(img`
    ..3b3b3b3b3b3b3b3b3b3b3b3b3b3b..
    .3dd3b3b3b3b3b3b3b3b3b3b3b3bdd3.
    bbdd3dddddddddddddddddddddd3ddbb
    b333dd33333333333333333333dd333b
    bbbdd3333333333333333333333ddbbb
    b33d333d3333333d3333333d3333d33b
    bbbd333333333333333333333333dbbb
    b33d333333333333333333333333d33b
    bbbd333333333333333333333333dbbb
    b33d3333333d3333333d33333333d33b
    bbbd333333333333333333333333dbbb
    b33d333333333333333333333333d33b
    bbbd333333333333333333333333dbbb
    b33d333d3333333d3333333d3333d33b
    bbbd333333333333333333333333dbbb
    b33d333333333333333333333333d33b
    bbbd333333333333333333333333dbbb
    b33d3333333d33333333d3333333d33b
    bbbdd3333333333333333333333ddbbb
    b333dd33333333333333333333dd333b
    bbdd3dddddddddddddddddddddd3ddbb
    b3dd3b3b3b3b3b3b3b3b3b3b3b3bdd3b
    .bbb3b3b3b3b3b3b3b3b3b3b3b3b3bb.
    ...bbbbbbbbbbbbbbbbbbbbbbbbbb...
    `, SpriteKind.Player)
controller.moveSprite(player2, 100, 100)
player2.setStayInScreen(true)
princess = sprites.create(sprites.castle.heroWalkSideLeft1, SpriteKind.Ninja)
princess.setPosition(50, 50)
