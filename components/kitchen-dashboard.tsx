"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle2, Flame, Video, Package, ChefHat } from "lucide-react"

export function KitchenDashboard() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between pb-6 border-b border-border/40">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Shakti Kitchen</h1>
          <p className="text-muted-foreground mt-1">
            Live Service • <span className="text-secondary font-medium">12 Orders Active</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Badge
            variant="outline"
            className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 px-3 py-1 glass"
          >
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Systems Nominal
          </Badge>
        </div>
      </div>

      {/* Kanban Board Layout */}
      <div className="grid gap-6 md:grid-cols-3 pb-4">
        {/* New Orders Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-2 mb-2">
            <h3 className="font-semibold text-lg flex items-center gap-2 text-foreground">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive shadow-[0_0_10px_var(--color-destructive)]"></span>
              Incoming
            </h3>
            <Badge variant="secondary" className="glass">
              4
            </Badge>
          </div>

          {/* Order Card 1 */}
          <Card className="border-l-4 border-l-destructive shadow-md hover:shadow-xl transition-all duration-300 glass-card group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">Diabetic Meal #42</CardTitle>
                <span className="text-xs font-mono text-destructive font-bold bg-destructive/10 px-2 py-1 rounded">
                  PRIORITY
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Room 302 • 12:30 PM</p>
            </CardHeader>
            <CardContent className="pb-2 text-sm space-y-3">
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-destructive border-destructive/30 bg-destructive/5">
                  No Sugar
                </Badge>
                <Badge variant="outline" className="border-border/50">
                  Low Sodium
                </Badge>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg text-muted-foreground text-xs space-y-1">
                <p>• Grilled Chicken Breast</p>
                <p>• Steamed Broccoli</p>
                <p>• Brown Rice (1/2 cup)</p>
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/20">
                <Flame className="w-4 h-4 mr-2" />
                Start Prep
              </Button>
            </CardFooter>
          </Card>

          {/* Order Card 2 */}
          <Card className="border-l-4 border-l-yellow-500 shadow-md hover:shadow-xl transition-all duration-300 glass-card">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">Renal Diet #43</CardTitle>
                <span className="text-xs font-mono text-muted-foreground">12:32 PM</span>
              </div>
              <p className="text-sm text-muted-foreground">Room 104 • 12:32 PM</p>
            </CardHeader>
            <CardContent className="pb-2 text-sm space-y-3">
              <div className="flex gap-2 flex-wrap">
                <Badge
                  variant="outline"
                  className="text-yellow-600 dark:text-yellow-400 border-yellow-500/30 bg-yellow-500/5"
                >
                  Low Potassium
                </Badge>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg text-muted-foreground text-xs space-y-1">
                <p>• Egg White Omelet</p>
                <p>• White Toast (No Butter)</p>
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/20">
                <Flame className="w-4 h-4 mr-2" />
                Start Prep
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* In Progress Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-2 mb-2">
            <h3 className="font-semibold text-lg flex items-center gap-2 text-foreground">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_10px_var(--color-secondary)]"></span>
              Active Prep
            </h3>
            <Badge variant="outline" className="glass">
              2
            </Badge>
          </div>

          <Card className="border-l-4 border-l-secondary bg-secondary/5 shadow-md hover:shadow-xl transition-all duration-300 border-y border-r border-border/50">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">Post-Op Soft Diet</CardTitle>
                <div className="flex items-center text-secondary font-bold bg-secondary/10 px-2 py-1 rounded-full text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  12m elapsed
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-2 text-sm">
              <div className="aspect-video bg-black/90 rounded-lg mb-3 flex items-center justify-center text-white relative group cursor-pointer overflow-hidden ring-1 ring-white/10">
                <img
                  src="/creamy-mashed-potatoes.png"
                  alt="Tutorial"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <div className="z-10 flex flex-col items-center transform group-hover:scale-105 transition-transform">
                  <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2">
                    <Video className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium">AI Chef Guide</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-secondary bg-secondary flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-muted-foreground line-through">Mashed Potatoes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-muted-foreground/30"></div>
                  <span>Clear Broth</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <Button variant="secondary" className="w-full shadow-lg shadow-secondary/20">
                Mark Ready for Delivery
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Inventory / Stats Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-2 mb-2">
            <h3 className="font-semibold text-lg flex items-center gap-2 text-foreground">
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground"></span>
              Inventory
            </h3>
          </div>

          <Card className="border-none shadow-lg glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-muted-foreground" />
                Pantry Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-destructive/5 rounded-xl border border-destructive/20 hover:bg-destructive/10 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-destructive/20 rounded-full text-destructive">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-destructive">Almond Milk</p>
                    <p className="text-xs text-destructive/70">Low Stock (2L left)</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 text-destructive hover:text-destructive hover:bg-destructive/20"
                >
                  Order
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-500/5 rounded-xl border border-yellow-500/20 hover:bg-yellow-500/10 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/20 rounded-full text-yellow-600 dark:text-yellow-400">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-yellow-600 dark:text-yellow-400">Gluten Free Bread</p>
                    <p className="text-xs text-yellow-600/70 dark:text-yellow-400/70">Expires Tomorrow</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-500/20"
                >
                  Check
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
