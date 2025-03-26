'use client'

import Link from 'next/link'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Logo from '@/components/common/Logo'
import { GoogleFilledIcon } from '@/components/icons'
import routes from '@/routes'
import { PasswordInput } from '@/components/ui/password-input'
import { login } from '@/app/actions'

// Improved schema with additional validation rules
const formSchema = z.object({
  email: z.string().nonempty({ message: "Vui lòng nhập email" }).email({ message: 'Địa chỉ email không hợp lệ' }),
  password: z
    .string()
    .nonempty({ message: "Vui lòng nhập mật khẩu" })
    .min(6, { message: 'Mật khẩu phải có ít nhất 6 kí tự' })
    .max(100, { message: 'Mật khẩu không được quá 100 kí tự' }),
})

export default function LoginPreview() {
  const defaultValues = {
    email: '',
    password: '',
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await login(values)
    } catch (error) {
      console.error('Form submission error', error)
    }
  }

  return (
    <div className="flex flex-col   min-w-96 h-full w-full items-center justify-center">
      <Card className="w-full  h-full">
        <CardHeader>
          <CardTitle className="text-2xl text-center flex justify-center flex-col items-center">
            <Logo className=' rounded-sm' href={""} />
            Đăng nhập
          </CardTitle>

        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <div className="flex justify-between items-center">
                        <FormLabel htmlFor="password">Mật khẩu</FormLabel>
                        <Link
                          href="#"
                          className="ml-auto inline-block text-sm underline"
                        >
                          Quên mật khẩu?
                        </Link>
                      </div>
                      <FormControl>
                        <PasswordInput
                          id="password"
                          placeholder="******"
                          autoComplete="current-password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Đăng nhập
                </Button>
                <Button variant="outline" className="w-full">
                  <GoogleFilledIcon className=' mr-2' />  Đăng nhập với Google
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Nếu bạn chưa có tài khoản?
            <Link href={routes.register} className="underline">
              Đăng ký ngay
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
