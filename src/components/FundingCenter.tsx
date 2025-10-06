import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  DollarSign, 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Plus,
  TrendingUp,
  Calendar,
  Eye,
  Download,
  Users
} from 'lucide-react';
import type { User } from '../App';

interface FundingCenterProps {
  user: User;
}

export function FundingCenter({ user }: FundingCenterProps) {
  const [applicationForm, setApplicationForm] = useState({
    fundingType: '',
    amount: '',
    businessName: '',
    description: '',
    category: '',
    employees: '',
    timeframe: ''
  });

  const fundingPrograms = [
    {
      id: 1,
      name: 'Small Business Development Grant',
      description: 'Support for emerging businesses in their first 3 years of operation.',
      maxAmount: 'R100,000',
      category: 'General Business',
      requirements: ['Business registration', 'Business plan', 'Financial projections'],
      eligibility: 'Businesses under 3 years old',
      applicationDeadline: '2024-11-30',
      status: 'open'
    },
    {
      id: 2,
      name: 'Technology Innovation Fund',
      description: 'Funding for tech startups and digital transformation projects.',
      maxAmount: 'R250,000',
      category: 'Technology',
      requirements: ['Technical proposal', 'Prototype/MVP', 'Market analysis'],
      eligibility: 'Tech-focused businesses',
      applicationDeadline: '2024-12-15',
      status: 'open'
    },
    {
      id: 3,
      name: 'Community Impact Initiative',
      description: 'Support for businesses creating positive community impact.',
      maxAmount: 'R75,000',
      category: 'Community Development',
      requirements: ['Community impact plan', 'Beneficiary details', 'Sustainability plan'],
      eligibility: 'Community-focused projects',
      applicationDeadline: '2024-11-15',
      status: 'closing_soon'
    },
    {
      id: 4,
      name: 'Women Entrepreneurs Support',
      description: 'Dedicated funding for women-led businesses and initiatives.',
      maxAmount: 'R150,000',
      category: 'Women Empowerment',
      requirements: ['Women leadership proof', 'Business plan', 'Impact statement'],
      eligibility: '51%+ women ownership',
      applicationDeadline: '2024-12-31',
      status: 'open'
    }
  ];

  const myApplications = [
    {
      id: 1,
      fundingProgram: 'Small Business Development Grant',
      amount: 'R50,000',
      status: 'approved',
      submittedDate: '2024-09-15',
      reviewDate: '2024-09-22',
      disbursementDate: '2024-09-30',
      progress: 100,
      feedback: 'Application approved. Strong business plan and clear growth strategy.'
    },
    {
      id: 2,
      fundingProgram: 'Technology Innovation Fund',
      amount: 'R75,000',
      status: 'under_review',
      submittedDate: '2024-10-01',
      reviewDate: null,
      disbursementDate: null,
      progress: 60,
      feedback: 'Technical review in progress. Additional documentation may be required.'
    },
    {
      id: 3,
      fundingProgram: 'Community Impact Initiative',
      amount: 'R25,000',
      status: 'pending',
      submittedDate: '2024-10-05',
      reviewDate: null,
      disbursementDate: null,
      progress: 25,
      feedback: 'Application received and queued for initial review.'
    }
  ];

  const fundingStats = [
    { title: 'Total Applied', value: 'R150K', change: '+R75K', icon: FileText, color: 'text-blue-600' },
    { title: 'Approved Funding', value: 'R50K', change: '1 grant', icon: CheckCircle, color: 'text-green-600' },
    { title: 'Under Review', value: 'R75K', change: '1 pending', icon: Clock, color: 'text-yellow-600' },
    { title: 'Success Rate', value: '67%', change: '+33%', icon: TrendingUp, color: 'text-purple-600' }
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
      ward: 'Ward 45',
      documentsComplete: true
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
      ward: 'Ward 23',
      documentsComplete: false
    },
    {
      id: 3,
      businessName: 'Kasi Fashion Collective',
      owner: 'Nomsa Dlamini',
      fundingType: 'Women Entrepreneurs Support',
      amount: 'R120,000',
      submittedDate: '2024-09-28',
      priority: 'high',
      category: 'Fashion & Retail',
      ward: 'Ward 67',
      documentsComplete: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'under_review': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'open': return 'bg-green-100 text-green-800';
      case 'closing_soon': return 'bg-orange-100 text-orange-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-4 w-4" />;
      case 'under_review': return <Eye className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'rejected': return <AlertTriangle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setApplicationForm(prev => ({ ...prev, [field]: value }));
  };

  const isMunicipalWorker = user.role === 'municipal_worker';

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1>
          {isMunicipalWorker ? 'Funding Management' : 'Funding Center'}
        </h1>
        <p className="text-muted-foreground">
          {isMunicipalWorker 
            ? 'Review applications, manage funding distribution, and track economic impact.'
            : 'Apply for funding, track your applications, and access financial support for your business.'
          }
        </p>
      </div>

      {!isMunicipalWorker && (
        /* Stats Grid for Business Owners */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fundingStats.map((stat) => {
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
      )}

      <Tabs defaultValue={isMunicipalWorker ? "review" : "apply"} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value={isMunicipalWorker ? "review" : "apply"}>
            {isMunicipalWorker ? 'Review Applications' : 'Apply for Funding'}
          </TabsTrigger>
          <TabsTrigger value={isMunicipalWorker ? "programs" : "my-applications"}>
            {isMunicipalWorker ? 'Manage Programs' : 'My Applications'}
          </TabsTrigger>
          <TabsTrigger value={isMunicipalWorker ? "reports" : "programs"}>
            {isMunicipalWorker ? 'Reports & Analytics' : 'Available Programs'}
          </TabsTrigger>
        </TabsList>

        {/* Apply for Funding / Review Applications */}
        <TabsContent value={isMunicipalWorker ? "review" : "apply"} className="space-y-6">
          {isMunicipalWorker ? (
            /* Municipal Worker: Review Applications */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3>Pending Applications</h3>
                <Badge variant="outline">
                  {pendingApplications.length} applications pending
                </Badge>
              </div>
              
              {pendingApplications.map((application) => (
                <Card key={application.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-2">
                        <h4>{application.businessName}</h4>
                        <p className="text-muted-foreground">by {application.owner}</p>
                        <p className="text-sm">{application.fundingType}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getPriorityColor(application.priority)}>
                          {application.priority} priority
                        </Badge>
                        <Badge variant="outline" className="text-green-600">
                          {application.amount}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Category: </span>
                        <span>{application.category}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Ward: </span>
                        <span>{application.ward}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Submitted: </span>
                        <span>{application.submittedDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Documents: </span>
                        {application.documentsComplete ? (
                          <Badge className="bg-green-100 text-green-800">Complete</Badge>
                        ) : (
                          <Badge className="bg-orange-100 text-orange-800">Incomplete</Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        Review Application
                      </Button>
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve
                      </Button>
                      <Button variant="destructive" className="flex-1">
                        Reject
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Business Owner: Apply for Funding */
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  New Funding Application
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label>Funding Program</label>
                    <Select value={applicationForm.fundingType} onValueChange={(value) => handleInputChange('fundingType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select funding program" />
                      </SelectTrigger>
                      <SelectContent>
                        {fundingPrograms.filter(p => p.status === 'open' || p.status === 'closing_soon').map(program => (
                          <SelectItem key={program.id} value={program.name}>
                            {program.name} (Max: {program.maxAmount})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label>Requested Amount</label>
                    <Input
                      placeholder="e.g., R50,000"
                      value={applicationForm.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label>Business Name</label>
                    <Input
                      placeholder="Your business name"
                      value={applicationForm.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label>Business Category</label>
                    <Select value={applicationForm.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="food">Food & Beverage</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label>Number of Employees</label>
                    <Select value={applicationForm.employees} onValueChange={(value) => handleInputChange('employees', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Just me</SelectItem>
                        <SelectItem value="2-5">2-5 employees</SelectItem>
                        <SelectItem value="6-10">6-10 employees</SelectItem>
                        <SelectItem value="11-20">11-20 employees</SelectItem>
                        <SelectItem value="20+">20+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label>Project Timeframe</label>
                    <Select value={applicationForm.timeframe} onValueChange={(value) => handleInputChange('timeframe', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-months">3 months</SelectItem>
                        <SelectItem value="6-months">6 months</SelectItem>
                        <SelectItem value="1-year">1 year</SelectItem>
                        <SelectItem value="2-years">2 years</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label>Project Description & Funding Purpose</label>
                  <Textarea
                    placeholder="Describe your project, how you'll use the funding, and the expected impact..."
                    value={applicationForm.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                  />
                </div>
                
                <div className="pt-4 border-t">
                  <Button className="w-full md:w-auto">
                    Submit Application
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* My Applications / Manage Programs */}
        <TabsContent value={isMunicipalWorker ? "programs" : "my-applications"} className="space-y-6">
          {isMunicipalWorker ? (
            /* Municipal Worker: Manage Programs */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3>Funding Programs</h3>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Create New Program
                </Button>
              </div>
              
              {fundingPrograms.map((program) => (
                <Card key={program.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-2">
                        <h4>{program.name}</h4>
                        <p className="text-muted-foreground">{program.description}</p>
                      </div>
                      <Badge className={getStatusColor(program.status)}>
                        {program.status.replace('_', ' ')}
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Max Amount: </span>
                        <span className="text-green-600">{program.maxAmount}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Category: </span>
                        <span>{program.category}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Deadline: </span>
                        <span>{program.applicationDeadline}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        View Applications
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Edit Program
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Generate Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Business Owner: My Applications */
            <div className="space-y-4">
              {myApplications.map((application) => (
                <Card key={application.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-2">
                        <h4>{application.fundingProgram}</h4>
                        <p className="text-muted-foreground">Requested: {application.amount}</p>
                      </div>
                      <Badge className={`gap-1 ${getStatusColor(application.status)}`}>
                        {getStatusIcon(application.status)}
                        {application.status.replace('_', ' ')}
                      </Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Submitted: </span>
                          <span>{application.submittedDate}</span>
                        </div>
                        {application.reviewDate && (
                          <div>
                            <span className="text-muted-foreground">Reviewed: </span>
                            <span>{application.reviewDate}</span>
                          </div>
                        )}
                        {application.disbursementDate && (
                          <div>
                            <span className="text-muted-foreground">Disbursed: </span>
                            <span>{application.disbursementDate}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Application Progress</span>
                          <span>{application.progress}%</span>
                        </div>
                        <Progress value={application.progress} className="h-2" />
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="text-sm">{application.feedback}</p>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        {application.status === 'approved' && (
                          <Button className="flex-1">
                            <Download className="h-4 w-4 mr-2" />
                            Download Agreement
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Available Programs / Reports */}
        <TabsContent value={isMunicipalWorker ? "reports" : "programs"} className="space-y-6">
          {isMunicipalWorker ? (
            /* Municipal Worker: Reports */
            <div className="space-y-6">
              <h3>Funding Reports & Analytics</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center space-y-4">
                    <DollarSign className="h-12 w-12 mx-auto text-green-600" />
                    <div>
                      <div className="text-2xl">R2.8M</div>
                      <p className="text-muted-foreground">Total Distributed</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center space-y-4">
                    <Users className="h-12 w-12 mx-auto text-blue-600" />
                    <div>
                      <div className="text-2xl">156</div>
                      <p className="text-muted-foreground">Businesses Funded</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center space-y-4">
                    <TrendingUp className="h-12 w-12 mx-auto text-purple-600" />
                    <div>
                      <div className="text-2xl">73%</div>
                      <p className="text-muted-foreground">Success Rate</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Generate Reports</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-20 flex-col gap-2">
                      <FileText className="h-6 w-6" />
                      <span>Application Summary</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col gap-2">
                      <DollarSign className="h-6 w-6" />
                      <span>Funding Distribution</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col gap-2">
                      <TrendingUp className="h-6 w-6" />
                      <span>Economic Impact</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Business Owner: Available Programs */
            <div className="space-y-4">
              <h3>Available Funding Programs</h3>
              
              {fundingPrograms.map((program) => (
                <Card key={program.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h4>{program.name}</h4>
                          {program.status === 'closing_soon' && (
                            <Badge variant="destructive" className="text-xs">
                              Closing Soon
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground">{program.description}</p>
                      </div>
                      <Badge className={getStatusColor(program.status)}>
                        {program.status.replace('_', ' ')}
                      </Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Max Amount: </span>
                          <span className="text-green-600">{program.maxAmount}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Category: </span>
                          <span>{program.category}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span className="text-muted-foreground">Deadline: </span>
                          <span>{program.applicationDeadline}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm mb-2">Requirements:</h5>
                        <div className="flex flex-wrap gap-1">
                          {program.requirements.map((req, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="text-sm">
                          <strong>Eligibility:</strong> {program.eligibility}
                        </p>
                      </div>
                      
                      <Button 
                        className="w-full" 
                        disabled={program.status === 'closed'}
                      >
                        Apply for This Program
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}