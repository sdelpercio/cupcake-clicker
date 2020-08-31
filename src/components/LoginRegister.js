import React from "react";
import { useForm } from "react-hook-form";
// styles
import {
  Flex,
  Text,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Button,
  Input,
} from "@chakra-ui/core";

function LoginRegister({ user, setUser }) {
  //   const { register, handleSubmit, errors, formState } = useForm();
  //   const onSubmit = (data) => console.log(data);

  // TODO: validation
  //   function validateUsername(value) {
  //       let error;
  //       if (!value) {
  //           error = "Username is required";
  //       } else if (value.length > 15 || value.length < 2) {
  //           error = "Username must be 2 - 15 characters long"
  //       }
  //       return error || true;
  //   }
  //   function validatePassword(value) {
  //       let error;
  //       const expression = ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])$
  //       if (!value) {
  //           error = "Password is required";
  //       } else if (value.length < 8) {
  //           error = "Password must be at least 8 characters long"
  //       } else if (expression.test(value) === false) {
  //           error = "Password must include "
  //       }
  //   }

  //   return (
  //     <Flex direction="column" m="0 auto">
  //       <Text>
  //         {user.name === "Aspiring Baker"
  //           ? "Register to save your cupcakes!"
  //           : `Your Cupcakes are safe with us, ${user.name} :)`}
  //       </Text>
  //       {user.name === "Aspiring Baker" ? (
  //         //   REGISTER
  //         <form onSubmit={handleSubmit(onSubmit)}>
  //           <FormControl
  //             isInvalid={
  //               errors.Username || errors.Password || errors.RetypePassword
  //             }
  //           >
  //             <FormLabel htmlFor="Username">Username</FormLabel>
  //             <Input
  //               type="text"
  //               placeholder="Username"
  //               name="Username"
  //               ref={register({})}
  //             />
  //             <FormErrorMessage>
  //               {errors.Username && errors.Username.message}
  //             </FormErrorMessage>
  //             <FormLabel htmlFor="Password">Password</FormLabel>
  //             <Input
  //               type="text"
  //               placeholder="Password"
  //               name="Password"
  //               ref={register({})}
  //             />
  //             <FormErrorMessage>
  //               {errors.Password && errors.Password.message}
  //             </FormErrorMessage>
  //             <FormLabel htmlFor="RetypePassword">Re-type Password</FormLabel>
  //             <Input
  //               type="text"
  //               placeholder="Re-type Password"
  //               name="RetypePassword"
  //               ref={register({})}
  //             />
  //             <FormErrorMessage>
  //               {errors.RetypePassword && errors.RetypePassword.message}
  //             </FormErrorMessage>
  //           </FormControl>
  //           <Button isLoading={formState.isSubmitting} type="submit">
  //             Submit
  //           </Button>
  //         </form>
  //       ) : (
  //         <Flex>Login</Flex>
  //       )}
  //     </Flex>
  //   );
  return <Text m="0 auto">Coming Soon</Text>;
}

export default LoginRegister;
