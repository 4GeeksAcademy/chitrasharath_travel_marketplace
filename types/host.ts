export interface HostMetric {
  label: string;
  value: string;
}

export interface Host {
  id: string;
  name: string;
  avatarUrl: string;
  isSuperhost: boolean;
  rating: number;
  yearsHosting: number;
  responseRate: string;
  responseTime: string;
  bio: string;
  traits: string[];
  stats: HostMetric[];
}
