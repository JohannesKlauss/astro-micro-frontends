import {useLayoutEffect, useRef, useState} from "react";

export function useBroadcast<T>(name: string, initialState: T): [T, (value: T) => void] {
  const [state, _setState] = useState(initialState)
  const channel = useRef<BroadcastChannel>()

  useLayoutEffect(() => {
    channel.current = new BroadcastChannel(name);

    channel.current.onmessage = function (event) {
      console.log('onmessage', event);

      event.preventDefault();
      let {data: value} = event;
      _setState(value)
    };

    return () => {
      channel.current?.close();
    }
  }, [])

  function setState(value: T) {
    channel.current?.postMessage(value);
    _setState(value)
  }

  return [state, setState];
}
