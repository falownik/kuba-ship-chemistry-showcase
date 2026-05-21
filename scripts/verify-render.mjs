import { chromium } from '@playwright/test';

const url = process.env.VERIFY_URL || 'http://127.0.0.1:5173/';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('#shipCanvas');
  await page.waitForTimeout(1800);

  const canvasInfo = await page.locator('#shipCanvas').evaluate((canvas) => {
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    const colors = [];

    if (gl) {
      const pixel = new Uint8Array(4);
      const points = [
        [0.25, 0.35],
        [0.4, 0.45],
        [0.55, 0.45],
        [0.7, 0.55],
        [0.5, 0.65],
        [0.35, 0.7],
        [0.65, 0.3]
      ];

      for (const [px, py] of points) {
        gl.readPixels(
          Math.floor(canvas.width * px),
          Math.floor(canvas.height * py),
          1,
          1,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          pixel
        );
        colors.push(Array.from(pixel).join(','));
      }
    }

    return {
      width: canvas.width,
      height: canvas.height,
      uniqueSamples: new Set(colors).size,
      samples: colors
    };
  });

  if (canvasInfo.uniqueSamples < 2) {
    throw new Error(`Canvas looks blank: ${JSON.stringify(canvasInfo.samples)}`);
  }

  const rect = await page.locator('#shipCanvas').boundingBox();
  let popupText = '';

  for (const y of [0.22, 0.32, 0.42, 0.52, 0.62, 0.72]) {
    for (const x of [0.18, 0.28, 0.38, 0.48, 0.58, 0.68, 0.78]) {
      await page.mouse.move(rect.x + rect.width * x, rect.y + rect.height * y);
      await page.waitForTimeout(60);

      if (await page.locator('#hoverPopup.is-visible').count()) {
        popupText = await page.locator('#hoverPopup').innerText();
        break;
      }
    }

    if (popupText) break;
  }

  if (!popupText) {
    throw new Error('Hover popup did not appear over the ship model.');
  }

  const selectedText = await page.locator('#selectedSection').innerText();

  console.log(JSON.stringify({
    canvas: canvasInfo,
    popupPreview: popupText.split('\n').slice(0, 4),
    selectedPreview: selectedText.split('\n').slice(0, 4)
  }, null, 2));
} finally {
  await browser.close();
}
