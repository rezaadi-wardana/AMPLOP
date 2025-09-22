import { ChevronRight, type LucideIcon } from "lucide-react"
import { Link, usePage } from "@inertiajs/react"
import * as React from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const { url } = usePage() // route aktif

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const hasChildren = item.items?.length > 0
          const isActive =
            url.startsWith(item.url) ||
            item.items?.some((subItem) => url.startsWith(subItem.url))

          const [open, setOpen] = React.useState(
            item.isActive || isActive || false
          )

          // kalau route berubah, paksa buka parent yg aktif
          React.useEffect(() => {
            if (isActive) setOpen(true)
          }, [isActive])

          return (
            <Collapsible
              key={item.title}
              asChild
              open={open}
              onOpenChange={setOpen}
            >
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  onClick={(e) => {
                    if (hasChildren) {
                      e.preventDefault() // jangan langsung navigate
                      setOpen((prev) => !prev)
                    }
                  }}
                >
                  {hasChildren ? (
                    // parent: klik → toggle children
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  ) : (
                    // no children: langsung navigate
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  )}
                </SidebarMenuButton>

                {hasChildren ? (
                  <>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuAction
                        className="data-[state=open]:rotate-90"
                        onClick={(e) => {
                          e.stopPropagation()
                          setOpen((prev) => !prev)
                        }}
                      >
                        <ChevronRight />
                        <span className="sr-only">Toggle</span>
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => {
                          const isSubActive = url.startsWith(subItem.url)
                          return (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link
                                  href={subItem.url}
                                  className={
                                    isSubActive
                                      ? "text-primary font-semibold"
                                      : ""
                                  }
                                >
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          )
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                ) : null}
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
