"use client"

import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  GraduationCap, 
  Megaphone, 
  Search,
  Bell
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const quickLinks = [
  { name: "Academic Calendar", icon: Calendar, color: "bg-blue-500/10 text-blue-500" },
  { name: "Course Details", icon: GraduationCap, color: "bg-purple-500/10 text-purple-500" },
  { name: "Support Desk", icon: Megaphone, color: "bg-orange-500/10 text-orange-500" },
  { name: "Recent Results", icon: Clock, color: "bg-green-500/10 text-green-500" },
]

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 to-primary p-8 text-primary-foreground md:p-12">
        <div className="relative z-10 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            Welcome to the IIT Intranet Portal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-primary-foreground/80"
          >
            Access all your academic resources, campus news, and student services in one modern workspace.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-primary-foreground/50" />
              <Input 
                placeholder="Search for resources..." 
                className="bg-primary-foreground/10 border-none placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30 pl-10"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Background shapes */}
        <div className="absolute right-0 top-0 -mr-16 -mt-16 size-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 size-64 rounded-full bg-white/5 blur-3xl" />
      </section>

      {/* Quick Access */}
      <section>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Quick Access</h3>
          <Button variant="ghost" className="text-sm font-medium">View All</Button>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/5 active:scale-[0.98]"
            >
              <div className={`inline-flex size-12 items-center justify-center rounded-xl ${link.color} mb-4`}>
                <link.icon className="size-6" />
              </div>
              <h4 className="font-semibold">{link.name}</h4>
              <p className="mt-1 text-xs text-muted-foreground">Jump directly to this section.</p>
              <div className="mt-4 flex items-center text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Go to page <ArrowRight className="ml-1 size-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Announcements & Recent Activity */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Announcements */}
        <section className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <Megaphone className="size-5 text-primary" />
            <h3 className="text-xl font-semibold">Latest Announcements</h3>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex gap-4 rounded-2xl border bg-card p-4 transition-colors hover:bg-muted/50 cursor-pointer">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 border-none">General</Badge>
                    <span className="text-[10px] text-muted-foreground">2 hours ago</span>
                  </div>
                  <h4 className="mt-2 font-medium">Notice regarding Semester 1 Registration 2025/26</h4>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-1">All students are requested to complete their registrations by Friday...</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Bell className="size-5 text-primary" />
            <h3 className="text-xl font-semibold">Activity</h3>
          </div>
          <div className="rounded-2xl border bg-card p-6 space-y-6">
            {[
              { type: "Update", title: "New Timetable Released", date: "Today, 10:45 AM" },
              { type: "Notice", title: "Library Closure Information", date: "Yesterday" },
              { type: "Assessment", title: "Results: MSc CS Module 2", date: "2 days ago" },
            ].map((activity, i) => (
              <div key={i} className="relative flex gap-4 last:pb-0 pb-6 before:absolute before:left-[7px] before:top-4 before:h-full before:w-[2px] before:bg-muted last:before:hidden">
                <div className="relative z-10 size-4 rounded-full border-2 border-background bg-primary mt-1" />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{activity.title}</p>
                  <p className="text-[10px] text-muted-foreground mt-1">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
