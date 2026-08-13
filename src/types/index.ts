export type ProjectCategory = 'open-source' | 'closed-source' | 'practice';

export interface Project {
    id: number;
    title: string;
    description: string;
    category: ProjectCategory;
    technologies: string[];
    previewGif?: string;
    githubRepoUrl?: string;
    liveUrl?: string;
}
