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