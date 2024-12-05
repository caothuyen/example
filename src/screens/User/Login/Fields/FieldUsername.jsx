import { memo } from "react";
import Input from "src/components/Form/Input";
import FieldWrapper from "./FieldWrapper";

function FieldUsername({ control, onSubmit, errors, isLoading }) {
  return (
    <FieldWrapper label="Tên đăng nhập" name="username" control={control}>
      <Input iconLeft="fa-user" onSubmitEditing={onSubmit} returnKeyType="next" error={errors?.username} disabled={isLoading} />
    </FieldWrapper>
  );
}

export default memo(FieldUsername);
