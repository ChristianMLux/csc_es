"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  Share2,
  Leaf,
  ChevronRight,
  Link,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LoadingIndicator } from "@/components/ui/Spinner";
import { Article, Author, NavigationItem } from "@/types";

const mockAuthor: Author = {
  name: "Christian M. Lux",
  role: "Admin",
};
const mockArticle: Article = {
  id: "1",
  title: "Willkommen beim CSC Esslingen - Unser Start in eine neue Ära",
  slug: "willkommen-csc-esslingen",
  publishedAt: "2025-01-15",
  readTime: "5 Min",
  category: "Vereinsnews",
  author: { name: "Vorstand CSC Esslingen", role: "Vereinsleitung" },
  excerpt: "",
  content: `<p>Liebe Cannabis-Enthusiasten und zukünftige Mitglieder,</p><p>es ist soweit - der Cannabis Social Club Esslingen e.V. öffnet offiziell seine Türen!...</p><h2>Unsere Vision wird Realität</h2><p>Was als Idee einiger engagierter Bürger begann, ist nun zu einem vollwertigen, eingetragenen Verein geworden...</p>`,
  relatedPosts: [
    {
      id: "2",
      title: "Workshop: Grundlagen des biologischen Cannabis-Anbaus",
      slug: "workshop-biologischer-anbau",
      category: "Veranstaltung",
      publishedAt: "2025-01-20",
      excerpt: "kA",
      readTime: "10",
      author: mockAuthor,
    },
    {
      id: "3",
      title:
        "Rechtliche Grundlagen: Was das CanG für unsere Mitglieder bedeutet",
      slug: "rechtliche-grundlagen-cang",
      category: "Rechtliches",
      publishedAt: "2025-01-25",
      excerpt: "kA",
      readTime: "10",
      author: mockAuthor,
    },
  ],
};

export default function BlogDetailPage() {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  const navigation = [
    { name: "Start", href: "/" },
    { name: "Über uns", href: "/about-us" },
    { name: "Mitgliedschaft", href: "/membership" },
    { name: "Aktuelles", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/contact" },
  ];

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setArticle(mockArticle);
      setLoading(false);
    };
    loadArticle();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const shareArticle = () => {
    if (navigator.share && article) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link wurde in die Zwischenablage kopiert!");
    }
  };

  const ctaButton = (
    <Link href="/mitgliedschaft/antrag">
      <Button variant="primary" size="sm">
        Mitglied werden
      </Button>
    </Link>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar navigation={navigation} ctaButton={ctaButton} />
        <div className="py-20">
          <LoadingIndicator text="Artikel wird geladen..." />
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar navigation={navigation} ctaButton={ctaButton} />
        <div className="py-20 text-center">
          <h1 className="text-2xl">Artikel nicht gefunden</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar navigation={navigation} ctaButton={ctaButton} />
      <main>
        <section className="py-20 bg-gradient-to-br from-green-900/20 via-gray-900 to-gray-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <Link
              href="/blog"
              className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Zurück zu Aktuelles
            </Link>
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-600/20 text-green-600">
                <Tag className="h-3 w-3 mr-1" />
                {article.category}
              </span>
              <div className="flex items-center text-gray-400">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(article.publishedAt)}
              </div>
              <div className="flex items-center text-gray-400">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime} Lesezeit
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            <div className="flex items-center justify-between border-t border-gray-800 pt-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mr-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">{article.author.name}</p>
                  <p className="text-sm text-gray-400">{article.author.role}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={shareArticle}>
                <Share2 className="h-5 w-5 mr-2" />
                Teilen
              </Button>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-green-600 prose-a:no-underline prose-a:hover:underline prose-strong:text-white prose-strong:font-semibold prose-ul:text-gray-300 prose-ul:my-6 prose-ol:text-gray-300 prose-ol:my-6 prose-li:mb-2"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            <Card className="mt-16 bg-gradient-to-r from-green-900/30 to-purple-900/30 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Werden Sie Teil unserer Community
              </h3>
              <p className="text-gray-300 mb-6">
                Starten Sie noch heute Ihren Weg zu legalem und
                verantwortungsvollem Cannabis-Konsum.
              </p>
              <Link href="/mitgliedschaft/antrag">
                <Button variant="primary" size="lg">
                  Jetzt Mitglied werden
                </Button>
              </Link>
            </Card>
          </div>
        </section>
        {article.relatedPosts && article.relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8">Weitere Artikel</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {article.relatedPosts.map((post) => (
                  <Link href={`/blog/${post.slug}`} key={post.id}>
                    <Card hover className="cursor-pointer group">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-600/20 text-green-600 mb-3">
                            {post.category}
                          </span>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {formatDate(post.publishedAt)}
                          </p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
