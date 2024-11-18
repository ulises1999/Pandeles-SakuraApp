const productos =[    
    {   id: '1', 
        nombre: "Producto 1",
        descripcion: "Descripción del producto 1", 
        img:"", 
        category:"cocina", 
        stock:13, 
        precio:""
        },

    {   id: '2', 
        nombre: "Producto 2", 
        descripcion: "Descripción del producto 2", 
        img:"", 
        category:"cocina", 
        stock:2, 
        precio:""
    },

    {   id: '3', 
        nombre: "Producto 3",
        descripcion: "Descripcion del producto 3", 
        img:"", 
        category:"cocina", 
        stock:9, 
        precio:""
    },

    {   id: '4', 
        nombre: "Producto 4", 
        descripcion: "Descripcion del producto 4", 
        img:"", 
        category:"habitacion", 
        stock:16, 
        precio:""
    },

    {   id: '5', 
        nombre: "Producto 5", 
        descripcion: "Descripcion del producto 5", 
        img:"", 
        category:"habitacion", 
        stock:0, 
        precio:""
    },

    {   id: '6', 
        nombre: "Producto 6", 
        descripcion: "Descripcion del producto 6", 
        img:"", 
        category:"habitacion", 
        stock:25, 
        precio:""
    },
    
    {   id: '7', 
        nombre: "Producto 7", 
        descripcion: "Descripcion del producto 7", 
        img:"", 
        category:"living", 
        stock:18, 
        precio:""
    },
    {   id: '8', 
        nombre: "Producto 8", 
        descripcion: "Descripcion del producto 8", 
        img:"", 
        category:"living", 
        stock:12, 
        precio:""
    },
    {   id: '9', 
        nombre: "Producto 9", 
        descripcion: "Descripcion del producto 9", 
        img:"", 
        category:"living", 
        stock:4, 
        precio:""
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