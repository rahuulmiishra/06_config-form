import "./style.css";

function TextField({
  label = "",
  placeholder = "",
  id = "",
  index,
  value = "",
  error = "",
  disabled = false,
  readonly = false,
  onChange,
  type,
  required,
  onBlur,
  categoryKey,
  description,
}) {
  function handleChange(event) {
    onChange({ id, value: event.target.value, index, type, categoryKey });
  }

  function handleBlur() {
    onBlur({ id, value: event.target.value, index, type, categoryKey });
  }

  return (
    <div>
      <label htmlFor={id}>
        {label}
        {required && <sup>*</sup>}
      </label>
      <span id="tooltipid">Tooltip</span>
      <input
        id={id}
        autoComplete="off"
        aria-disabled={true}
        //disabled={true}
        readOnly={readonly}
        name={name}
        value={value}
        onBlur={handleBlur}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        aria-describedby={description ? `desc-${id}` : undefined}
        aria-invalid={!!error}
        aria-errormessage={description ? `err-${id}` : undefined}
      />
      {!!description && <span id={`desc-${id}`}>{description}</span>}
      <span
        role="status"
        aria-live="assertive"
        id={`err-${id}`}
        style={{ color: "red" }}
      >
        {error}
      </span>
    </div>
  );
}

export default TextField;
