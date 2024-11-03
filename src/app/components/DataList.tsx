import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { AppDispatch } from '../store';
import { fetchData } from '../../features/data/dataSlice';
import { Link } from 'react-router-dom';

const DataList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items, loading, error } = useSelector((state: RootState) => state.data);

  console.log("items", items?.slice(0,10))
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {items.slice(0,50).map((item, index) => (
        <Link to={`/item/${item.id}`}>
        <img src={item.url} alt={`Item ${item.id}`} />
      </Link>
      ))}
    </ul>
  );
};

export default DataList;
