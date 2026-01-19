import React from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'engineering', name: '工程應用' },
    { id: 'tools', name: '實用工具' },
    { id: 'security', name: '資安須知' },
    { id: 'future', name: '未來趨勢' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between md:justify-center overflow-x-auto no-scrollbar">
          <div className="flex space-x-8 md:space-x-16">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`py-6 text-lg font-medium whitespace-nowrap border-b-2 transition-colors duration-300 ${
                  currentPage === item.id
                    ? 'border-brand-primary text-brand-primary font-bold'
                    : 'border-transparent text-gray-500 hover:text-brand-primary hover:border-brand-primary/30'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;