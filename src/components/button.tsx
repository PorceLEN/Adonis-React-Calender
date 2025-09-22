export default function Button({children, className, ...props }: React.ComponentProps<"button">) {
  return <button className={className ?? "global_button"} {...props}>
            {children}
          </button>
}