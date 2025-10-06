import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Users, Briefcase, MapPin, ArrowRight, CheckCircle, Target, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { UserRole } from '../App';

interface LandingPageProps {
  onRoleSelect: (role: UserRole) => void;
}

export function LandingPage({ onRoleSelect }: LandingPageProps) {
  const userRoles = [
    {
      id: 'business_owner',
      title: 'Business Owner',
      description: 'Upload your business model, apply for funding, and get considered for city projects',
      icon: Building2,
      features: ['Apply for Municipal Funding', 'Showcase Business Services', 'Get Priority for City Projects', 'Connect with Local Clients'],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 'freelancer',
      title: 'Freelancer',
      description: 'Create your profile, showcase skills, and apply for verified local opportunities',
      icon: Users,
      features: ['Create Skills Portfolio', 'Apply for Verified Gigs', 'Local Job Opportunities', 'Fair Rate Protection'],
      color: 'bg-green-50 border-green-200'
    },
    {
      id: 'client',
      title: 'Client',
      description: 'Post projects, connect with local talent, and support community businesses',
      icon: Briefcase,
      features: ['Post Project Requirements', 'Connect with Local Talent', 'Track Project Progress', 'Support Local Economy'],
      color: 'bg-purple-50 border-purple-200'
    },
    {
      id: 'municipal_worker',
      title: 'Municipal Worker',
      description: 'Review applications, distribute funding, and prioritize local economic development',
      icon: MapPin,
      features: ['Review Funding Applications', 'Post Municipal Projects', 'Verify Local Businesses', 'Track Economic Impact'],
      color: 'bg-orange-50 border-orange-200'
    }
  ];

  const stats = [
    { label: 'Local Businesses', value: '2,500+' },
    { label: 'Active Freelancers', value: '1,200+' },
    { label: 'Projects Completed', value: '850+' },
    { label: 'Funding Distributed', value: 'R12M+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E88E5] via-[#42A5F5] to-[#90CAF9] text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  Empowering Tshwane Communities
                </Badge>
                <h1 className="mb-6 text-5xl leading-tight">
                  Kasi Konnect
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Connecting small businesses, freelancers, and clients with the City of Tshwane 
                  to strengthen local economic participation and ensure fair access to opportunities.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Verified Local Opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  <span>Fair Access to Funding</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <span>Community-Centered Growth</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1653505914751-93e8ac1123be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb3V0aCUyMEFmcmljYW4lMjB0b3duc2hpcCUyMGNvbW11bml0eSUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTczNDQxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="South African community business"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#E3F2FD]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Choose Your Role</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our community platform designed to strengthen local economic participation 
              and create opportunities for everyone in Tshwane.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userRoles.map((role) => {
              const Icon = role.icon;
              return (
                <Card key={role.id} className={`p-6 cursor-pointer transition-all hover:shadow-lg ${role.color}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg">{role.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground">{role.description}</p>
                    
                    <ul className="space-y-2">
                      {role.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full group bg-[#1E88E5] hover:bg-[#1565C0] text-white"
                      onClick={() => onRoleSelect(role.id as UserRole)}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#E3F2FD]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">How Kasi Konnect Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform creates a transparent ecosystem where local talent meets opportunity, 
              supported by municipal backing and community trust.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-[#BBDEFB] rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-[#1E88E5]" />
              </div>
              <h3>Register & Verify</h3>
              <p className="text-[#555555]">
                Create your profile and get verified to ensure legitimacy and build trust in our community.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-[#BBDEFB] rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-[#1E88E5]" />
              </div>
              <h3>Connect & Match</h3>
              <p className="text-[#555555]">
                Our intelligent system matches businesses, freelancers, and opportunities based on skills and needs.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-[#BBDEFB] rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-[#1E88E5]" />
              </div>
              <h3>Grow Together</h3>
              <p className="text-[#555555]">
                Access funding, complete projects, and build a stronger local economy through collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#424242] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl">Kasi Konnect</h3>
              <p className="text-white/70">
                Empowering local communities through economic participation and fair opportunity access.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4>For Businesses</h4>
              <ul className="space-y-2 text-white/70">
                <li>Funding Applications</li>
                <li>Project Opportunities</li>
                <li>Skills Showcase</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4>For Freelancers</h4>
              <ul className="space-y-2 text-white/70">
                <li>Gig Marketplace</li>
                <li>Verification Program</li>
                <li>Portfolio Building</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4>Support</h4>
              <ul className="space-y-2 text-white/70">
                <li>Help Center</li>
                <li>Community Guidelines</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 Kasi Konnect. Powered by City of Tshwane. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}