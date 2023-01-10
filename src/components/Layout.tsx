import { FC, ReactElement } from "react";

interface LayoutProps {
  children: ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="bg-gray-100 h-full pt-16 relative">
      <nav className="bg-gray-200/70 backdrop-blur-sm fixed top-0 w-full pb-3 pt-6 border-b border-gray-300 z-50">
        <h2 className="text-center font-medium">Superhero App</h2>
      </nav>
      {children}
    </main>
  );
};

export default Layout;
