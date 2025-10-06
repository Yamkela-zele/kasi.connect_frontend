import React from 'react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';
import { 
  Home, 
  Briefcase, 
  DollarSign, 
  Settings, 
  LogOut, 
  CheckCircle, 
  AlertCircle,
  Bell
} from 'lucide-react';
import type { User } from '../App';

interface HeaderProps {
  user: User;
  onLogout: () => void;
  currentPage: string;
  onPageChange: (page: 'dashboard' | 'jobs' | 'funding') => void;
}

export function Header({ user, onLogout, currentPage, onPageChange }: HeaderProps) {
  const getRoleTitle = (role: string) => {
    switch (role) {
      case 'business_owner': return 'Business Owner';
      case 'freelancer': return 'Freelancer';
      case 'client': return 'Client';
      case 'municipal_worker': return 'Municipal Worker';
      default: return 'User';
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1E88E5] border-b border-[#42A5F5]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-[#1E88E5] font-bold text-lg">K</span>
            </div>
            <span className="font-medium text-white">Kasi Konnect</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button
              variant={currentPage === 'dashboard' ? 'secondary' : 'ghost'}
              className={`gap-2 ${currentPage === 'dashboard' 
                ? 'bg-white text-[#1E88E5] hover:bg-white/90' 
                : 'text-white hover:bg-[#42A5F5] hover:text-white'}`}
              onClick={() => onPageChange('dashboard')}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant={currentPage === 'jobs' ? 'secondary' : 'ghost'}
              className={`gap-2 ${currentPage === 'jobs' 
                ? 'bg-white text-[#1E88E5] hover:bg-white/90' 
                : 'text-white hover:bg-[#42A5F5] hover:text-white'}`}
              onClick={() => onPageChange('jobs')}
            >
              <Briefcase className="h-4 w-4" />
              {user.role === 'client' ? 'Projects' : 
               user.role === 'municipal_worker' ? 'Opportunities' : 'Jobs'}
            </Button>
            {(user.role === 'business_owner' || user.role === 'municipal_worker') && (
              <Button
                variant={currentPage === 'funding' ? 'secondary' : 'ghost'}
                className={`gap-2 ${currentPage === 'funding' 
                  ? 'bg-white text-[#1E88E5] hover:bg-white/90' 
                  : 'text-white hover:bg-[#42A5F5] hover:text-white'}`}
                onClick={() => onPageChange('funding')}
              >
                <DollarSign className="h-4 w-4" />
                Funding
              </Button>
            )}
          </nav>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative text-white hover:bg-[#42A5F5]">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                3
              </span>
            </Button>

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-3 p-2 text-white hover:bg-[#42A5F5]">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-white text-[#1E88E5] text-sm">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left hidden md:block">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-white">{user.name}</span>
                      {user.verified ? (
                        <CheckCircle className="h-4 w-4 text-green-300" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-orange-300" />
                      )}
                    </div>
                    <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                      {getRoleTitle(user.role!)}
                    </Badge>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent align="end" className="w-56">
                <div className="p-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">{user.name}</span>
                    {user.verified ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                    )}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {getRoleTitle(user.role!)}
                  </Badge>
                  {!user.verified && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Verification pending
                    </p>
                  )}
                </div>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                
                <DropdownMenuItem>
                  <span>Profile</span>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem onClick={onLogout} className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}