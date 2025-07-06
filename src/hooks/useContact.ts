
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export type ContactMessage = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

export const useContactSubmission = () => {
  return useMutation({
    mutationFn: async (contactData: ContactMessage) => {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([contactData])
        .select();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      toast.success('Message sent successfully! I\'ll get back to you soon.');
    },
    onError: (error) => {
      console.error('Contact submission error:', error);
      toast.error('Failed to send message. Please try again.');
    },
  });
};
