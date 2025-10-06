import React from 'react';
import { BusinessOwnerDashboard } from './dashboards/BusinessOwnerDashboard';
import { FreelancerDashboard } from './dashboards/FreelancerDashboard';
import { ClientDashboard } from './dashboards/ClientDashboard';
import { MunicipalWorkerDashboard } from './dashboards/MunicipalWorkerDashboard';
import type { User } from '../App';

interface UserDashboardProps {
  user: User;
  onPageChange: (page: 'dashboard' | 'jobs' | 'funding') => void;
}

export function UserDashboard({ user, onPageChange }: UserDashboardProps) {
  switch (user.role) {
    case 'business_owner':
      return <BusinessOwnerDashboard user={user} onPageChange={onPageChange} />;
    case 'freelancer':
      return <FreelancerDashboard user={user} onPageChange={onPageChange} />;
    case 'client':
      return <ClientDashboard user={user} onPageChange={onPageChange} />;
    case 'municipal_worker':
      return <MunicipalWorkerDashboard user={user} onPageChange={onPageChange} />;
    default:
      return <div>Unknown user role</div>;
  }
}