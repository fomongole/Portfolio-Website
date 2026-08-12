export type ProjectCategory = 'web' | 'mobile' | 'backend' | 'full-stack';
export type ProjectOwnership = 'client' | 'employer' | 'team' | 'personal';
export type ProjectType = 'production' | 'case-study' | 'prototype' | 'internal-tool';
export type ProjectImageKind = 'web' | 'mobile' | 'brand' | 'system';

export interface ProjectImage {
	src: string;
	alt: string;
	width: number;
	height: number;
	assetPath?: string;
	kind?: ProjectImageKind;
	group?: string;
	aspect?: string;
	caption?: string;
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
	intro?: string;
	category: ProjectCategory;
	categoryLabel: string;
	platform: string[];
	technologies: string[];
	role: string;
	images: ProjectImage[];
	links: ProjectLinks;
	ownership: ProjectOwnership;
	ownershipLabel: string;
	featured: boolean;
	year?: number;
	type: ProjectType;
	notes?: string[];
	problem?: string;
	solution?: string;
	features?: string[];
	architecture?: string[];
}
