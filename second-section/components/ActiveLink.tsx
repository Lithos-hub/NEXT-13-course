import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: "#3aa6ff",
};

interface Props {
  href: string;
  title: string;
}

const ActiveLink: FC<Props> = ({ href, title }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <span style={asPath === href ? style : undefined}>{title}</span>
    </Link>
  );
};

export default ActiveLink;
