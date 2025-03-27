import { z } from "zod";

const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty({ message: "Vui lòng nhập trường này" })
      .min(2, { message: "Tên phải nhiều hơn 2 kí tự" }),
    email: z
      .string()
      .nonempty({ message: "Vui lòng nhập trường này" })
      .email({ message: "Địa chỉ email không hợp lệ" }),
    phone: z.string().min(10, { message: "Số điện thoại không hợp lệ" }),
    birthday: z.date(),
    gender: z.enum(["MALE", "FEMALE", "OTHER"]),
    password: z
      .string()
      .nonempty({ message: "Vui lòng nhập trường này" })
      .min(6, { message: "Mật khẩu phải có ít nhất 6 kí tự" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Vui lòng nhập trường này" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Mật khẩu không khớp",
  });

export type RegisterValues = z.infer<typeof registerSchema>;

export default registerSchema;
