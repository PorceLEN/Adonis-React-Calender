import { Form } from "../../components/form/form_field_struct";
import { Input } from "../../components/form/inputs_form_struct";
import Button from "../../components/button";
import useLoginForm from "../../hooks/use_formALERTE";

export default function Login() {
  const { register, handleSub } = useLoginForm();

  return (
    <Form onSubmit={handleSub}>
      <Form.Body>
        <Form.Field>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Input.Email {...register("email")} />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="password">Mot de passe</Form.Label>
          <Input.Password type="password" {...register("password")} />
        </Form.Field>

        <Form.Row />

        <Form.Row />

        <Form.Field>
          <Button
            type="submit"
            //loading
          >
            Se connecter
          </Button>
        </Form.Field>
      </Form.Body>
    </Form>
  );
}
