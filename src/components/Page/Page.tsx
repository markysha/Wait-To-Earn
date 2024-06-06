import { Show, type Component, type JSX, type ParentProps } from 'solid-js';

import './Page.css';

export interface PageProps extends ParentProps {
  title?: string;
  disclaimer?: JSX.Element;
}

export const Page: Component<PageProps> = (props) => {
  return (
    <div class="page">
      <Show when={!!props.title}>
        <h1>{props.title}</h1>
      </Show>
      {props.disclaimer && <div class="page__disclaimer">{props.disclaimer}</div>}
      {props.children}
    </div>
  );
};
