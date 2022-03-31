type Finalizer = () => void;
type Observer<T> = {
  next: (n: T) => void;
  error: (err: any) => void;
  complete: () => void;
};
class SafeSubscriber<T> {
  private stopped = false;
  private finalizer = new Set<() => void>();
  constructor(private observer: Observer<T>) {}

  next(value: T) {
    if (this.stopped) return;
    this.observer.next(value);
  }
  error(e: any) {
    if (this.stopped) return;
    this.observer.next(e);
    this.unsubscribe();
  }
  complete() {
    if (this.stopped) return;
    this.stopped = true;
    this.observer.complete();
    this.unsubscribe();
  }
  unsubscribe() {
    this.finalizer.forEach((f) => f());
  }
  addFinalizer(f: () => void) {
    this.finalizer.add(f);
  }
}

class Observable<T> {
  constructor(private init: (observer: Observer<T>) => Finalizer) {}
  subscribe(observer: Observer<T>) {
    const sub = new SafeSubscriber(observer);
    const f = this.init(observer);
    sub.addFinalizer(f);
    return { unsubscribe: () => sub.unsubscribe() };
  }
}

const ticker = new Observable((obs) => {
  let n = 0;
  const id = setInterval(() => {
    const v = n++;
    obs.next(v);

    if (v === 5) {
      obs.complete();
      obs.complete();
      obs.complete();
    }
  }, 1000);
  return () => {
    console.log("end");
    clearInterval(id);
  };
});

const sub = ticker.subscribe({
  next: console.log,
  error: console.error,
  complete: () => console.log("complete"),
});
setTimeout(() => {
  sub.unsubscribe();
}, 5000);
