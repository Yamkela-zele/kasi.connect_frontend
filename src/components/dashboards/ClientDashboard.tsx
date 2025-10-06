import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  Briefcase, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Plus,
  Star,
  MapPin
} from 'lucide-react';
import type { User } from '../../App';

interface ClientDashboardProps {
  user: User;
  onPageChange: (page: 'dashboard' | 'jobs' | 'funding') => void;
}

export function ClientDashboard({ user, onPageChange }: ClientDashboardProps) {
  const stats = [
    { title: 'Active Projects', value: '12', change: '+3', icon: Briefcase, color: 'text-blue-600' },
    { title: 'Total Freelancers', value: '28', change: '+8', icon: Users, color: 'text-green-600' },
    { title: 'Budget Spent', value: 'R85K', change: 'This month', icon: DollarSign, color: 'text-purple-600' },
    { title: 'Avg. Rating', value: '4.7', change: '32 reviews', icon: Star, color: 'text-yellow-600' }
  ];

  const activeProjects = [
    {
      id: 1,
      title: 'Company Website Redesign',
      freelancer: 'Nomsa Dlamini',
      budget: 'R25,000',
      deadline: '2024-10-20',
      progress: 65,
      status: 'in_progress',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Marketing Campaign Graphics',
      freelancer: 'David Mokwena',
      budget: 'R8,500',
      deadline: '2024-10-15',
      progress: 90,
      status: 'review',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Product Photography',
      freelancer: 'Sarah Johnson',
      budget: 'R6,000',
      deadline: '2024-10-25',
      progress: 30,
      status: 'in_progress',
      priority: 'low'
    }
  ];

  const recentApplications = [
    {
      id: 1,
      project: 'Content Writing for Blog',
      freelancer: 'Thabo Mthembu',
      rating: 4.8,
      proposal: 'R12,000',
      timeframe: '2 weeks',
      skills: ['Content Writing', 'SEO'],
      verified: true
    },
    {
      id: 2,
      project: 'Mobile App UI Design',
      freelancer: 'Lisa Nkomo',
      rating: 4.9,
      proposal: 'R18,000',
      timeframe: '3 weeks',
      skills: ['UI/UX Design', 'Mobile Design'],
      verified: true
    },
    {
      id: 3,
      project: 'Social Media Management',
      freelancer: 'John Maluleke',
      rating: 4.6,
      proposal: 'R5,000/month',
      timeframe: 'Ongoing',
      skills: ['Social Media', 'Content Creation'],
      verified: false
    }
  ];

  const localProviders = [
    {
      id: 1,
      name: 'Mthembu Construction',
      category: 'Construction & Renovation',
      rating: 4.8,
      projects: 24,
      location: 'Mamelodi',
      verified: true,
      municipal: true
    },
    {
      id: 2,
      name: 'Kasi Digital Solutions',
      category: 'Web Development',
      rating: 4.9,
      projects: 18,
      location: 'Soshanguve',
      verified: true,
      municipal: false
    },
    {
      id: 3,
      name: 'Ubuntu Marketing Co.',
      category: 'Marketing & Design',
      rating: 4.7,
      projects: 32,
      location: 'Atteridgeville',
      verified: true,
      municipal: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'review': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'delayed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1>Welcome back, {user.name}!</h1>
        <p className="text-muted-foreground">
          Manage your projects, connect with local talent, and support community businesses.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl">{stat.value}</span>
                      <Badge variant="secondary" className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Active Projects */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Active Projects
            </CardTitle>
            <Button onClick={() => onPageChange('jobs')} className="gap-2">
              <Plus className="h-4 w-4" />
              Post New Project
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeProjects.map((project) => (
              <div key={project.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm">{project.title}</h4>
                    <p className="text-xs text-muted-foreground">by {project.freelancer}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getPriorityColor(project.priority)}>
                      {project.priority}
                    </Badge>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status === 'in_progress' ? 'In Progress' : 
                       project.status === 'review' ? 'Under Review' : 'Completed'}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600">{project.budget}</span>
                  <span className="text-muted-foreground">Due: {project.deadline}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1">
                    Message
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Applications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Recent Applications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentApplications.map((application) => (
              <div key={application.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm">{application.project}</h4>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-muted-foreground">{application.freelancer}</p>
                      {application.verified && (
                        <CheckCircle className="h-3 w-3 text-green-600" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs">{application.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600">{application.proposal}</span>
                  <span className="text-muted-foreground">{application.timeframe}</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {application.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Proposal
                  </Button>
                  <Button size="sm" className="flex-1">
                    Accept
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Local Service Providers */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Recommended Local Providers
          </CardTitle>
          <Button variant="outline">
            View All Providers
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {localProviders.map((provider) => (
              <div key={provider.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm">{provider.name}</h4>
                      {provider.verified && (
                        <CheckCircle className="h-3 w-3 text-green-600" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{provider.category}</p>
                  </div>
                  {provider.municipal && (
                    <Badge variant="outline" className="text-xs text-blue-600 border-blue-300">
                      Municipal
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span>{provider.rating}</span>
                  </div>
                  <span className="text-muted-foreground">{provider.projects} projects</span>
                </div>
                
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{provider.location}</span>
                </div>
                
                <Button size="sm" className="w-full">
                  View Profile
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onPageChange('jobs')}>
          <CardContent className="p-6 text-center space-y-2">
            <Plus className="h-8 w-8 mx-auto text-blue-600" />
            <h4>Post New Project</h4>
            <p className="text-xs text-muted-foreground">Find the right talent for your next project</p>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center space-y-2">
            <Users className="h-8 w-8 mx-auto text-green-600" />
            <h4>Browse Freelancers</h4>
            <p className="text-xs text-muted-foreground">Discover local talent in your area</p>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center space-y-2">
            <Clock className="h-8 w-8 mx-auto text-purple-600" />
            <h4>Project History</h4>
            <p className="text-xs text-muted-foreground">Review past projects and collaborations</p>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center space-y-2">
            <Star className="h-8 w-8 mx-auto text-yellow-600" />
            <h4>Leave Reviews</h4>
            <p className="text-xs text-muted-foreground">Help build community trust and reputation</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}