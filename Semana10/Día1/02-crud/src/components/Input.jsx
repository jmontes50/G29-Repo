const Input = (props) => {
  const { value, name, label, type, handleInput } = props;

  return (
    <div className="mb-3 p-2">
      <label className="block mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={`Ingrese ${label}`}
        name={name}
        value={value[name]}
        onChange={handleInput}
        className="input w-full"
      />
    </div>
  )
}

export default Input
