const productos =[    
    {   id: 1, nombre: 'Producto 1',
        descripcion: 'Descripción del producto 1', 
        img:'', 
        categoria:'', 
        stock:1, 
        precio:''
        },

    {   id: 2, 
        nombre: 'Producto 2', 
        descripcion: 'Descripción del producto 2', 
        img:'', 
        categoria:'', 
        stock:2, 
        precio:''
    },

    {   id: 3, 
        nombre: 'Producto 3',
        descripcion: 'Descripcion del producto 3', 
        img:'', 
        categoria:'', 
        stock:3, 
        precio:''
    },

    {   id: 4, 
        nombre: 'Producto 4', 
        descripcion: 'Descripcion del producto 4', 
        img:'', 
        categoria:'', 
        stock:4, 
        precio:''
    },

    {   id: 5, 
        nombre: 'Producto 5', 
        descripcion: 'Descripcion del producto 5', 
        img:'', 
        categoria:'', 
        stock:5, 
        precio:''
    },

    {   id: 6, 
        nombre: 'Producto 6', 
        descripcion: 'Descripcion del producto 6', 
        img:'', 
        categoria:'', 
        stock:6, 
        precio:''
    },
    
    {   id: 7, 
        nombre: 'Producto 7', 
        descripcion: 'Descripcion del producto 7', 
        img:'', 
        categoria:'', 
        stock:7, 
        precio:''
    },
    {   id: 8, 
        nombre: 'Producto 8', 
        descripcion: 'Descripcion del producto 8', 
        img:'', 
        categoria:'', 
        stock:8, 
        precio:''
    },
    {   id: 9, 
        nombre: 'Producto 9', 
        descripcion: 'Descripcion del producto 9', 
        img:'', 
        categoria:'', 
        stock:9, 
        precio:''
    }
]
 
export const getProductos = () =>{
  
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(productos)
            
            }
        },3000)
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
                reject('No hay data')
            }
        },3000)
    })
}