let canvas;

function setup() {
    // Cria o canvas WebGL com as dimensões especificadas
    canvas = createCanvas(512, 512, WEBGL);
    canvas.parent('p5-container');
    
    // Associa ao canvas HTML existente
    canvas.elt = document.getElementById('gl-canvas');
    
    background(240);
    
    // Desativa a renderização 3D para este exemplo 2D
    _renderer._enableLighting = false;
    
    // Gera três vértices aleatórios
    let vertices = [
        createVector(random(-width/2, width/2), random(-height/2, height/2)),
        createVector(random(-width/2, width/2), random(-height/2, height/2)),
        createVector(random(-width/2, width/2), random(-height/2, height/2))
    ];
    
    // Verifica colinearidade
    while (isColinear(vertices[0], vertices[1], vertices[2])) {
        vertices[2] = createVector(random(-width/2, width/2), random(-height/2, height/2));
    }
    
    // Desenha os vértices em vermelho
    fill(255, 0, 0);
    noStroke();
    for (let v of vertices) {
        ellipse(v.x, v.y, 10, 10);
    }
    
    // Ponto inicial aleatório
    let current = createVector(random(-width/2, width/2), random(-height/2, height/2));
    
    // Gera 15 pontos do fractal
    fill(0);
    for (let i = 0; i < 15; i++) {
        ellipse(current.x, current.y, 5, 5);
        
        let randomVertex = vertices[floor(random(3))];
        current.x = (current.x + randomVertex.x) / 2;
        current.y = (current.y + randomVertex.y) / 2;
    }
}

function isColinear(a, b, c) {
    return abs((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)) < 0.1;
}

function draw() {}