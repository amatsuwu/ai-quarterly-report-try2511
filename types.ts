export interface Rating {
  stars: number; // 0 to 5
  description: string;
}

export interface SectionData {
  id: string;
  tag: string;
  title: string;
  imageAlt: string;
  whyTitle: string;
  whyPoints: string[];
  ratings: {
    usability: Rating;
    versatility: Rating;
    practicality: Rating;
  };
}