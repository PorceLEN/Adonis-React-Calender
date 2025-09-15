export default function Input({className, ...props }: React.ComponentProps<"input">) {
    return <input className={className ?? "inputForm"} {...props} />
}