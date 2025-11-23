"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Activity,
  Pill,
  Utensils,
  MessageCircle,
  Brain,
  Watch,
  TrendingUp,
  AlertCircle,
  ShieldCheck,
  UploadCloud,
  FileText,
  Scan,
  CheckCircle2,
  ChevronRight,
  Flame,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts"

const vitalData = [
  { time: "08:00", hr: 72, prediction: 70 },
  { time: "09:00", hr: 75, prediction: 74 },
  { time: "10:00", hr: 78, prediction: 76 },
  { time: "11:00", hr: 74, prediction: 75 },
  { time: "12:00", hr: 82, prediction: 80 },
  { time: "13:00", hr: 79, prediction: 78 },
  { time: "14:00", hr: 75, prediction: 74 },
]

const riskData = [
  {
    name: "Cardiovascular",
    score: 15,
    fill: "var(--color-primary)",
  },
  {
    name: "Diabetes",
    score: 45,
    fill: "var(--color-secondary)",
  },
  {
    name: "Hypertension",
    score: 30,
    fill: "var(--color-chart-4)",
  },
  {
    name: "General Wellness",
    score: 85,
    fill: "var(--color-chart-5)",
  },
]

const mealPlans = [
  {
    id: 1,
    title: "Anti-Inflammatory Bowl",
    calories: 450,
    image: "/creamy-mashed-potatoes.png",
    tags: ["Recovery", "High Protein"],
    time: "12:30 PM",
  },
  {
    id: 2,
    title: "Healing Green Smoothie",
    calories: 220,
    image: "/green-smoothie-healthy-drink.jpg",
    tags: ["Immunity", "Detox"],
    time: "04:00 PM",
  },
  {
    id: 3,
    title: "Grilled Salmon & Quinoa",
    calories: 580,
    image: "/grilled-salmon-quinoa-healthy-dinner.jpg",
    tags: ["Heart Health", "Omega-3"],
    time: "07:30 PM",
  },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/95 backdrop-blur-md border border-border p-4 rounded-xl shadow-xl ring-1 ring-black/5">
        <p className="text-sm font-medium text-muted-foreground mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 mb-1 last:mb-0">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-sm font-bold text-foreground">
              {entry.name}: {entry.value}
            </span>
            {entry.name === "Heart Rate" && <span className="text-xs text-muted-foreground">bpm</span>}
          </div>
        ))}
      </div>
    )
  }
  return null
}

