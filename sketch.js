function setup() {
    // Cria o canvas 600x600 e insere no container
    let canvas = createCanvas(600, 600);
    canvas.parent('canvas-container');
    background(240); // Fundo cinza claro
    
    // Gera três vértices aleatórios
    let vertices = [
        createVector(random(width), random(height)),
        createVector(random(width), random(height)),
        createVector(random(width), random(height))
    ];
    
    // Verifica se os pontos formam um triângulo (não são colineares)
    while (isColinear(vertices[0], vertices[1], vertices[2])) {
        vertices[2] = createVector(random(width), random(height));
    }
    
    // Desenha os vértices em vermelho
    fill(255, 0, 0);
    noStroke();
    for (let v of vertices) {
        ellipse(v.x, v.y, 10, 10);
    }
    
    // Ponto inicial aleatório
    let current = createVector(random(width), random(height));
    
    // Gera 15 pontos do fractal
    fill(0);
    for (let i = 0; i < 15; i++) {
        ellipse(current.x, current.y, 5, 5);
        
        // Escolhe um vértice aleatório
        let randomVertex = vertices[floor(random(3))];
        
        // Calcula o ponto médio
        current.x = (current.x + randomVertex.x) / 2;
        current.y = (current.y + randomVertex.y) / 2;
    }
}

// Função para verificar se três pontos são colineares
function isColinear(a, b, c) {
    // Calcula a área do triângulo (se zero, pontos são colineares)
    return abs((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)) < 0.1;
}

// Função draw vazia (não usada neste exemplo)
function draw() {}