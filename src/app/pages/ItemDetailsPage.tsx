import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
        const data = await res.json();
        setItem(data);
      } catch (err) {
        setError('Error fetching item details.');
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!item) return <p>No item found.</p>;

  return (
    <div>
      <h2>Item Details</h2>
      <img src={item.url} alt={item.title} />
      <p><strong>Title:</strong> {item.title}</p>
      <p><strong>Album ID:</strong> {item.albumId}</p>
    </div>
  );
};

export default ItemDetailPage;
