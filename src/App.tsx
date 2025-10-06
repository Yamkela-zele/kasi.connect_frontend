import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { UserDashboard } from './components/UserDashboard';
import { JobMarketplace } from './components/JobMarketplace';
import { FundingCenter } from './components/FundingCenter';
import { Header } from './components/Header';

export type UserRole = 'business_owner' | 'freelancer' | 'client' | 'municipal_worker' | null;

export interface User {
  id: string;
  name: string;
  role: UserRole;
  verified: boolean;
  avatar?: string;
}

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'dashboard' | 'jobs' | 'funding'>('home');

  const handleLogin = (role: UserRole) => {
    // Mock login - in real app this would authenticate properly
    const mockUsers = {
      business_owner: { id: '1', name: 'Thabo Mthembu', role: 'business_owner' as UserRole, verified: true },
      freelancer: { id: '2', name: 'Nomsa Dlamini', role: 'freelancer' as UserRole, verified: false },
      client: { id: '3', name: 'Sarah Chen', role: 'client' as UserRole, verified: true },
      municipal_worker: { id: '4', name: 'John Steyn', role: 'municipal_worker' as UserRole, verified: true }
    };
    
    if (role) {
      setCurrentUser(mockUsers[role]);
      setCurrentPage('dashboard');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('home');
  };

  if (!currentUser) {
    return <LandingPage onRoleSelect={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        user={currentUser} 
        onLogout={handleLogout}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      
      <main className="pt-16">
        {currentPage === 'dashboard' && (
          <UserDashboard user={currentUser} onPageChange={setCurrentPage} />
        )}
        {currentPage === 'jobs' && (
          <JobMarketplace user={currentUser} />
        )}
        {currentPage === 'funding' && (
          <FundingCenter user={currentUser} />
        )}
      </main>
    </div>
  );
}