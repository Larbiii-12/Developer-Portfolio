
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type Skill = Tables<'skills'>;

export const useSkills = () => {
  return useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('category', { ascending: true });

      if (error) throw error;
      return data;
    },
  });
};

export const useSkillsByCategory = () => {
  return useQuery({
    queryKey: ['skills-by-category'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('level', { ascending: false });

      if (error) throw error;
      
      // Group skills by category
      const groupedSkills = data.reduce((acc, skill) => {
        if (!acc[skill.category]) {
          acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
      }, {} as Record<string, Skill[]>);

      return groupedSkills;
    },
  });
};
