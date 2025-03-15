import React from 'react';
import { Item } from '../types/item';

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="item-list">
      <h2 className="text-xl font-bold mb-4">Lost and Found Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className="border p-4 mb-2 rounded">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p>{item.description}</p>
            <p>Status: {item.status}</p>
            {item.imageUrl && <img src={item.imageUrl} alt={item.title} className="mt-2" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;