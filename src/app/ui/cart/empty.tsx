const Empty = () => {
  return (
    <div className="grid max-w-lg gap-4 p-8 my-6 border border-color-secondary rounded-lg animate-fadeIn">
      <div className="grid gap-4">
        <h2 className="text-xl font-bold">Cart is empty.</h2>
        <span>Looks like you have not added any items to your cart yet.</span>
      </div>
    </div>
  );
};

export default Empty;
