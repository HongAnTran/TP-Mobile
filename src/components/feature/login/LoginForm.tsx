'use client'

import Link from 'next/link'
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
import { GoogleFilledIcon } from '@/components/icons'
import routes from '@/routes'
import { PasswordInput } from '@/components/ui/password-input'
import loginSchema, { LoginValues } from './schema'
import { useToast } from '@/components/ui/use-toast'
import ErrorRespone from '@/api/error'
import AuthServiceApi from '@/services/client/authService'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Spinner from '@/components/loading/Spinner'



export default function LoginForm() {
  const { toast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const defaultValues = {
    email: '',
    password: '',
  }

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues
  })

  async function onSubmit(values: LoginValues) {
    try {
      setIsSubmitting(true)
      const isLogin = await AuthServiceApi.login({
        ...values,
      })
      if (isLogin) {
        router.push('/')
        toast({
          title: 'Đăng nhập thành công',
          description: 'Chào mừng bạn quay trở lại',
        })
      }
    } catch (error) {
      if (error instanceof ErrorRespone) {
        toast({
          title: 'Đăng nhập thất bại',
          description: error.message,
        })
      }
    }finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col   min-w-96 h-full w-full items-center justify-center">
      <Card className="w-full  h-full">
        <CardHeader>
          <CardTitle className="text-2xl text-center flex justify-center flex-col items-center">
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
                      <FormLabel req htmlFor="email">Email</FormLabel>
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
                        <FormLabel req htmlFor="password">Mật khẩu</FormLabel>
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
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                 
                     {
                                                          isSubmitting ? <Spinner /> : " Đăng nhập"
                                                      } 
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
