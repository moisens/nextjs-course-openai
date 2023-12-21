import Link from "next/link";

const links = [
  { id: "5ffceb2e-9a63", href: "/about", label: "about" },
  { id: "5ffced54-9a63", href: "/client", label: "client" },
  { id: "5ffcee80-9a63", href: "/drinks", label: "drinks" },
  { id: "5ffcefa2-9a63", href: "/tasks", label: "tasks" },
  { id: "5ffcefa2-9a63", href: "/prisma-example", label: "prisma" },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Next.js
        </Link>
        <ul className="menu menu-horizontal gap-2 md:ml-8">
          {links.map((link) => {
            const { id, href, label } = link;
            return (
              <li key={id}>
                <Link href={href} className="capitalize">
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
