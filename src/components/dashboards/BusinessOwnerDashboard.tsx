import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  DollarSign, 
  Building2, 
  TrendingUp, 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Plus,
  Eye
} from 'lucide-react';
import type { User } from '../../App';

interface BusinessOwnerDashboardProps {
  user: User;
  onPageChange: (page: 'dashboard' | 'jobs' | 'funding') => void;
}

export function BusinessOwnerDashboard({ user, onPageChange }: BusinessOwnerDashboardProps) {
  const stats = [
    { title: 'Active Projects', value: '8', change: '+2', icon: Building2, color: 'text-blue-600' },
    { title: 'Funding Applied', value: 'R125K', change: '+R25K', icon: DollarSign, color: 'text-green-600' },
    { title: 'Monthly Revenue', value: 'R45K', change: '+15%', icon: TrendingUp, color: 'text-purple-600' },
    { title: 'Applications', value: '3', change: '1 pending', icon: FileText, color: 'text-orange-600' }
  ];

  const fundingApplications = [
    {
      id: 1,
      title: 'Small Business Development Grant',
      amount: 'R50,000',
      status: 'approved',
      submittedDate: '2024-09-15',
      reviewDate: '2024-09-22'
    },
    {
      id: 2,
      title: 'Technology Enhancement Fund',
      amount: 'R75,000',
      status: 'pending',
      submittedDate: '2024-10-01',
      reviewDate: null
    },
    {
      id: 3,
      title: 'Community Impact Initiative',
      amount: 'R25,000',
      status: 'under_review',
      submittedDate: '2024-09-28',
      reviewDate: null
    }
  ];

  const projectOpportunities = [
    {
      id: 1,
      title: 'Municipal Website Redesign',
      client: 'City of Tshwane',
      budget: 'R150,000',
      deadline: '2024-12-15',
      skills: ['Web Development', 'UI/UX Design'],
      priority: 'high'
    },
    {
      id: 2,
      title: 'Community Center Renovation',
      client: 'Ward 45 Committee',
      budget: 'R200,000',
      deadline: '2024-11-30',
      skills: ['Construction', 'Project Management'],
      priority: 'medium'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'under_review': return 'bg-blue-100 text-blue-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'under_review': return <Eye className="h-4 w-4" />;
      case 'rejected': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1>Welcome back, {user.name}!</h1>
        <p className="text-muted-foreground">
          Manage your business, track funding applications, and discover new opportunities.
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
        {/* Funding Applications */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Funding Applications
            </CardTitle>
            <Button onClick={() => onPageChange('funding')} className="gap-2">
              <Plus className="h-4 w-4" />
              Apply for Funding
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {fundingApplications.map((application) => (
              <div key={application.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm">{application.title}</h4>
                    <p className="text-muted-foreground">{application.amount}</p>
                  </div>
                  <Badge className={`gap-1 ${getStatusColor(application.status)}`}>
                    {getStatusIcon(application.status)}
                    {application.status.replace('_', ' ')}
                  </Badge>
                </div>
                
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>Submitted: {application.submittedDate}</p>
                  {application.reviewDate && (
                    <p>Reviewed: {application.reviewDate}</p>
                  )}
                </div>
                
                {application.status === 'pending' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Review Progress</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Project Opportunities */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Project Opportunities
            </CardTitle>
            <Button variant="outline" onClick={() => onPageChange('jobs')}>
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {projectOpportunities.map((project) => (
              <div key={project.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm">{project.title}</h4>
                    <p className="text-xs text-muted-foreground">{project.client}</p>
                  </div>
                  <Badge variant={project.priority === 'high' ? 'destructive' : 'secondary'}>
                    {project.priority} priority
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600">{project.budget}</span>
                  <span className="text-muted-foreground">Due: {project.deadline}</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <Button size="sm" className="w-full">
                  Apply for Project
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Business Profile Section */}
      <Card>
        <CardHeader>
          <CardTitle>Business Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground">Business Name</label>
                <p>Mthembu Construction Services</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Industry</label>
                <p>Construction & Renovation</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Years in Business</label>
                <p>8 years</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground">Verification Status</label>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Verified Business</span>
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Municipal Registration</label>
                <p>REG-2024-TX-1234</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Contact</label>
                <p>thabo@mthembuconstruction.co.za</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <Button variant="outline">Update Business Profile</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}