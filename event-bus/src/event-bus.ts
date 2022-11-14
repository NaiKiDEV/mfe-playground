type ActionHandler = (payload: unknown) => void;

type Subscription = {
  name: string;
  action: ActionHandler;
};

class EventBus {
  private subscriptions: Record<string, ActionHandler[] | undefined>;

  constructor() {
    this.subscriptions = {};
  }

  public subscribe(subscription: Subscription) {
    const activeHandlers = this.subscriptions[subscription.name] ?? [];
    this.subscriptions[subscription.name] = [
      ...activeHandlers,
      subscription.action,
    ];
    return this;
  }

  public publish(name: string, payload?: unknown) {
    const activeHandlers = this.subscriptions[name] ?? [];
    if (activeHandlers.length > 0) {
      activeHandlers.forEach((handler) => {
        handler(payload);
      });
    }
  }
}

export type { ActionHandler, Subscription };
export { EventBus };
