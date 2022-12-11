export default function Footer() {
  return (
    <footer className="px-3 bg-gray-100">
      <div className="max-w-screen-xl mx-auto py-8">
        <ul>
          <li className="inline-block mr-8">
            <p className="text-gray-900 whitespace-nowrap">
              © 2022 OpenOps
            </p>
          </li>
          <li className="inline-block mr-8">
            <a
              href="https://github.com/ThePlugJumbo/openops"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:underline whitespace-nowrap"
            >
              GitHub
            </a>
          </li>
          <li className="inline-block mr-8">
            <a
              href="https://github.com/ThePlugJumbo/openops/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:underline whitespace-nowrap"
            >
              Contributing
            </a>
          </li>
          <li className="inline-block">
            <a
              href="https://github.com/ThePlugJumbo/openops/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:underline whitespace-nowrap"
            >
              Report A Bug
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
