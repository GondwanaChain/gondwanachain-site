'use server';

import mailchimp from '@mailchimp/mailchimp_marketing';

// Configure the Mailchimp client
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

// Define the subscribe action
export async function subscribeToMailchimp(formData: FormData) {
  const email = formData.get('email');

  if (!email || typeof email !== 'string') {
    return { error: 'Invalid email provided.' };
  }

  const listId = process.env.MAILCHIMP_AUDIENCE_ID;

  try {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'subscribed',
    });

    if (response.status === 'subscribed') {
      return { success: 'Subscription successful!' };
    } else {
      return { error: 'Failed to subscribe. Please try again.' };
    }
  } catch (error) {
    console.error(error);
    return { error: 'An unexpected error occurred.' };
  }
}
