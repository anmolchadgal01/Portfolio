export const Button = ({ className = "", size = "md", children,...props }) => {
  const baseClass =
    "relative overflow-hidden rounded-full font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] cursor-pointer";

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const variant =
    "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:opacity-90";

  const classes = `${baseClass} ${sizes[size]} ${variant} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};