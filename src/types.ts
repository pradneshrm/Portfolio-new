export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  metrics: {
    label: string;
    value: string;
    change?: string;
  }[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    tags: string[];
  }[];
}

export interface MetricStat {
  id: string;
  value: string;
  unit?: string;
  label: string;
  description: string;
  icon: string;
}

export interface PipelineStage {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  status: 'idle' | 'processing' | 'completed';
  metrics: { [key: string]: string };
  details: string;
}

export interface VisitorStats {
  totalVisits: number;
  uniqueSessions: number;
  todayVisits: number;
  liveViewers: number;
  lastVisited: string;
  topReferrers: { source: string; count: number; percent: number }[];
  geoBreakdown: { country: string; flag: string; count: number }[];
}
