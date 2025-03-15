import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetails from '../components/ItemDetails';
import { Item } from '../types/item';
import { getItemById } from '../firebase';

const ItemPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = React.useState<Item | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchItem = async () => {
            try {
                const fetchedItem = await getItemById(id);
                setItem(fetchedItem);
            } catch (err) {
                setError('Failed to fetch item details');
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div>
            <h1>Item Details</h1>
            <ItemDetails item={item} />
        </div>
    );
};

export default ItemPage;