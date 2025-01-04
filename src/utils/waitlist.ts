import { addToWaitlist } from './supabase';
import { notifyAdmin } from './notifications';

export async function handleWaitlistSubmission(email: string) {
  try {
    await addToWaitlist(email);
    await notifyAdmin(email);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to join waitlist. Please try again.');
  }
}