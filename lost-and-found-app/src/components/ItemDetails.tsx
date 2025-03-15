import React from 'react';
import { Item } from '../types/item';

interface ItemDetailsProps {
  item: Item;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ item }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{item.title}</h2>
      <img src={item.imageUrl} alt={item.title} className="w-full h-auto rounded" />
      <p className="mt-2">{item.description}</p>
      <p className="mt-2">Status: {item.status}</p>
    </div>
  );
};

export default ItemDetails;