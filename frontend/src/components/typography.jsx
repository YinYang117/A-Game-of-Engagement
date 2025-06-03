export const H1 = ({ children, className = "" }) => (
  <h1 className={`font-title ${className}`}>{children}</h1>
);

export const H2 = ({ children, className = "" }) => (
  <h2 className={`font-title ${className}`}>{children}</h2>
);

export const Subtitle = ({ children, className = "" }) => (
  <p className={`font-subtitle ${className}`}>{children}</p>
);

export const P = ({ children, className = "" }) => (
  <p className={`font-body ${className}`}>{children}</p>
);

export const Nav = ({ children, className = "" }) => (
  <p className={`font-nav ${className}`}>{children}</p>
);

export const Card = ({ children, className = "" }) => (
  <p className={`font-card ${className}`}>{children}</p>
);