import Button from "@/atoms/Button";
import FormAction from "@/atoms/FormAction";
import { FC } from "react";

interface Props {
  isSubmitting: boolean;
}

const SubmitForm: FC<Props> = ({isSubmitting}) => {
  return (
    <FormAction>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Please Wait' : 'Submit'}
      </Button>
    </FormAction>
  )
}

export default SubmitForm;