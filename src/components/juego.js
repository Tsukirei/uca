import Matter from "matter-js";

// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var figuras = [];

// create an engine
var engine = Engine.create();

var screenSize = {
  width: window.visualViewport.width - 20,
  height: window.visualViewport.height - 120,
};
//Matter.render.options.hasBounds = true;

// create a renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    hasBounds: false,
    width: screenSize.width,
    height: screenSize.height,
    background: "#0000",
    wireframes: false,
  },
});

//Creación de los contenedores de piezas
var container1 = Bodies.rectangle(
  screenSize.width / 6,
  screenSize.height / 4,
  screenSize.width / 5.5,
  screenSize.height / 40,
  {
    render: {
      fillStyle: "#59B989",
      strokeStyle: "light-red",
      lineWidth: 3,
    },
    isStatic: true,
  }
);
var container2 = Bodies.rectangle(
  (screenSize.width * 5) / 6,
  screenSize.height / 4,
  screenSize.width / 5.5,
  screenSize.height / 40,
  {
    render: {
      fillStyle: "#59B989",
      strokeStyle: "light-red",
      lineWidth: 3,
    },
    isStatic: true,
  }
);
var container3 = Bodies.rectangle(
  screenSize.width / 6,
  screenSize.height * 0.75,
  screenSize.width / 5.5,
  screenSize.height / 40,
  {
    render: {
      fillStyle: "#59B989",
      strokeStyle: "light-red",
      lineWidth: 3,
    },
    isStatic: true,
  }
);
var container4 = Bodies.rectangle(
  (screenSize.width * 5) / 6,
  screenSize.height * 0.75,
  screenSize.width / 5.5,
  screenSize.height / 40,
  {
    render: {
      fillStyle: "#59B989",
      strokeStyle: "light-red",
      lineWidth: 3,
    },
    isStatic: true,
  }
);
var container5 = Bodies.rectangle(
  container4.position.x,
  container4.position.y - 70,
  screenSize.width / 9,
  screenSize.height / 50,
  {
    render: {
      fillStyle: "#59B989",
      strokeStyle: "light-red",
      lineWidth: 3,
    },
    isStatic: true,
  }
);

figuras.push(container1, container2, container3, container4, container5);

console.log(container3);

//Creación triángulos
var tria1 = Bodies.polygon(
  container3.position.x - 30,
  container3.vertices[0].y,
  3,
  45
);
var tria2 = Bodies.polygon(
  container3.position.x + 46,
  container3.vertices[0].y,
  3,
  45
);
var tria3 = Bodies.polygon(
  container3.position.x - 30,
  container3.vertices[0].y - 45,
  3,
  45,
  { render: { fillStyle: tria1.render.fillStyle } }
);
var tria4 = Bodies.polygon(
  container3.position.x + 46,
  container3.vertices[0].y - 45,
  3,
  45,
  { render: { fillStyle: tria2.render.fillStyle } }
);

figuras.push(tria1, tria2, tria3, tria4);

// create two boxes and a ground
var boxA = Bodies.rectangle(
  container1.position.x - 40,
  container1.vertices[0].y,
  80,
  80,
  { render: { fillStyle: tria1.render.fillStyle } }
);
var boxB = Bodies.rectangle(
  container1.position.x + 40,
  container1.vertices[0].y,
  80,
  80,
  { render: { fillStyle: tria2.render.fillStyle } }
);
var boxC = Bodies.rectangle(
  container1.position.x - 40,
  container1.vertices[0].y - 80,
  80,
  80,
  { render: { fillStyle: tria1.render.fillStyle } }
);
var boxD = Bodies.rectangle(
  container1.position.x + 40,
  container1.vertices[0].y - 80,
  80,
  80,
  { render: { fillStyle: tria2.render.fillStyle } }
);

var ground = Bodies.rectangle(
  screenSize.width / 2,
  screenSize.height - 30,
  screenSize.width,
  screenSize.height / 9,
  {
    render: {
      fillStyle: "#59B989",
      strokeStyle: "light-red",
      lineWidth: 3,
    },
    isStatic: true,
  }
);

console.log(ground);
figuras.push(boxA, boxB, boxC, boxD, ground);

//Creación de rectángulos largos
var rect1 = Bodies.rectangle(
  container2.position.x - 10,
  container2.vertices[0].y - 2,
  40,
  150,
  { render: { fillStyle: tria1.render.fillStyle } }
);
var rect2 = Bodies.rectangle(
  container2.position.x + 10,
  container2.vertices[0].y - 2,
  40,
  150,
  { render: { fillStyle: tria2.render.fillStyle } }
);
var rect3 = Bodies.rectangle(
  container2.position.x - 10,
  container2.vertices[0].y - 2,
  40,
  150,
  { render: { fillStyle: tria1.render.fillStyle } }
);
var rect4 = Bodies.rectangle(
  container2.position.x + 10,
  container2.vertices[0].y - 2,
  40,
  150,
  { render: { fillStyle: tria2.render.fillStyle } }
);

figuras.push(rect1, rect2, rect3, rect4);

//Creandp heads, bandera y escudo
var head1 = Bodies.circle(container4.position.x, container4.vertices[0].y, 30, {
  render: {
    strokeStyle: "black",
    lineWidth: 10,
    opacity: 10,
    options: {
      wireframes: false,
    },
    sprite: {
      texture: "./head.jpeg",
      yScale: 0.085,
      xScale: 0.085,
    },
  },
});
var head2 = Bodies.circle(container4.position.x, container4.vertices[0].y, 30, {
  render: {
    sprite: {
      texture: "./head.jpeg",
      yScale: 0.085,
      xScale: 0.085,
    },
  },
});
var head3 = Bodies.circle(container4.position.x, container4.vertices[0].y, 30, {
  render: {
    sprite: {
      texture: "./head.jpeg",
      yScale: 0.085,
      xScale: 0.085,
    },
  },
});
var head4 = Bodies.circle(container4.position.x, container4.vertices[0].y, 30, {
  render: {
    sprite: {
      texture: "./head.jpeg",
      yScale: 0.085,
      xScale: 0.085,
    },
  },
});
var escudo = Bodies.polygon(
  container5.position.x,
  head1.position.y - 80,
  6,
  30,
  {
    render: {
      sprite: {
        texture: "./Escudo.jpg",
        yScale: 0.17,
        xScale: 0.17,
      },
    },
  }
);
var bandera = Bodies.rectangle(
  container5.position.x,
  head1.position.y - 80,
  60,
  60,
  {
    render: {
      sprite: {
        texture: "./bandera.jpg",
        yScale: 0.11,
        xScale: 0.11,
      },
    },
  }
);
figuras.push(head1, head2, head3, head4, escudo, bandera);

//Crear linea de meta
var LineaMeta = Bodies.rectangle(
  screenSize.width / 2,
  screenSize.height / 8,
  screenSize.width / 7,
  screenSize.height / 50,
  {
    render: {
      fillStyle: "gray",
      strokeStyle: null,
      lineWidth: null,
      opacity:0.5
    },
    isStatic: true,
    collisionFilter:{
      category: 0
    }
  }
);

console.log(LineaMeta);

figuras.push(LineaMeta);

//Funcionalidad del mouse
var mouse = Matter.Mouse.create(render.canvas);
var mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    render: { visible: false },
  }
});

figuras.push(mouseConstraint);

// add all of the bodies to the world
World.add(engine.world, figuras);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
