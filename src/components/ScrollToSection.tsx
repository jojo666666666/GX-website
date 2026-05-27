"use client";

type Props = {
  targetId: string;
  className?: string;
  children: React.ReactNode;
};

export default function ScrollToSection({
  targetId,
  className,
  children,
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = window.innerWidth >= 768 ? 80 : 64;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <a href={`#${targetId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
