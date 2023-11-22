import Link from "next/link";
import { siteMetadata } from "@/data/siteMetadata";
import { navigation } from "@/components/Nav/navigation";

export function Footer() {
  return (
    <>
      <footer>
        <hr />
        <div className="xl:grid xl:grid-cols-4 xl:gap-2">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  General
                </h3>
                <div className="mt-4 space-y-4">
                  {navigation.general.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      passHref
                      legacyBehavior
                    >
                      <span className="block text-base text-gray-600 no-underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  Extra
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    target="_blank"
                    href={siteMetadata.resume}
                    className="block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-12">
          <div className="flex items-center order-2 space-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-400 important"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="order-1 text-base">
            &copy; {new Date().getFullYear()} {siteMetadata.author}
          </p>
        </div>
      </footer>
    </>
  );
}
