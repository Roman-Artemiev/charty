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
import React, { useState } from "react";
import { COLORS, TRANSITIONS } from "@/theme";

const RegisterForm = ({
  isOpen,
  onClose,
  onOpen,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) => {
  const [isSingUp, setIsSingUp] = useState<boolean>(true);

  const handleChangeForm = () => {
    setIsSingUp(!isSingUp);
    console.log("🚀 ~ isSingUp:", isSingUp);
  }

  return (
    <>
      {isOpen && (
        <Modal onClose={onClose} isOpen={true} isCentered>
          <ModalOverlay bg={`rgba(15, 16, 17, 0.3)`} />

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
                {isSingUp ? "Sign up" : "Sign in"}
              </Text>

              <Stack spacing="10px" mb="24px">
                <Input
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

                {isSingUp && (
                  <Input
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
                mb="10px"
                bg={COLORS.darkSoft}
                h="42px"
                color={COLORS.white}
                w="100%"
                fontSize="18px"
                transition={TRANSITIONS.mainTransition}
                _hover={{ bg: COLORS.darkLight, color: COLORS.gray }}
              >
                {isSingUp ? "Sign up" : "Sign in"}
              </Button>
              <Text mb="40px" cursor="pointer" fontSize="14px" onClick={handleChangeForm}>
                
                {isSingUp ? "Already have a account?" : "Don't have an account yet?"}{" "}
                <Box
                  as="span"
                  textDecoration="underline"
                  transition={TRANSITIONS.mainTransition}
                  _hover={{ color: COLORS.gray }}
                >
                  {!isSingUp ? "Sign up!" : "Sign in!"}
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
