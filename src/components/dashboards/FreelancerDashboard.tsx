import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  User, 
  Star, 
  Briefcase, 
  DollarSign, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Clock,
  Plus,
  Eye
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { User as UserType } from '../../App';

interface FreelancerDashboardProps {
  user: UserType;
  onPageChange: (page: 'dashboard' | 'jobs' | 'funding') => void;
}

export function FreelancerDashboard({ user, onPageChange }: FreelancerDashboardProps) {
  const stats = [
    { title: 'Active Gigs', value: '5', change: '+2', icon: Briefcase, color: 'text-blue-600' },
    { title: 'This Month', value: 'R12K', change: '+25%', icon: DollarSign, color: 'text-green-600' },
    { title: 'Rating', value: '4.8', change: '24 reviews', icon: Star, color: 'text-yellow-600' },
    { title: 'Completion Rate', value: '96%', change: '+2%', icon: TrendingUp, color: 'text-purple-600' }
  ];

  const activeGigs = [
    {
      id: 1,
      title: 'Social Media Graphics Design',
      client: 'Kasi Beauty Salon',
      budget: 'R3,500',
      deadline: '2024-10-15',
      progress: 75,
      status: 'in_progress'
    },
    {
      id: 2,
      title: 'Website Content Writing',
      client: 'Local Restaurant',
      budget: 'R2,800',
      deadline: '2024-10-20',
      progress: 45,
      status: 'in_progress'
    },
    {
      id: 3,
      title: 'Logo Design for Startup',
      client: 'Tech Solutions SA',
      budget: 'R4,200',
      deadline: '2024-10-12',
      progress: 90,
      status: 'review'
    }
  ];

  const availableGigs = [
    {
      id: 1,
      title: 'Municipal Newsletter Design',
      client: 'City of Tshwane',
      budget: 'R5,000',
      deadline: '2024-11-01',
      skills: ['Graphic Design', 'Adobe InDesign'],
      type: 'municipal',
      verified: true
    },
    {
      id: 2,
      title: 'E-commerce Product Photography',
      client: 'Local Craft Store',
      budget: 'R3,200',
      deadline: '2024-10-25',
      skills: ['Photography', 'Photo Editing'],
      type: 'private',
      verified: true
    }
  ];

  const skills = [
    { name: 'Graphic Design', level: 95, verified: true },
    { name: 'Adobe Photoshop', level: 90, verified: true },
    { name: 'Content Writing', level: 85, verified: false },
    { name: 'Social Media Management', level: 80, verified: true },
    { name: 'Web Design', level: 75, verified: false }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'review': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1>Welcome back, {user.name}!</h1>
        <div className="flex items-center gap-4">
          <p className="text-muted-foreground">
            Manage your gigs, build your portfolio, and grow your freelance career.
          </p>
          {!user.verified && (
            <Badge variant="outline" className="gap-1 text-orange-600 border-orange-300">
              <AlertCircle className="h-3 w-3" />
              Verification Pending
            </Badge>
          )}
        </div>
      </div>

      {/* Verification Alert */}
      {!user.verified && (
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
              <div className="space-y-2">
                <h4 className="text-orange-800">Complete Your Verification</h4>
                <p className="text-sm text-orange-700">
                  Get verified to access higher-paying municipal projects and build trust with clients.
                </p>
                <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                  Start Verification Process
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

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
        {/* Active Gigs */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Active Gigs
            </CardTitle>
            <Button onClick={() => onPageChange('jobs')} className="gap-2">
              <Plus className="h-4 w-4" />
              Find More Gigs
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeGigs.map((gig) => (
              <div key={gig.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm">{gig.title}</h4>
                    <p className="text-xs text-muted-foreground">{gig.client}</p>
                  </div>
                  <Badge className={getStatusColor(gig.status)}>
                    {gig.status === 'in_progress' ? 'In Progress' : 
                     gig.status === 'review' ? 'Under Review' : 'Completed'}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600">{gig.budget}</span>
                  <span className="text-muted-foreground">Due: {gig.deadline}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Progress</span>
                    <span>{gig.progress}%</span>
                  </div>
                  <Progress value={gig.progress} className="h-2" />
                </div>
                
                <Button size="sm" variant="outline" className="w-full">
                  View Details
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Available Gigs */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Recommended Gigs
            </CardTitle>
            <Button variant="outline" onClick={() => onPageChange('jobs')}>
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {availableGigs.map((gig) => (
              <div key={gig.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm">{gig.title}</h4>
                      {gig.type === 'municipal' && (
                        <Badge variant="outline" className="text-xs text-blue-600 border-blue-300">
                          Municipal
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{gig.client}</p>
                  </div>
                  {gig.verified && (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600">{gig.budget}</span>
                  <span className="text-muted-foreground">Due: {gig.deadline}</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {gig.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <Button size="sm" className="w-full">
                  Apply Now
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Skills & Profile */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Skills Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Skills & Expertise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{skill.name}</span>
                    {skill.verified && (
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              Add New Skill
            </Button>
          </CardContent>
        </Card>

        {/* Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Highlights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1655720357872-ce227e4164ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc21hbGwlMjBidXNpbmVzcyUyMGVudHJlcHJlbmV1cnxlbnwxfHx8fDE3NTk3MzQ0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Portfolio work sample"
                className="rounded-lg h-24 w-full object-cover"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1655720357872-ce227e4164ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc21hbGwlMjBidXNpbmVzcyUyMGVudHJlcHJlbmV1cnxlbnwxfHx8fDE3NTk3MzQ0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Portfolio work sample"
                className="rounded-lg h-24 w-full object-cover"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Profile Completeness</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            
            <div className="text-xs text-muted-foreground">
              Complete your profile to attract more clients and higher-paying gigs.
            </div>
            
            <Button variant="outline" className="w-full">
              Update Portfolio
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}