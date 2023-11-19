import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type NavItemProps = {
  href: string;
  text: string;
};

export function NavItem({ href, text }: NavItemProps) {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link href={href} passHref>
      <span
        className={`${
          isActive
            ? "font-bold text-teal-500 dark:text-teal-400"
            : "font-normal text-gray-500 dark:text-gray-400"
        } 'hidden md:inline-block rounded-full hover:text-gray-900 dark:hover:text-gray-200 transition-all`}
      >
        {text}
      </span>
    </Link>
  );
}
