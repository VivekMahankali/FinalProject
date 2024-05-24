import { useState, useEffect } from "react";

const ProductComponent = () => {
    const [formData, setFormData] = useState({
        url: "",
        name: "",
        price: "",
        description: "",
        quantity: ""
    });

    const { url, name, price, description, quantity } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("formData", JSON.stringify(formData));
    };

    useEffect(() => {
        const storedFormData = JSON.parse(localStorage.getItem("formData"));
        if (storedFormData) {
            setFormData(storedFormData);
        }
    }, []); // Empty dependency array ensures this effect runs only once, on mount

    return (
        <>
            <form className="App" onSubmit={handleSubmit}>
                <h2>Enter Product Details:</h2>
                <label htmlFor="imgurl">Image Url:</label>
                <input type="text" id="imgurl" value={url} placeholder="image url" required onChange={(e)=>handleChange()} /><br />
                <label htmlFor="pname">Product Name:</label>
                <input type="text" id="pname" value={name} placeholder="product name" required onChange={handleChange} /><br />

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" value={price} placeholder="price" required onChange={handleChange} /><br />
                <label htmlFor="desc">Description:</label>
                <input type="text" id="desc" value={description} placeholder="description" required onChange={handleChange} /><br />
                <label htmlFor="quan">Quantity:</label>
                <input type="text" id="quan" value={quantity} placeholder="quantity" required onChange={handleChange} /><br />
                <button type="submit" className="btn btn-secondary">Add Product</button>
            </form>
        </>
    )
}

export default ProductComponent;
