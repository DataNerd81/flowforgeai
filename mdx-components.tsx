import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold font-heading tracking-tight mt-10 mb-4 sm:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold font-heading tracking-tight mt-8 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold font-heading mt-6 mb-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-muted leading-relaxed mb-4">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-accent underline underline-offset-4 hover:text-accent-hover transition-colors"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-1 text-muted mb-4 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-1 text-muted mb-4 ml-4">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-accent pl-4 italic text-muted my-4">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-surface px-1.5 py-0.5 rounded text-sm font-mono text-accent">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-surface border border-border rounded-card p-4 overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    ...components,
  };
}
