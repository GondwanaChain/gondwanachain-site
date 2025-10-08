"use client";

import { useForm } from '@tanstack/react-form';
// import { zodValidator } from '@tanstack/zod-form-adapter'; // REMOVED
import { subscribeToMailchimp } from '@/app/actions/subscribe';
// import { newsletterFormSchema } from '@/app/lib/schemas'; // REMOVED
import { useState } from 'react';

// Simple email validation regex for temporary use
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Subscribe() {

const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null);
  const form = useForm({
    defaultValues: { email: '' },
    onSubmit: async ({ value }) => {
      // Clear previous status messages
      setStatus(null);
      // Create FormData object from form values
      const formData = new FormData();
      formData.append('email', value.email);
      
      // Call the Server Action
      const result = await subscribeToMailchimp(formData);

      if (result.error) {
        setStatus({ message: result.error, isError: true });
      } else {
        setStatus({ message: result.success, isError: false });
        form.reset(); // Clear the form on success
      }
    },
  });

    return (
        <form 
            onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit();
            }}>
            <div className="flex flex-row gap-2">
                 <form.Field
          name="email"
          // REMOVED: validatorAdapter={zodValidator}
          validators={{
            // REPLACED Zod schema with a simple inline validator function
            onChange: ({ value }) => {
              if (!value) return 'Email is required';
              if (!EMAIL_REGEX.test(value)) return 'Invalid email address';
              return undefined; // Return undefined on success
            },
          }}
          children={(field) => (
                <>
                <input  id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)} type="email" className="bg-base-200 border rounded-lg py-1 px-2" required placeholder="email@example.com" />
 {field.state.meta.errors ? (
                <em className="text-red-500 text-sm">
                  {field.state.meta.errors.join(', ')}
                </em>
              ) : null}
            </>
          )}
        />         <form.Subscribe selector={(state) => state.isSubmitting}>
          {(isSubmitting) => (
                <button type="submit" disabled={isSubmitting} className="btn btn-primary rounded border shadow shadow-lg font-bold uppercase">{isSubmitting ? 'Subscribing...' : 'Subscribe'}</button>
            )}
        </form.Subscribe>
            </div>
        
              {status && (
                    <div className={`mt-4 ${status.isError ? 'text-red-500' : 'text-green-500'}`}>
                          {status.message}
                    </div> 
                      )}

        </form>
        
    );
}