import {
  Box,
  Button,
  Input,
  Modal,
  Text,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { COLORS, TRANSITIONS } from "@/theme";
import { useRouter } from "next/navigation";

const RegisterForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();
  useEffect(() => {
    const users = localStorage.getItem("users");
    setData(users ? JSON.parse(users) : []);
    console.log("🚀 ~ localStorage:", users);
  }, []);

  const [isSignUp, setisSignUp] = useState<boolean>(true);
  const [user, setUser] = useState<any>({
    id: '',
    name: "",
    email: "",
    password: "",
    games: [],
    wishlist: [],
  });

  const handleChangeForm = () => {
    setisSignUp(!isSignUp);
    console.log("🚀 ~ isSignUp:", isSignUp);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]: e.target.value});
    console.log("🚀 ~ USER:", {...user, [e.target.name]: e.target.value});
  }

  const onSubmit = () => {
    if (isSignUp) {
      if (user.name && user.email && user.password) {
        const userExists = data.some((existingUser) => existingUser.email === user.email);
  
        if (userExists) {
          alert("User already exists, try to sign in");
        } else {
          const userId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
          const newUser = { ...user, id: userId };

          const updatedData = [...data, newUser ];
          setData(updatedData);
          localStorage.setItem("users", JSON.stringify(updatedData));
          localStorage.setItem("isLoggedIn", JSON.stringify([true, userId]));
          router.refresh();
          alert("Registration completed successfully");
          onClose();
        }
      } else {
        alert("Please fill all fields");
      }
    } else {
      if (user.email && user.password) {
        const userExists = data.some((existingUser) => existingUser.email === user.email && existingUser.password === user.password);
  
        if (userExists) {
          localStorage.setItem("isLoggedIn", JSON.stringify(true));
          router.refresh();
          alert("User signed in successfully");
          onClose()
        } else {
          alert("User not found, try to sign up");
        }
      } else {
        alert("Please fill all fields");
      }
    }
  };

  return (
    <>
      {isOpen && (
        <Modal onClose={onClose} isOpen={true} isCentered>
          <ModalOverlay bg={COLORS.modalOverlay} />

          <ModalContent
            bg={COLORS.dark}
            borderRadius="10px"
            border="1px solid"
            borderColor={COLORS.darkSoft}
            p={6}
          >
            <ModalCloseButton />

            <ModalBody p={0}>
              <Text
                textAlign="center"
                fontSize="24px"
                fontWeight="bold"
                mb={10}
              >
                {isSignUp ? "Sign up" : "Sign in"}
              </Text>

              <Stack spacing="10px" mb="24px">
                <Input
                  onChange={handleChange}
                  name="name"
                  placeholder="Name"
                  h="42px"
                  type="name"
                  bg={COLORS.darkLight}
                  color={COLORS.white}
                  _placeholder={{ color: COLORS.darkSoft }}
                  border="none"
                  _focus={{
                    outline: "none",
                    border: "none",
                    boxShadow: "none",
                  }}
                />
                <Input
                  onChange={handleChange}
                  name="email"
                  placeholder="Email"
                  h="42px"
                  type="email"
                  bg={COLORS.darkLight}
                  color={COLORS.white}
                  _placeholder={{ color: COLORS.darkSoft }}
                  border="none"
                  _focus={{
                    outline: "none",
                    border: "none",
                    boxShadow: "none",
                  }}
                />

                {isSignUp && (
                  <Input
                    onChange={handleChange}
                    name="password"
                    placeholder="Password"
                    h="42px"
                    type="text"
                    bg={COLORS.darkLight}
                    color={COLORS.white}
                    _placeholder={{ color: COLORS.darkSoft }}
                    border="none"
                    _focus={{
                      outline: "none",
                      border: "none",
                      boxShadow: "none",
                    }}
                  />
                )}
              </Stack>

              <Button
                onClick={onSubmit}
                mb="10px"
                bg={COLORS.darkSoft}
                h="42px"
                color={COLORS.white}
                w="100%"
                fontSize="18px"
                transition={TRANSITIONS.mainTransition}
                _hover={{ bg: COLORS.darkLight, color: COLORS.gray }}
              >
                {isSignUp ? "Sign up" : "Sign in"}
              </Button>
              <Text mb="40px" cursor="pointer" fontSize="14px" onClick={handleChangeForm}>
                
                {isSignUp ? "Already have a account?" : "Don't have an account yet?"}{" "}
                <Box
                  as="span"
                  textDecoration="underline"
                  transition={TRANSITIONS.mainTransition}
                  _hover={{ color: COLORS.gray }}
                >
                  {!isSignUp ? "Sign up!" : "Sign in!"}
                </Box>
              </Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default RegisterForm;
