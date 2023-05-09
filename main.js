var canvas = new fabric.Canvas("myCanvas");
playerX = 100;
playerY = 100;
blockWidth = 30;
blockHeight = 30;
function showplayer() {
    fabric.Image.fromURL("player.png", function (img) {
        playerObject = img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: playerY, left: playerX

        });
        canvas.add(playerObject);
    })
}
function showblock(block_Name) {
    fabric.Image.fromURL(block_Name, function (img) {
        playerObject = img;
        playerObject.scaleToWidth(blockWidth);
        playerObject.scaleToHeight(blockHeight);
        playerObject.set({
            top: playerY, left: playerX

        });
        canvas.add(playerObject);
    })
}
window.addEventListener("keydown", mykeydown)
function mykeydown(e) {
    keypressed = e.keyCode
    console.log(keypressed)
    if (keypressed == 87) {
        showblock("wall.jpg");
    }
    if (keypressed == 67) {
        showblock("cloud.jpg");
    }
    if (keypressed == 68) {
        showblock("dark_green.png");
    }
    if (keypressed == 76) {
        showblock("light_green.png");
    }
    if (keypressed == 71) {
        showblock("ground.png");
    }
    if (keypressed == 82) {
        showblock("roof.jpg");
    }
    if (keypressed == 84) {
        showblock("trunk.jpg");
    }
    if (keypressed == 85) {
        showblock("unique.png");
    }
    if (keypressed == 89) {
        showblock("yellow_wall.png");
    }
    if (e.shiftKey == true && keypressed == 80) {
        blockWidth = blockWidth + 10;
        document.getElementById("width").innerHTML = blockWidth;
        blockHeight = blockHeight + 10;
        document.getElementById("height").innerHTML = blockHeight;
    }

    if (e.shiftKey == true && keypressed == 77) {
        blockWidth = blockWidth - 10;
        document.getElementById("width").innerHTML = blockWidth;
        blockHeight = blockHeight - 10;
        document.getElementById("height").innerHTML = blockHeight;

    }

    if (keypressed = 38) {
        up();

    }

    if (keypressed = 40) {
        down();

    }

    if (keypressed = 37) {
        left();

    }

    if (keypressed = 39) {
        right();

    }
}
function up() {
    if (playerY > 0) {
        console.log("up")
        playerY = playerY - blockHeight;
        canvas.remove(playerObject);
        showplayer();
    }
}
function down() {
    if (playerY < 600) {
        playerY = playerY + blockHeight;
        canvas.remove(playerObject);
        showplayer();
    }
}
function left() {
    if (playerX > 0) {
        playerX = playerX - blockWidth;
        canvas.remove(playerObject);
        showplayer();
    }
}
function right() {
    if (playerX < 1000) {
        playerX = playerX + blockWidth;
        canvas.remove(playerObject);
        showplayer();
    }
}