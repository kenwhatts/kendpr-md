export interface Props {
  type?: "MainSection" | "SubSection";
  icon?: ((_props: any) => any) & ImageMetadata;
  title: string;
}
