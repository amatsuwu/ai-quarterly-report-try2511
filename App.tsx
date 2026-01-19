import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EngineeringPage from './components/EngineeringPage';
import PracticalToolsPage from './components/PracticalToolsPage';
import SecurityPage from './components/SecurityPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('engineering');

  const renderPage = () => {
    switch(currentPage) {
      case 'engineering':
        return <EngineeringPage />;
      case 'tools':
        return <PracticalToolsPage />;
      case 'security':
        return <SecurityPage />;
      case 'future':
        return (
            <div className="flex items-center justify-center min-h-[50vh] animate-fade-in">
                <div className="text-center p-12 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-brand-primary mb-4">未來趨勢</h2>
                    <p className="text-gray-500">內容建置中，敬請期待...</p>
                </div>
            </div>
        );
      default:
        return <EngineeringPage />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-secondary selection:text-brand-primary">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-400 text-sm">
          <p>© 2025 AI Engineering Applications. All rights reserved.</p>
          <p className="mt-2">Created for demonstration purposes.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;