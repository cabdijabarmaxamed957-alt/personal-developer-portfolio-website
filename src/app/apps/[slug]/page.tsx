import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import DemoBar from "@/components/apps/DemoBar";
import ClothesApp from "@/components/apps/ClothesApp";
import DrivoraApp from "@/components/apps/DrivoraApp";
import HomeApp from "@/components/apps/HomeApp";
import RestaurantApp from "@/components/apps/RestaurantApp";
import TaskPulseApp from "@/components/apps/TaskPulseApp";
import AethernetApp from "@/components/apps/AethernetApp";
import ScholarisApp from "@/components/apps/ScholarisApp";
import FintechApp from "@/components/apps/FintechApp";
import LogisticsApp from "@/components/apps/LogisticsApp";
import ApiGatewayApp from "@/components/apps/ApiGatewayApp";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Interactive Demo Not Found" };
  }

  return {
    title: `${project.title.split("—")[0]} — Live Interactive Application Demo`,
    description: `Experience the live interactive demonstration of ${project.title}. Fully functional Next.js application demo.`,
  };
}

export default async function AppDemoPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const renderApplication = () => {
    // 1. Web Applications
    if (slug === "clothes-nextjs-platform") return <ClothesApp />;
    if (slug === "drivora-nextjs-car-marketplace") return <DrivoraApp />;
    if (slug === "home-nextjs-platform") return <HomeApp />;
    if (slug === "restaurant-nextjs-platform") return <RestaurantApp />;

    // 2. SaaS Solutions
    if (
      slug === "taskpulse-saas-agile" ||
      slug === "opspulse-cloud-telemetry" ||
      slug === "cloudmetric-saas-monitor" ||
      slug === "docuflow-saas-contracts" ||
      project.category === "SaaS"
    ) {
      return <TaskPulseApp />;
    }

    // 3. AI Solutions
    if (
      slug === "aethernet-ai-pipeline" ||
      slug === "neurochat-llm-workspace" ||
      slug === "visioncore-ai-diagnostics" ||
      slug === "synthvoice-audio-engine" ||
      project.category === "AI Solutions"
    ) {
      return <AethernetApp />;
    }

    // 4. University Systems
    if (
      slug === "scholaris-lms-learning" ||
      slug === "univrs-campus-portal" ||
      slug === "alumnilink-network" ||
      slug === "graduategate-admissions" ||
      project.category === "University Systems"
    ) {
      return <ScholarisApp />;
    }

    // 5. Fintech
    if (
      slug === "securebank-fintech" ||
      slug === "cryptoflow-exchange" ||
      slug === "invoicex-smart-billing" ||
      slug === "paystream-microloans" ||
      project.category === "Fintech"
    ) {
      return <FintechApp />;
    }

    // 6. Business Systems
    if (
      slug === "apex-logistics-core" ||
      slug === "nexus-erp-inventory" ||
      slug === "staffsync-hr-platform" ||
      slug === "procuratrack-procurement" ||
      project.category === "Business Systems"
    ) {
      return <LogisticsApp />;
    }

    // 7. APIs & Backend
    if (
      slug === "synthetix-api-gateway" ||
      slug === "queuemaster-event-broker" ||
      slug === "authvault-iam-service" ||
      slug === "cachegrid-redis-engine" ||
      project.category === "APIs & Backend"
    ) {
      return <ApiGatewayApp />;
    }

    return <TaskPulseApp />;
  };

  return (
    <div className="w-full min-h-screen bg-[#05070B] flex flex-col">
      {/* Persistent floating Demo Bar with exit & switcher */}
      <DemoBar currentSlug={slug} projectName={project.title.split("—")[0]} />

      {/* Render the specific interactive application based on slug */}
      <div className="flex-1 w-full">{renderApplication()}</div>
    </div>
  );
}
