type Props = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}

function Input({
  id,
  label,
  type,
  placeholder
}: Props) {
  return (
    <label htmlFor={id}>
      { label }
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
      />
    </label>
  );
}

export default Input;
