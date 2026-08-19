export interface ProjectTeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface ProjectDocument {
  id: string;
  name: string;
  type: string;
  size: string;
}

export interface GeologicalActivity {
  date: string;
  value: number;
}

export interface ResourceComposition {
  name: string;
  percentage: number;
}

export interface Project {
  id: string;
  code: string;
  name: string;
  status: "ACTIVE" | "PAUSED" | "COMPLETED";
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  image: string;

  visualization: {
    type: string;
    nodes: number;
  };

  stats: {
    currentYield: number;
    extractionEfficiency: number;
    stabilityScore: number;
    nextInspectionDays: number;
  };

  geologicalActivity: GeologicalActivity[];

  resources: ResourceComposition[];

  team: ProjectTeamMember[];

  documents: ProjectDocument[];
}
