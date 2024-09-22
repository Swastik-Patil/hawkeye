"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertTriangle,
  Cctv,
  Shield,
  Zap,
  Phone,
  MapPin,
  Mail,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validation
    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }

    // Email validation
    if (!email.includes("@")) {
      alert("Please enter a valid email address!");
      return;
    }

    console.log({ name, email, message });

    setName("");
    setEmail("");
    setMessage("");

    alert("Message sent successfully!");
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <header className="p-4 lg:px-6 h-14 flex items-center bg-purple-950">
        <Link
          href="/"
          className="flex items-center gap-2 justify-center text-yellow-400"
        >
          <Cctv className="h-8 w-8 " />
          <span className="text-2xl font-bold">HawkEye</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4 text-yellow-400"
          >
            About
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4 text-yellow-400"
          >
            Features
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4 text-yellow-400"
          >
            Contact
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:underline underline-offset-4 text-yellow-400"
          >
            Pricing
          </Link>
          <Link
            href="/download"
            className="text-sm font-medium hover:underline underline-offset-4 text-yellow-400"
          >
            Download
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-yellow-400">
                  AI-Powered Threat Detection
                </h1>
                <p className="mx-auto max-w-[700px] text-indigo-200 md:text-xl">
                  HawkEye: Real-time weapon identification for enhanced public
                  safety. Revolutionizing surveillance with cutting-edge AI
                  technology.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="/"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-purple-900 shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-400 disabled:pointer-events-none disabled:opacity-50"
                >
                  Get Started
                </Link>
                <Link
                  href="/"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-yellow-400 bg-transparent px-4 py-2 text-sm font-medium text-yellow-400 shadow-sm transition-colors hover:bg-yellow-400 hover:text-purple-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-400 disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-indigo-800"
          id="about"
        >
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <Image
                src="/placeholder.svg"
                width={550}
                height={310}
                alt="HawkEye in action"
                priority
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-yellow-500 px-3 py-1 text-sm text-purple-900">
                    Advanced Technology
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-yellow-400">
                    Faster Detection. Enhanced Safety.
                  </h2>
                  <p className="max-w-[600px] text-indigo-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify">
                    Our AI-powered system analyzes CCTV footage in real-time,
                    identifying potential threats and alerting authorities
                    instantly. Protect your community with {"HawkEye's"}{" "}
                    cutting-edge surveillance technology.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 px-8 text-sm font-medium text-purple-900 shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-400 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Get a Demo
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-yellow-400 bg-transparent px-8 text-sm font-medium text-yellow-400 shadow-sm transition-colors hover:bg-yellow-400 hover:text-purple-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-400 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-yellow-400">
                Key Features
              </h2>
              <p className="mx-auto max-w-[700px] text-indigo-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how HawkEye is revolutionizing public safety with its
                advanced AI capabilities.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-indigo-800 border-indigo-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-yellow-400">
                    <AlertTriangle className="h-6 w-6" />
                    <span>Real-time Detection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-200">
                  <p>
                    Instantly identify potential threats in live CCTV footage.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-indigo-800 border-indigo-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-yellow-400">
                    <Zap className="h-6 w-6" />
                    <span>Rapid Response</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-200">
                  <p>
                    Automatically alert authorities with detailed threat
                    information.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-indigo-800 border-indigo-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-yellow-400">
                    <Shield className="h-6 w-6" />
                    <span>Enhanced Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-200">
                  <p>
                    Upgrade existing surveillance systems for improved threat
                    prevention.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-indigo-800 border-indigo-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-yellow-400">
                    <Cctv className="h-6 w-6" />
                    <span>AI-Powered</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-200">
                  <p>
                    Utilize deep learning and CNNs for accurate image
                    recognition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-indigo-800 border-t border-indigo-700"
          id="pricing"
        >
          <div className="container px-4 md:px-6">
            <div className="grid items-center justify-center gap-4 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-yellow-400">
                  Pricing Plans
                </h2>
                <p className="mx-auto max-w-[700px] text-indigo-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the perfect plan for your security needs. Available on
                  Google Play and App Store.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <Card className="bg-indigo-900 border-indigo-700">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-yellow-400">
                      Basic
                    </CardTitle>
                    <CardDescription className="text-indigo-200">
                      For small businesses
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-white mb-4">
                      ₹499<span className="text-lg font-normal">/month</span>
                    </div>
                    <ul className="space-y-2 text-indigo-200">
                      <li className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" /> Up to
                        5 cameras
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" /> Basic
                        AI detection
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" /> Email
                        alerts
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" /> 24/7
                        monitoring
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-indigo-900 border-2 border-yellow-400">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-yellow-400">
                      Pro
                    </CardTitle>
                    <CardDescription className="text-indigo-200">
                      For medium-sized organizations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-white mb-4">
                      ₹1,499<span className="text-lg font-normal">/month</span>
                    </div>
                    <ul className="space-y-2 text-indigo-200">
                      <li className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" /> Up to
                        20 cameras
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" />{" "}
                        Advanced AI detection
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" /> SMS &
                        email alerts
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" /> 24/7
                        monitoring
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" />{" "}
                        Priority support
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-indigo-900 border-indigo-700">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-yellow-400">
                      Enterprise
                    </CardTitle>
                    <CardDescription className="text-indigo-200">
                      For large corporations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-white mb-4">
                      Custom
                    </div>
                    <ul className="space-y-2 text-indigo-200">
                      <li className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" />{" "}
                        Unlimited cameras
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" /> Custom
                        AI models
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" />{" "}
                        Multi-channel alerts
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" /> 24/7
                        monitoring
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" />{" "}
                        Dedicated support team
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-500" /> Custom
                        integrations
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-yellow-500 text-purple-900 hover:bg-yellow-600">
                      <Link href="#contact">Contact Sales</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-indigo-800 border-t border-indigo-700"
          id="contact"
        >
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-yellow-400">
                Contact Us
              </h2>
              <p className="mx-auto max-w-[600px] text-indigo-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with our team to learn more about HawkEye or
                schedule a demo.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="space-y-4" onSubmit={submitForm}>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-indigo-900 border-indigo-700 text-indigo-200 placeholder:text-indigo-400"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-indigo-900 border-indigo-700 text-indigo-200 placeholder:text-indigo-400"
                />
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-indigo-900 border-indigo-700 text-indigo-200 placeholder:text-indigo-400"
                />
                <Button
                  type="submit"
                  className="w-full bg-yellow-500 text-purple-900 hover:bg-yellow-600"
                >
                  Send Message
                </Button>
              </form>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="flex items-center space-x-3 text-indigo-200">
                <Mail className="h-6 w-6 text-yellow-400" />
                <span>contact@hawkeye.com</span>
              </div>
              <div className="flex items-center space-x-3 text-indigo-200">
                <Phone className="h-6 w-6 text-yellow-400" />
                <span>+91 </span>
              </div>
              <div className="flex items-center space-x-3 text-indigo-200">
                <MapPin className="h-6 w-6 text-yellow-400" />
                <span></span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-purple-950 border-indigo-800">
        <p className="text-xs text-indigo-300">
          © 2024 HawkEye Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-indigo-300 hover:text-yellow-400"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-indigo-300 hover:text-yellow-400"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
