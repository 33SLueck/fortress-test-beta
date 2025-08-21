import { Outlet } from 'react-router';
import { SiFortinet, SiGithub } from '@icons-pack/react-simple-icons';

const Layout = () => {
  return (
    <div className="dark bg-neutral-900/90 text-white">
      <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <SiFortinet className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-2xl font-extrabold font-sans tracking-tight text-neutral-900 dark:text-white">
                Fortress
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#docs"
                className="text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
              >
                Documentation
              </a>
              <a
                href="#community"
                className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Community
              </a>
              <a
                href="https://github.com"
                className="text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors flex items-center space-x-1"
              >
                <SiGithub className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />

      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <SiFortinet className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="text-xl font-extrabold font-sans tracking-tight text-neutral-900 dark:text-white">
                  Fortress
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300">
                The secure PERN stack framework for modern web applications.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-neutral-900 dark:text-white">
                Documentation
              </h4>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Getting Started
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Examples
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Deployment
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-neutral-900 dark:text-white">
                Community
              </h4>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-neutral-900 dark:text-white">
                Support
              </h4>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Status Page
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-800 mt-8 pt-8 text-center text-neutral-400 dark:text-neutral-500">
            <p>&copy; 2024 Fortress Framework. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
