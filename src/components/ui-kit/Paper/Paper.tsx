import "./Paper.css";
interface IPaper {
  title?: string;
  subTitle?: string;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}
export const Paper = ({
  title = "",
  subTitle = "",
  className = "",
  children,
}: IPaper) => {
  return (
    <div className={`paper ${className}`}>
      {title && <p className="paper__title">{title}</p>}
      {subTitle && <p className="paper__sub-title">{subTitle}</p>}
      <div className="background"></div>
      {children && <div className="paper__content">{children}</div>}
    </div>
  );
};
