import { Component, For, JSX, Show, createSignal } from "solid-js";
import { useAuth } from "~/components/auth-guard";

interface DropdownProps {
  trigger: JSX.Element;
}

export const Dropdown: Component<DropdownProps> = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);
  const { me } = useAuth();
  return (
    <div class={`relative inline-block text-left`}>
      <div>
        <button
          type="button"
          class="inline-flex items-center justify-center w-full"
          onClick={() => setIsOpen(!isOpen())}
          aria-expanded={isOpen()}
        >
          {props.trigger}
        </button>
      </div>

      <Show when={isOpen()}>
        <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="py-1" role="none">
            <pre>{JSON.stringify(me(), null, 2)}</pre>
          </div>
        </div>
      </Show>
    </div>
  );
};
