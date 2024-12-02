function Button({ children, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} className="kanban-button">
      {children}
    </button>
  );
}

export default Button;
