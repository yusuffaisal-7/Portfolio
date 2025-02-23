export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

export type Skill = {
  name: string;
  icon: string;
  level: number;
};