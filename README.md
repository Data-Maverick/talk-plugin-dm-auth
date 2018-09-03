---
title: talk-plugin-dm-auth
permalink: /plugin/talk-plugin-dm-auth/
layout: plugin
plugin:
    name: talk-plugin-dm-auth
    default: true
    provides:
        - Client
---

This plugin overrides the auth plugin for Coral Talk comments.

To install,
- Install this in the /plugins dir
- remove `talk-plugin-auth` from `plugins.default.json`
- add `talk-plugin-dm-auth` to `plugins.json`

Sample plugins.json:

```
{
  "server": [
  ],
  "client": [
    "talk-plugin-dm-auth"
  ]
}
```


## GDPR Compliance

In order to facilitate compliance with the
[EU General Data Protection Regulation (GDPR)](https://www.eugdpr.org/), you
should review our [GDPR Compliance](/talk/integrating/gdpr/) guidelines.
