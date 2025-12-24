"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mountain, 
  Heart, 
  Users, 
  Award, 
  Globe, 
  Star, 
  Target, 
  Eye, 
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,  
} from "lucide-react";

const teamMembers = [
  {
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    description: "15+ years of experience in Nepal tourism industry"
  },
  {
    name: "Maya Tamang",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    description: "Expert in logistics and customer satisfaction"
  },
  {
    name: "Dipak Gurung",
    role: "Lead Trek Guide",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    description: "Certified mountain guide with 100+ successful treks"
  },
  {
    name: "Sita Rai",
    role: "Cultural Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    description: "Specialist in Nepali culture and heritage tours"
  }
];

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We love what we do and it shows in every journey we create",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Your security and well-being are our top priorities",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Star,
    title: "Quality Service",
    description: "Excellence in every detail, from planning to execution",
    color: "from-yellow-500 to-orange-600"
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "Committed to eco-friendly and responsible tourism",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "Authentic experiences guided by local professionals",
    color: "from-purple-500 to-indigo-600"
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Constantly improving to offer unique adventures",
    color: "from-pink-500 to-rose-600"
  }
];

const milestones = [
  { year: "2009", event: "Company Founded", description: "Started with a vision to share Nepal's beauty" },
  { year: "2015", event: "10,000 Travelers", description: "Reached milestone of happy customers" },
  { year: "2019", event: "Award Winning", description: "Best Tour Operator - Nepal Tourism Board" },
  { year: "2024", event: "50,000+ Adventures", description: "Celebrating 15 years of excellence" }
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-125 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
        </div>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white border border-white/30 animate-fade-in-up">
            <Mountain className="h-4 w-4" />
            <span>Est. 2009 - Trusted by 50,000+ Travelers</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-up animation-delay-200">
            About Go Nepal
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            We are passionate adventurers dedicated to sharing the incredible beauty, 
            rich culture, and warm hospitality of Nepal with travelers from around the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 shadow-lg">
              Our Tours
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 lg:px-6 bg-linear-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 hover:border-blue-300 hover:shadow-xl transition-all duration-500 animate-fade-in-left overflow-hidden">
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To provide unforgettable travel experiences that connect people with the 
                  natural wonders and cultural treasures of Nepal, while promoting sustainable 
                  tourism and supporting local communities. We strive to make every journey 
                  safe, authentic, and transformative.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-300 hover:shadow-xl transition-all duration-500 animate-fade-in-right overflow-hidden">
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be the most trusted and innovative travel company in Nepal, recognized 
                  for exceptional service, sustainable practices, and creating meaningful 
                  connections between travelers and the Himalayan paradise. We envision a 
                  future where tourism enriches both visitors and local communities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
              <div className="text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-scale-in animation-delay-200">
              <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">50K+</div>
              <div className="text-muted-foreground">Happy Travelers</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-scale-in animation-delay-400">
              <div className="text-4xl font-bold bg-linear-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">200+</div>
              <div className="text-muted-foreground">Tour Packages</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-scale-in animation-delay-600">
              <div className="text-4xl font-bold bg-linear-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 px-4 lg:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-100 to-purple-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
              <Clock className="h-4 w-4" />
              <span>Our Journey</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From humble beginnings to becoming Nepals premier tour operator
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <Card className="hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-2xl">{milestone.event}</CardTitle>
                        <CardDescription className="text-base">{milestone.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {milestone.year}
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 lg:px-6 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-100 to-pink-100 px-4 py-2 text-sm font-medium text-purple-700 mb-4">
              <Sparkles className="h-4 w-4" />
              <span>What Drives Us</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide every decision we make and every journey we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl hover:scale-105 transition-all duration-500 border-2 hover:border-transparent animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 mb-4 bg-linear-to-br ${value.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 px-4 lg:px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-orange-100 to-yellow-100 px-4 py-2 text-sm font-medium text-orange-700 mb-4">
              <Users className="h-4 w-4" />
              <span>The People Behind Your Adventure</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experienced professionals passionate about creating unforgettable journeys
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10"></div>
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <div className="text-sm font-semibold text-blue-600">{member.role}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{member.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 lg:px-6 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="mx-auto max-w-6xl text-center">
          <Award className="h-16 w-16 mx-auto mb-6 text-white animate-float" />
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have explored Nepal with us. 
            Lets create your perfect journey together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 shadow-lg">
              <Phone className="h-5 w-5 mr-2" />
              Call Us Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8">
              <Mail className="h-5 w-5 mr-2" />
              Send Inquiry
            </Button>
          </div>

          {/* Quick Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white">
              <MapPin className="h-5 w-5" />
              <div className="text-left">
                <div className="text-sm opacity-80">Location</div>
                <div className="font-semibold">Thamel, Kathmandu</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <Phone className="h-5 w-5" />
              <div className="text-left">
                <div className="text-sm opacity-80">Phone</div>
                <div className="font-semibold">+977 1-4567890</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <Mail className="h-5 w-5" />
              <div className="text-left">
                <div className="text-sm opacity-80">Email</div>
                <div className="font-semibold">info@go-nepal.io</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
