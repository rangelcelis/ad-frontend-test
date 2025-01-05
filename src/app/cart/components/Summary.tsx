import Button from '@/components/common/Button';
import { Cart } from '@/types/cart.type';
import { formatAmount } from '@/utils/format-number';

const Summary = ({ cart }: { cart: Cart }) => {
  return (
    <div className="grid gap-10">
      <div className="grid gap-6 px-4 lg:px-6 py-6 lg:py-8 border border-color-secondary p-6 rounded-lg">
        <div className="grid gap-3">
          <h2 className="text-xl text-item-primary font-bold">Order Summary</h2>
          <span className="text-lg text-item-primary">{cart.items} items</span>
        </div>

        <div className="grid gap-6 py-5">
          {cart.games.map((item) => (
            <div key={item.id} className="flex w-full justify-between">
              <span>{item.name}</span>
              <span>{formatAmount(item.price)}</span>
            </div>
          ))}
          <hr className="border border-color-secondary opacity-50" />
          <div className="flex w-full justify-between">
            <span className="text-xl font-bold">Order Total</span>
            <span className="text-xl font-bold">{formatAmount(cart.total)}</span>
          </div>
        </div>
      </div>

      <div className="grid w-full">
        <Button
          onClick={() => {
            console.log('TODO: Checkout');
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Summary;
