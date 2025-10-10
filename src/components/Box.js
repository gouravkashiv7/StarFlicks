function Box({ children, isOpen, onToggle }) {
  return (
    <div className={`box ${isOpen ? "box-active" : "box-inactive"}`}>
      <button className="btn-toggle " onClick={onToggle}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

export default Box;
