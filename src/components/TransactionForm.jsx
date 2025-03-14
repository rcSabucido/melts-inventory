import React, { useState } from 'react';
import TransactionItemInput from './TransactionItemInput';

const TransactionForm = () => {
    const [items, setItems] = useState([{ product: '', quantity: 0, price: 0 }]);

    const updateItem = (index, updatedItem) => {
        const newItems = [...items];
        newItems[index] = updatedItem;
        setItems(newItems);
    };

    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        console.log("Removing item at index:", index);
        console.log("New items array:", newItems);
        setItems(newItems);
    };

    return (
        <div>
            {items.map((item, index) => (
                <TransactionItemInput
                    key={index}
                    index={index}
                    initialProduct={item.product}
                    updateParent={updateItem}
                    removeItem={removeItem}
                />
            ))}
        </div>
    );
};

export default TransactionForm;