export interface SkillItem {
  name: string;
  icon: string;
}

export const SKILLS: SkillItem[] = [
  // Frontend & Tools
  { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/DD0031' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' }, // Added JavaScript
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
  { name: 'Metabase', icon: 'https://cdn.simpleicons.org/metabase/519AF4' },

  // DevOps & Deployment
  { name: 'Deployment', icon: 'https://cdn.simpleicons.org/ubuntu/E95420' }, // Uses Linux icon for server deployment
  // Backend & Languages
  { name: 'ASP.NET', icon: 'https://cdn.simpleicons.org/dotnet/512BD4' }, 
  { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot/6DB33F' },
  
  // Databases },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' } // Added MySQL
];