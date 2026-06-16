import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContactMutation } from "../../api/contact/contact.mutation";
import * as Styled from "./ContactFormCard.styled";

const MAX_MESSAGE_LENGTH = 1200;

// Zod schema handles the text validation for the contact message.
const contactSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, "Musíte vyplnit tělo zprávy")
    .max(MAX_MESSAGE_LENGTH, "Zpráva může mít maximálně 1200 znaků"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactFormCard = () => {
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  // React Hook Form manages form state and syncs it with Zod validation.
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isSubmitted },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      message: "",
    },
  });

  const { mutateAsync, isPending } = useContactMutation();

  const messageValue = watch("message") ?? "";

  // Counter is derived from the current text length to show remaining characters.
  const remainingCharacters = MAX_MESSAGE_LENGTH - messageValue.length;

  useEffect(() => {
    if (isSubmittedSuccessfully && messageValue.length > 0) {
      setIsSubmittedSuccessfully(false);
    }
  }, [isSubmittedSuccessfully, messageValue]);

  const onSubmit = async (values: ContactFormValues) => {
    await mutateAsync({ message: values.message.trim() });
    setIsSubmittedSuccessfully(true);
    reset({ message: "" });
  };

  return (
    <Styled.PageContainer>
      <Styled.TextHeaderWrapper>Kontakt</Styled.TextHeaderWrapper>
      <Styled.Card>
        {/* Main contact form */}
        <Styled.FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <Styled.TextArea
            placeholder="Zde začněte psát zprávu..."
            maxLength={MAX_MESSAGE_LENGTH}
            aria-invalid={Boolean(errors.message)}
            {...register("message")}
          />

          <Styled.Counter>Zbývá: {remainingCharacters}</Styled.Counter>

          {(isSubmitted || errors.message) && errors.message?.message && (
            <Styled.ValidationError>
              <Styled.WarningSign>!</Styled.WarningSign>
              {errors.message.message}
            </Styled.ValidationError>
          )}

          {isSubmittedSuccessfully && (
            <Styled.SuccessMessage>Zpráva byla úspěšně odeslána.</Styled.SuccessMessage>
          )}

          <Styled.ActionsRow>
            <Button type="submit" variant="primary" disabled={!isValid || isPending}>
              {isPending ? "Odesílání..." : "Odeslat"}
            </Button>
          </Styled.ActionsRow>
        </Styled.FormWrapper>
      </Styled.Card>
    </Styled.PageContainer>
  );
};
