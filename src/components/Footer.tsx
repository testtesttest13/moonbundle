import Logo from "./Logo";

const INSTALL_URL = "https://apps.shopify.com/moonbundle";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:flex-row sm:justify-between">
        <Logo />

        <div className="flex flex-wrap items-center gap-8 text-sm text-text-muted">
          <a
            href={INSTALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-white"
          >
            Shopify App Store
          </a>
          <a
            href="mailto:contact@moonbundles.app"
            className="transition-colors duration-300 hover:text-white"
          >
            Contact
          </a>
          <a
            href="https://twitter.com/bambino_moon"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-white"
          >
            Twitter
          </a>
        </div>

        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span className="badge-glow rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1.5 text-green-400">
            Built for Shopify
          </span>
          <span>© 2026 CScorp LLC</span>
        </div>
      </div>
    </footer>
  );
}
