
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useWaitingList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const addToWaitingList = async (email: string, source: string = 'landing_page') => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('waiting_list')
        .insert([
          {
            email: email.toLowerCase().trim(),
            source,
            is_subscribed: true
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already signed up!",
            description: "This email is already on our waiting list.",
            variant: "default",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Welcome to the waiting list!",
          description: "You'll be among the first to know when Lemonote launches.",
        });
      }
      
      return { success: !error };
    } catch (error) {
      console.error('Error adding to waiting list:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addToWaitingList,
    isLoading
  };
};
