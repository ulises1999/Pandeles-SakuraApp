const productos =[    
    {   id: '1', 
        nombre: "Vajilla vintage",
        descripcion: "Descripción del producto 1", 
        img:"../public/images/vajillaCocina.jpg", 
        category:"Cocina", 
        stock:13, 
        precio:"200.000"
        },

    {   id: '2', 
        nombre: "Cajon separador", 
        descripcion: "Descripción del producto 2", 
        img:"../public/images/cajonCocina.jpg", 
        category:"Cocina", 
        stock:2, 
        precio:"150.000"
    },

    {   id: '3', 
        nombre: "Especieros",
        descripcion: "Descripcion del producto 3", 
        img:"../public/images/especieros.jpg", 
        category:"Cocina", 
        stock:9, 
        precio:"60.000"
    },

    {   id: '4', 
        nombre: "Mesa de Living", 
        descripcion: "Descripcion del producto 4", 
        img:"../public/images/mesaLiving.jpg", 
        category:"Living", 
        stock:16, 
        precio:"600.000"
    },

    {   id: '5', 
        nombre: "Sillon", 
        descripcion: "Descripcion del producto 5", 
        img:"../public/images/sillonliving.jpg", 
        category:"Living", 
        stock:0, 
        precio:"950.000"
    },

    {   id: '6', 
        nombre: "Alfombra para Living", 
        descripcion: "Descripcion del producto 6", 
        img:"../public/images/alfombraLiving.jpg", 
        category:"Living", 
        stock:25, 
        precio:"235.000"
    },
    
    {   id: '7', 
        nombre: "Lavamanos negro", 
        descripcion: "Descripcion del producto 7", 
        img:"../public/images/baño1.jpg", 
        category:"Baño", 
        stock:18, 
        precio:"1.300.000"
    },
    {   id: '8', 
        nombre: "Lavamanos", 
        descripcion: "Descripcion del producto 8", 
        img:"../public/images/baño2.jpg", 
        category:"Baño", 
        stock:12, 
        precio:"1.100.000"
    },
    {   id: '9', 
        nombre: "Lavamanos blanco", 
        descripcion: "Descripcion del producto 9", 
        img:"../public/images/baño3.jpg", 
        category:"Baño", 
        stock:4, 
        precio:"1.200.000"
    }
]
 
export const getProductos = () =>{
  
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject("Hubo un error, intente mas tarde")
            }else{
                resolve(productos)
            }
        },2000)
    })
}

export const getOneProducto = (id)=>{
    let error=false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let producto = productos.find((item)=> item.id === id)
                resolve(producto)
            }else{
                reject("No hay data")
            }
        },2000)
    })
}