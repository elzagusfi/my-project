// pages/create.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const Create = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name,
    };
    // Update the local state or make an API call to add the item to the database
    router.push('/');
  };

  return (
    <div>
      <h1>Create New Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Create Item</button>
      </form>
    </div>
  );
};

export default Create;