interface TwitterWidgets {
  widgets: {
    load: (element?: HTMLElement) => Promise;
    createTimeline: (any, element?: HTMLElement | null) => Promise;
  };
  ready: (callback: () => void) => Promise;
}

declare global {
  interface Window {
    twttr?: TwitterWidgets;
  }
}

export {};
