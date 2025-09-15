import { Form } from "../../components/form/formFieldStruct"
import Button from "../../components/button"
import Input from "../../components/form/inputForm"


export default function Register() {
  return (
    
  <Form method="post">
    <Form.Body>
      <Form.Field>
        <Form.Label htmlFor="pseudo">Nom d'utilisateur</Form.Label>
        <Input type="text" />
      </Form.Field>
        
      <Form.Field>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Input type="text" />
      </Form.Field>

      <Form.Field>
        <Form.Label htmlFor="password">Mot de passe</Form.Label>
        <Input type="password" />
      </Form.Field>

      <Form.Field>
        <Form.Label htmlFor="confirm">Confirmer le mot de passe</Form.Label>
        <Input type="text" />
      </Form.Field>

      <Form.Field className="formSubmitButton">
         <Button
          type="submit"
        //loading 
        >
          S'inscrire
        </Button>
        </Form.Field>
      </Form.Body>
    </Form>
   
  )
}