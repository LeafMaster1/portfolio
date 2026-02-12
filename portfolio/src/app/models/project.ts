export interface Project {
  name: string;
  description: string;
  url: string; // Link to GitHub repo
  language?: string[];
  images?: string[]; // Bilder för modalen
}
