const Button = ({ children, onClick, variant = 'primary', href }) => {
  const baseStyle = "px-6 py-3 rounded-md text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2";

  const variants = {
    primary: "bg-neon-green text-bg-primary hover:bg-neon-blue focus:ring-neon-green",
    secondary: "bg-transparent text-neon-green border-2 border-neon-green hover:bg-neon-green hover:text-bg-primary focus:ring-neon-green",
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick };

  return (
    <Component
      className={`${baseStyle} ${variants[variant]}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
