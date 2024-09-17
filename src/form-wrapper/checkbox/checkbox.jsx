function Checkbox({
  label,
  id,
  error,
  name,
  index,
  value,
  checked,
  disabled,
  readonly,
  onChange,
  type,
  categoryKey,
}) {
  function handleChange() {
    onChange({ categoryKey, id, value, checked: !checked, index, type });
  }

  return (
    <div>
      <input
        disabled={disabled}
        readOnly={readonly}
        id={id}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
      {!!error && (
        <>
          <br />
          <span style={{ color: "red" }}>{error}</span>
        </>
      )}
    </div>
  );
}

export default Checkbox;
