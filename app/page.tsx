"use client"

import { useState, useEffect } from "react"
import { Activity, Utensils, ShieldCheck } from "lucide-react"
import { PatientDashboard } from "@/components/patient-dashboard"
import { KitchenDashboard } from "@/components/kitchen-dashboard"
import { ClinicalDashboard } from "@/components/clinical-dashboard"
import { ModeToggle } from "@/components/mode-toggle"

type Role = "patient" | "kitchen" | "clinical"

export default function HealthPlatform() {
  const [activeRole, setActiveRole] = useState<Role>("patient")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 selection:bg-primary/20">
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              Fitt<span className="text-primary">Food</span>
            </span>
          </div>
          <ModeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 pb-24 md:pb-10">
        {activeRole === "patient" && <PatientDashboard />}
        {activeRole === "kitchen" && <KitchenDashboard />}
        {activeRole === "clinical" && <ClinicalDashboard />}
      </main>

      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="flex items-center bg-background/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl rounded-full p-1.5 gap-1 ring-1 ring-black/5">
          <button
            onClick={() => setActiveRole("patient")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ${
              activeRole === "patient"
                ? "bg-primary text-primary-foreground shadow-md scale-105 font-medium"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            }`}
          >
            <Activity className="h-5 w-5" />
            <span className={`${activeRole === "patient" ? "block" : "hidden md:block"}`}>Recover</span>
          </button>

          <div className="w-px h-6 bg-border mx-1" />

          <button
            onClick={() => setActiveRole("kitchen")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ${
              activeRole === "kitchen"
                ? "bg-secondary text-secondary-foreground shadow-md scale-105 font-medium"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            }`}
          >
            <Utensils className="h-5 w-5" />
            <span className={`${activeRole === "kitchen" ? "block" : "hidden md:block"}`}>Shakti</span>
          </button>

          <div className="w-px h-6 bg-border mx-1" />

          <button
            onClick={() => setActiveRole("clinical")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ${
              activeRole === "clinical"
                ? "bg-destructive text-white shadow-md scale-105 font-medium"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            }`}
          >
            <ShieldCheck className="h-5 w-5" />
            <span className={`${activeRole === "clinical" ? "block" : "hidden md:block"}`}>Guardian</span>
          </button>
        </div>
      </div>
    </div>
  )
}
