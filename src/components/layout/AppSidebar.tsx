"use client"

import * as React from "react"
import {
  BookOpen,
  Calendar,
  Contact,
  FileText,
  GraduationCap,
  Home,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Academic Programs",
      url: "#",
      icon: GraduationCap,
      items: [
        { title: "Undergraduate", url: "/programs/ug" },
        { title: "Postgraduate", url: "/programs/pg" },
        { title: "Foundation", url: "/programs/foundation" },
      ],
    },
    {
      title: "Calendars",
      url: "/calendars",
      icon: Calendar,
    },
    {
      title: "Student Support",
      url: "/support",
      icon: Users,
    },
    {
      title: "Policies",
      url: "/policies",
      icon: FileText,
    },
    {
      title: "Contacts",
      url: "/contacts",
      icon: Contact,
    },
  ],
}

export function AppSidebar() {
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <GraduationCap className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">IIT Intranet</span>
                  <span className="truncate text-xs">2025/26</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4">
          <p className="text-xs text-muted-foreground">© 2026 IIT Informatics</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