export function PatientDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Recover & Thrive
          </h1>
          <p className="text-muted-foreground mt-1 text-lg">
            AI Monitoring Active • <span className="text-primary font-medium">Day 4 Post-Op</span>
          </p>
        </div>
        <div className="flex gap-3">
          <Badge variant="outline" className="h-9 px-4 gap-2 text-sm font-medium glass">
            <Watch className="w-4 h-4 text-primary" />
            Watch Connected
          </Badge>
          <Button className="rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
            <MessageCircle className="mr-2 h-5 w-5" />
            AI Assistant
          </Button>
        </div>
      </div>

      {/* Top Row: Vitals & AI Predictions */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Real-time Vitals Chart */}
        <Card className="lg:col-span-8 border-none shadow-xl glass-card overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Activity className="h-5 w-5 text-primary" />
                Biometric Telemetry
              </CardTitle>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Live Stream
                </Badge>
                <Badge variant="outline" className="border-border/50">
                  24h View
                </Badge>
              </div>
            </div>
            <CardDescription>Heart Rate Variability & Predictive Trend</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={vitalData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorHr" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPred" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-secondary)" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="var(--color-secondary)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="time"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
                    dy={10}
                  />
                  <YAxis hide={true} domain={["dataMin - 10", "dataMax + 10"]} />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ stroke: "var(--color-muted-foreground)", strokeWidth: 1, strokeDasharray: "4 4" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="hr"
                    stroke="var(--color-primary)"
                    strokeWidth={3}
                    fill="url(#colorHr)"
                    name="Heart Rate"
                    activeDot={{ r: 6, strokeWidth: 0, fill: "var(--color-primary)" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="prediction"
                    stroke="var(--color-secondary)"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    fill="url(#colorPred)"
                    name="AI Prediction"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="relative overflow-hidden rounded-xl bg-background/50 p-4 border border-border/50 group hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-sm font-medium text-muted-foreground mb-1">Heart Rate</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-foreground">75</p>
                  <span className="text-sm font-medium text-primary">bpm</span>
                </div>
                <p className="text-xs text-green-500 mt-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" /> Stable
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-background/50 p-4 border border-border/50 group hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-sm font-medium text-muted-foreground mb-1">SpO2</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-foreground">98</p>
                  <span className="text-sm font-medium text-primary">%</span>
                </div>
                <p className="text-xs text-green-500 mt-1 flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Optimal
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-background/50 p-4 border border-border/50 group hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-sm font-medium text-muted-foreground mb-1">BP</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-foreground">120</p>
                  <span className="text-sm font-medium text-muted-foreground">/80</span>
                </div>
                <p className="text-xs text-green-500 mt-1 flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Normal
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* NEW: AI Disease Prediction Section */}
        <Card className="lg:col-span-4 border-none shadow-xl bg-gradient-to-b from-card to-background border border-border/50 relative overflow-hidden">
          {/* Scanning Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-purple-500" />
              AI Health Projections
            </CardTitle>
            <CardDescription>Analysis based on genetic markers & vitals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart innerRadius="30%" outerRadius="100%" data={riskData} startAngle={180} endAngle={0}>
                  <RadialBar
                    background
                    dataKey="score"
                    cornerRadius={10}
                    label={{ fill: "var(--color-foreground)", position: "insideStart", fontSize: 10, fontWeight: 600 }}
                  />
                  <Legend iconSize={8} layout="horizontal" verticalAlign="bottom" align="center" />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                      backgroundColor: "var(--color-card)",
                    }}
                  />
                </RadialBarChart>
              </ResponsiveContainer>

              {/* Center Score */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-center">
                <span className="text-3xl font-bold text-foreground">92%</span>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Wellness Score</p>
              </div>
            </div>

            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                    Pre-Diabetic Marker Detected
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Spike in glucose predicted post-lunch. Recommended: Low GI meal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <ShieldCheck className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400">Cardiac Rhythm Stable</p>
                  <p className="text-xs text-muted-foreground mt-1">No anomalies detected in last 48 hours.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row: Meal Plans & Meds/Docs */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Recommended Meal Plans - Replaces Nutrition Tracking */}
        <Card className="lg:col-span-7 border-none shadow-lg glass-card overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Utensils className="w-5 h-5 text-secondary" />
                Recommended Nutrition
              </CardTitle>
              <CardDescription>Personalized for your recovery phase</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 group">
              View Full Plan <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Featured Meal Card */}
              <div className="md:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <Image
                  src={mealPlans[0].image || "/placeholder.svg"}
                  alt={mealPlans[0].title}
                  width={600}
                  height={300}
                  className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 p-5 z-20 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="flex gap-2 mb-2">
                        {mealPlans[0].tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-secondary text-secondary-foreground backdrop-blur-md border-none"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-white text-xl font-bold mb-1">{mealPlans[0].title}</h3>
                      <p className="text-white/80 text-sm flex items-center gap-2">
                        <Flame className="w-3 h-3 text-orange-400" /> {mealPlans[0].calories} kcal
                        <span className="mx-1">•</span>
                        Recommended at {mealPlans[0].time}
                      </p>
                    </div>
                    <Button size="icon" className="rounded-full bg-white text-black hover:bg-white/90 h-10 w-10">
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Secondary Meal Cards */}
              {mealPlans.slice(1).map((meal) => (
                <div
                  key={meal.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/50 hover:bg-accent/50 transition-colors cursor-pointer group"
                >
                  <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={meal.image || "/placeholder.svg"} alt={meal.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate group-hover:text-primary transition-colors">
                      {meal.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center text-orange-500">
                        <Flame className="w-3 h-3 mr-0.5" /> {meal.calories}
                      </span>
                      <span>• {meal.time}</span>
                    </div>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Combined Meds & Document Scanner */}
        <div className="lg:col-span-5 space-y-6">
          {/* Document Scanner Section */}
          <Card className="border-none shadow-lg glass-card bg-gradient-to-br from-card to-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Scan className="w-5 h-5 text-blue-500" />
                Smart Scan
              </CardTitle>
              <CardDescription>Upload prescriptions for AI analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="scan-zone w-full h-[120px] rounded-2xl flex flex-col items-center justify-center cursor-pointer group relative overflow-hidden bg-background/40">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="z-10 flex flex-col items-center text-center p-4">
                  <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-sm font-medium">Tap to Scan or Upload</p>
                  <p className="text-xs text-muted-foreground mt-1">Supports PDF, JPG, PNG</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-background/60 border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-red-500/10 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Blood_Work_Dec.pdf</p>
                      <p className="text-[10px] text-green-600 flex items-center">
                        <CheckCircle2 className="w-3 h-3 mr-1" /> Analyzed by AI
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ChevronRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Pill className="w-5 h-5 text-purple-500" />
                Medication Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Med Item 1 - Taken */}
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-green-500/5 border border-green-500/10">
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-foreground">Amoxicillin</h4>
                  <p className="text-xs text-muted-foreground">500mg • 08:00 AM</p>
                </div>
              </div>

              {/* Med Item 2 - Upcoming */}
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-background border border-border/50 shadow-sm">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                  Vi
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-foreground">Vitamin D</h4>
                  <p className="text-xs text-muted-foreground">1000IU • 12:00 PM</p>
                </div>
                <Button size="sm" className="rounded-full h-7 text-xs px-3">
                  Take
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
