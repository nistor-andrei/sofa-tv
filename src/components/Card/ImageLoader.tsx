import { ReactNode } from "react";
import ContentLoader from "react-content-loader";

type SkeletonImageProps = {
  isLoading: boolean;
  children: ReactNode;
};

export const ImageLoader = ({ isLoading, children }: SkeletonImageProps) => {
  return isLoading ? (
    <ContentLoader
      speed={2}
      width={180}
      height={270}
      viewBox="0 0 180 270"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="180" height="270" />
    </ContentLoader>
  ) : (
    <>{children}</>
  );
};
