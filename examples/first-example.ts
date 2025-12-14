import { browser } from "vibium";

async function main() {
  const vibe = await browser.launch();

  await vibe.go("https://example.com");

  const el = await vibe.find("button");
  if (el) {
    await el.click();
  }

  await vibe.screenshot("example.png");

  await vibe.quit();
}

main().catch(console.error);
