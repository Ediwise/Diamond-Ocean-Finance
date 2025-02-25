import clsx from "clsx";
import Link from "next/link";

const Logo = ({ className, props }) => {
  return (
    <Link href={"/"}>
      <h2
        className={clsx(
          "text-3xl font-bold text-gray-600 hover:text-gray-900 duration-300",
          className
        )}
        {...props}
      >
        Diamond Ocean Finance
      </h2>
    </Link>
  );
};

export default Logo;
