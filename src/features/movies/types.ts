
export interface IMovie {
  vote_count?: string;
  id?: string;
  video?: boolean;
  vote_average: number;
  title: string;
  popularity?: string;
  poster_path?: string;
  original_language?: string;
  original_title?: string;
  genre_ids?: string[];
  backdrop_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  key?: number;
  src?: string;
}

export interface IState {
  value: IMovie[];
  total_results: number;
  page: number;
  total_pages: number;
  status?: 'idle' | 'success' | 'loading' | 'failed';
  error?: string 
}
