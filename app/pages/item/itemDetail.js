// pages/item/[id].js
import { useRouter } from 'next/router';

const ItemDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Item Details</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default ItemDetail;