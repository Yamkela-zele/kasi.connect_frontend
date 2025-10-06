import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign, 
  Briefcase, 
  CheckCircle, 
  Star,
  Plus,
  Building2,
  Users
} from 'lucide-react';
import type { User } from '../App';

interface JobMarketplaceProps {
  user: User;
}

export function JobMarketplace({ user }: JobMarketplaceProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const jobListings = [
    {
      id: 1,
      title: 'Municipal Website Development',
      client: 'City of Tshwane',
      type: 'municipal',
      category: 'Technology',
      budget: 'R50,000 - R80,000',
      timeframe: '6 weeks',
      location: 'Remote/Pretoria',
      skills: ['React', 'Node.js', 'UI/UX Design'],
      description: 'Develop a modern, accessible municipal website with citizen services portal.',
      applicants: 12,
      postedDate: '2024-10-05',
      verified: true,
      priority: 'high'
    },
    {
      id: 2,
      title: 'Community Center Logo Design',
      client: 'Mamelodi Community Center',
      type: 'community',
      category: 'Design',
      budget: 'R3,000 - R5,000',
      timeframe: '2 weeks',
      location: 'Mamelodi',
      skills: ['Logo Design', 'Adobe Illustrator', 'Branding'],
      description: 'Create a vibrant logo that represents our community center values.',
      applicants: 8,
      postedDate: '2024-10-04',
      verified: true,
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Small Business Accounting Services',
      client: 'Local Craft Cooperative',
      type: 'private',
      category: 'Finance',
      budget: 'R2,500/month',
      timeframe: 'Ongoing',
      location: 'Soshanguve',
      skills: ['Bookkeeping', 'Tax Preparation', 'QuickBooks'],
      description: 'Monthly bookkeeping and tax preparation for small craft business.',
      applicants: 5,
      postedDate: '2024-10-03',
      verified: true,
      priority: 'low'
    },
    {
      id: 4,
      title: 'Youth Development Workshop Facilitation',
      client: 'Ward 45 Development Committee',
      type: 'municipal',
      category: 'Education',
      budget: 'R15,000',
      timeframe: '1 week',
      location: 'Atteridgeville',
      skills: ['Training', 'Youth Development', 'Public Speaking'],
      description: 'Facilitate entrepreneurship workshops for local youth (18-25 years).',
      applicants: 6,
      postedDate: '2024-10-02',
      verified: true,
      priority: 'high'
    },
    {
      id: 5,
      title: 'E-commerce Store Setup',
      client: 'Kasi Fashion Boutique',
      type: 'private',
      category: 'Technology',
      budget: 'R8,000 - R12,000',
      timeframe: '4 weeks',
      location: 'Hammanskraal',
      skills: ['E-commerce', 'Shopify', 'Digital Marketing'],
      description: 'Set up online store for local fashion business with payment integration.',
      applicants: 9,
      postedDate: '2024-10-01',
      verified: false,
      priority: 'medium'
    }
  ];

  const myProjects = [
    {
      id: 1,
      title: 'Community Newsletter Design - October Edition',
      client: 'Mamelodi Residents Association',
      budget: 'R2,500',
      status: 'in_progress',
      deadline: '2024-10-15',
      progress: 75
    },
    {
      id: 2,
      title: 'Local Business Directory Website',
      client: 'Soshanguve Chamber of Commerce',
      budget: 'R18,000',
      status: 'review',
      deadline: '2024-10-20',
      progress: 95
    }
  ];

  const categories = [
    'Technology', 'Design', 'Marketing', 'Finance', 'Education', 
    'Construction', 'Healthcare', 'Legal', 'Consulting', 'Other'
  ];

  const locations = [
    'Mamelodi', 'Soshanguve', 'Atteridgeville', 'Hammanskraal', 
    'Ga-Rankuwa', 'Mabopane', 'Pretoria CBD', 'Remote'
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'municipal': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'community': return 'bg-green-100 text-green-800 border-green-300';
      case 'private': return 'bg-purple-100 text-purple-800 border-purple-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'review': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || job.location.includes(selectedLocation);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const isClientView = user.role === 'client' || user.role === 'municipal_worker';

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1>
            {isClientView ? 'Project Management' : 'Job Marketplace'}
          </h1>
          <p className="text-muted-foreground">
            {isClientView 
              ? 'Manage your projects and find local talent for your needs.'
              : 'Find verified opportunities and connect with local clients.'
            }
          </p>
        </div>
        
        {isClientView && (
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Post New {user.role === 'municipal_worker' ? 'Project' : 'Job'}
          </Button>
        )}
      </div>

      <Tabs defaultValue={isClientView ? "my-projects" : "browse"} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value={isClientView ? "my-projects" : "browse"}>
            {isClientView ? 'My Projects' : 'Browse Jobs'}
          </TabsTrigger>
          <TabsTrigger value={isClientView ? "browse-talent" : "my-applications"}>
            {isClientView ? 'Browse Talent' : 'My Applications'}
          </TabsTrigger>
        </TabsList>

        {/* Browse Jobs / My Projects */}
        <TabsContent value={isClientView ? "my-projects" : "browse"} className="space-y-6">
          {!isClientView && (
            /* Search and Filters */
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search jobs, skills, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  More Filters
                </Button>
              </div>
            </div>
          )}

          {/* Job Listings or My Projects */}
          <div className="space-y-4">
            {isClientView ? (
              /* My Projects for Clients */
              myProjects.map((project) => (
                <Card key={project.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-2">
                        <h3>{project.title}</h3>
                        <p className="text-muted-foreground">{project.client}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status.replace('_', ' ')}
                        </Badge>
                        <Badge variant="outline" className="text-green-600">
                          {project.budget}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress: {project.progress}%</span>
                        <span>Due: {project.deadline}</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          View Details
                        </Button>
                        <Button className="flex-1">
                          Message Freelancer
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              /* Job Listings for Freelancers */
              filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <h3>{job.title}</h3>
                          {job.verified && (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          )}
                        </div>
                        <p className="text-muted-foreground">{job.client}</p>
                        <p className="text-sm text-gray-600">{job.description}</p>
                      </div>
                      
                      <div className="flex flex-col gap-2 ml-4">
                        <Badge className={getTypeColor(job.type)}>
                          {job.type}
                        </Badge>
                        <Badge className={getPriorityColor(job.priority)}>
                          {job.priority} priority
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span>{job.budget}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span>{job.timeframe}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-purple-600" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-orange-600" />
                          <span>{job.applicants} applicants</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          View Details
                        </Button>
                        <Button className="flex-1">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        {/* Browse Talent / My Applications */}
        <TabsContent value={isClientView ? "browse-talent" : "my-applications"} className="space-y-6">
          <div className="text-center py-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                {isClientView ? (
                  <Users className="h-8 w-8 text-muted-foreground" />
                ) : (
                  <Briefcase className="h-8 w-8 text-muted-foreground" />
                )}
              </div>
              <h3>
                {isClientView ? 'Browse Local Talent' : 'My Applications'}
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                {isClientView 
                  ? 'Discover verified freelancers and businesses in your area. Filter by skills, location, and ratings.'
                  : 'Track your job applications and see your application history.'
                }
              </p>
              <Button>
                {isClientView ? 'Start Browsing' : 'View Applications'}
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}