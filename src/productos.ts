 export interface Producto {
  id: number;                
  nombre: string;         
  precio: number;           
  disponible: boolean;     
  categorias: Categoria[];   
}


export interface Categoria {
  id: number;            
  nombre: string;        
  stock: number;       
}

 export const productos: Producto[] = [
];





/*
{
  "id": 1,
  "nombre": "Mouse Gamer",
  "precio": 15999,
  "disponible": true,
  "categorias": [
    {
      "id": 10,
      "nombre": "Periféricos",
      "stock": 120
    },
    {
      "id": 11,
      "nombre": "Gaming",
      "stock": 80
    }
  ]
}





{
  "id": 2,
  "nombre": "Teclado Mecánico",
  "precio": 29999,
  "disponible": false,
  "categorias": [
    {
      "id": 20,
      "nombre": "Teclados",
      "stock": 50
    }
  ]
}



*/