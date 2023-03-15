import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  color: "#3aa6ff",
};

const ActiveLink = ({ href, title }: { href: string; title: string }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <span style={asPath === href ? style : undefined}>{title}</span>
    </Link>
  );
};

export default ActiveLink;
