"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
    },
    {
      title: "Expert System",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Hasil Sisa",
          url: "/hasil_sisa",
        },
        {
          title: "Hasil Jumlah",
          url: "/hasil_jumlah",
        },
      ],
    },
    {
      title: "Product",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Category",
          url: "/category",
        },
        {
          title: "Data Product",
          url: "/product",
        },
      ],
    },
    {
      title: "Manage User",
      url: "/manage_user",
      icon: Frame,
    },
    {
      title: "Manage Order",
      url: "/order",
      icon: LifeBuoy,
    },
    {
      title: "Report",
      url: "/report",
      icon: Settings2,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: PieChart,
    },
    {
      title: "Support & Feedback",
      url: "#",
      icon: Map,
    },
  ],
//   projects: [
//     {
//       name: "Settings",
//       url: "#",
//       icon: PieChart,
//     },
//     {
//       name: "Support & Feedback",
//       url: "#",
//       icon: Map,
//     },
//   ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
