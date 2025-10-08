import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const SingleUserPage = () => {
  return (
    <div className="">
      <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/users">Users</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>John Doe</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
{/* Container */}
<div className="mt-4 flex flex-col xl:flex-row gap-8">
  {/* left */}
  <div className="w-full xl:w-1/3 space-y-6">
  {/* User badges container */}
  <div className="bg-primary-foreground p-4 rounded-lg"></div>
  {/* Information container */}
  <div className="bg-primary-foreground p-4 rounded-lg"></div>
  </div>
  {/* Right */}
  <div className="w-full xl:w-2/3 space-y-6">b</div>
</div>
    </div>
  )
}

export default SingleUserPage