export default function Button({children, className, ...props }: React.ComponentProps<"button">) {
  return <button className={className ?? "button_authentification"} {...props}>
            {children}
          </button>
}