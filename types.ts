// types.ts
export type Section = 'Morning' | 'Work' | 'Evening';

export type Task = {
  id: number;
  label: string;
  done: boolean;
};

export type OnToggle = (section: Section, taskId: number) => void;
