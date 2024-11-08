type Circle={
    shape: 'circle';
    radius: number;
}

type Rectangle= {
    shape: 'rectangle';
    height: number;
    width: number;
}

type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape)=>{
    if(shape.shape === 'circle'){
        return Math.PI * shape.radius * shape.radius;
    }
    if(shape.shape === 'rectangle'){
        return shape.height * shape.width;
    }
}
