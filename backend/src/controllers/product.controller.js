import { Product } from "../models/product.model.js";

export async function getProductById () {
    try {
        const {id} = req.params;
        const product = Product.findById(id);

        if(!product) return res.status(404).json({message: "Product not found"});

        res.status(200).json(product);

    } catch (error) {
        console.error("Error fetching Product", error);
		res.status(500).json({ message: "Internal server error" });
    }
}