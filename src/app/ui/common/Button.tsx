type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
  const style =
    variant === 'primary'
      ? 'bg-color-primary text-white hover:bg-gray-700'
      : 'text-color-primary border border-color-primary hover:bg-gray-200';

  return (
    <button className={`px-6 py-4 rounded-lg font-bold uppercase ${style}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
