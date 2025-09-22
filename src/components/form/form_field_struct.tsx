function Root({ className, ...props }: React.ComponentProps<"form">) {
  return <form className={className ?? "form_authentification"} {...props} />;
}

function Label({
  children,
  className,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label className={className ?? "formLabel"} {...props}>
      {children}
    </label>
  );
}

function Header({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={className} {...props} />;
} // ?

function Title({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={className} {...props} />;
} // ?

function Field({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={className ?? "formField"} {...props} />;
}

function Row({className, ...props}: React.ComponentProps<"div">) {
  return <div className={className ?? "formField"} {...props} />
}

function Body({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={className ?? "formBody"} {...props} />;
}

export const Form: typeof Root & {
  Header: typeof Header;
  Title: typeof Title;
  Label: typeof Label;
  Field: typeof Field;
  Body: typeof Body;
  Row: typeof Row;
} = ({ ...props }) => {
  return <Root {...props} />;
};

Form.Header = Header;
Form.Title = Title;
Form.Label = Label;
Form.Field = Field;
Form.Body = Body;
Form.Row = Row;