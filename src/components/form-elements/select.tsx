import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "../ui/form";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../ui/select";
import React from "react";

type CustomSelectProps = {
  name: string;
  label: string;
  options: { value: string | number | boolean; label: string }[];
  placeholder?: string;
};

const FormSelect: React.FC<CustomSelectProps> = ({
  name,
  label,
  options,
  placeholder,
}) => {
  const { control } = useFormContext();

  const getSelectedLabel = (value: string | number | boolean) => {
    // Convert the field value to string for comparison
    const stringValue = String(value);
    const option = options.find((opt) => String(opt.value) === stringValue);
    return option?.label || placeholder || "";
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full relative">
          <FormLabel className="absolute left-4 top-3 after:border-b after:w-full after:absolute after:-left-4 after:pb-1 after:top-4 w-full text-muted-foreground">
            {label}
          </FormLabel>
          <FormControl>
            <Select
              onValueChange={(value) => {
                field.onChange(
                  value === "true" ? true : value === "false" ? false : value
                );
              }}
              value={String(field.value)}
              defaultValue={String(field.value)}
            >
              <SelectTrigger className="text-muted-foreground text-xs rounded-lg pl-4 pt-8 pb-4 h-auto">
                {getSelectedLabel(field.value)}
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem
                    className="h-[32px]"
                    key={String(option.value)}
                    value={String(option.value)}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage className="text-xs font-semibold" />
        </FormItem>
      )}
    />
  );
};

export default FormSelect;
