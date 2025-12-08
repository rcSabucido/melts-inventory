import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { createClient } from '@supabase/supabase-js';

import Button from '../components/Button.jsx';

const AddItems = ({ onClose, refreshData }) => { 
    const supabase =  createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY);

    const [formData, setFormData] = useState({
        product: '',
        category: '',
        price: '', 
    });

    const [categories, setCategories] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        const { data: existingProduct, error: fetchError } = await supabase
            .from('Product')
            .select()
            .eq('name', formData.product)
            .eq('is_active', true)
            .single();
        
        if (existingProduct) {
            alert('Product already exists');
            console.log('Product already exists');
            return;
        }

        const { data: deletedProduct, error: deletedFetchError } = await supabase
            .from('Product')
            .select()
            .eq('name', formData.product)
            .eq('is_active', false)
            .single();
        
        if (deletedProduct) {
            const { error } = await supabase
                .from('Product')
                .update({ is_active: true })
                .eq('product_id', deletedProduct.product_id);

            const { error: priceError } = await supabase
                .from('InventoryItem')
                .update({ price: formData.price })
                .eq('product_id', deletedProduct.product_id);
            
            if (!error && !priceError) {
                await refreshData();
                onClose();
            }
            return;
        }
        
        let productData;
        const { data: productDataArray, error: productError } = await supabase
            .from('Product')
            .insert({
                category_id: formData.category,
                name: formData.product,
                is_active: true
            })
            .select();
            productData = productDataArray[0];

        const { error } = await supabase
            .from('InventoryItem')
            .insert({
                product_id: productData.product_id,
                quantity: 0,
                price: formData.price
            });

        if (!error && !productError) {
            await refreshData();
            onClose();
        }   
    };


    useEffect(() => {
        async function fetchCategories() {
            const { data, error } = await supabase
                .from('ProductCategory')
                .select();
            setCategories(data);
            if (data && data.length > 0) {
                setFormData(prev => ({
                    ...prev,
                    category: data[0].category
                }));
            }
        }
        fetchCategories();
    }, []);

    return createPortal(
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800/40"> 
            <div className="bg-amber-100 p-6 rounded-lg w-1/4"> 
                <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Product</label>
                        <input
                            type="text"
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                            required
                        >
                            <option value="">Select Category</option>
                            {
                                categories?.map(category => {
                                    return <option key={category.category_id} value={category.category_id}>{category.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                            required
                        />
                    </div>
                    <div className="flex justify-center mt-6 gap-2 w-full">
                        <Button type="button" onClick={onClose} className="bg-[#CB3F3F] hover:bg-[#BA3030] cursor-pointer text-white p-2 w-full rounded">Cancel</Button>
                        <Button type="submit" className="bg-orange-400/70 hover:bg-orange-400/90 cursor-pointer text-white p-2 w-full rounded">Save</Button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}

export default AddItems;