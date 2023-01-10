export interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  urls: Array<{
    type: "detail" | "wiki" | "comiclink";
    url: string;
  }>;
}
