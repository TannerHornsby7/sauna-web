'use server';

// import { z } from 'zod';
// import { sql } from '@vercel/postgres';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
import { signIn } from '../../auth'

// const FormSchema = z.object({
//     id: z.string(),
//     customerId: z.string(),
//     amount: z.coerce.number(),
//     status: z.enum(['pending', 'paid']),
//     date: z.string(),
// });

// const CreateInvoice = FormSchema.omit({ id: true, date: true });


// export async function createInvoice(formData: FormData) {
//     const { customerId, amount, status } = CreateInvoice.parse({
//         customerId: formData.get('customerId'),
//         amount: formData.get('amount'),
//         status: formData.get('status'),
//     });

//     const amountInCents = amount * 100;
//     const date = new Date().toISOString().split('T')[0];
//     try {
//         await sql`
//     INSERT INTO invoices (customer_id, amount, status, date)
//     VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
//   `;
//     } catch (error) {
//         return {
//             message: 'Database Error: Failed to create invoice.'
//         };
//     }

//     revalidatePath('/dashboard/invoices');
//     redirect('/dashboard/invoices');
// }

// const UpdateInvoice = FormSchema.omit({ id: true, date: true });

// export async function updateInvoice(id: string, formData: FormData) {
//     const { customerId, amount, status } = UpdateInvoice.parse({
//         customerId: formData.get('customerId'),
//         amount: formData.get('amount'),
//         status: formData.get('status'),
//     });

//     const amountInCents = amount * 100;
//     try {
//         await sql`
//     UPDATE invoices
//     SET
//       customer_id = ${customerId},
//       amount = ${amountInCents},
//       status = ${status}
//     WHERE id = ${id}
//   `;
//     } catch (error) {
//         return {
//             message: 'Database Error: Failed to update invoice.'
//         };
//     }
    
//     revalidatePath('/dashboard/invoices');
//     redirect('/dashboard/invoices');
// }

// export async function deleteInvoice(id: string) {
//     try{
//     await sql`DELETE FROM invoices WHERE id = ${id}`;
//     } catch (error) {
//         return {
//             message: 'Database Error: Failed to delete invoice.'
//         };
//     }
//     revalidatePath('/dashboard/invoices');
// }

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', Object.fromEntries(formData));
    } catch (error) {
      if ((error as Error).message.includes('CredentialsSignin')) {
        return 'CredentialsSignin';
      }
      throw error;
    }
  }

  /*

  app.get('/inventory', async (req, res) => {
    // display the inventory of the user if they are logged in
    // if they aren't redirect them to the login page
    if (req.session.user) {
        const { steamId } = req.session.user;
        const inventory = await axios.get(`https://steamcommunity.com/inventory/${steamId}/753/6?l=english&count=5000`);
        // const inventory = await axios.get(`https://steamcommunity.com/inventory/${steamId}/753/1?l=english&count=5000`);
        // send all the assets and display their images
        // console.log('inventory', inventory.data.rgInventory)
        res.send(inventory.data);
    } else {
        res.redirect('/login');
    }
});

  */