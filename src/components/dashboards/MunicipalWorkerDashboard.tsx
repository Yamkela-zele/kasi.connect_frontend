import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  FileText, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Eye,
  Building2,
  MapPin,
  Calendar
} from 'lucide-react';
import type { User } from '../../App';

interface MunicipalWorkerDashboardProps {
  user: User;
  onPageChange: (page: 'dashboard' | 'jobs' | 'funding') => void;
}

export function MunicipalWorkerDashboard({ user, onPageChange }: MunicipalWorkerDashboardProps) {
  const stats = [
    { title: 'Pending Applications', value: '24', change: '+6', icon: FileText, color: 'text-blue-600' },
    { title: 'Funds Distributed', value: 'R2.8M', change: 'This quarter', icon: DollarSign, color: 'text-green-600' },
    { title: 'Verified Businesses', value: '156', change: '+12', icon: Building2, color: 'text-purple-600' },
    { title: 'Active Projects', value: '42', change: '+8', icon: TrendingUp, color: 'text-orange-600' }
  ];

  const pendingApplications = [
    {
      id: 1,
      businessName: 'Kasi Tech Solutions',
      owner: 'Sipho Ndlovu',
      fundingType: 'Small Business Development Grant',
      amount: 'R75,000',
      submittedDate: '2024-10-01',
      priority: 'high',
      category: 'Technology',
      ward: 'Ward 45'
    },
    {
      id: 2,
      businessName: 'Ubuntu Catering Services',
      owner: 'Maria Santos',
      fundingType: 'Community Impact Fund',
      amount: 'R35,000',
      submittedDate: '2024-10-03',
      priority: 'medium',
      category: 'Food & Beverage',
      ward: 'Ward 23'
    },
    {
      id: 3,
      businessName: 'Mthembu Construction',
      owner: 'Thabo Mthembu',
      fundingType: 'Infrastructure Development',
      amount: 'R150,000',
      submittedDate: '2024-09-28',
      priority: 'high',
      category: 'Construction',
      ward: 'Ward 67'
    }
  ];

  const municipalProjects = [
    {
      id: 1,
      title: 'Community Center Renovation - Ward 45',
      budget: 'R500,000',
      deadline: '2024-12-15',
      applicants: 8,
      status: 'accepting_bids',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Municipal Website Development',
      budget: 'R120,000',
      deadline: '2024-11-30',
      applicants: 12,
      status: 'under_review',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Parks Maintenance Equipment',
      budget: 'R200,000',
      deadline: '2024-11-15',
      applicants: 5,
      status: 'accepting_bids',
      priority: 'low'
    }
  ];

  const recentVerifications = [
    {
      id: 1,
      businessName: 'Kasi Digital Marketing',
      owner: 'Nomsa Dlamini',
      type: 'Business Registration',
      submittedDate: '2024-10-05',
      status: 'pending',
      documents: 4
    },
    {
      id: 2,
      businessName: 'Local Craft Store',
      owner: 'John Maluleke',
      type: 'Freelancer Verification',
      submittedDate: '2024-10-04',
      status: 'approved',
      documents: 3
    },
    {
      id: 3,
      businessName: 'Ubuntu Food Truck',
      owner: 'Sarah Mokwena',
      type: 'Vendor License',
      submittedDate: '2024-10-02',
      status: 'requires_info',
      documents: 2
    }
  ];

  const fundingDistribution = [
    { ward: 'Ward 23', allocated: 'R450K', distributed: 'R380K', utilization: 84 },
    { ward: 'Ward 45', allocated: 'R600K', distributed: 'R540K', utilization: 90 },
    { ward: 'Ward 67', allocated: 'R350K', distributed: 'R280K', utilization: 80 },
    { ward: 'Ward 89', allocated: 'R500K', distributed: 'R425K', utilization: 85 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'requires_info': return 'bg-orange-100 text-orange-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'accepting_bids': return 'bg-blue-100 text-blue-800';
      case 'under_review': return 'bg-purple-100 text-purple-800';
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
          Manage funding applications, municipal projects, and support local economic development.
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
        {/* Pending Funding Applications */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Pending Applications
            </CardTitle>
            <Button onClick={() => onPageChange('funding')}>
              Review All
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingApplications.map((application) => (
              <div key={application.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm">{application.businessName}</h4>
                    <p className="text-xs text-muted-foreground">by {application.owner}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getPriorityColor(application.priority)}>
                      {application.priority}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm">{application.fundingType}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600">{application.amount}</span>
                    <span className="text-muted-foreground">{application.ward}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Submitted: {application.submittedDate}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="h-3 w-3 mr-1" />
                    Review
                  </Button>
                  <Button size="sm" className="flex-1">
                    Approve
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Municipal Projects */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Municipal Projects
            </CardTitle>
            <Button onClick={() => onPageChange('jobs')}>
              Manage Projects
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {municipalProjects.map((project) => (
              <div key={project.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm">{project.title}</h4>
                    <p className="text-xs text-muted-foreground">{project.applicants} applications</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getPriorityColor(project.priority)}>
                      {project.priority}
                    </Badge>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status.replace('_', ' ')}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600">{project.budget}</span>
                  <span className="text-muted-foreground">Due: {project.deadline}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Applications
                  </Button>
                  <Button size="sm" className="flex-1">
                    Manage
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Verification & Funding Distribution */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Verifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Verification Queue
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentVerifications.map((verification) => (
              <div key={verification.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm">{verification.businessName}</h4>
                    <p className="text-xs text-muted-foreground">by {verification.owner}</p>
                  </div>
                  <Badge className={getStatusColor(verification.status)}>
                    {verification.status.replace('_', ' ')}
                  </Badge>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm">{verification.type}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{verification.documents} documents</span>
                    <span>Submitted: {verification.submittedDate}</span>
                  </div>
                </div>
                
                <Button size="sm" variant="outline" className="w-full">
                  Review Documents
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Funding Distribution by Ward */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Funding Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {fundingDistribution.map((ward) => (
              <div key={ward.ward} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm">{ward.ward}</h4>
                    <p className="text-xs text-muted-foreground">
                      {ward.distributed} of {ward.allocated} distributed
                    </p>
                  </div>
                  <Badge variant="secondary">
                    {ward.utilization}%
                  </Badge>
                </div>
                <Progress value={ward.utilization} className="h-2" />
              </div>
            ))}
            
            <Button variant="outline" className="w-full mt-4">
              View Detailed Report
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onPageChange('funding')}>
          <CardContent className="p-6 text-center space-y-2">
            <FileText className="h-8 w-8 mx-auto text-blue-600" />
            <h4>Review Applications</h4>
            <p className="text-xs text-muted-foreground">Process pending funding requests</p>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onPageChange('jobs')}>
          <CardContent className="p-6 text-center space-y-2">
            <Building2 className="h-8 w-8 mx-auto text-green-600" />
            <h4>Post Municipal Project</h4>
            <p className="text-xs text-muted-foreground">Create opportunities for local businesses</p>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center space-y-2">
            <Users className="h-8 w-8 mx-auto text-purple-600" />
            <h4>Verify Businesses</h4>
            <p className="text-xs text-muted-foreground">Process verification requests</p>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center space-y-2">
            <TrendingUp className="h-8 w-8 mx-auto text-orange-600" />
            <h4>Economic Reports</h4>
            <p className="text-xs text-muted-foreground">Track community economic impact</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}