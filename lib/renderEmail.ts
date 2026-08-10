import { render } from "@react-email/render";
import { createElement } from "react";
import type { EmailEntry } from "./registry";

export async function renderEmail(entry: EmailEntry): Promise<string> {
  return render(createElement(entry.Component, entry.Component.PreviewProps ?? {}), {
    pretty: true,
  });
}
