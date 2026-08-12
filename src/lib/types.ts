export type ProjectCategory = 'web' | 'mobile' | 'backend' | 'full-stack';
export type ProjectOwnership = 'client' | 'personal';
export type ProjectType = 'production' | 'case-study' | 'prototype' | 'internal-tool';

export interface ProjectImage {
	src: string;
	alt: string;
	width: number;
	height: number;
}

export interface ProjectLinks {
	github?: string;
	live?: string;
	playStore?: string;
	appStore?: string;
}

export interface Project {
	title: string;
	slug: string;
	description: string;
	category: ProjectCategory;
	platform: string[];
	technologies: string[];
	role: string;
	images: ProjectImage[];
	links: ProjectLinks;
	ownership: ProjectOwnership;
	featured: boolean;
	year: number;
	type: ProjectType;
}
