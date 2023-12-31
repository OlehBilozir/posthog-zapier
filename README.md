# PostHog x Zapier

Make the best use of your data. Connect PostHog with _thousands_ of services through Zapier.

The following steps are at your disposal:

| Type    | Name                      | Plan Required       |
| :------ | :------------------------ | :------------------ |
| Action  | Capture Event             | Any, including free |
| Trigger | Calculated Event Captured | Any **paid** plan   |

## Just want to connect PostHog with practically anything?

[Our official Zapier app](https://zapier.com/apps/posthog/integrations) – compatible with PostHog Cloud as well as with self-hosted solutions – is here for you. No additional setup needed.

Try it out now: https://zapier.com/apps/posthog/integrations

## Need something just your own? Developing?

Not a problem. Create a private Zapier app for PostHog easily with this package. It's just a few simple steps:

1. Clone or download this repository.
2. Enter its directory with `cd`.
3. Install Node modules.
    ```bash
    npm install
    ```
4. Update `DEFAULT_API_HOST` value in `src/utils.ts` (e.g. for PostHog Cloud it's `app.posthog.com` and for your self-hosted instance it may be `posthog.example.com`).
5. Globally install Zapier CLI.
    ```bash
    npm install -g zapier-platform-cli
    ```
6. Log into Zapier from the command line.
    ```bash
    zapier login
    ```
7. Either register a new integration on Zapier.
    ```bash
    zapier register "PostHog @ $YOUR_ORG"
    ```
    Or link to an existing one.
    ```bash
    zapier link
    ```
8. Push to Zapier.
    ```bash
    npm run push
    ```
9. Finish by filling in integration details in the [Zapier Platform dashboard](https://zapier.com/app/developer). And don't forget to invite users!
