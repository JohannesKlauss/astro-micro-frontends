import {useLayoutEffect, useRef} from "react";

export function useBroadcast<T>(name: string, onEvent: (e: MessageEvent) => void): (value: T) => void {
  const channel = useRef<BroadcastChannel>()

  useLayoutEffect(() => {
    channel.current = new BroadcastChannel(name);

    channel.current.onmessage = onEvent

    return () => {
      channel.current?.close();
    }
  }, [])

  function emit(value: T) {
    channel.current?.postMessage(value);
  }

  return emit;
}
