import {
  Outlet,
  createRootRoute,
  useRouterState,
  Link,
} from "@tanstack/react-router";

import React from "react";

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const router = useRouterState();
  const pathSegments = router.location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  const formatBreadcrumbLabel = (text: string) => {
    // Convert kebab-case or snake_case to Title Case
    return text
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const renderBreadcrumbs = () => {
    if (pathSegments.length === 0) {
      return (
        <BreadcrumbItem>
          <BreadcrumbPage>Dashboard</BreadcrumbPage>
        </BreadcrumbItem>
      );
    }

    return (
      <>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/" asChild>
            <Link to="/">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

          return (
            <React.Fragment key={path}>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>
                    {formatBreadcrumbLabel(segment)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={path} asChild>
                    <Link to={path}>{formatBreadcrumbLabel(segment)}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>{renderBreadcrumbs()}</BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="max-w-screen-xl w-full mx-auto">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
