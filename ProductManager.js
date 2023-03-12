class ProductManager{
    autoId=1;
    constructor(){
        this.products=[];
    }

    AddProduct(title,description,price,thumbnail,stock){
        this.products.push({
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code:this.autoId,
            stock:stock
        })

        this.autoId = this.autoId + 1;
    };

    GetProducts(){
        return this.products
        
    };
    GetProductById(id){
        return this.products.find(product => product.code === id);
    };
};

const Manager = new ProductManager();

Manager.AddProduct("Producto 1", "Descripción del producto 1", 100, "imagen1.jpg", 10);
Manager.AddProduct("Producto 2", "Descripción del producto 2", 200, "imagen2.jpg", 20);
Manager.AddProduct("Producto 3", "Descripción del producto 3", 300, "imagen3.jpg", 30);

console.log(Manager.GetProductById(1))

