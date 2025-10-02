'use server';

import mailchimp from '@mailchimp/mailchimp_marketing';

// --------------------
// Type Assertion and Configuration
// --------------------

// Ensure all required environment variables are present and are strings
const apiKey = process.env.MAILCHIMP_API_KEY;
const server = process.env.MAILCHIMP_API_SERVER;
const listId = process.env.MAILCHIMP_AUDIENCE_ID; // Moved outside the function for clarity, but the error also applies here

if (!apiKey || typeof apiKey !== 'string') {
  throw new Error('Missing or invalid MAILCHIMP_API_KEY environment variable.');
}

if (!server || typeof server !== 'string') {
  throw new Error('Missing or invalid MAILCHIMP_API_SERVER environment variable.');
}

if (!listId || typeof listId !== 'string') {
  // We'll throw an error here, but you might handle this within the function
  // to return a user-friendly error message, depending on your app's needs.
  throw new Error('Missing or invalid MAILCHIMP_AUDIENCE_ID environment variable.');
}

// Configure the Mailchimp client
// We can now safely use the non-nullable string variables
mailchimp.setConfig({
  apiKey: apiKey, // Now a guaranteed 'string'
  server: server, // Now a guaranteed 'string'
});

// Define the subscribe action
export async function subscribeToMailchimp(formData: FormData) {
  const email = formData.get('email');

  if (!email || typeof email !== 'string') {
    return { error: 'Invalid email provided.' };
  }

  try {
    // listId is now guaranteed to be a 'string'
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'subscribed',
    });

    if (response.status === 'subscribed') {
      return { success: 'Subscription successful!' };
    } else {
      // Mailchimp often returns a detailed error object on non-200 responses
      // You might want to inspect the 'response' for more detail.
      return { error: 'Failed to subscribe. Please try again.' };
    }
  } catch (error) {
    console.error(error);
    return { error: 'An unexpected error occurred.' };
  }
}
