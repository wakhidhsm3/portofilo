export interface ProfileStat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface ProfileDetails {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  statusBadge: string;
  stats: ProfileStat[];
  bioParagraphs: string[];
}
