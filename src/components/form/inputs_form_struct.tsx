function Pseudo({ className, ...props }: React.ComponentProps<"input">) {
  return <input id="pseudo" className={className ?? "formInput"} {...props} />;
}

function Email({ className, ...props }: React.ComponentProps<"input">) {
  return <input id="email" className={className ?? "formInput"} {...props} />;
}

function Password({ className, ...props }: React.ComponentProps<"input">) {
  return <input id="password"  className={className ?? "formInput"} {...props} />;
}

function Confirm({ className, ...props }: React.ComponentProps<"input">) {
  return <input id="confirmPassword" className={className ?? "formInput"} {...props} />;
}

const BaseInput = (props: React.ComponentProps<"input">) => {
  return <input className="formInput" {...props} />;
};

export const Input: typeof BaseInput & {
  Pseudo: typeof Pseudo;
  Email: typeof Email;
  Password: typeof Password;
  Confirm: typeof Confirm;
} = ({ ...props }) => {
  return <BaseInput {...props} />;
};

Input.Pseudo = Pseudo;
Input.Email = Email;
Input.Password = Password;
Input.Confirm = Confirm;