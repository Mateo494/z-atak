namespace SpriteKind {
    export const zombie = SpriteKind.create()
    export const humano = SpriteKind.create()
    export const humano2 = SpriteKind.create()
    export const humano3 = SpriteKind.create()
    export const humano4 = SpriteKind.create()
    export const humano5 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.zombie, SpriteKind.humano5, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    a5.setKind(SpriteKind.zombie)
    a5.follow(experimento_numero_87, 80)
})
sprites.onOverlap(SpriteKind.zombie, SpriteKind.humano3, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    a3.setKind(SpriteKind.zombie)
    a3.follow(experimento_numero_87, 80)
})
sprites.onOverlap(SpriteKind.zombie, SpriteKind.humano4, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    a4.setKind(SpriteKind.zombie)
    a4.follow(experimento_numero_87, 80)
})
sprites.onOverlap(SpriteKind.zombie, SpriteKind.humano, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    a1.setKind(SpriteKind.zombie)
    a1.follow(experimento_numero_87, 80)
})
sprites.onOverlap(SpriteKind.zombie, SpriteKind.humano2, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    a2.setKind(SpriteKind.zombie)
    a2.follow(experimento_numero_87, 80)
})
let a5: Sprite = null
let a4: Sprite = null
let a3: Sprite = null
let a2: Sprite = null
let a1: Sprite = null
let experimento_numero_87: Sprite = null
tiles.setTilemap(tilemap`level1`)
game.splash("Hola experimento numero 87.", "Tu mision es acabar con todos los humanos entendido.")
experimento_numero_87 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 f f 7 7 7 . . . 
    . . . 7 7 7 7 7 f 1 7 7 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    . . 7 7 . . 7 7 7 2 7 7 . 7 7 7 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . . 7 . . 7 . . . . . 
    . . . . . . . 7 . . 7 . . . . . 
    . . . . . . . 7 . . 7 . . . . . 
    . . . . . . . 7 . . 7 . . . . . 
    . . . . . . . f . . f . . . . . 
    `, SpriteKind.zombie)
experimento_numero_87.say(game.askForString("Bueno que me dices Si o NO", 2), 500)
game.splash("Me da igual lo que digas a por los humanos")
a1 = sprites.create(img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e f f f . 
    f f f e e e e e e f f f 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    e f e 4 d b b d d e f . 
    e 4 d d 4 4 4 4 e f f f 
    . e d d e 1 1 1 b f 4 e 
    . . e e f 6 6 6 6 f . . 
    . . . f f f f f f f . . 
    . . . . . . . f f f . . 
    `, SpriteKind.humano)
a2 = sprites.create(img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e f f f . 
    f f f e e e e e e f f f 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    e f e 4 d b b d d e f . 
    e 4 d d 4 4 4 4 e f f f 
    . e d d e 1 1 1 b f 4 e 
    . . e e f 6 6 6 6 f . . 
    . . . f f f f f f f . . 
    . . . . . . . f f f . . 
    `, SpriteKind.humano2)
a3 = sprites.create(img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e f f f . 
    f f f e e e e e e f f f 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    e f e 4 d b b d d e f . 
    e 4 d d 4 4 4 4 e f f f 
    . e d d e 1 1 1 b f 4 e 
    . . e e f 6 6 6 6 f . . 
    . . . f f f f f f f . . 
    . . . . . . . f f f . . 
    `, SpriteKind.humano3)
a4 = sprites.create(img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e f f f . 
    f f f e e e e e e f f f 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    e f e 4 d b b d d e f . 
    e 4 d d 4 4 4 4 e f f f 
    . e d d e 1 1 1 b f 4 e 
    . . e e f 6 6 6 6 f . . 
    . . . f f f f f f f . . 
    . . . . . . . f f f . . 
    `, SpriteKind.humano4)
a5 = sprites.create(img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e f f f . 
    f f f e e e e e e f f f 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    e f e 4 d b b d d e f . 
    e 4 d d 4 4 4 4 e f f f 
    . e d d e 1 1 1 b f 4 e 
    . . e e f 6 6 6 6 f . . 
    . . . f f f f f f f . . 
    . . . . . . . f f f . . 
    `, SpriteKind.humano5)
a1.setPosition(103, 88)
a2.setPosition(119, 56)
a3.setPosition(39, 81)
a4.setPosition(133, 97)
a5.setPosition(20, 97)
scene.cameraFollowSprite(experimento_numero_87)
controller.moveSprite(experimento_numero_87, 100, 100)
a1.setVelocity(100, 100)
a2.setVelocity(-100, -15)
a3.setVelocity(-100, -100)
a4.setVelocity(100, -66)
a5.setVelocity(81, -76)
forever(function () {
    if (info.score() == 50) {
        game.over(true)
    }
})
forever(function () {
    a1.setBounceOnWall(true)
    a2.setBounceOnWall(true)
    a3.setBounceOnWall(true)
    a4.setBounceOnWall(true)
    a5.setBounceOnWall(true)
})
