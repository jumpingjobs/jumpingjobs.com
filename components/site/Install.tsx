"use client";

import { useState } from "react";
import { Card } from "@/components/ds/Card";
import { CommandBlock } from "@/components/ds/CommandBlock";
import { Tabs } from "@/components/ds/Tabs";
import {
  GITHUB_REPO,
  INSTALL_COMMANDS,
  INSTALL_NOTES,
  INSTALL_TABS,
  NPM_PACKAGE,
  type InstallTab,
} from "@/lib/content";
import { EVENTS } from "@/lib/analytics";
import { track } from "@/lib/track";

const PANEL_ID = "install-panel";

export function Install() {
  const [tab, setTab] = useState<InstallTab>("npx");

  return (
    <section id="install" className="bg-sunken py-24">
      <div className="shell grid grid-cols-1 items-start gap-14 min-[861px]:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div className="flex flex-col gap-3.5">
          <p className="eyebrow">Get started</p>
          <h2 className="type-h2 text-heading">Installed in under a minute.</h2>
          <p className="text-muted">
            Requires Node 18+. One install copies the skills into your tool&apos;s directory (
            <code className="code-inline">.cursor/skills/</code>,{" "}
            <code className="code-inline">.github/skills/</code>,{" "}
            <code className="code-inline">.gemini/skills/</code>…). Run{" "}
            <code className="code-inline">npx jumpingjobs update</code> later to refresh them.
          </p>
          <p className="flex flex-wrap gap-3.5 type-small">
            <a href={`${GITHUB_REPO}#quick-start`}>Quick start</a>
            <a href={`${GITHUB_REPO}/blob/main/docs/DEVELOP.md`}>Add a harness</a>
            <a href={NPM_PACKAGE}>npm</a>
          </p>
        </div>

        <Card variant="raised" className="p-7">
          <div className="flex flex-col gap-[22px]">
            <Tabs
              items={INSTALL_TABS}
              value={tab}
              onChange={(next) => {
                setTab(next);
                track(EVENTS.installTabChanged, { tab: next });
              }}
              variant="pill"
              size="sm"
              label="Install method"
              panelId={PANEL_ID}
            />

            <div id={PANEL_ID} role="tabpanel" className="flex flex-col gap-[22px]">
              {INSTALL_COMMANDS[tab].map((cmd) => (
                <CommandBlock
                  key={cmd.command}
                  command={cmd.command}
                  prompt={cmd.prompt}
                  label={cmd.label}
                  onCopy={(command) => track(EVENTS.commandCopied, { command, location: tab })}
                />
              ))}
              <p className="type-small text-muted">{INSTALL_NOTES[tab]}</p>
            </div>

            <CommandBlock
              command="/init-resume"
              prompt="›"
              label="First run · in your agent chat"
              tone="card"
              onCopy={(command) => track(EVENTS.commandCopied, { command, location: "first-run" })}
            />
            <CommandBlock
              command="npx jumpingjobs list"
              label="See supported harnesses"
              tone="card"
              onCopy={(command) => track(EVENTS.commandCopied, { command, location: "harness-list" })}
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
