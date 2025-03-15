import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import { Item } from '../types/item';
import { fetchItems } from '../firebase';

const HomePage: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    
    useEffect(() => {
        const getItems = async () => {
            const fetchedItems = await fetchItems();
            setItems(fetchedItems);
        };
        getItems();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Lost and Found Items</h1>
            <ItemList items={items} />
        </div>
    );
};

export default HomePage;