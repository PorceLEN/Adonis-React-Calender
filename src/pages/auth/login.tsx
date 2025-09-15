import { Form } from "../../components/form/formFieldStruct"
import Button from "../../components/button"
import Input from "../../components/form/inputForm"


export default function Login() {
  return (
    
    <Form method="post">
        <Form.Body>
         <Form.Field>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Input type="text" />
         </Form.Field>

        <Form.Field>
         <Form.Label htmlFor="password">Password</Form.Label>
         <Input type="text" />
        </Form.Field>
        

         <Button
        type="submit"
        //loading
        >
          Se connecter
        </Button>
        </Form.Body>
    </Form>
   
  )
}