import { test, expect } from "@playwright/test";

test.skip("Проверяем сумму чисел", ({}) => {
  expect(1 + 1).toEqual(2);
});

test.only("Проверка текста", async ({ page }) => {
  await page.goto("https://demoqa.com/dynamic-properties", {
    waitUntil: "domcontentloaded",
  });
  const element = page.locator("[id=visibleAfter]");
  expect(await element.isVisible()).toBeTruthy();
  // await expect(element).toBeVisible();
});

//comment2 jira
test("По клику на иконку в карточке доклада открывается попап с подробной информацией", async ({
  page,
}) => {
  await page.goto("https://sibirjsconf.ru/");
  await page.locator('[data-elem-id="1711368028649"] a').click({ force: true });
  await expect(page).toHaveURL("https://sibirjsconf.ru/program");

  await expect(
    page.locator("a.tn-atom").filter({
      hasText: "Трек для QA-инженеров",
    }),
  ).toBeVisible();

  expect(
    await page
      .locator("a.tn-atom")
      .filter({
        hasText: "Трек для QA-инженеров",
      })
      .isVisible(),
  ).toBe(true);
});

/* comment1 */
// comment3 https://jira.com/ISSUE-321
test.skip("Проверяем вхождение", async ({}) => {
  expect("Конференция".includes("Конфф")).toBe(true);
  expect("Конференция").toContain("Конфф");
});
