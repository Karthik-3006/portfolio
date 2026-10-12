import React, { useEffect, useMemo, useState } from 'react';
import DOMPurify from 'dompurify';
import CodeBlock from './CodeBlock';

const ALLOWED_HTML_TAGS = [
  'a',
  'b',
  'blockquote',
  'br',
  'em',
  'h1',
  'h2',
  'h3',
  'h4',
  'i',
  'li',
  'ol',
  'p',
  'pre',
  'strong',
  'table',
  'tbody',
  'td',
  'th',
  'thead',
  'tr',
  'ul',
];

const BLOCK_AND_INLINE_TAGS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'p',
  'ul',
  'ol',
  'li',
  'strong',
  'em',
  'blockquote',
  'table',
  'thead',
  'tbody',
  'tr',
  'th',
  'td',
  'a',
];

function renderDomNode(node, key) {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent;
  }
  if (!(node instanceof HTMLElement)) {
    return null;
  }

  const tagName = node.tagName.toLowerCase();
  if (tagName === 'pre') {
    return <CodeBlock key={key} code={node.textContent ?? ''} />;
  }

  const children = Array.from(node.childNodes).map((child, idx) =>
    renderDomNode(child, `${key}-${idx}`)
  );

  const props = { key };
  if (tagName === 'a') {
    const href = node.getAttribute('href');
    if (href) {
      props.href = href;
      props.target = '_blank';
      props.rel = 'noreferrer';
    }
  }

  if (BLOCK_AND_INLINE_TAGS.includes(tagName)) {
    return React.createElement(tagName, props, children);
  }
  if (tagName === 'br') {
    return <br key={key} />;
  }
  return <span key={key}>{children}</span>;
}

function parseSanitizedDocument(rawHtml) {
  const cleanHtml = DOMPurify.sanitize(rawHtml, {
    ALLOWED_TAGS: ALLOWED_HTML_TAGS,
    ALLOWED_ATTR: ['href'],
  });

  const doc = new DOMParser().parseFromString(cleanHtml, 'text/html');
  const elements = [];

  for (let i = 0; i < doc.body.childNodes.length; i += 1) {
    const node = doc.body.childNodes[i];
    if (node instanceof HTMLElement && node.tagName.toLowerCase() === 'pre') {
      const codeLines = [node.textContent ?? ''];
      while (
        doc.body.childNodes[i + 1] instanceof HTMLElement &&
        doc.body.childNodes[i + 1].tagName.toLowerCase() === 'pre'
      ) {
        i += 1;
        codeLines.push(doc.body.childNodes[i].textContent ?? '');
      }
      elements.push(
        <CodeBlock key={`code-${i}`} code={codeLines.join('\n')} />
      );
    } else {
      elements.push(renderDomNode(node, `doc-${i}`));
    }
  }

  return elements;
}

export default function DocumentViewer({ source }) {
  const [rawHtml, setRawHtml] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setRawHtml(null);
    setHasError(false);

    fetch(source, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Document preview request failed: ${res.status}`);
        }
        return res.text();
      })
      .then((text) => setRawHtml(text))
      .catch((err) => {
        if (!(err instanceof Error && err.name === 'AbortError')) {
          console.error('Unable to load the experiment document preview.', err);
          setHasError(true);
        }
      });

    return () => controller.abort();
  }, [source]);

  const parsedContent = useMemo(
    () => (rawHtml ? parseSanitizedDocument(rawHtml) : []),
    [rawHtml]
  );

  if (hasError) {
    return (
      <p className="document-message">
        Experiment document preview unavailable.
      </p>
    );
  }

  if (rawHtml === null) {
    return (
      <p className="document-message">Loading experiment document…</p>
    );
  }

  return <div className="document-content">{parsedContent}</div>;
}
