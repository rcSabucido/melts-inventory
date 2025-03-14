import React, { useState } from 'react';
import TransactionItemInput from './TransactionItemInput';

const TransactionForm = ({updateParent, initialProduct, index, deleteItem}) => {
    return (
        <div>
            {
            /*items.map((item, index) => (*/
                <TransactionItemInput
                    key={index}
                    index={index}
                    initialProduct={initialProduct}
                    updateParent={updateParent}
                    deleteItem={deleteItem}
                />
            /*))*/
            }
        </div>
    );
};

export default TransactionForm;