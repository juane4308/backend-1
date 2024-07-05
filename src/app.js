import express from "express"
import ProductManager from "./Class/productManager.js";
import { __dirname } from "./utils.js";

const app = express ();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

const productManager = new ProductManager(__dirname + "/data/product.json");

//app.get("/", (req, res)=>{
    //res.status(201).json({
        //mensaje: "todo bieen"
   // })
//});

app.post("/", async (req, res)=>{
    console.log("entro en el post")
    await productManager.addProduct();
    //console.log("creado")
    res.status(201).json({mesagge:"creado"})
})

app.put("/:id", (req, res)=>{
    const { id } = req.params
    const productoActualizar = req.body


    res.status(203).json({message:"actualizado"})
})

app.get("/", async (req, res)=>{
    const productList = await productManager.getProductList();

    res.status(201).json({resultado: productList})
})

app.get("/:id",async (req, res)=>{
    const { id } = req.params
    const productFind = await productManager.getProductById(id)

    res.status(201).json({resultado: productFind})
})


app.listen(8080, ()=>{
    console.log("servidor listo")
})