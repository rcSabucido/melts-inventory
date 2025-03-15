import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { createClient } from "@supabase/supabase-js";

const AddStockModal = ({ onClose, refreshData }) => { 
    const supabase =  createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY);

    const [formData, setFormData] = useState({
        product: '',
        addedItems: '',
        supplier: '',
        expiryDate: '',
        restockDate: new Date().toISOString().split('T')[0]
    });


    const [products, setProducts] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            
            const { data: productData, error: productError } = await supabase
                .from('InventoryFull')
                .select('product_id, product_name')
                .eq('is_active', true);
            
            if (productData) {
                setProducts(productData);
                if (productData.length > 0) {
                    setFormData(prev => ({
                        ...prev,
                        product: productData[0].product_id,
                        product_id: productData[0].product_id
                    }));
                }
            }
            
            const { data: supplierData, error: supplierError } = await supabase
                .from('Supplier')
                .select('supplier_id, company_name')
                .eq('is_active', true);
                
            if (supplierData) {
                setSuppliers(supplierData);
                if (supplierData.length > 0) {
                    setFormData(prev => ({
                        ...prev,
                        supplier: supplierData[0].supplier_id,
                        supplier_id: supplierData[0].supplier_id
                    }));
                }
            }
            
            setLoading(false);
        };
        
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'product') {
            setFormData({
                ...formData,
                [name]: value,
                product_id: value
            });
        } else if (name === 'supplier') {
            setFormData({
                ...formData,
                [name]: value,
                supplier_id: value
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const expiryDate = new Date(formData.expiryDate);

        if (expiryDate < today) {
            alert('Expiry date cannot be in the past');
            return;
        }   

        const { data: inventoryData, error: inventoryError } = await supabase
        .from('InventoryItem')
        .select('quantity')
        .eq('product_id', formData.product_id)
        .single();

        if (inventoryError) throw inventoryError;

        const newQuantity = (inventoryData?.quantity || 0) + parseInt(formData.addedItems);
    
        const { error: updateError } = await supabase
            .from('InventoryItem')
            .update({
                quantity: newQuantity,
                supplier_id: formData.supplier_id,
                expiration_date: formData.expiryDate,
                restock_date: formData.restockDate
            })
            .eq('product_id', formData.product_id);
        
        if (updateError) throw updateError;
        
        if (typeof refreshData === 'function') {
            refreshData();
        }
        
        console.log("Stock added successfully:", formData);
        onClose();
    };

    if (loading) {
        return createPortal(
            <div className="fixed inset-0 flex justify-center items-center bg-gray-800/40"> 
                <div className="bg-amber-100 p-6 rounded-lg">
                    <p>Loading...</p>
                </div>
            </div>,
            document.body
        );
    }

    return createPortal(
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800/40"> 
            <div className="bg-amber-100 p-6 rounded-lg w-1/4"> 
                <h2 className="text-2xl font-bold mb-4 text-center">Add Stock</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Product</label>
                        <select
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                            required
                        >
                            <option value="">Select Product</option>
                            {products.map(product => (
                                <option key={product.product_id} value={product.product_id}>
                                    {product.product_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Added Items</label>
                        <input
                            type="number"
                            name="addedItems"
                            value={formData.addedItems}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Supplier</label>
                        <select
                            name="supplier"
                            value={formData.supplier}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                            required
                        >
                            <option value="">Select Supplier</option>
                            {suppliers.map(supplier => (
                                <option key={supplier.supplier_id} value={supplier.supplier_id}>
                                    {supplier.company_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                        <input
                            type="date"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Restock Date</label>
                        <input
                            type="date"
                            name="restockDate"
                            value={formData.restockDate}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                            required
                        />
                    </div>
                    <div className="flex justify-center mt-6 gap-2 w-full">
                        <button type="button" onClick={onClose} className="bg-[#CB3F3F] hover:bg-[#BA3030] text-white p-2 w-full rounded cursor-pointer">Cancel</button>
                        <button type="submit" className="bg-orange-400/70 hover:bg-orange-400/90 text-white p-2 w-full rounded cursor-pointer">Save</button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}

export default AddStockModal;