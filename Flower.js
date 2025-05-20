let flowers = [];

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    noStroke();
}

function draw() {
    background(255);

    drawBucket();

    for (let f of flowers) {
        f.grow();
        f.display();
    }
}

function mousePressed() {
    // hanya tumbuh dari atas bucket (bagian bawah layar)
    flowers.push(new Flower(mouseX, mouseY));
}

function drawBucket() {
    fill(180, 100, 50);
    rect(width/2-80, height-100, 160, 100, 20); //vas dasar
    fill(140, 70, 30);
    ellipse(width/2, height-100, 160, 30); //mulut vas
}

class Flower {
    constructor(x, y) {
        this.x=x;
        this.y=y;
        this.size=0;
        this.maxSize=random(40, 80);
        this.color=color(random(255), random(200), random(255));
        this.petalCount=int(random(5,9));
    }

    grow() {
        if (this.size < this.maxSize) {
            this.size +=0.8;
        }
    }

    display() {
        push();
        translate(this.x, this.y);
        for (let i = 0; i < this.petalCount; i++) {
            push();
            rotate((360 / this.petalCount) * i);
            fill(this.color);
            ellipse(0, this.size / 2, this.size / 3, this.size);
            pop();
        }
        fill(255, 204, 0);
        circle(0, 0, this.size / 2);
        pop();
    }
}