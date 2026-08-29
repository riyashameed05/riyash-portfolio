import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Riyas Hameed — Software Developer',
  description: 'Portfolio of Riyas Hameed, Software Developer specializing in C#, ASP.NET Core, .NET MAUI, Azure Functions, PostgreSQL and AI-driven applications.',
  keywords: ['Riyas Hameed', 'Software Developer', 'C#', 'ASP.NET Core', '.NET MAUI', 'Azure Functions', 'RAG', 'LLM'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}