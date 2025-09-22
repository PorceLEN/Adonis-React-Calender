import { Form } from "../../components/form/form_field_struct";
import { Input } from "../../components/form/inputs_form_struct";
import Button from "../../components/button";


//---------------------------------------------

// hooks

import useRegisterForm from "../../hooks/use_form_register";

export default function Register() {

  const { register, handleSub } = useRegisterForm();

  return (
    <Form onSubmit={handleSub}>
      <Form.Body>
        <Form.Field>
          <Form.Label htmlFor="pseudo">Nom d'utilisateur</Form.Label>
          <Input.Pseudo type="text" {...register("pseudo")} />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Input.Email type="text" {...register("email")} />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="password">Mot de passe</Form.Label>
          <Input.Password type="password" {...register("password")} />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="confirmPassword">Confirmer le mot de passe</Form.Label>
          <Input.Confirm type="password" {...register("confirmPassword")} />
        </Form.Field>

        <Form.Field>
          <Button
            type="submit"

            //loading
          >
            S'inscrire
          </Button>
        </Form.Field>
      </Form.Body>
    </Form>
  );
}
