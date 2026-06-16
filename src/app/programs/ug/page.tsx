"use client"

import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

const modules = [
  { code: "CS101", title: "Introduction to Computer Science", credits: 15, type: "Core", semester: 1 },
  { code: "SE102", title: "Software Engineering Principles", credits: 15, type: "Core", semester: 1 },
  { code: "MA103", title: "Mathematics for Computing", credits: 15, type: "Core", semester: 2 },
  { code: "AI104", title: "Fundamentals of Artificial Intelligence", credits: 15, type: "Optional", semester: 2 },
]

export default function UndergraduatePrograms() {
  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Undergraduate Programs</h2>
        <p className="text-muted-foreground">Detailed information regarding course modules, schedules, and specifications.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-primary/5 border-primary/10">
          <CardHeader>
            <CardTitle className="text-lg">Program Specification</CardTitle>
            <CardDescription>Official document for BSc (Hons) Computer Science.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full gap-2">
              <Download className="size-4" /> Download PDF
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Academic Calendar</CardTitle>
            <CardDescription>Important dates for the current academic year.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full gap-2">
              <ExternalLink className="size-4" /> View Calendar
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">LMS Portal</CardTitle>
            <CardDescription>Access course materials and assignments.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full gap-2">
              <ExternalLink className="size-4" /> Login to LMS
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Module List - Level 4</CardTitle>
          <CardDescription>List of all core and optional modules for the first year.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Code</TableHead>
                <TableHead>Module Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Semester</TableHead>
                <TableHead className="text-right">Credits</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {modules.map((module) => (
                <TableRow key={module.code}>
                  <TableCell className="font-medium">{module.code}</TableCell>
                  <TableCell>{module.title}</TableCell>
                  <TableCell>
                    <Badge variant={module.type === "Core" ? "default" : "secondary"}>
                      {module.type}
                    </Badge>
                  </TableCell>
                  <TableCell>Semester {module.semester}</TableCell>
                  <TableCell className="text-right">{module.credits}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
