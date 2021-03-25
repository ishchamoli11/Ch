class ball{
    constructor(x, y, width, height,angle) {
        var options = {
            
            'frictionAir':0.005,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
    }