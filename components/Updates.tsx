import React from 'react';
import { ARTICLES } from '../constants/articles';
import type { Article } from '../types';
import { ArrowRightIcon } from '../constants/icons';


const ArticleCard = ({ article }: { article: Article }) => (
    <a href="#" className="group grid md:grid-cols-3 gap-8 items-center border-b border-gray-200 py-8">
        <div className="md:col-span-1 w-full aspect-video md:aspect-square rounded-2xl overflow-hidden">
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="md:col-span-2 mt-4 md:mt-0">
            <p className="text-sm text-gray-500">{article.date}</p>
            <h3 className="text-2xl font-bold tracking-tight mt-1 group-hover:text-blue-500 transition-colors">{article.title}</h3>
            <p className="mt-2 text-gray-600">{article.excerpt}</p>
            <div className="flex items-center gap-2 mt-4 text-sm font-semibold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Read More</span>
                <ArrowRightIcon className="w-4 h-4" />
            </div>
        </div>
    </a>
)


export default function Updates(): React.ReactNode {
  return (
    <main className="h-full w-full bg-[#fdfdfd] pt-24 px-4 md:px-8 overflow-y-auto animate-fadeIn">
      <div className="max-w-5xl mx-auto pb-16">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">Latest Signals</h1>
        <p className="text-lg md:text-xl text-gray-500 mt-2">
            News, stories, and updates from the FootPrints lab.
        </p>
        <div className="mt-12">
            {ARTICLES.map(article => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
      </div>
    </main>
  );
}
