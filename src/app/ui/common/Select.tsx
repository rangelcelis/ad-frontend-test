type SelectProps = {
  name: string;
  label: string;
  value: string;
  options: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const Select = ({ name, label, value, options, onChange }: SelectProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <span>|</span>
      <select
        name={name}
        value={value}
        className="w-full md:max-w-xs"
        onChange={onChange}
        data-testid={`select-${name}`}
      >
        <option value="all">All</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
