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
import { PasswordInput } from '@/components/ui/password-input'
import registerSchema, { RegisterValues } from './schema'
import routes from '@/routes'
import SelectOptions from '@/components/common/SelectOptions'
import { GENDER_OPTIONS } from '@/consts/customer'
import Datepicker from '@/components/common/Datepicker'

export default function RegisterForm() {
    const form = useForm<RegisterValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
        },
    })

    async function onSubmit(values: RegisterValues) {
        try {
            // Assuming an async registration function
            console.log(values)

        } catch (error) {

        }
    }

    return (
        <div className="flex min-h-[60vh] h-full w-full items-center justify-center px-4">
            <Card className="w-full  h-full">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Đăng kí</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid gap-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel req htmlFor="name">Họ và tên</FormLabel>
                                            <FormControl>
                                                <Input id="name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
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
                                <div className=' grid grid-cols-2 gap-4'>

                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem className="grid gap-2">
                                                <FormLabel htmlFor="phone">Số điện thoại</FormLabel>
                                                <FormControl>
                                                    <Input {...field} id='phone' autoComplete='phone' />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='gender'
                                        render={({ field }) => (
                                            <FormItem className="grid gap-2">
                                                <FormLabel htmlFor="phone">Giới tính</FormLabel>
                                                <FormControl>
                                                    <SelectOptions  {...field} options={GENDER_OPTIONS} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {/* <div className=' grid grid-cols-2 gap-4'>
                                    <FormField
                                        control={form.control}
                                        name='gender'
                                        render={({ field }) => (
                                            <FormItem className="grid gap-2">
                                                <FormLabel htmlFor="phone">Giới tính</FormLabel>
                                                <FormControl>
                                                    <SelectOptions  {...field} options={GENDER_OPTIONS} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="birthday"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel>Sinh nhật</FormLabel>
                                                <Datepicker {...field} placeholder='Chọn ngày sinh nhật'
                                                    isShowYearSelect
                                                />
                                                <FormMessage />
                                            </FormItem>)}
                                    />
                                </div> */}

                                {/* Password Field */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel req htmlFor="password">Mật khẩu</FormLabel>
                                            <FormControl>
                                                <PasswordInput
                                                    id="password"
                                                    autoComplete="new-password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Confirm Password Field */}
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel req htmlFor="confirmPassword">
                                                Xác thực mật khẩu
                                            </FormLabel>
                                            <FormControl>
                                                <PasswordInput
                                                    id="confirmPassword"
                                                    autoComplete="new-password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full">
                                    Đăng kí
                                </Button>
                            </div>
                        </form>
                    </Form>
                    <div className="mt-4 text-center text-sm">
                        Bạn đã có tài khoản?{' '}
                        <Link href={routes.login} className="underline">
                            Đăng nhập
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
