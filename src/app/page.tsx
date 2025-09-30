"use client";
import React from 'react'
import { Button } from '@/components/ui/button'
import { Car, Users, Leaf, MessageCircle, MapPin, Shield, Star, Zap, Globe } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { MovingBorder } from '@/components/ui/moving-border'
import { ParticlesBackground } from '@/components/ui/particles-background'
import { FloatingParticles } from '@/components/ui/floating-particles'
import { GeometricParticles } from '@/components/ui/geometric-particles'

const features = [
  {
    title: "Real-time Connections",
    description: "Connect with drivers and riders instantly for immediate travel needs through our smart matching algorithm.",
    icon: <Users className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Eco-Friendly Travel",
    description: "Reduce carbon footprint through shared rides and fuel-efficient travel. Join the green revolution.",
    icon: <Leaf className="w-8 h-8 text-green-600" />,
  },
  {
    title: "In-App Messaging",
    description: "Communicate seamlessly with ride confirmations, updates, and real-time chat functionality.",
    icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "City-Wide Coverage",
    description: "Share rides within city limits for convenient local transportation across all major routes.",
    icon: <MapPin className="w-8 h-8 text-orange-600" />,
  },
  {
    title: "Safe & Secure",
    description: "Built with advanced safety features, verified user profiles, and 24/7 support system.",
    icon: <Shield className="w-8 h-8 text-red-600" />,
  },
  {
    title: "Community Driven",
    description: "Built for everyday drivers and riders in your community. Share, connect, and save together.",
    icon: <Car className="w-8 h-8 text-teal-600" />,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Particle Effects */}
      <ParticlesBackground />
      <FloatingParticles />
      <GeometricParticles />
      
      {/* Spotlight Effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="h-screen"
        fill="purple"
      />
      <Spotlight
        className="left-full h-screen"
        fill="blue"
      />

      {/* Header */}
      <header className="z-50 border-b border-neutral-800 bg-black/50 backdrop-blur-lg sticky top-0">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Car className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">LyftSync</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-neutral-300 hover:text-white transition-colors">Features</a>
            <a href="#demo" className="text-neutral-300 hover:text-white transition-colors">Demo</a>
            <a href="#about" className="text-neutral-300 hover:text-white transition-colors">About</a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 min-h-screen flex items-center justify-center">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="text-6xl md:text-8xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-600 to-green-400">
                  LyftSync
                </span>
              </div>
              <TextGenerateEffect 
                words="Smart Ride Sharing for the Future" 
                className="text-2xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
              />
            </div>
            
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Connect drivers and riders for casual, fuel-efficient, and community-driven travel within the city.
              Experience the future of eco-friendly commuting with LyftSync's peer-to-peer ride sharing platform.
            </p>
            
            <div className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
              <span className="text-blue-400 font-semibold">🚗 Intra-city hitchhiking</span> • 
              <span className="text-green-400 font-semibold"> 🌱 Eco-friendly</span> • 
              <span className="text-purple-400 font-semibold"> 👥 Community-driven</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <MovingBorder
                borderRadius="1.75rem"
                className="w-48 h-14"
                containerClassName="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Watch Demo
              </MovingBorder>
              
              <BackgroundGradient className="rounded-[22px] max-w-sm p-1">
                <button className="w-48 h-12 bg-black rounded-[20px] text-white font-medium">
                  Learn More
                </button>
              </BackgroundGradient>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See LyftSync in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Action</span>
            </h3>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Watch how easy it is to connect with fellow commuters and share rides in your city.
            </p>
          </div>
          
          {/* Video Container - Centered */}
          <div className="flex justify-center">
            <BackgroundGradient className="rounded-[22px] max-w-5xl p-1">
              <div className="relative w-full aspect-video bg-neutral-900 rounded-[20px] overflow-hidden">
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Car className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-semibold mb-2">Demo Video Coming Soon</h4>
                    <p className="text-blue-200">Your YouTube video will be embedded here</p>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-[24px] border-l-white border-y-[15px] border-y-transparent ml-1"></div>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">LyftSync?</span>
            </h3>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Experience the future of ride-sharing with our innovative features designed for modern commuters.
            </p>
          </div>
          
          <HoverEffect items={features} />
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built with Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Technology</span>
            </h3>
          </div>
          
          <BentoGrid className="max-w-4xl mx-auto">
            <BentoGridItem
              title="React Native Frontend"
              description="Cross-platform mobile app with modern UI/UX design and real-time updates."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
              }
              className="md:col-span-2"
              icon={<Zap className="h-4 w-4 text-neutral-500" />}
            />
            <BentoGridItem
              title="Node.js Backend"
              description="Scalable server architecture with Express and MongoDB."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                </div>
              }
              className="md:col-span-1"
              icon={<Globe className="h-4 w-4 text-neutral-500" />}
            />
            <BentoGridItem
              title="Real-time Features"
              description="Live tracking, instant messaging, and push notifications."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
              }
              className="md:col-span-1"
              icon={<Star className="h-4 w-4 text-neutral-500" />}
            />
            <BentoGridItem
              title="Secure & Reliable"
              description="Advanced security measures with verified profiles and safe ride matching."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
              }
              className="md:col-span-2"
              icon={<Shield className="h-4 w-4 text-neutral-500" />}
            />
          </BentoGrid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <BackgroundGradient className="rounded-[22px] max-w-4xl mx-auto p-1">
            <div className="bg-black rounded-[20px] p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Commute?</span>
              </h3>
              <p className="text-xl mb-8 text-neutral-300 max-w-2xl mx-auto">
                Join the LyftSync community and start sharing rides today. Experience eco-friendly, 
                community-driven transportation that benefits everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <MovingBorder
                  borderRadius="1.75rem"
                  className="w-48 h-14"
                  containerClassName="bg-white text-black border-neutral-200"
                >
                  Download App
                </MovingBorder>
                
                <Button size="lg" variant="outline" className="w-48 border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:text-white">
                  View on GitHub
                </Button>
              </div>
            </div>
          </BackgroundGradient>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                  <Car className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold">LyftSync</span>
              </div>
              <p className="text-neutral-400">
                Connecting communities through smart ride sharing for a sustainable future.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="https://github.com/theayusharma/lyftSync" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
            <p>&copy; 2024 LyftSync. All rights reserved. Built with Aceternity UI ✨</p>
          </div>
        </div>
      </footer>
    </div>
  )
}