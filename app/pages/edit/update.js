// pages/edit/[id].js
import { useState } from 'react';
import { useRouter } from 'next/router';

const Edit = () => {
  const [name, setName] = useState('');
  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = (e) => {
    e.preventDefault();
    // You should ideally send a request to your API to update the item.
    // For simplicity, we'll just update the local state here.
    router.push('/');
  };

  return (
    <div>
      <h1>Edit Item {id}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default Edit;