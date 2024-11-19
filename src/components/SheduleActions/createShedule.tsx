// 'use client';
// import { zodResolver } from '@hookform/resolvers/zod';
// import React from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { language } from "@/resource/language/language";
// import { scheduleFormSchema } from "@/resource/validation/validation";
// import { Loader2 } from "lucide-react";
// import { redirect } from "next/navigation";
// import { Button } from "../ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
// import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
// import { Textarea } from "../ui/textarea";
// import { useToast } from "../ui/use-toast";
// import { createSheduleDash } from '@/core/server/account/Shedule/CreateShedule';

// export function CreatePentest() {
//   const [error, setError] = React.useState<string | undefined>('');
//   const [success, setSuccess] = React.useState<string | undefined>('');

//   const { toast } = useToast();

//   const [isPending, setIsPending] = React.useState<boolean>(false);

//   const form = useForm<z.infer<typeof scheduleFormSchema>>({
//     resolver: zodResolver(scheduleFormSchema),
//     defaultValues: {
//       emailReportTo : "",
//       pentestType: 'WEB',
//       timeline: 'Monthly',
//       scope: '',
//     },
//   });

//   async function onSubmit(values: z.infer<typeof scheduleFormSchema>) {
//     setError('');
//     setSuccess('');
//     setIsPending(true);
//     const data = await createSheduleDash(values);
//     if (data?.error) {
//       form.reset();
//       setError(data?.error);
//       toast({
//         title: data?.error,
//       });
//       setIsPending(false);
//     }
//     if (data?.success) {
//       form.reset();
//       setSuccess(data?.success);
//       setIsPending(false);
//       redirect('/dashboard/pentests');

//     }
//     setTimeout(() => {
//       setError('');
//       setSuccess('');
//     }, 5000);
//   }

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className='space-y-2 w-full h-full'>

//         <FormField
//           control={form.control}
//           name='emailReportTo'
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>{language.EMAIL}</FormLabel>

//               <FormControl>
//                 <Input
//                   placeholder='user@example.com'
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name='pentestType'
//           render={({ field }) => (
//             <FormItem className='space-y-3'>
//               <FormLabel>{language.PENTEST_TYPE}</FormLabel>
//               <FormControl>
//                 <RadioGroup
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                   className='flex flex-row space-y-1 space-x-1'>
//                   <FormItem className='flex items-center space-x-3 space-y-0'>
//                     <FormControl>
//                       <RadioGroupItem value='WEB' />
//                     </FormControl>
//                     <FormLabel className='font-normal'>WEB</FormLabel>
//                   </FormItem>
//                   <FormItem className='flex items-center space-x-3 space-y-0'>
//                     <FormControl>
//                       <RadioGroupItem value='CLOUD' />
//                     </FormControl>
//                     <FormLabel className='font-normal'>CLOUD</FormLabel>
//                   </FormItem>
//                   <FormItem className='flex items-center space-x-3 space-y-0'>
//                     <FormControl>
//                       <RadioGroupItem value='APPLICATION' />
//                     </FormControl>
//                     <FormLabel className='font-normal'>APPLICATION</FormLabel>
//                   </FormItem>
//                   <FormItem className='flex items-center space-x-3 space-y-0'>
//                     <FormControl>
//                       <RadioGroupItem value='NETWORK' />
//                     </FormControl>
//                     <FormLabel className='font-normal'>NETWORK</FormLabel>
//                   </FormItem>
//                 </RadioGroup>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name='timeline'
//           render={({ field }) => (
//             <FormItem className='space-y-3'>
//               <FormLabel>{"Timeline"}</FormLabel>
//               <FormControl>
//                 <RadioGroup
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                   className='flex flex-row space-y-1'>
//                   <FormItem className='flex items-center space-x-3 space-y-0'>
//                     <FormControl>
//                       <RadioGroupItem value='Yearly' />
//                     </FormControl>
//                     <FormLabel className='font-normal'>YEARLY</FormLabel>
//                   </FormItem>
//                   <FormItem className='flex items-center space-x-3 space-y-0'>
//                     <FormControl>
//                       <RadioGroupItem value='Monthly' />
//                     </FormControl>
//                     <FormLabel className='font-normal'>MONTHLY</FormLabel>
//                   </FormItem>
//                   <FormItem className='flex items-center space-x-3 space-y-0'>
//                     <FormControl>
//                       <RadioGroupItem value='Weakly' />
//                     </FormControl>
//                     <FormLabel className='font-normal'>WEAKLY</FormLabel>
//                   </FormItem>

//                 </RadioGroup>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name='scope'
//           render={({ field }) => (
//             <FormField
//               control={form.control}
//               name='scope'
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>{language.SCOPE}</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder='Tell us a little bit about yourself'
//                       className='resize-none'
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormDescription>
//                     You can <span>@mention</span> other users and organizations.
//                   </FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           )}
//         />

//         <Button
//           disabled={isPending}
//           type='submit'
//           className=''>
//           {isPending && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
//           {isPending ? 'Submitting...' : 'Submit'}
//         </Button>
//       </form>
//     </Form>
//   );
// }
