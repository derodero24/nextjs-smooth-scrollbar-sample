import Link from 'next/link';

import GitHubButton from '../elements/GitHubButton';
import ThemeButton from '../elements/ThemeButton';

export default function Header() {
  return (
    <header className="container flex justify-between">
      <Link href="/" className="text-xl">
        Next.js
      </Link>
      <nav className="flex items-center space-x-6">
        <ThemeButton className="icon-btn" />
        <GitHubButton className="icon-btn" />
      </nav>
    </header>
  );
}
