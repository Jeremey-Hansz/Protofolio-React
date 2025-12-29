export const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "px-8 py-3 rounded-lg font-medium transition-all duration-300";
  const variants = {
    primary: "bg-gradient-to-r from-sky-950 to-sky-900 hover:shadow-lg hover:shadow-black-500/50 hover:scale-105",
    secondary: "bg-gradient-to-l from-sky-950 to-sky-900 hover:shadow-lg hover:shadow-black-500/50 hover:scale-105",
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};