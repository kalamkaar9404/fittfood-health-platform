"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, ArrowRight, FileText, Activity, Users, Filter } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip as RechartsTooltip, Cell, YAxis } from "recharts"

const complianceData = [
  { day: "Mon", score: 85 },
  { day: "Tue", score: 88 },
  { day: "Wed", score: 92 },
  { day: "Thu", score: 89 },
  { day: "Fri", score: 94 },
  { day: "Sat", score: 90 },
  { day: "Sun", score: 95 },
]

export function ClinicalDashboard() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-border/40">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Guardian Command</h1>
          <p className="text-muted-foreground flex items-center gap-2 mt-1">
            <Users className="w-4 h-4" /> Ward A • 24 Active Patients
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="glass bg-transparent">
            <Filter className="w-4 h-4 mr-2" /> Filter View
          </Button>
          <Button variant="destructive" className="shadow-lg shadow-destructive/20">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Critical Alerts (2)
          </Button>
        </div>
      </div>

      {/* Critical Alerts Banner */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-destructive/10 to-background border border-destructive/20 p-1">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-destructive" />
        <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-destructive/20 flex items-center justify-center animate-pulse">
              <Activity className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <h3 className="font-bold text-destructive">Cardiac Event Detected</h3>
              <p className="text-sm text-foreground/80">Room 304 (Sarah Connor) • HR sustained 110bpm &gt; 15m</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="ghost" className="hover:bg-destructive/10 hover:text-destructive">
              Dismiss
            </Button>
            <Button size="sm" className="bg-destructive hover:bg-destructive/90 text-white">
              Dispatch Nurse
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        {/* Left Column: Patient List */}
        <Card className="col-span-7 md:col-span-5 border-none shadow-lg glass-card">
          <CardHeader>
            <CardTitle>Patient Status Monitor</CardTitle>
            <CardDescription>Real-time diet compliance & vitals telemetry</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-border/50">
                  <TableHead>Patient</TableHead>
                  <TableHead>Protocol</TableHead>
                  <TableHead>Adherence</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    name: "Sarah Connor",
                    plan: "Post-Op Recovery",
                    score: 90,
                    status: "Stable",
                    color: "bg-green-500",
                  },
                  { name: "John Smith", plan: "Diabetic Type 2", score: 65, status: "Review", color: "bg-yellow-500" },
                  { name: "Emily Davis", plan: "Low Sodium", score: 40, status: "Critical", color: "bg-destructive" },
                  { name: "Michael Chen", plan: "Renal Support", score: 82, status: "Stable", color: "bg-green-500" },
                ].map((patient, i) => (
                  <TableRow key={i} className="hover:bg-muted/50 border-border/50 transition-colors">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${patient.color}`} />
                        {patient.name}
                      </div>
                    </TableCell>
                    <TableCell>{patient.plan}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              patient.score > 80
                                ? "bg-green-500"
                                : patient.score > 50
                                  ? "bg-yellow-500"
                                  : "bg-destructive"
                            }`}
                            style={{ width: `${patient.score}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono">{patient.score}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`
                            ${patient.status === "Stable" ? "border-green-500/30 text-green-600 dark:text-green-400 bg-green-500/5" : ""}
                            ${patient.status === "Review" ? "border-yellow-500/30 text-yellow-600 dark:text-yellow-400 bg-yellow-500/5" : ""}
                            ${patient.status === "Critical" ? "border-destructive/30 text-destructive bg-destructive/5" : ""}
                         `}
                      >
                        {patient.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Right Column: Analytics & Queue */}
        <div className="col-span-7 md:col-span-2 space-y-6">
          {/* Compliance Chart */}
          <Card className="border-none shadow-lg glass-card backdrop-blur-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-primary">Ward Compliance</CardTitle>
              <CardDescription>Weekly Trend</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[150px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={complianceData}>
                    <XAxis
                      dataKey="day"
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                      stroke="var(--color-muted-foreground)"
                    />
                    <YAxis hide domain={[0, 100]} />
                    <RechartsTooltip
                      cursor={{ fill: "var(--color-muted)" }}
                      contentStyle={{
                        backgroundColor: "var(--color-card)",
                        borderRadius: "8px",
                        border: "1px solid var(--color-border)",
                        fontSize: "12px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        color: "var(--color-foreground)",
                      }}
                    />
                    <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                      {complianceData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.score > 90 ? "var(--color-primary)" : "var(--color-secondary)"}
                          fillOpacity={0.9}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Diet Change Approvals */}
          <Card className="border-dashed border-2 border-border/60 shadow-none bg-transparent">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <FileText className="w-4 h-4 text-secondary" />
                Diet Change Requests
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold text-sm">Solid Foods Transition</p>
                  <Badge variant="secondary" className="text-[10px] h-5">
                    AI Rec.
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Patient: Sarah Connor</p>
                <div className="flex gap-2">
                  <Button size="sm" className="w-full h-8 text-xs bg-primary hover:bg-primary/90 shadow-sm">
                    Approve
                  </Button>
                  <Button size="sm" variant="outline" className="w-full h-8 text-xs bg-transparent">
                    Deny
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
