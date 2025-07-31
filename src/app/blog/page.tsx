"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Clock, ArrowRight, Tag, Search, Leaf } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LoadingIndicator } from "@/components/ui/Spinner";
import { BlogPost, NavigationItem } from "@/types";
import Link from "next/link";

const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Willkommen beim CSC Esslingen - Unser Start in eine neue Ära",
    slug: "willkommen-csc-esslingen",
    excerpt:
      "Der Cannabis Social Club Esslingen e.V. öffnet seine Türen. Erfahren Sie mehr über unsere Vision, Mission und wie Sie Teil unserer Community werden können.",
    publishedAt: "2025-01-15",
    readTime: "5 Min",
    category: "Vereinsnews",
    image: "/api/placeholder/800/400",
    author: { name: "Vorstand CSC Esslingen", role: "Vereinsleitung" },
  },
  {
    id: "2",
    title: "Workshop: Grundlagen des biologischen Cannabis-Anbaus",
    slug: "workshop-biologischer-anbau",
    excerpt:
      "Am 15. Februar laden wir zu unserem ersten Workshop ein. Lernen Sie die Grundlagen des biologischen Anbaus von unseren erfahrenen Growern.",
    publishedAt: "2025-01-20",
    readTime: "3 Min",
    category: "Veranstaltung",
    image: "/api/placeholder/800/400",
    author: { name: "Anbau-Team", role: "Cultivation Expert" },
  },
  {
    id: "3",
    title: "Rechtliche Grundlagen: Was das CanG für unsere Mitglieder bedeutet",
    slug: "rechtliche-grundlagen-cang",
    excerpt:
      "Eine detaillierte Übersicht über die rechtlichen Rahmenbedingungen des Cannabisgesetzes und was dies für unsere Vereinsmitglieder bedeutet.",
    publishedAt: "2025-01-25",
    readTime: "8 Min",
    category: "Rechtliches",
    image: "/api/placeholder/800/400",
    author: { name: "Rechtsberatung", role: "Legal Team" },
  },
  {
    id: "4",
    title: "Nachhaltigkeit im Fokus: Unser Weg zum grünen Anbau",
    slug: "nachhaltigkeit-gruener-anbau",
    excerpt:
      "Wie wir durch moderne LED-Technologie, Kompostierung und biologische Schädlingsbekämpfung einen nachhaltigen Anbau gewährleisten.",
    publishedAt: "2025-01-28",
    readTime: "6 Min",
    category: "Nachhaltigkeit",
    image: "/api/placeholder/800/400",
    author: { name: "Nachhaltigkeits-Team", role: "Sustainability" },
  },
];

export default function BlogOverviewPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const navigation = [
    { name: "Start", href: "/" },
    { name: "Über uns", href: "/about-us" },
    { name: "Mitgliedschaft", href: "/membership" },
    { name: "Aktuelles", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/contact" },
  ];

  const categories = [
    "Alle",
    "Vereinsnews",
    "Veranstaltung",
    "Rechtliches",
    "Nachhaltigkeit",
    "Bildung",
  ];

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPosts(mockBlogPosts);
      setLoading(false);
    };
    loadPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Alle" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar
        navigation={navigation}
        ctaButton={
          <Link href="/mitgliedschaft/antrag">
            <Button variant="primary" size="sm">
              Mitglied werden
            </Button>
          </Link>
        }
      />
      <main>
        <section className="py-20 bg-gradient-to-br from-green-900/20 via-gray-900 to-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
            <h1 className="text-5xl font-bold mb-6">Aktuelles</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Neuigkeiten, Veranstaltungen und wichtige Informationen aus dem
              CSC Esslingen
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Artikel durchsuchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>
          </div>
        </section>
        <section className="py-8 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-green-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <LoadingIndicator text="Artikel werden geladen..." />
            ) : filteredPosts.length === 0 ? (
              <Card className="text-center py-12">
                <p className="text-gray-400 text-lg">Keine Artikel gefunden.</p>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <Link href={`/blog/${post.slug}`} key={post.id}>
                    <Card
                      hover
                      className="overflow-hidden cursor-pointer group h-full flex flex-col"
                    >
                      <div className="h-48 bg-gradient-to-br from-green-900/30 to-purple-900/30 -m-6 mb-6 flex items-center justify-center">
                        <Leaf className="h-16 w-16 text-green-600/30" />
                      </div>
                      <div className="space-y-4 flex-grow flex flex-col">
                        <div className="flex items-center justify-between text-sm">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-600/20 text-green-600">
                            <Tag className="h-3 w-3 mr-1" />
                            {post.category}
                          </span>
                          <div className="flex items-center text-gray-400">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(post.publishedAt)}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                          <div className="text-sm text-gray-400">
                            <p className="font-medium text-gray-300">
                              {post.author.name}
                            </p>
                            <p>{post.author.role}</p>
                          </div>
                          <div className="flex items-center text-green-600 group-hover:translate-x-1 transition-transform">
                            <span className="text-sm mr-1">Weiterlesen</span>
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
