'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SubmitFormProps } from '@/types'
import { formSchema } from '@/schemas'

export default function SubmitForm ({ handleGetWeather }: SubmitFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cityName: ''
    }
  })

  async function onSubmit (data: z.infer<typeof formSchema>) {
    handleGetWeather(data.cityName)
    form.reset()
  }
  return (
    <Form {...form}>
      <form className="flex flex-col items-center justify-center my-8 space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="cityName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Search.." {...field} />
              </FormControl>
              <FormDescription>
                  Type a city to search.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Search</Button>
      </form>
    </Form>
  )
}
