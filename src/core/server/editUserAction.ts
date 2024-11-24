'use server';

import * as z from 'zod';

import { revalidatePath } from 'next/cache';
import { db } from '@/core/client/client';
import { editUserSchema } from '@/resource/validation/validation';


export const EditUser = async (values: z.infer<typeof editUserSchema>, id: string) => {
  const validatedFields = editUserSchema.safeParse(values);
  
  // console.log(validatedFields);
  
  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { name, role, email, voltsecCharges } = validatedFields.data;
  const charge = Number(voltsecCharges)
  
  try {
    if (id) {
      await db.user.update({
        where: {
          id,
        },
        data: {
          name: name,
          email: email,
          role: role,
          voltsecCharges: charge,
        },
      });
      revalidatePath(`/account/users`);
      return { success: 'User Profile Updated.' };
    }
    return { error: 'Update Failed' };
  } catch (error) {
    return { error: 'Something went wrong.' };
  }
};
