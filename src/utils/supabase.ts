import { supabase } from '../lib/supabase';

export async function addToWaitlist(email: string) {
  try {
    const { error } = await supabase
      .from('waitlist')
      .insert([{ email }]);
    
    if (error) {
      if (error.code === '23505') {
        throw new Error('You\'re already on the waitlist! We\'ll keep you updated.');
      }
      throw new Error('Failed to join waitlist. Please try again.');
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred. Please try again.');
  }
}