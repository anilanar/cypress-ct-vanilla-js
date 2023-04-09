import { getContainerEl, setupHooks } from "@cypress/mount-utils";
type VanillaJSComponent = (root: HTMLElement) => () => void;

let dispose: () => void;

function cleanup() {
  dispose?.();
}

export function mount(component: VanillaJSComponent) {
  const root = getContainerEl();
  dispose = component(root);
}

setupHooks(cleanup);
