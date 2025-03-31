import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Vui lòng nhập email" })
    .email({ message: "Địa chỉ email không hợp lệ" }),
  password: z
    .string()
    .nonempty({ message: "Vui lòng nhập mật khẩu" })
    .min(6, { message: "Mật khẩu phải có ít nhất 6 kí tự" })
    .max(100, { message: "Mật khẩu không được quá 100 kí tự" }),
});

export type LoginValues = z.infer<typeof loginSchema>;

export default loginSchema;
