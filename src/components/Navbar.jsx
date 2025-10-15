// src/components/Navbar.jsx
export default function Navbar({ title = "SLU-Stagram" }) {
  return (
    <header className="navbar" aria-label="app navigation">
      <div className="container nav-inner">
        <strong className="brand">{title}</strong>
        <div className="actions">
          <button className="btn" aria-label="Upload (placeholder)" disabled>
            Upload
          </button>
          <button className="btn" aria-label="Messages (placeholder)" disabled>
            MSG
          </button>
        </div>
      </div>
    </header>
  );
}
