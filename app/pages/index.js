// pages/index.js
import Link from 'next/link';
import { useState } from 'react';

const Main = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <Link href={`/item/${item.id}`}>
              <a>Details</a>
            </Link>{' '}
            <Link href={`/edit/${item.id}`}>
              <a>Edit</a>
            </Link>{' '}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))
        }
      </ul>
      <Link href="/create">
        <a>Create New Item</a>
      </Link>
    </div>
  );
};

export default Home;