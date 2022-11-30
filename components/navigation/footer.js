import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-3 bg-gray-100">
      <div className="max-w-screen-xl mx-auto py-8">
        <ul className="flex gap-8">
          <li>
            <p className="text-gray-900">© 2022 OpenOps</p>
          </li>
          <li>
            <Link
              href="https://github.com/ThePlugJumbo/openops"
              className="text-gray-900 hover:underline whitespace-nowrap"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/ThePlugJumbo/openops/blob/main/CONTRIBUTING.md"
              className="text-gray-900 hover:underline whitespace-nowrap"
            >
              Contributing
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/ThePlugJumbo/openops/issues"
              className="text-gray-900 hover:underline whitespace-nowrap"
            >
              Report An Issue
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
