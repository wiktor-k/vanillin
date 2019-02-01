import { MetaesContext } from "metaes/metaes";
import { describe, it } from "mocha";

describe("VanillinForStatement", () => {
  it("should", async () => {
    const context = new MetaesContext();

    context.evaluate((appendScript, window, document) => {
      appendScript(() => {
        window.db = [1, 2, 3];
        document.body.appendChild(bindDOM(`<div></div>`));
      });
    });
  });
});